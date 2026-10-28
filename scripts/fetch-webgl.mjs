import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = JSON.parse(await readFile(resolve(root, 'config/webgl-builds.json'), 'utf8'));
await mkdir(resolve(root, '.webgl-cache'), { recursive: true });

for (const entry of manifest) {
  const { slug, build, artifact } = entry;
  if (!/^[a-z0-9-]+$/.test(slug) || !/^[a-z0-9-]+$/.test(build.id) || !/^[\w.-]+\/[\w.-]+$/.test(artifact.repository)
    || !/^[\w.-]+$/.test(artifact.tag) || !/^[\w.-]+\.zip$/.test(artifact.file) || !/^[a-f0-9]{64}$/.test(artifact.sha256)
    || build.url !== `/webgl/${slug}/${build.id}/index.html`) throw new Error('Invalid WebGL build manifest.');
  const target = resolve(root, '.webgl-cache', `${slug}-${build.id}.zip`);
  const matches = bytes => createHash('sha256').update(bytes).digest('hex') === artifact.sha256;
  try { if (matches(await readFile(target))) { console.log(`Verified cached build: ${slug}/${build.id}`); continue; } } catch {}
  const url = `https://github.com/${artifact.repository}/releases/download/${artifact.tag}/${artifact.file}`;
  const response = await fetch(url, { signal: AbortSignal.timeout(120000) });
  if (!response.ok) throw new Error(`WebGL download failed: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > 256 * 1024 * 1024 || !matches(bytes)) throw new Error(`WebGL checksum mismatch: ${slug}`);
  await writeFile(target, bytes);
  console.log(`Verified download: ${slug}/${build.id} (${bytes.length} bytes)`);
}

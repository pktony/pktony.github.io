import hashlib
import json
import shutil
import stat
import tempfile
import zipfile
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]


def validate_members(archive):
    members = archive.infolist()
    if sum(member.file_size for member in members) > 256 * 1024 * 1024:
        raise ValueError('WebGL archive exceeds size limit')
    for member in members:
        path = PurePosixPath(member.filename)
        mode = member.external_attr >> 16
        if path.is_absolute() or '..' in path.parts or chr(92) in member.filename or ':' in member.filename or stat.S_ISLNK(mode):
            raise ValueError('Unsafe WebGL archive path')
    return members


def assemble(entry):
    slug, build, artifact = entry['slug'], entry['build'], entry['artifact']
    archive_path = ROOT / '.webgl-cache' / f"{slug}-{build['id']}.zip"
    if hashlib.sha256(archive_path.read_bytes()).hexdigest() != artifact['sha256']:
        raise ValueError('WebGL archive checksum mismatch')
    destination = (ROOT / 'out' / 'webgl' / slug / build['id']).resolve()
    if not destination.is_relative_to(ROOT / 'out' / 'webgl'):
        raise ValueError('Unsafe WebGL destination')
    with tempfile.TemporaryDirectory(dir=ROOT / '.webgl-cache') as temporary:
        unpacked = Path(temporary)
        with zipfile.ZipFile(archive_path) as archive:
            validate_members(archive)
            archive.extractall(unpacked)
        for name in ['index.html', 'player.js', 'build-info.json']:
            if not (unpacked / name).is_file():
                raise ValueError(f'Missing build entry: {name}')
        for pattern in ['*.loader.js', '*.wasm.unityweb', '*.data.unityweb', '*.framework.js.unityweb']:
            if len(list((unpacked / 'Build').glob(pattern))) != 1:
                raise ValueError(f'Missing or ambiguous Unity build file: {pattern}')
        if json.loads((unpacked / 'build-info.json').read_text())['result'] != 'Succeeded':
            raise ValueError('Unity build did not succeed')
        total = sum(path.stat().st_size for path in unpacked.rglob('*') if path.is_file())
        if total != build['downloadBytes']:
            raise ValueError('WebGL download size differs from the pinned build')
        shutil.copytree(unpacked, destination, dirs_exist_ok=True)
    print(f"Assembled {slug}/{build['id']}: {total} bytes")


if __name__ == '__main__':
    for item in json.loads((ROOT / 'config' / 'webgl-builds.json').read_text()):
        assemble(item)

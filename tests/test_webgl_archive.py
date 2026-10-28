import importlib.util
import stat
import unittest
import zipfile
from pathlib import Path
from types import SimpleNamespace

spec = importlib.util.spec_from_file_location('assembler', Path(__file__).resolve().parents[1] / 'scripts/assemble-webgl.py')
assembler = importlib.util.module_from_spec(spec)
spec.loader.exec_module(assembler)


class ArchiveValidationTests(unittest.TestCase):
    def archive(self, name, mode=0, size=4):
        member = zipfile.ZipInfo('entry')
        member.filename = name
        member.external_attr = mode << 16
        member.file_size = size
        return SimpleNamespace(infolist=lambda: [member])

    def test_rejects_paths_outside_build(self):
        for name in ['../escape', '/absolute', 'Build/../../escape', 'Build' + chr(92) + 'escape', 'C:escape']:
            with self.subTest(name=name), self.assertRaises(ValueError):
                assembler.validate_members(self.archive(name))

    def test_rejects_symbolic_links(self):
        with self.assertRaises(ValueError):
            assembler.validate_members(self.archive('Build/link', mode=stat.S_IFLNK))

    def test_rejects_oversized_archives(self):
        with self.assertRaises(ValueError):
            assembler.validate_members(self.archive('Build/data', size=257 * 1024 * 1024))

    def test_accepts_normal_build_path(self):
        self.assertEqual(len(assembler.validate_members(self.archive('Build/inventory.loader.js'))), 1)


if __name__ == '__main__':
    unittest.main()

# -*- coding: utf-8 -*-
"""Genereer sectie-JSX voor SSKindgyn samenvattingen.

Verwacht blocks[] met bewaarde kop-niveaus (zie scripts/lib/sskindgynMarkdown.mjs):
  {type:'heading', level:1..4, text}, {type:'p', text}, {type:'li', text},
  {type:'table', rows}

Er wordt alleen op HOOFDkoppen (level <= 2) in secties gesplitst; sub-koppen
(level >= 3) worden binnen de sectie als SubHeading weergegeven. Dit levert de
grovere sectie-indeling op zoals in blok 5/10 (i.p.v. één sectie per subkopje).
De gedeelde SectionShared.jsx (met Inline/PBody/DataTable/SubHeading/VraagjeBox)
wordt door de generator vóór dit script weggeschreven.
"""
import json
import os
import re
import sys


def slugify(title):
    s = title.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')[:48] or 'sectie'


def pascal(title):
    parts = [p for p in re.split(r'[^a-z0-9]+', title.lower()) if p]
    name = 'Sect' + ''.join(p.capitalize() for p in parts)
    return name[:40] or 'SectInhoud'


def tpl(s):
    esc = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '{`' + esc + '`}'


def emit_section(spec, fp):
    fp.write("import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'\n\n")
    fp.write('export default function Section() {\n')
    fp.write('  return (\n')
    fp.write('    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">\n')
    ul = False
    for kind, payload in spec:
        if kind != 'li' and ul:
            fp.write('      </ul>\n')
            ul = False
        if kind == 'h2':
            fp.write(f'      <SubHeading level={{2}}><Inline>{tpl(payload)}</Inline></SubHeading>\n')
        elif kind == 'h3':
            fp.write(f'      <SubHeading><Inline>{tpl(payload)}</Inline></SubHeading>\n')
        elif kind == 'p':
            if '\n' in payload or ('**' in payload):
                fp.write(f'      <PBody text={tpl(payload)} />\n')
            else:
                fp.write(f'      <p className="leading-relaxed"><Inline>{tpl(payload)}</Inline></p>\n')
        elif kind == 'li':
            if not ul:
                fp.write('      <ul className="list-disc pl-6 space-y-2">\n')
                ul = True
            fp.write(f'        <li><Inline>{tpl(payload)}</Inline></li>\n')
        elif kind == 'table':
            fp.write('      <DataTable rows={' + json.dumps(payload, ensure_ascii=False) + '} />\n')
    if ul:
        fp.write('      </ul>\n')
    fp.write('    </div>\n')
    fp.write('  )\n')
    fp.write('}\n')


def build_sections(blocks):
    sections = []
    title = None
    spec = []

    def flush():
        nonlocal title, spec
        if not spec:
            return
        sections.append((title or 'Inhoud', list(spec)))
        spec = []

    for b in blocks:
        if b['type'] == 'heading':
            lvl = b.get('level', 3)
            if lvl <= 2:
                flush()
                title = b['text']
                spec.append(('h2', b['text']))
            else:
                spec.append(('h3', b['text']))
        elif b['type'] == 'p':
            spec.append(('p', b['text']))
        elif b['type'] == 'li':
            spec.append(('li', b['text']))
        elif b['type'] == 'table':
            spec.append(('table', b['rows']))
    flush()

    if not sections:
        sections.append(('Inhoud', [('p', b['text']) for b in blocks if b['type'] == 'p']))
    return sections


def main():
    if len(sys.argv) < 3:
        raise SystemExit('Usage: python gen_sskindgyn_sections.py <structure.json> <out/sections/>')
    json_path = sys.argv[1]
    out_dir = sys.argv[2]
    with open(json_path, 'r', encoding='utf-8') as f:
        blocks = json.load(f)
    sections = build_sections(blocks)
    os.makedirs(out_dir, exist_ok=True)

    # Verwijder oude SectXX.jsx (behoud SectionShared.jsx)
    for fn in os.listdir(out_dir):
        if re.match(r'^Sect.*\.jsx$', fn) and fn != 'SectionShared.jsx':
            os.remove(os.path.join(out_dir, fn))

    used = set()
    manifest = []
    for i, (sect_title, spec) in enumerate(sections):
        name = pascal(sect_title)
        base = name
        n = 2
        while name in used:
            name = f'{base}{n}'
            n += 1
        used.add(name)
        with open(os.path.join(out_dir, f'{name}.jsx'), 'w', encoding='utf-8') as fp:
            emit_section(spec, fp)
        manifest.append({'file': name, 'title': sect_title, 'id': f'sect-{i + 1:02d}'})

    meta_path = os.path.join(os.path.dirname(out_dir.rstrip('/\\')), 'sections-manifest.json')
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    print(f'Wrote {len(sections)} sections to {out_dir}')


if __name__ == '__main__':
    main()

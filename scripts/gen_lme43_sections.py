# -*- coding: utf-8 -*-
"""Generate LME43 section JSX from .cursor/lme43_structure.json."""
import json
import os

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), '..'))
JSON_PATH = os.path.join(ROOT, '.cursor', 'lme43_structure.json')
OUT_DIR = os.path.join(
    ROOT,
    'src',
    'summaries',
    'samenvattingen-b10',
    'week-5',
    'casus-c10-dm-type2',
    'lme-leefstijl-voeding-preventie-dm2',
    'sections',
)

SHARED = r'''import { Fragment } from 'react'

export function Inline({ children }) {
  const s = String(children)
  const out = []
  let rest = s
  let k = 0
  while (rest) {
    const a = rest.indexOf('**')
    if (a === -1) {
      out.push(rest)
      break
    }
    if (a > 0) out.push(rest.slice(0, a))
    const b = rest.indexOf('**', a + 2)
    if (b === -1) {
      out.push(rest.slice(a))
      break
    }
    out.push(<strong key={k++}>{rest.slice(a + 2, b)}</strong>)
    rest = rest.slice(b + 2)
  }
  return (
    <>
      {out.map((n, i) => (
        <Fragment key={i}>{typeof n === 'string' ? n : n}</Fragment>
      ))}
    </>
  )
}

export function PBody({ text }) {
  const lines = text.split('\n')
  return (
    <>
      {lines.map((line, i) => (
        <p key={i}>
          <Inline>{line}</Inline>
        </p>
      ))}
    </>
  )
}

export function DataTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 my-4">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
          <tr>
            {rows[0].map((h, hi) => (
              <th key={hi} className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                <Inline>{h}</Inline>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-900/40">
          {rows.slice(1).map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="border border-slate-200 dark:border-slate-600 px-3 py-2 align-top">
                  <Inline>{cell}</Inline>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

'''


def tpl(s):
    esc = s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    return '{`' + esc + '`}'


def emit_blocks(blocks, spec, fp):
    fp.write("import { Inline, PBody, DataTable } from './SectionShared'\n\n")
    fp.write('export default function Section() {\n')
    fp.write('  return (\n')
    fp.write('    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">\n')
    ul = False
    for item in spec:
        if item[0] == 'h2':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            fp.write(f'      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100"><Inline>{tpl(t)}</Inline></h2>\n')
        elif item[0] == 'h3':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            fp.write(f'      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{tpl(t)}</Inline></h3>\n')
        elif item[0] == 'p':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            t = blocks[idx]['text']
            if '\n' in t:
                fp.write(f'      <PBody text={tpl(t)} />\n')
            else:
                fp.write(f'      <p><Inline>{tpl(t)}</Inline></p>\n')
        elif item[0] == 'li':
            _, idx = item
            t = blocks[idx]['text']
            if not ul:
                fp.write('      <ul className="list-disc pl-6 space-y-2">\n')
                ul = True
            fp.write(f'        <li><Inline>{tpl(t)}</Inline></li>\n')
        elif item[0] == 'table':
            if ul:
                fp.write('      </ul>\n')
                ul = False
            _, idx = item
            fp.write('      <DataTable rows={' + json.dumps(blocks[idx]['rows'], ensure_ascii=False) + '} />\n')
    if ul:
        fp.write('      </ul>\n')
    fp.write('    </div>\n')
    fp.write('  )\n')
    fp.write('}\n')


def main():
    sections = [
        ('Section01BrondocumentTitel', [('h2', 0)]),
        ('Section02Leerdoelen', [('h3', 1), ('p', 2)] + [('li', i) for i in range(3, 8)]),
        (
            'Section03WaaromLeefstijlZoBelangrijkIs',
            [('h3', 8), ('p', 9), ('p', 10)] + [('li', i) for i in range(11, 16)] + [('p', 16), ('p', 17)],
        ),
        (
            'Section04PreventieVanDiabetesType2DoorLeefstijl',
            [('h3', 18), ('p', 19), ('p', 20)] + [('li', i) for i in range(21, 24)] + [('p', 24)] + [('li', i) for i in range(25, 29)] + [('p', 29), ('p', 30)],
        ),
        (
            'Section05GezondeLeefstijlBijMensenMetDiabetesType2',
            [('h3', 31), ('p', 32), ('p', 33)] + [('li', i) for i in range(34, 40)] + [('p', 40)],
        ),
        (
            'Section06LeefstijlinterventieBijType2',
            [('h3', 41), ('p', 42)] + [('li', i) for i in range(43, 51)] + [('p', 51), ('p', 52)],
        ),
        (
            'Section07VoedingspatronenOnbewerktBewerktUltrabewerkt',
            [('h3', 53), ('p', 54), ('p', 55), ('table', 56)],
        ),
        (
            'Section08GunstigeEnOngunstigeVoedingsmiddelen',
            [('h3', 57), ('p', 58)] + [('li', i) for i in range(59, 64)] + [('p', 64)] + [('li', i) for i in range(65, 68)] + [('p', 68)],
        ),
        (
            'Section09UltrabewerktVoedselEnNovaClassificatie',
            [('h3', 69), ('p', 70), ('p', 71), ('table', 72), ('p', 73), ('p', 74), ('p', 75)],
        ),
        (
            'Section10WaaromLeidtUltrabewerktVoedselTotMeerEten',
            [('h3', 76), ('p', 77), ('p', 78)] + [('li', i) for i in range(79, 84)] + [('p', 84)],
        ),
        (
            'Section11HetMediterraneDieet',
            [('h3', 85), ('p', 86)] + [('li', i) for i in range(87, 94)] + [('p', 94), ('p', 95), ('table', 96), ('p', 97)],
        ),
        (
            'Section12EffectenVanHetMediterraneDieet',
            [('h3', 98), ('p', 99)] + [('li', i) for i in range(100, 104)] + [('p', 104)] + [('li', i) for i in range(105, 108)] + [('p', 108), ('p', 109)],
        ),
        (
            'Section13VeryLowCalorieDieet',
            [('h3', 110), ('p', 111), ('p', 112), ('p', 113)] + [('li', i) for i in range(114, 119)] + [('p', 119), ('p', 120)],
        ),
        (
            'Section14KoolhydraatbeperktDieet',
            [('h3', 121), ('p', 122), ('p', 123), ('p', 124), ('p', 125)] + [('li', i) for i in range(126, 129)] + [('h3', 129), ('p', 130)] + [('li', i) for i in range(131, 139)] + [('p', 139), ('h3', 140), ('p', 141)] + [('li', i) for i in range(142, 146)] + [('p', 146)],
        ),
        (
            'Section15CasusMeneerVanDijk',
            [('h3', 147), ('p', 148), ('p', 149)] + [('li', i) for i in range(150, 157)] + [('p', 157)] + [('li', i) for i in range(158, 165)] + [('p', 165), ('p', 166)] + [('li', i) for i in range(167, 172)],
        ),
        ('Section16Samenvatting', [('h3', 172), ('p', 173), ('p', 174), ('p', 175)]),
    ]

    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        blocks = json.load(f)
    if len(blocks) != 176:
        raise SystemExit(f'expected 176 blocks, got {len(blocks)}')
    os.makedirs(OUT_DIR, exist_ok=True)
    shared_path = os.path.join(OUT_DIR, 'SectionShared.jsx')
    with open(shared_path, 'w', encoding='utf-8') as fp:
        fp.write(SHARED)
    for name, spec in sections:
        path = os.path.join(OUT_DIR, f'{name}.jsx')
        with open(path, 'w', encoding='utf-8') as fp:
            emit_blocks(blocks, spec, fp)


if __name__ == '__main__':
    main()

import {
  Map as MapIcon,
  Target,
  BookOpen,
  Timer,
  Lightbulb,
} from 'lucide-react'
import SummaryLayout from '../../../components/SummaryLayout'
import {
  STOFKAART,
  LEERDOELEN_WEKEN,
  COOKED_WEKEN,
  TIEN_MINUTEN,
  EZELSBRUGGEN,
} from './data'

const tableOfContents = [
  { id: 'sect-stofkaart', title: 'Stofkaart per week', icon: MapIcon },
  { id: 'sect-leerdoelen', title: 'Leerdoelen per LME', icon: Target },
  { id: 'sect-cooked', title: 'Cooked samenvatting per week', icon: BookOpen },
  { id: 'sect-10min', title: 'Laatste 10-minutenlijst', icon: Timer },
  { id: 'sect-ezels', title: 'Ultrakorte ezelsbruggen', icon: Lightbulb },
]

function CookedCallout({ items }) {
  if (!items || items.length === 0) return null
  return (
    <div className="mt-3 rounded-xl border-l-4 border-primary-400 bg-primary-50 p-4">
      <h4 className="text-sm font-semibold text-primary-800 mb-2">Extra cooked uitleg</h4>
      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  )
}

function Ezelsbrug({ text }) {
  if (!text) return null
  return (
    <div className="mt-3 rounded-xl border-l-4 border-amber-400 bg-amber-50 p-4">
      <p className="text-sm text-amber-800">
        <span className="font-semibold">Ezelsbrug / examtip: </span>
        {text}
      </p>
    </div>
  )
}

function MiniTable({ table }) {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
      {table.title ? (
        <div className="bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800">{table.title}</div>
      ) : null}
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-50 text-left text-slate-600">
            <th className="px-4 py-2 font-semibold">Term</th>
            <th className="px-4 py-2 font-semibold">Onthoud dit</th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i} className="border-t border-slate-200">
              <td className="px-4 py-2 font-medium text-slate-800">{row[0]}</td>
              <td className="px-4 py-2 text-slate-700">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Blok10CookedSamenvattingHeleBlokSummary = () => {
  return (
    <SummaryLayout
      title="Cooked samenvatting - hele blok 10"
      description={
        'Ultra-compacte rescue samenvatting van het hele blok 10 (Maag-Darm-Lever). Eerst de stofkaart per week, daarna alle leerdoelen per LME met direct antwoord, dan de cooked samenvatting per week en tot slot een laatste 10-minutenlijst.'
      }
      caseLabel="Hele blok - compacte samenvatting"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
    >
      <section id="sect-stofkaart" className="scroll-mt-24 mb-12">
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Stofkaart per week</h2>
          <p>
            Dit is de compacte stofkaart: per week staan de onderwerpen en LME{'\u2019'}s die in de samenvattingen
            zitten. De rode draad van het blok is steeds: klacht {'\u2192'} alarmsymptoom {'\u2192'} mechanisme {'\u2192'} passend
            onderzoek of behandeling.
          </p>
          {STOFKAART.map((week) => (
            <div key={week.week} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="text-base font-bold text-slate-900">{week.week}</h3>
              <p className="mt-1 text-sm text-slate-700">{week.intro}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700">
                {week.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="sect-leerdoelen" className="scroll-mt-24 mb-12">
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Alle leerdoelen per LME, met direct antwoord</h2>
          <p>
            Per LME staan eerst de leerdoelen, daarna een direct kort antwoord, extra cooked uitleg en waar mogelijk
            een ezelsbrug of examtip. Leer vooral de patronen: klacht {'\u2192'} mechanisme {'\u2192'} diagnostiek {'\u2192'} beleid.
          </p>
          {LEERDOELEN_WEKEN.map((week) => (
            <div key={week.week} className="space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">{week.week}</h3>
              {week.lmes.map((lme) => (
                <div key={lme.title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <h4 className="text-base font-bold text-slate-900">{lme.title}</h4>
                  {lme.leerdoelen && lme.leerdoelen.length > 0 ? (
                    <>
                      <p className="mt-2 text-sm font-semibold text-slate-600">Leerdoelen</p>
                      <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-slate-700">
                        {lme.leerdoelen.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                  <p className="mt-3 text-sm">
                    <span className="font-semibold text-slate-800">Kort antwoord: </span>
                    {lme.kortAntwoord}
                  </p>
                  <CookedCallout items={lme.cooked} />
                  <Ezelsbrug text={lme.ezelsbrug} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="sect-cooked" className="scroll-mt-24 mb-12">
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">De echte samenvatting voor cooked studenten</h2>
          <p>
            Lees per week eerst de intro, daarna de high-yield bullets, daarna de tabellen. Leer niet alles woordelijk,
            maar vooral patronen, verschillen en alarmsignalen.
          </p>
          {COOKED_WEKEN.map((week) => (
            <div key={week.week} className="rounded-xl border border-slate-200 bg-white p-4">
              <h3 className="text-lg font-bold text-slate-900">{week.week}</h3>
              <p className="mt-1 text-sm text-slate-700">{week.intro}</p>
              <p className="mt-3 text-sm font-semibold text-slate-600">Wat je echt moet snappen</p>
              <ul className="mt-1 list-disc pl-5 space-y-1 text-sm text-slate-700">
                {week.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              {week.tables.map((table, i) => (
                <MiniTable key={i} table={table} />
              ))}
              <div className="mt-4 rounded-xl border-l-4 border-emerald-400 bg-emerald-50 p-4">
                <p className="text-sm text-emerald-800">
                  <span className="font-semibold">Examtip: </span>
                  {week.examtip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="sect-10min" className="scroll-mt-24 mb-12">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Laatste 10-minutenlijst - wat je minimaal moet kunnen</h2>
          <ol className="list-decimal pl-5 space-y-2 text-sm text-slate-700">
            {TIEN_MINUTEN.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="sect-ezels" className="scroll-mt-24 mb-12">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Ultrakorte ezelsbruggen</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-slate-600">
                  <th className="px-4 py-2 font-semibold">Ezelsbrug</th>
                  <th className="px-4 py-2 font-semibold">Betekenis</th>
                </tr>
              </thead>
              <tbody>
                {EZELSBRUGGEN.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-2 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-4 py-2 text-slate-700">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Blok10CookedSamenvattingHeleBlokSummary

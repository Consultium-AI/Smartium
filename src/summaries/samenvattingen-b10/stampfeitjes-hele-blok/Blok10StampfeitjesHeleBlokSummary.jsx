import {
  Stamp,
  BookOpen,
  Table2,
  Timer,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../components/SummaryLayout'
import { INTRO, WEKEN, VASTE_KOPPELS, EINDLIJST } from './data'

const tableOfContents = [
  { id: 'sect-intro', title: 'Doel en gebruik', icon: BookOpen },
  ...WEKEN.map((week) => ({
    id: `sect-${week.week.toLowerCase().replace(/\s+/g, '-')}`,
    title: week.week,
    icon: Stamp,
  })),
  { id: 'sect-koppels', title: 'Vaste koppels', icon: Table2 },
  { id: 'sect-eindlijst', title: 'Supersnelle eindlijst', icon: Timer },
]

function FactItem({ fact }) {
  return (
    <li className="text-sm text-slate-700 leading-relaxed">
      <span className="font-semibold text-slate-900">{fact.term}</span>
      {fact.text ? (
        <>
          {': '}
          {fact.text}
        </>
      ) : null}
      {fact.mnemonic ? (
        <span className="mt-1 block rounded-lg border-l-4 border-amber-400 bg-amber-50 px-3 py-1.5 text-amber-800">
          <span className="font-semibold">Ezelsbrug: </span>
          {fact.mnemonic}
        </span>
      ) : null}
    </li>
  )
}

function FactList({ facts }) {
  if (!facts?.length) return null
  return (
    <ul className="mt-2 list-none space-y-3 pl-0">
      {facts.map((fact, i) => (
        <FactItem key={`${fact.term}-${i}`} fact={fact} />
      ))}
    </ul>
  )
}

const Blok10StampfeitjesHeleBlokSummary = () => {
  return (
    <SummaryLayout
      title="Irritante stampfeitjes - hele blok 10"
      description={
        'Compacte stampfeitjes voor blok 10: afkapwaarden, criteria, vaste koppels, percentages, volgordes en ezelsbruggen. Lees eerst alleen de vetgedrukte termen, dek daarna de uitleg af.'
      }
      caseLabel="Hele blok - stampfeitjes"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
    >
      <section id="sect-intro" className="scroll-mt-24 mb-12">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Doel en gebruik</h2>
          <p>
            Deze stampfeitjes zijn bedoeld om snel punten te scoren op feitjes die je snel vergeet. Niet voor diep
            begrip — daarvoor gebruik je de cooked samenvatting.
          </p>
          <div className="rounded-xl border border-primary-200 bg-primary-50 p-4">
            <div className="flex items-start gap-2">
              <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" />
              <p className="text-sm text-primary-800">
                <span className="font-semibold">3-secondenregel: </span>
                weet je het feitje niet binnen 3 seconden, markeer het en herhaal later opnieuw.
              </p>
            </div>
          </div>
          <FactList facts={INTRO} />
        </div>
      </section>

      {WEKEN.map((week) => (
        <section
          key={week.week}
          id={`sect-${week.week.toLowerCase().replace(/\s+/g, '-')}`}
          className="scroll-mt-24 mb-12"
        >
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{week.week}</h2>
              <p className="mt-1 text-sm text-slate-600">{week.title.replace(/^Week \d+ - /, '')}</p>
            </div>
            {week.subsections.map((subsection) => (
              <div key={subsection.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <h3 className="text-base font-bold text-slate-900">{subsection.title}</h3>
                <FactList facts={subsection.facts} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section id="sect-koppels" className="scroll-mt-24 mb-12">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Vaste koppels en mini-tabellen</h2>
          <p className="text-sm">Koppel links direct aan rechts — dit zijn de meest geteste vaste combinaties.</p>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 text-left text-slate-600">
                  <th className="px-4 py-2 font-semibold">Koppel</th>
                  <th className="px-4 py-2 font-semibold">Moet je direct weten</th>
                </tr>
              </thead>
              <tbody>
                {VASTE_KOPPELS.map(([left, right], i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-2 font-medium text-slate-800">{left}</td>
                    <td className="px-4 py-2 text-slate-700">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="sect-eindlijst" className="scroll-mt-24 mb-12">
        <div className="space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900">Supersnelle eindlijst</h2>
          <p className="text-sm">Als je nog 10 minuten hebt voor het tentamen — dit moet je minimaal kunnen stampen.</p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <FactList facts={EINDLIJST} />
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Blok10StampfeitjesHeleBlokSummary

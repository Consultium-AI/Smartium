import { ClipboardList, ListOrdered } from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectOefenvragenVragen1tot6 from './SectOefenvragenVragen1tot6'
import SectOefenvragenVragen7tot12 from './SectOefenvragenVragen7tot12'
import SectOefenvragenVragen13tot18 from './SectOefenvragenVragen13tot18'
import SectAntwoorden from './SectAntwoorden'

const Blok5Week5Casus9PositieveEnNegatieveSelectieSummary = () => {
  const tableOfContents = [
    { id: 'sect-oef-1', title: 'Oefenvragen (1–6)', icon: ListOrdered },
    { id: 'sect-oef-2', title: 'Oefenvragen (7–12)', icon: ListOrdered },
    { id: 'sect-oef-3', title: 'Oefenvragen (13–18)', icon: ListOrdered },
    { id: 'sect-antwoorden', title: 'Antwoorden', icon: ClipboardList },
  ]

  return (
    <SummaryLayout
      title="Positieve en negatieve selectie"
      description="Oefenvragen"
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-oef-1" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">Oefenvragen</h2>
        <SectOefenvragenVragen1tot6 />
      </section>
      <section id="sect-oef-2" className="scroll-mt-24 mb-12">
        <SectOefenvragenVragen7tot12 />
      </section>
      <section id="sect-oef-3" className="scroll-mt-24 mb-12">
        <SectOefenvragenVragen13tot18 />
      </section>
      <section id="sect-antwoorden" className="scroll-mt-24 mb-12">
        <SectAntwoorden />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9PositieveEnNegatieveSelectieSummary

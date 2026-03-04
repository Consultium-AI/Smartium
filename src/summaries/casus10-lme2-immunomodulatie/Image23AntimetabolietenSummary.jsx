import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23AntimetabolietenSummary = () => {
  const toc = [
    { id: 'antimetabolieten', title: 'Antimetabolieten', icon: Pill },
    { id: 'methotrexaat', title: 'Methotrexaat', icon: Pill },
  ]
  return (
    <SummaryLayout
      title="Antimetabolieten"
      description="Methotrexaat als antimetaboliet en werkingsmechanisme bij reumatoïde artritis."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image23"
    >
      <section id="antimetabolieten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antimetabolieten</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het kenmerk van antimetabolieten is dat deze de deling van immuuncellen verstoren en daarmee een immuunremmend effect hebben. Methotrexaat is een structureel analoog van foliumzuur en remt de vorming van thymidines en purines, die belangrijk zijn voor celdeling. Methotrexaat remt het enzym dihydrofolaatreductase.
        </p>
      </section>
      <section id="methotrexaat" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Effect van methotrexaat bij reumatoïde artritis</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Methotrexaat wordt veel voorgeschreven bij reumatoïde artritis. De werking berust op:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Verminderde productie van pro-inflammatoire cytokinen</li>
          <li>Apoptose van T-lymfocyten</li>
          <li>Repressie van klonale groei van B- en T-lymfocyten</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image23AntimetabolietenSummary

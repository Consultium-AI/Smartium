import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Sepsis"
      description="Overzicht van de hoofdstukken in de sepsis-module."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">Welkom bij de e-learning module over sepsis. Sepsis is een complexe en levensbedreigende aandoening met wereldwijd aanzienlijke impact op de gezondheidszorg. In de volksmond wordt sepsis ook wel &apos;bloedvergiftiging&apos; genoemd.</p>
        <h3 className="font-bold text-slate-800 mb-2">Hoofdstukken</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>De maatschappelijke impact van sepsis</li>
          <li>Sepsis en septische shock: definities</li>
          <li>Pathogenese van sepsis</li>
          <li>Infectiefocus</li>
          <li>Screening tools voor sepsis</li>
          <li>Sepsis in de praktijk: analyse, diagnostiek en behandeling</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

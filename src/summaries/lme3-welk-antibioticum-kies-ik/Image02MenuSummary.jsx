import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu"
      description="Overzicht onderwerpen e-module antibioticakeuze."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700">Onderwerpen: Introductie, Principes, Toedieningsweg, Gevoeligheid, Farmacokinetiek, Farmacodynamiek, Relatieve contra-indicaties.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

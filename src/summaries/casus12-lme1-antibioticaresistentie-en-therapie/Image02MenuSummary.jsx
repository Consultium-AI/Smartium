import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Antibioticaresistentie en BRMO's"
      description="Overzicht van de module: intrinsieke en verworven resistentie, resistentiemechanismen en BRMO's."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Menu</h2>
        <p className="text-slate-700 mb-4">In deze e-module herhalen we en gaan we wat uitgebreider in op het verschil tussen intrinsieke en verworven resistentie. We bespreken ook wat bedoeld wordt met wild-type gevoeligheid en je oefent met resistentiemechanismen. Daarna leggen we uit wat bijzonder resistente micro-organismen (BRMO&apos;s) zijn, en welke gevolgen de toegenomen resistentie heeft voor de behandeling van patiënten.</p>
        <h3 className="font-bold text-slate-800 mb-2">Onderwerpen</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Intrinsieke en verworven resistentie</li>
          <li>Resistentiemechanismen</li>
          <li>Bijzonder resistente micro-organismen (BRMO)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PrismaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'prisma', title: 'PRISMA-analyse', icon: GitBranch }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="De PRISMA-analyse"
      description="Retrospectieve analyse met oorzakenboom en categorisatie van oorzaken."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image11"
    >
      <section id="prisma" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRISMA-analyse</h2>
        <p className="text-slate-700 mb-4">PRISMA (Prevention and Recovery Information System for Monitoring and Analysis): retrospectief onderzoek hoe de fout heeft kunnen optreden. Er wordt een <strong>oorzakenboom</strong> gemaakt: bovenaan de topgebeurtenis (incident), daaronder de directe oorzaak, teruggeleid naar indirecte of basisoorzaak.</p>
        <h3 className="font-bold text-slate-800 mb-2">Categorisatie van oorzaken</h3>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Organisatiefalen</li>
          <li>Menselijk falen</li>
          <li>Patiëntgerelateerd falen</li>
          <li>Technisch falen</li>
          <li>Overig</li>
        </ul>
        <p className="text-slate-700 mt-4">Door terug te gaan naar de basisoorzaak in plaats van de directe oorzaak komen er meer verbeteracties uit. Een basisoorzaak is vaak menselijk falen (waar je weinig aan kunt verbeteren), maar na PRISMA kom je vaker uit bij organisatiefalen, waar je wel verbetermaatregelen voor kunt bedenken.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image11PrismaSummary

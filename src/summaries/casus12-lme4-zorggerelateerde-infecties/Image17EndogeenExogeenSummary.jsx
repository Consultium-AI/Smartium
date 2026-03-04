import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17EndogeenExogeenSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'bronnen', title: 'Endogene en exogene bronnen', icon: GitBranch },
    { id: 'pseudomonas', title: 'Pseudomonas aeruginosa', icon: GitBranch },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Bron van de infectie – Endogeen en exogeen"
      description="Transmissieroutes, exogene bronnen en Pseudomonas aeruginosa bij nosocomiale pneumonie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image17"
    >
      <section id="bronnen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Endogene en exogene bronnen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Er zijn verscheidene transmissieroutes van infectie in het ziekenhuis, en daarbij zijn er ook tal van bronnen aan te wijzen. De &apos;makkelijkste&apos; bron van infectie betreft de patiënt, hierbij gaat het om een besmetting met eigen flora (endogeen). Het wordt lastiger als een exogene bron van infectie moet worden aangewezen.
        </p>
        <p className="text-slate-700 mb-2">Voorbeelden van exogene bronnen:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Instrumentarium</li>
          <li>Ziekenhuisomgeving</li>
          <li>Direct contact (met zorgverleners)</li>
          <li>Lucht en aerosolen</li>
        </ul>
      </section>
      <section id="pseudomonas" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Exogene bron: kamer met eigen sanitair – Pseudomonas aeruginosa</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          P. aeruginosa is de belangrijkste verwekker van nosocomiale pneumonieën. Deze typische ziekenhuisbacterie heeft als karakteristiek dat het zeer goed kan overleven in vochtige omgevingen, omdat het biofilm kan maken. Hij wordt dan ook zeer vaak gekweekt uit sifons en uit doucheputjes.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Het opspatten van water in de patiëntenomgeving moet dan ook zoveel mogelijk worden voorkomen.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image17EndogeenExogeenSummary

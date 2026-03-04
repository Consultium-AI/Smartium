import { ArrowRightLeft, Building2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17BronInfectieExogeenSummary = () => {
  const toc = [
    { id: 'transmissie', title: 'Transmissieroutes', icon: ArrowRightLeft },
    { id: 'noso', title: 'Nosocomiale pneumonie', icon: Building2 },
  ]
  return (
    <SummaryLayout
      title="Bron van de infectie – Endogeen en exogeen"
      description="Transmissieroutes en voorbeeld van exogene bron: nosocomiale pneumonie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image17"
    >
      <section id="transmissie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Transmissieroutes van infectie</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li><strong>Endogeen:</strong> besmetting met eigen flora van de patiënt</li>
          <li><strong>Exogeen:</strong> instrumentarium, ziekenhuisomgeving, direct contact (zorgverleners), hoesten en aerosolen</li>
        </ul>
      </section>
      <section id="noso" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Voorbeeld: exogene bron nosocomiale pneumonie</h2>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <p className="text-primary-700 text-sm mb-2"><strong>Kamer met eigen sanitair; Pseudomonas aeruginosa</strong></p>
          <p className="text-primary-700 text-sm m-0">P. aeruginosa is de belangrijkste verwekker van nosocomiale pneumonieën. Deze typische ziekenhuisbacterie heeft als karakteristiek dat het zeer goed kan overleven in vochtige omgevingen, omdat het biofilm kan vormen. Hij wordt dan ook zeer vaak gekweekt uit sifons en uit doucheputjes. Het opspatten van water in de patiëntenomgeving moet dan ook zoveel mogelijk worden voorkomen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17BronInfectieExogeenSummary

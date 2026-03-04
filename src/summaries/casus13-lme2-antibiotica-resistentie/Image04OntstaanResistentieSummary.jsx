import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04OntstaanResistentieSummary = () => {
  const toc = [
    { id: 'ontstaan', title: 'Hoe ontstaat resistentie?', icon: AlertTriangle },
    { id: 'wapenwedloop', title: 'Natuurlijke wapenwedloop', icon: AlertTriangle },
    { id: 'antibioticagebruik', title: 'Antibioticagebruik sinds 1940', icon: AlertTriangle },
  ]
  return (
    <SummaryLayout
      title="Het ontstaan van antimicrobiële resistentie"
      description="Oorzaken en mechanismen van het ontstaan van antibioticaresistentie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image04"
    >
      <section id="ontstaan" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Hoe ontstaat antimicrobiële resistentie?</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Al miljoenen jaren bestaat er een &apos;wapenwedloop&apos; tussen micro-organismen. Bacteriën verdedigen zich tegen schimmels, bijvoorbeeld met bètalactamases tegen penicilline. Veel natuurlijke resistentiemechanismen bestaan in gebieden waar antibiotica nooit zijn geïntroduceerd.
        </p>
      </section>
      <section id="antibioticagebruik" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antibioticagebruik sinds de jaren 40</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Sinds de jaren 40 worden antibiotica gebruikt bij mens en dier. Dit gebruik doodt gevoelige bacteriën, terwijl resistente bacteriën overleven en zich vermenigvuldigen. Daardoor ontstaat een resistente bacteriepopulatie. Resistentie kan natuurlijk of verkregen zijn, in verschillende vormen, die verder in het hoofdstuk worden besproken.
        </p>
        <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-700">
          <strong>Referentie:</strong> Bhullar K et al. (2012) Antibiotic Resistance Is Prevalent in an Isolated Cave Microbiome. PLoS ONE 7(4): e34953.
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04OntstaanResistentieSummary

import { ArrowDownToLine } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11InfluxVerminderenSummary = () => {
  const toc = [
    { id: 'influx', title: 'Influx verminderen', icon: ArrowDownToLine },
    { id: 'gramnegatief', title: 'Gramnegatieve bacteriën', icon: ArrowDownToLine },
    { id: 'saureus', title: 'S. aureus en vancomycine', icon: ArrowDownToLine },
  ]
  return (
    <SummaryLayout
      title="Influx verminderen"
      description="Resistentiemechanisme: vermindering van antibioticumopname in de bacterie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 11"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image11"
    >
      <section id="influx" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Influx verminderen</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een ander voorbeeld van een resistentiemechanisme is het verminderen van de influx van het antibioticum in de bacterie. Twee voorbeelden hiervan zijn: gramnegatieve bacteriën en S. aureus.
        </p>
      </section>
      <section id="gramnegatief" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gramnegatieve bacteriën</h2>
        <p className="text-slate-700 leading-relaxed">
          Doordat gramnegatieve bacteriën het aantal porines reduceren in hun celwand, kan er minder antibioticum de cel binnenkomen.
        </p>
      </section>
      <section id="saureus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">S. aureus en vancomycine</h2>
        <p className="text-slate-700 leading-relaxed">
          Onder langdurige druk van vancomycine is de celwand van S. aureus dikker geworden. Hierdoor is de bacterie nu resistent geworden tegen vancomycine. Vancomycine wordt gevangen in de verdikte peptidoglycaanlaag en bereikt zijn doelwit niet meer.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image11InfluxVerminderenSummary

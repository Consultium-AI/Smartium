import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12VancomycineSaureusSummary = () => {
  const toc = [{ id: 'vancomycine', title: 'Vancomycine-resistentie S. aureus', icon: Microscope }]
  return (
    <SummaryLayout
      title="Vancomycine-resistentie bij S. aureus"
      description="Mechanisme van vancomycine-resistentie door verdikking van de peptidoglycanlaag."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image12"
    >
      <section id="vancomycine" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Vancomycine wordt gevangen in verdikte celwand</h2>
        </div>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Onder langdurige druk van vancomycine is de celwand van S. aureus dikker geworden. Hierdoor is de bacterie nu resistent geworden tegen vancomycine. Vancomycine raakt gevangen in de verdikte peptidoglycanlaag en kan zijn bindingsplaats niet bereiken.
        </p>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
          <h4 className="font-bold text-slate-800 mb-2">Morfologische afwijking</h4>
          <p className="text-slate-700 text-sm">Elektronenmicroscopische beelden tonen het verschil: S. aureus gekweekt zonder antibioticum heeft een dunne celwand; gekweekt in aanwezigheid van vancomycine (8 µg/ml) vertoont de bacterie een duidelijk verdikte celwand.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12VancomycineSaureusSummary

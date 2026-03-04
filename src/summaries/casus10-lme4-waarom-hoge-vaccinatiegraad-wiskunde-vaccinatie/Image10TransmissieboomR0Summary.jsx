import { Calculator } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10TransmissieboomR0Summary = () => {
  const toc = [{ id: 'transmissieboom', title: 'R₀ uit de transmissieboom', icon: Calculator }]
  return (
    <SummaryLayout
      title="R₀ berekenen uit een transmissieboom"
      description="Hoe R₀ wordt bepaald uit meerdere generaties en waarom toeval een rol speelt."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image10"
    >
      <section id="transmissieboom" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">R₀ en toeval</h2>
        <p className="text-slate-700 mb-4">In een transmissieboom speelt toeval een rol. Het primaire geval kan 3 secundaire gevallen geven; die geven op hun beurt 2, 3 en 1. Eén geval gaf 4 secundaire gevallen. Daarom kijken we naar meerdere generaties om een gemiddelde te bepalen.</p>
        <p className="text-slate-700 mb-4">R₀ is nooit een constante; het hangt af van de populatie en lokale omstandigheden.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10TransmissieboomR0Summary

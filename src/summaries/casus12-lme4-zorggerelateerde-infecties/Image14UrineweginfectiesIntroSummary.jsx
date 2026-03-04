import { Droplets } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14UrineweginfectiesIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'uwi', title: 'Urineweginfecties', icon: Droplets }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Urineweginfecties"
      description="Introductie op urineweginfecties als zorggerelateerde infectie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image14"
    >
      <section id="uwi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Urineweginfecties (UWI)</h2>
        <p className="text-slate-700 leading-relaxed">
          Urineweginfecties zijn een belangrijke vorm van zorggerelateerde infecties. Ze kunnen zowel spontaan ontstaan buiten een zorginstelling als in het ziekenhuis, waar ze vaak samenhangen met bijvoorbeeld de aanwezigheid van een katheter.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image14UrineweginfectiesIntroSummary

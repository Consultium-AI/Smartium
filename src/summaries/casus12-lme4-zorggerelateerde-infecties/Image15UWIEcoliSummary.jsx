import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15UWIEcoliSummary = ({ standalone = true }) => {
  const toc = [{ id: 'ecoli', title: 'E. coli als verwekker', icon: Bug }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="UWI – Meest voorkomende verwekker"
      description="Escherichia coli als belangrijkste verwekker van urineweginfecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image15"
    >
      <section id="ecoli" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Urineweginfecties – Verwekkers</h2>
        <p className="text-slate-700 mb-4">Urineweginfecties (UWI) ontstaan buiten een zorginstelling vaak spontaan, terwijl het ontstaan hiervan in het ziekenhuis vaker te wijten is aan bijvoorbeeld de aanwezigheid van een katheter. De verwekkers van urineweginfecties kunnen ook sterk variëren, afhankelijk van de flora waarmee de patiënt is gekoloniseerd.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Meest voorkomende verwekker</h4>
          <p className="text-primary-700 text-sm m-0"><strong>Escherichia coli</strong> is zowel binnen als buiten het ziekenhuis de meest voorkomende verwekker van urineweginfecties. Patiënten krijgen een UWI met hun eigen flora, ook al is de UWI ziekenhuisgerelateerd. De kans op het ontwikkelen hiervan is in het ziekenhuis groter wanneer er een urinekatheter bij de patiënt is geplaatst, omdat deze gekoloniseerd raakt met bacteriën.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15UWIEcoliSummary

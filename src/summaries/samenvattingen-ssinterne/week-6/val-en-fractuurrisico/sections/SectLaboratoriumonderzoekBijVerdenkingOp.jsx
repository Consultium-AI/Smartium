import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laboratoriumonderzoek bij verdenking op secundaire osteoporose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor je start met medicamenteuze behandeling, wil je secundaire oorzaken uitsluiten of opsporen. Daarom vraag je laboratoriumonderzoek aan.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Laboratoriumonderzoek bij osteoporose`}</Inline></SubHeading>
      <DataTable rows={[["Bij iedereen", "Op indicatie", "Bij mannen"], ["BSE", "Eiwitspectrum", "Serum testosteron bij mannen jonger dan 70 jaar"], ["Calcium", "Coeliakieserologie", "24-uurs urine calcium en creatinine op indicatie"], ["Albumine", "PTH bij hypercalciëmie", ""], ["Fosfaat", "", ""], ["Creatinine", "", ""], ["TSH", "", ""], ["25(OH)-vitamine D", "", ""], ["Alkalisch fosfatase", "", ""]]} />
    </div>
  )
}

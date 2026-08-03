import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof moet je kunnen uitleggen hoe de water- en natriumbalans in het lichaam worden geregeld. Je moet ook kunnen beschrijven hoe hyponatriëmie en hypernatriëmie kunnen ontstaan. Daarnaast moet je op basis van anamnese en laboratoriumonderzoek een behandelplan kunnen opstellen voor hyponatriëmie en hypernatriëmie.`}</Inline></p>
    </div>
  )
}

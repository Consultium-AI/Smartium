import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen hoe de zuur-base balans in het lichaam wordt gereguleerd;`}</Inline></li>
        <li><Inline>{`de samenhang beschrijven tussen zuur-base stoornissen en stoornissen van de kaliumbalans;`}</Inline></li>
        <li><Inline>{`uitleggen hoe een acidose en een alkalose kunnen ontstaan;`}</Inline></li>
        <li><Inline>{`op basis van anamnese en laboratoriumonderzoek een behandelplan opstellen bij een zuur-base stoornis.`}</Inline></li>
      </ul>
    </div>
  )
}

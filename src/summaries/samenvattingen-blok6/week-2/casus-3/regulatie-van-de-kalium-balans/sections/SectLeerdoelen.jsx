import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen hoe de kaliumbalans in het lichaam wordt gereguleerd. Ook kun je de samenhang beschrijven tussen zuur-base stoornissen en stoornissen van de kaliumbalans.`}</Inline></p>
    </div>
  )
}

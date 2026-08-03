import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof moet je weten wat cyanose is en waardoor het kan ontstaan. Je moet de verschillende vormen van cyanose kunnen herkennen en begrijpen waarom cyanose vaak voorkomt bij aangeboren hartafwijkingen. Daarnaast moet je de anatomie van de meest voorkomende cyanotische hartafwijkingen kennen, met extra aandacht voor de Tetralogie van Fallot. Ook moet je de anatomie, pathofysiologie en behandeling van Tetralogie van Fallot kunnen uitleggen.`}</Inline></p>
    </div>
  )
}

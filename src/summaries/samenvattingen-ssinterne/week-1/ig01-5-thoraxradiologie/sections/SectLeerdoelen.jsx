import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <PBody text={`Na deze module moet je de **basisprincipes van de X-thorax en CT-thorax** begrijpen, de **normale thoraxanatomie op radiologische beelden** kunnen herkennen en een **thoraxfoto systematisch kunnen beoordelen**. Ook moet je weten hoe **verschillende CT-protocollen en windowsettings** werken en waarom die belangrijk zijn voor de klinische vraag.`} />
    </div>
  )
}

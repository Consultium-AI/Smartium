import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module moet je kunnen uitleggen wat de verschillen zijn tussen thuismonitoring, Hospital at Home en een virtueel ziekenhuis. Ook moet je de voor- en nadelen van deze vormen van zorg op afstand kunnen benoemen, indicaties voor thuismonitoring kunnen noemen en de belangrijkste voor- en nadelen vanuit het perspectief van patiënten kunnen beschrijven.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen wat er gebeurt als een werknemer ziek en arbeidsongeschikt wordt, welke stappen in het ziekteverzuimproces worden gezet, welke interventies helpen bij terugkeer naar werk, hoe je een gezondheidsprobleem vertaalt naar functionele mogelijkheden en wat de gevolgen zijn van advisering over arbeid.`}</Inline></p>
    </div>
  )
}

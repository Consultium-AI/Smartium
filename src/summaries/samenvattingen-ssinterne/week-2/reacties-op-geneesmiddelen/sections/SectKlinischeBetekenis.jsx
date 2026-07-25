import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische betekenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Reacties op geneesmiddelen zijn belangrijk omdat ze:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`veel voorkomen;`}</Inline></li>
        <li><Inline>{`soms ernstig kunnen zijn;`}</Inline></li>
        <li><Inline>{`invloed hebben op toekomstige medicatiekeuzes;`}</Inline></li>
        <li><Inline>{`goed vastgelegd moeten worden in de medische voorgeschiedenis.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral bij middelen die vaak gebruikt worden, zoals NSAID’s en aspirine, is het belangrijk om alert te zijn op overgevoeligheidsreacties. Een goede herkenning voorkomt dat een patiënt opnieuw aan hetzelfde risico wordt blootgesteld.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Rol van de verschillende specialismen`}</Inline></SubHeading>
      <PBody text={`**Dermatoloog**: diagnose, dermatoscopie, follow-up, risicobepaling.`} />
      <PBody text={`**Oncologisch chirurg**: resectie, sentinel node, beoordeling van operabiliteit.`} />
      <PBody text={`**Internist-oncoloog**: systemische therapie, stadiëring, afweging van immunotherapie.`} />
      <PBody text={`**Observator/moderator**: kritisch doorvragen op beleid en onderbouwing.`} />
    </div>
  )
}

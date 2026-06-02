import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aandachtsvraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is histologie belangrijker dan cytologie?**
**Kort antwoord:** omdat je niet alleen losse cellen ziet, maar ook de weefselstructuur en groeipatroon kunt beoordelen.`} />
    </div>
  )
}

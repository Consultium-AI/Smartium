import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overdracht van hepatitis C`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hepatitis C wordt vooral overgedragen via bloed-bloedcontact. Denk hierbij aan besmette naalden bij drugsgebruik en aan bloedtransfusies van vóór 1991. Ook seksuele overdracht kan voorkomen. Slechte sanitaire omstandigheden spelen hierbij geen rol.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Hoe raak je hepatitis C meestal kwijt?
**Mini-antwoord:** Niet vanzelf door leefomstandigheden, maar door gerichte behandeling met antivirale middelen.`} />
    </div>
  )
}

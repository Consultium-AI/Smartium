import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van ernstige CAP`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De patiënt wordt opgenomen en behandeld volgens de SWAB-richtlijn en de ernstinschatting met de CURB-65 (AMBU-65) score. Het gaat hier om een ernstige community-acquired pneumonia, maar zonder noodzaak voor ICU-opname.`}</Inline></p>
      <PBody text={`Bij een fulminante pneumonie na influenza moet je niet alleen aan standaard pneumoniebehandeling denken, maar ook aan dekking tegen **S. aureus**. Penicilline is daarvoor niet voldoende. Daarom wordt in deze situatie **cefuroxim** gestart.`} />
      <PBody text={`Daarnaast is er, ondanks dat de klachten al langer dan 48 uur bestaan, toch reden om **oseltamivir** te geven. Dat komt doordat de patiënt ernstig ziek is en het beeld past bij influenza. Je start dus antivirale behandeling in afwachting van de diagnostiek.`} />
    </div>
  )
}

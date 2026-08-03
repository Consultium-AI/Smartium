import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe vaak komt het voor?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Beroepsgebonden ILD vormt een relevant deel van alle ILD’s. Ongeveer 10 tot 20% van de ILD-aandoeningen hangt samen met inhalatie van toxische stoffen. Dat is een schatting, maar het laat wel zien dat werkblootstelling een belangrijke oorzaak kan zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De werkelijke omvang is waarschijnlijk groter dan bekend is. Dat komt doordat beroepsgebonden ILD vaak onderkend of ondergerapporteerd wordt. Ook is het lastig om een oorzakelijk verband vast te stellen, zeker als iemand jarenlang aan meerdere stoffen is blootgesteld of als er ook andere factoren meespelen, zoals roken.`}</Inline></p>
      <SubHeading><Inline>{`Waarom is het lastig om de oorzaak vast te stellen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat sommige stoffen een lange latentietijd hebben. Dat betekent dat de klachten pas jaren of zelfs decennia na de blootstelling ontstaan. Bij asbest kan die latentietijd bijvoorbeeld 20 tot 30 jaar zijn. Daardoor denkt niet iedereen meteen aan werk als oorzaak.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** waarom is een beroepsanamnese zo belangrijk?
**Mini-antwoord:** omdat de klachten vaak pas laat ontstaan en de patiënt zelf het verband met werk niet altijd legt.`} />
    </div>
  )
}

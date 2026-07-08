import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het NLS-algoritme: de volgorde van handelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De opvang en reanimatie van de pasgeborene verlopen volgens de ABCD-methodiek. De volgorde is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Initiële acties`}</Inline></li>
        <li><Inline>{`Airway`}</Inline></li>
        <li><Inline>{`Breathing`}</Inline></li>
        <li><Inline>{`Circulation`}</Inline></li>
        <li><Inline>{`Drugs`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De eerste stap bestaat uit de initiële acties: de klok starten, hypothermie voorkomen, de eerste evaluatie uitvoeren en hulp inschakelen.`}</Inline></p>
      <SubHeading><Inline>{`Waarom start je de klok?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De geboortetijd is het moment waarop het kind volledig geboren is. Op dat moment start je de klok of noteer je de tijd. Dat is nodig om evaluatiemomenten goed te kunnen timen en om de volgorde van handelingen vast te leggen.`}</Inline></p>
      <SubHeading><Inline>{`Wat beoordeel je steeds opnieuw?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Elke 30 seconden evalueer je steeds dezelfde punten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hartfrequentie`}</Inline></li>
        <li><Inline>{`ademhaling`}</Inline></li>
        <li><Inline>{`kleur`}</Inline></li>
        <li><Inline>{`tonus`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De hartfrequentie beoordeel je met de stethoscoop of via de monitor. Palpatie van de navelstreng is alleen betrouwbaar als de pulsaties boven de 100 per minuut zijn. De ademhaling kan sufficiënt, insufficiënt of afwezig zijn. Gaspen is geen goede ademhaling; het is een reflexmatige ademhaling door hypoxie. De kleur kan roze, blauw of bleek zijn. De tonus kan hypotoon of normotoon zijn.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat is het belangrijkste verschil tussen volwassenen en neonaten bij reanimatie?
**Mini-antwoord:** Volwassenen hebben meestal een cardiaal probleem, pasgeborenen meestal een respiratoir probleem.`} />
    </div>
  )
}

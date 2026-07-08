import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het lichamelijk onderzoek van de pasgeborene`}</Inline></SubHeading>
      <PBody text={`Het lichamelijk onderzoek van een pasgeborene doe je het liefst in een **rustig waakstadium**. Dat is het moment waarop de baby wakker en rustig is. Een huilende of onrustige baby is moeilijk goed te beoordelen. Een slaperige baby is juist lastig voor het neurologisch onderzoek, omdat je dan minder goed kunt zien hoe de baby spontaan beweegt en reageert. Het beste moment is meestal **ongeveer een half uur vóór een voeding**. Als dat kan, kun je ook even wachten tot het kind rustiger is.`} />
      <PBody text={`Een belangrijk praktisch punt is dat de pasgeborene **niet te veel mag afkoelen**. Daarom houd je de baby zo kort mogelijk bloot, gebruik je een molton en zo nodig een warmtebron. Het onderzoek moet dus niet alleen zorgvuldig, maar ook warm en veilig verlopen.`} />
      <SubHeading><Inline>{`Algemene observatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je begint altijd met een algemene indruk. Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe ziek de baby oogt;`}</Inline></li>
        <li><Inline>{`de rusttonus;`}</Inline></li>
        <li><Inline>{`de houding;`}</Inline></li>
        <li><Inline>{`het bewegingspatroon;`}</Inline></li>
        <li><Inline>{`de kleur;`}</Inline></li>
        <li><Inline>{`de circulatie;`}</Inline></li>
        <li><Inline>{`de ademhaling.`}</Inline></li>
      </ul>
      <PBody text={`Een gezonde neonaat laat in het waakstadium meestal een **spontane, symmetrische beweeglijkheid** zien, met vooral een **flexietonus** van de armen en benen. Dat betekent dat de extremiteiten meestal wat gebogen liggen, niet slap uitgestrekt.`} />
      <PBody text={`**Aandacht-vraagje:** Wat is een geruststellende algemene indruk?
**Mini-antwoord:** Een baby die rustig oogt, symmetrisch beweegt, een goede flexietonus heeft en een normale kleur, circulatie en ademhaling laat zien.`} />
    </div>
  )
}

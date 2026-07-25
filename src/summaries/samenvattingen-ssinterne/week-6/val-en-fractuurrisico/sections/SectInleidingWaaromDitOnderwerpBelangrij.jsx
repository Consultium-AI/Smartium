import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: waarom dit onderwerp belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Valincidenten bij ouderen vormen een groot gezondheidsprobleem. Ongeveer één op de drie mensen van 65 jaar en ouder valt jaarlijks. Omdat er in Nederland veel ouderen zijn, gaat het om een zeer groot aantal valincidenten per jaar. Vaak blijft het letsel beperkt tot bijvoorbeeld een kneuzing of oppervlakkige wond, maar bij een deel van de patiënten is het letsel ernstiger en is beoordeling op de spoedeisende hulp nodig. Fracturen komen in deze groep veel voor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat je na een val niet alleen denkt aan de acute behandeling, maar ook aan de oorzaak van het vallen en aan het risico op een nieuwe val of een nieuwe fractuur. Naast valrisico is osteoporose de belangrijkste risicofactor voor een fractuur. Osteoporose komt veel voor en zal door vergrijzing en toenemende comorbiditeit waarschijnlijk nog vaker worden gezien. Veel chronische ziekten en de behandeling daarvan verhogen namelijk het risico op osteoporose.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veelvoorkomende voorschrijffouten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste fouten die bij kinderen genoemd worden, zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een decimale fout, bijvoorbeeld een factor 10, 100 of 1000 te hoog of te laag;`}</Inline></li>
        <li><Inline>{`verwisseling van keerdosis en dagdosis;`}</Inline></li>
        <li><Inline>{`een kind dat “uit de dosering is gegroeid” doordat de dosis niet is aangepast aan het groeiende gewicht;`}</Inline></li>
        <li><Inline>{`overschrijding van de maximale volwassendosis;`}</Inline></li>
        <li><Inline>{`het kiezen van de verkeerde sterkte.`}</Inline></li>
      </ul>
      <PBody text={`Een decimale fout is extra gevaarlijk. Een klein verschil in notatie kan een enorme dosisverschil geven. Daarom wordt de afkorting **ug** voor microgram liever vermeden, omdat die te veel lijkt op **mg**. Ook helpt het om kritisch te kijken naar het volume of het aantal ampullen: als iets niet logisch klinkt, moet het nagevraagd worden.`} />
      <PBody text={`**Aandacht-vraag:** waarom is een kind uit de dosering gegroeid een probleem?
**Mini-antwoord:** omdat het kind zwaarder wordt, maar de dosis soms gelijk blijft. Dan wordt de dosis per kilogram steeds lager en dus onvoldoende.`} />
    </div>
  )
}

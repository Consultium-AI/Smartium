import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De curve van het renogram`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De curve laat de hoeveelheid radioactiviteit per seconde in de ROI zien. In het begin stijgt de curve snel, omdat de nier het radiofarmacon opneemt. Zodra de afvloed op gang komt, daalt de curve weer.`}</Inline></p>
      <PBody text={`De top van de curve moet **scherp** zijn. De curves worden genormaliseerd: beide curves worden tot hetzelfde maximum opgetrokken, zodat kleine verschillen beter zichtbaar worden.`} />
      <PBody text={`Soms lopen de lijnen wat hobbelig. Dat komt meestal door **beweging** van de patiënt, waardoor de nier deels buiten de ROI komt te liggen. Dit zie je vooral bij kinderen.`} />
      <PBody text={`Een heel scherpe piek omhoog kan passen bij **reflux**: dan komt er opnieuw radioactiviteit in de nier terecht.`} />
      <PBody text={`**Aandacht-vraagje:** wat betekent een hobbelige curve meestal?
**Mini-antwoord:** meestal beweging van de patiënt, waardoor de nier niet steeds netjes in de ROI blijft.`} />
    </div>
  )
}

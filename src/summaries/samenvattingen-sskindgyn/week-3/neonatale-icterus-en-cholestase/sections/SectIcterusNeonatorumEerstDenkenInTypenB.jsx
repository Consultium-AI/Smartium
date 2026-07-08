import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Icterus neonatorum: eerst denken in typen bilirubine`}</Inline></SubHeading>
      <PBody text={`Geelzien bij een pasgeborene heet **icterus neonatorum**. De eerste stap is altijd: gaat het om een **ongeconjugeerde** of een **geconjugeerde** hyperbilirubinemie?`} />
      <PBody text={`Bilirubine ontstaat bij de afbraak van rode bloedcellen. In eerste instantie is dit bilirubine **ongeconjugeerd**: het is dan nog niet wateroplosbaar. In de lever wordt het normaal **geconjugeerd** door glucuronidering, zodat het via gal en ontlasting kan worden uitgescheiden.`} />
      <p className="leading-relaxed"><Inline>{`Bij een pasgeborene kan de bilirubinewaarde stijgen door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**meer aanmaak** van bilirubine, bijvoorbeeld door hemolyse;`}</Inline></li>
        <li><Inline>{`**verminderde verwerking** in de lever;`}</Inline></li>
        <li><Inline>{`**toegenomen terugresorptie** via de darm, dus een grotere enterohepatische kringloop.`}</Inline></li>
      </ul>
    </div>
  )
}

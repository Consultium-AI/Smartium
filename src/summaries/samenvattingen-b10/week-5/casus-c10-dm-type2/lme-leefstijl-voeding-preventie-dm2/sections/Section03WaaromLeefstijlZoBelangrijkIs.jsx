import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Waarom leefstijl zo belangrijk is`}</Inline></h3>
      <p><Inline>{`Diabetes type 2 is een aandoening met grote gevolgen. Het komt veel voor, hangt in het merendeel van de gevallen samen met overgewicht of obesitas en heeft niet alleen invloed op de bloedsuiker, maar ook op de kwaliteit van leven, de zorgkosten en het risico op hart- en vaatziekten. Leefstijl speelt daarom op twee momenten een rol: bij **preventie** van diabetes type 2 en bij **behandeling** van mensen die al diabetes hebben.`}</Inline></p>
      <p><Inline>{`Belangrijke leefstijlfactoren zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voeding;`}</Inline></li>
        <li><Inline>{`beweging;`}</Inline></li>
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`slaap;`}</Inline></li>
        <li><Inline>{`stress.`}</Inline></li>
      </ul>
      <p><Inline>{`Als deze factoren gunstig zijn, kan het risico op diabetes type 2 flink dalen. In de stof wordt benadrukt dat je met een combinatie van gezonde leefstijlkeuzes het risico op diabetes type 2 tot ongeveer de helft kunt verkleinen. Ook bij mensen die al diabetes type 2 hebben, blijft leefstijl belangrijk, vooral vanwege het risico op cardiovasculaire complicaties.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom krijgt overgewicht zoveel aandacht?  
**Mini-antwoord:** Omdat overgewicht en obesitas sterk bijdragen aan insulineresistentie en daarmee aan het ontstaan van diabetes type 2.`} />
    </div>
  )
}

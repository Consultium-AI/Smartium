import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Psoriasis geeft meestal:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`scherp begrensde rode plaques`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`schilfering`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`vaak op strekzijden zoals ellebogen en knieën`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`vaak ook op de hoofdhuid`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`nagelafwijkingen kunnen meedoen`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De huidafwijkingen kunnen uitgebreid zijn en soms verergeren door uitlokkende factoren. In deze casus wordt genoemd dat de psoriasis ooit begon na een keelontsteking en later van een guttate vorm is overgegaan in psoriasis vulgaris.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom zijn nagels belangrijk bij psoriasis?
**Kort antwoord:** Nagelafwijkingen passen bij psoriasis en kunnen ook een aanwijzing zijn voor artritis psoriatica.`} />
    </div>
  )
}

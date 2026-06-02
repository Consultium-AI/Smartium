import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed"><Inline>{`De eerste casus gaat over een 70-jarige man met sinds de kinderleeftijd psoriasis. Hij heeft nu al langere tijd een forse toename van de huidafwijkingen. De plekken zijn uitgebreid over het hele lichaam aanwezig, rood en schilferend, en matig jeukend. Daarnaast heeft hij brokkelige, gele, verdikte nagels van vingers en tenen. Ook heeft hij meer ochtendstijfheid en moeite met het openen van schroefdeksels, alsof zijn vingers dikker en pijnlijker zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat past bij een patiënt met **psoriasis vulgaris**, mogelijk met **psoriasis unguium** en mogelijk ook **artritis psoriatica**.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hoe ziet psoriasis eruit?`}</Inline></p>
    </div>
  )
}

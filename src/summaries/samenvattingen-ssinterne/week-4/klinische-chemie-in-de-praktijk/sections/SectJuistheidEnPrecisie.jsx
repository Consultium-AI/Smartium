import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Juistheid en precisie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij laboratoriumonderzoek wil je dat een uitslag niet alleen dichtbij de echte waarde ligt, maar ook steeds ongeveer hetzelfde uitkomt als je het opnieuw meet.`}</Inline></p>
      <SubHeading><Inline>{`Juistheid`}</Inline></SubHeading>
      <PBody text={`**Juistheid** betekent: hoe dicht een gemeten waarde bij de werkelijke waarde ligt.
Een meting is dus juist als hij de echte waarde goed benadert.`} />
      <SubHeading><Inline>{`Precisie`}</Inline></SubHeading>
      <PBody text={`**Precisie** betekent: hoe goed herhaalde metingen onderling overeenkomen.
Een meting is precies als je telkens ongeveer dezelfde uitslag krijgt.`} />
      <p className="leading-relaxed"><Inline>{`Een test kan dus:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**precies maar niet juist** zijn: de uitslagen liggen dicht bij elkaar, maar wel naast de echte waarde;`}</Inline></li>
        <li><Inline>{`**juist maar niet precies** zijn: gemiddeld klopt het wel, maar de afzonderlijke metingen verschillen veel.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** waarom is dit belangrijk bij een patiënt?
**Mini-antwoord:** omdat je uitslagen van dezelfde patiënt alleen goed kunt vergelijken als de metingen betrouwbaar en herhaalbaar zijn.`} />
    </div>
  )
}

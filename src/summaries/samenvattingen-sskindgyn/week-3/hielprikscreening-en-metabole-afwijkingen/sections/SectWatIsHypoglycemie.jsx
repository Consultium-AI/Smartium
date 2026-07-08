import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is hypoglycemie?`}</Inline></SubHeading>
      <PBody text={`Bij kinderen spreek je van hypoglycemie bij een glucose onder de **2,6 mmol/l**. Onder normale, gevoede omstandigheden daalt glucose meestal niet snel onder de **3,5 mmol/l**. Glucose is voor de hersenen een essentiële energiebron, omdat de hersenen geen vetten kunnen verbranden.`} />
      <SubHeading><Inline>{`Symptomen van hypoglycemie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klachten verlopen vaak in twee fasen:`}</Inline></p>
      <DataTable rows={[["Fase", "Klachten"], ["Vroege fase", "bleekheid, zweten, trillerigheid, geprikkeldheid, hartkloppingen, misselijkheid"], ["Late fase", "traagheid, duizeligheid, onduidelijk spreken, wazig zien, convulsies, daling van het bewustzijn tot coma"]]} />
      <PBody text={`**Aandacht-vraagje:** Waarom is hypoglycemie zo gevaarlijk?
**Mini-antwoord:** Omdat de hersenen zonder glucose snel energietekort krijgen.`} />
    </div>
  )
}

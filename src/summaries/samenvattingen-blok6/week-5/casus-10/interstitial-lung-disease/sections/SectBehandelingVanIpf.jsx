import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van IPF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor IPF zijn twee antifibrotische behandelingen beschikbaar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pirfenidon`}</Inline></li>
        <li><Inline>{`nintedanib`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast wordt gekeken naar nieuwe antifibrotische middelen in klinische studies. Omdat de prognose slecht is, moet longtransplantatie vroeg worden overwogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ondersteunende zorg kan bestaan uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cardiotraining en spiertraining onder begeleiding`}</Inline></li>
        <li><Inline>{`zuurstof indien nodig`}</Inline></li>
        <li><Inline>{`dieetadvies`}</Inline></li>
        <li><Inline>{`psychologische ondersteuning`}</Inline></li>
      </ul>
    </div>
  )
}

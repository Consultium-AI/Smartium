import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tumorgraad en risicoclassificatie`}</Inline></SubHeading>
      <PBody text={`Naast het stadium is ook de **tumorgraad** belangrijk. Gradering zegt iets over hoe afwijkend de tumorcellen eruitzien en hoe slecht ze gedifferentieerd zijn.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Laaggradig / graad 1**: goed gedifferentieerd, gunstiger prognose`}</Inline></li>
        <li><Inline>{`**Hooggradig / graad 3**: slecht gedifferentieerd, ongunstiger prognose`}</Inline></li>
        <li><Inline>{`**Graad 2**: kan laag- of hooggradig zijn`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij niet-spierinvasieve blaaskanker wordt ook gekeken naar het risico op progressie. Daarom worden deze tumoren ingedeeld in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`laag risico`}</Inline></li>
        <li><Inline>{`intermediair risico`}</Inline></li>
        <li><Inline>{`hoog risico`}</Inline></li>
        <li><Inline>{`heel hoog risico`}</Inline></li>
      </ul>
      <PBody text={`Die indeling bepaalt de behandeling en follow-up. In de casus wordt de tumor van mevrouw K. geclassificeerd als **hoog-risico**.`} />
    </div>
  )
}

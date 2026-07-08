import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Groei en dysmaturiteit`}</Inline></SubHeading>
      <PBody text={`Bij een dysmatuur kind kan het geboortegewicht sterk afwijken van de verwachting voor de zwangerschapsduur. Dan wordt gekeken naar de p-waarde of SD-score. Een geboortegewicht ver onder de P3 wijst op ernstige dysmaturiteit. Soms is de **schedelomtrek relatief gespaard**, wat past bij brain-sparing.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is de schedelomtrek soms normaal terwijl het gewicht laag is?`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Mini-antwoord:** Omdat de foetus de bloedtoevoer naar de hersenen beschermt ten koste van andere organen.`}</Inline></li>
      </ul>
    </div>
  )
}

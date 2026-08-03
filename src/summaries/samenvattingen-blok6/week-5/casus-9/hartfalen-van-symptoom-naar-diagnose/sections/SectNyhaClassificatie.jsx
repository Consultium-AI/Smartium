import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`NYHA-classificatie`}</Inline></SubHeading>
      <PBody text={`De NYHA-classificatie beschrijft hoe veel klachten een patiënt heeft bij inspanning. Het is dus een **functionele indeling**: je kijkt naar wat de patiënt in het dagelijks leven nog kan.`} />
      <PBody text={`**Tabel 2. NYHA-classificatie**`} />
      <DataTable rows={[["Klasse", "Betekenis"], ["NYHA I", "Geen beperkingen bij normale inspanning"], ["NYHA II", "Klachten bij zwaardere inspanning"], ["NYHA III", "Klachten bij lichte inspanning"], ["NYHA IV", "Klachten in rust"]]} />
      <SubHeading><Inline>{`Voorbeelden`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**NYHA I**: iemand wandelt dagelijks zonder klachten`}</Inline></li>
        <li><Inline>{`**NYHA II**: kortademigheid bij traplopen`}</Inline></li>
        <li><Inline>{`**NYHA III**: buiten adem bij aankleden of korte afstanden`}</Inline></li>
        <li><Inline>{`**NYHA IV**: benauwd in rust, vaak zittend slapen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De NYHA-klasse zegt iets over het dagelijks functioneren en heeft ook prognostische waarde. Het blijft wel een subjectieve indeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

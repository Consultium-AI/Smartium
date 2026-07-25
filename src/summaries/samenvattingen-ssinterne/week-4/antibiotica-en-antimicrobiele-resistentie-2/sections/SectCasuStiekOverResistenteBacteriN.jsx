import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casuïstiek over resistente bacteriën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de voorbereiding op de verdere bespreking komen ook situaties aan bod zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een urosepsis met een **E. coli**-isolaat en de vraag wanneer je kunt switchen van intraveneus naar oraal`}</Inline></li>
        <li><Inline>{`een **Acinetobacter baumannii**-infectie met pleura-empyeem`}</Inline></li>
        <li><Inline>{`een **Citrobacter freundii** met het carbapenemase-gen **NDM** bij een patiënt die mogelijk in aanmerking komt voor levertransplantatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De kern van deze casussen is steeds hetzelfde: je moet niet alleen naar het antibiogram kijken, maar ook naar de klinische situatie, de mogelijkheden voor orale switch, de ernst van de infectie en de gevolgen van resistentie voor verdere behandeling.`}</Inline></p>
    </div>
  )
}

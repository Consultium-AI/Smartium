import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De huidige stand van zaken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Van oudsher vindt contact tussen arts en patiënt vooral fysiek plaats, op de werkplek van de arts. Dat was logisch: zo kon een arts in korte tijd veel patiënten zien, en lange tijd waren er weinig mogelijkheden om zorg op afstand te organiseren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De komst van nieuwe technologie heeft de maatschappij sterk veranderd, maar de geneeskunde is daarin lang achtergebleven. Initiatieven voor telemedicine waren daarom lange tijd beperkt. Tijdens de SARS-CoV-2-pandemie kwam daar verandering in. Toen werd zorg op afstand ineens veel belangrijker, omdat:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`naar het ziekenhuis komen werd ontmoedigd door thuisblijven, reisbeperkingen en het vermijden van contact;`}</Inline></li>
        <li><Inline>{`patiënten soms zelf niet durfden te komen;`}</Inline></li>
        <li><Inline>{`artsen andere taken hadden, bijvoorbeeld de zorg voor COVID-patiënten, waardoor er minder capaciteit was voor fysieke consulten.`}</Inline></li>
      </ul>
    </div>
  )
}

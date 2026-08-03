import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De verzekeringsgeneeskundige beoordeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verzekeringsarts begint met gegevens uit eerdere beoordelingen, bijvoorbeeld uit de Ziektewet of van de bedrijfsarts. Vaak zijn ook gegevens van behandelaars beschikbaar. Daarna volgt een spreekuurcontact waarin de cliënt uitgebreid zijn of haar verhaal kan doen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verzekeringsarts vraagt vooral naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het dagverhaal;`}</Inline></li>
        <li><Inline>{`klachten in werk en dagelijks leven;`}</Inline></li>
        <li><Inline>{`sociale omstandigheden;`}</Inline></li>
        <li><Inline>{`lichamelijke en psychische klachten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zo nodig volgt lichamelijk onderzoek of psychiatrisch onderzoek. Met toestemming kan informatie bij behandelaars worden opgevraagd of een expertise worden aangevraagd.`}</Inline></p>
      <PBody text={`De verzekeringsarts schrijft een rapportage en vult een **Functionele Mogelijkheden Lijst (FML)** in. Alleen in bijzondere situaties, zoals ziekenhuisopname, bedlegerigheid of ernstige ADL-afhankelijkheid, kan worden volstaan met het voorblad van de FML.`} />
    </div>
  )
}

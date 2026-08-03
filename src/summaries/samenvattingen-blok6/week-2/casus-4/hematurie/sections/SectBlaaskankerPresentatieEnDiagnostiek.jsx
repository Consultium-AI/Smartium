import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Blaaskanker: presentatie en diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pijnloze macroscopische hematurie is het klassieke alarmsymptoom van blaaskanker. In de casus gaat het om een oudere vrouw met recidiverende rode urine, zonder plasklachten of pijn. Dat maakt een urineweginfectie minder waarschijnlijk en een maligniteit juist belangrijk om uit te sluiten.`}</Inline></p>
      <PBody text={`Bij verder onderzoek worden urine, bloed, cystoscopie en CT gebruikt. Als er bij cystoscopie meerdere papillaire tumoren worden gezien en de CT geen uitzaaiingen laat zien, dan is de volgende stap het verkrijgen van weefsel. Dat gebeurt met een **TURBT**: transurethrale resectie van de blaastumor. Hierbij wordt de tumor via de plasbuis verwijderd, samen met weefsel uit de onderliggende lagen van de blaaswand, inclusief de detrusorspier. Zo kan worden bepaald hoe diep de tumor is ingegroeid.`} />
      <PBody text={`De behandeling en prognose hangen sterk af van de **TNM-classificatie**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**T**: hoe diep de tumor in de blaaswand of het omliggende weefsel groeit;`}</Inline></li>
        <li><Inline>{`**N**: of er lymfeklieruitzaaiingen zijn;`}</Inline></li>
        <li><Inline>{`**M**: of er afstandsmetastasen zijn.`}</Inline></li>
      </ul>
      <PBody text={`Daarnaast is de histologie belangrijk. Ongeveer 90% van de maligne blaastumoren is een **urotheelcarcinoom**.`} />
    </div>
  )
}

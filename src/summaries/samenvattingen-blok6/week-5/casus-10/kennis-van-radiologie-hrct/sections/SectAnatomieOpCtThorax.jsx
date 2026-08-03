import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie op CT-thorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om een CT-thorax goed te kunnen beoordelen, moet je de normale anatomie herkennen. Op verschillende niveaus van de thorax zie je steeds andere structuren terug. Denk daarbij aan grote vaten, luchtwegen, hartkamers en longkwabben.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijke structuren die je moet kunnen herkennen`}</Inline></SubHeading>
      <DataTable rows={[["Structuur", "Waar hoort het bij?"], ["Vena cava superior", "Groot veneus vat"], ["Aortaboog", "Grote lichaamsslagader"], ["Trachea", "Luchtweg"], ["Slokdarm", "Spijsverteringskanaal"], ["Scapula", "Schouderblad"], ["Aorta ascendens", "Oplopend deel van de aorta"], ["Truncus pulmonalis", "Longslagaderstam"], ["Carina", "Splitsing van de trachea"], ["Vena azygos", "Veneus vat"], ["Aorta descendens", "Afdalend deel van de aorta"], ["Rechterventrikel", "Hartkamer"], ["Linkerventrikel", "Hartkamer"], ["Rechteratrium", "Boezem"], ["Linkeratrium", "Boezem"], ["Middenkwab", "Longkwab rechts"], ["Linkerbovenkwab", "Longkwab links"], ["Rechteronderkwab", "Longkwab rechts"], ["Linkeronderkwab", "Longkwab links"], ["Fissura major rechts", "Scheiding tussen longkwabben"], ["Fissura major links", "Scheiding tussen longkwabben"]]} />
      <PBody text={`Het is handig om deze structuren in samenhang te leren. Zo liggen de grote vaten en luchtwegen centraal in de thorax, terwijl de longkwabben en fissuren de indeling van de longen bepalen. De **carina** is een belangrijk herkenningspunt, omdat daar de trachea zich splitst in de hoofdbronchi.`} />
    </div>
  )
}

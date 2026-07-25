import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijke bloedvaten op de CT`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De grote buikvaten zijn essentieel om te herkennen. Vooral de aorta, vena cava inferior, vena porta en de mesenteriale vaten zijn belangrijk.`}</Inline></p>
      <PBody text={`**Tabel 2. Belangrijke vaten op CT-abdomen**`} />
      <DataTable rows={[["Vat", "Belangrijke kenmerken"], ["Aorta", "Grootste arterie, loopt centraal links van de wervelkolom"], ["Vena cava inferior", "Grote vene rechts van de aorta"], ["Vena porta", "Komt de lever binnen en splitst in rechter en linker tak"], ["Levervenen", "Draineren van de lever naar de vena cava inferior"], ["Truncus coeliacus", "Eerste grote aftakking van de aorta abdominalis"], ["Arteria hepatica", "Tak van de truncus coeliacus"], ["Arteria lienalis", "Tak van de truncus coeliacus, loopt naar de milt"], ["Arteria mesenterica superior", "Tweede grote aftakking van de aorta"], ["Arteria renalis", "Tak naar de nieren"], ["Arteria mesenterica inferior", "Laatste grote aftakking van de aorta"]]} />
      <p className="leading-relaxed"><Inline>{`De truncus coeliacus splitst in de arteria hepatica en de arteria lienalis. De arteria gastrica sinistra is ook een tak in dit gebied. De arteria mesenterica superior is de tweede grote aftakking van de aorta en verzorgt de dunne darm en het grootste deel van de dikke darm. De arteria mesenterica inferior verzorgt de meer distale delen van de colon en structuren in het bekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De vena porta ontstaat uit veneuze afvoer uit onder andere de milt en de mesenteriale vaten. De vena splenica en de vena mesenterica superior draineren in het portale systeem.`}</Inline></p>
      <PBody text={`**Aandachtvraag:** Wat is het verschil tussen de aorta en de vena cava inferior?
**Mini-antwoord:** De aorta voert bloed van het hart naar de organen, de vena cava inferior voert bloed terug naar het hart.`} />
    </div>
  )
}

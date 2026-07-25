import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Indeling van ritmestoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ritmestoornissen worden op verschillende manieren ingedeeld. Dat helpt om ze op het ECG te herkennen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Indeling van tachycardieën`}</Inline></SubHeading>
      <DataTable rows={[["Indeling", "Mogelijkheden", "Betekenis"], ["Op origine", "ventriculair / supraventriculair", "Waar ontstaat het ritme?"], ["Op ECG", "smalcomplex / breedcomplex", "Is het QRS ≤ 120 ms of > 120 ms?"], ["Op regelmaat", "regulier / regulair irregulair / totaal irregulair", "Hoe constant is het ritme?"]]} />
      <PBody text={`Een **tachycardie** is een hartslag boven de 100 per minuut in rust. Een **bradycardie** is een hartslag onder de 60 per minuut. Tussen 60 en 100 per minuut spreekt men van een normale frequentie.`} />
      <PBody text={`Bij een **smalcomplextachycardie** is het QRS-complex maximaal 120 ms breed. Bij een **breedcomplextachycardie** is het QRS-complex breder dan 120 ms. Een breed complex wijst vaak, maar niet altijd, op een ventriculaire oorsprong.`} />
      <PBody text={`Bij een **totaal irregulair ritme** is er geen patroon in de afstand tussen de QRS-complexen. Dat past bijna altijd bij atriumfibrilleren. Bij een **regulair irregulair ritme** is er wel onregelmatigheid, maar toch nog een terugkerend patroon.`} />
    </div>
  )
}

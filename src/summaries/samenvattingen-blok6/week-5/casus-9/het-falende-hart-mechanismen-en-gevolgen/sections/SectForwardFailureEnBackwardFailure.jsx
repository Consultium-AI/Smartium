import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Forward failure en backward failure`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen kan op twee manieren tot klachten leiden. Bij forward failure pompt het hart onvoldoende bloed naar de weefsels. Bij backward failure kan het bloed niet goed wegstromen en ontstaat stuwing vóór het hart. Beide mechanismen komen vaak tegelijk voor.`}</Inline></p>
      <PBody text={`**Tabel 4. Forward failure versus backward failure**`} />
      <DataTable rows={[["Kenmerk", "Forward failure", "Backward failure"], ["Probleem", "Te lage cardiac output", "Verhoogde vullingsdruk"], ["Gevolg", "Weefselhypoperfusie", "Stuwing"], ["Klachten", "Koude extremiteiten, sufheid, verminderde urineproductie", "Dyspneu, orthopneu, oedeem, crepitaties"]]} />
    </div>
  )
}

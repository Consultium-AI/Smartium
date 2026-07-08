import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Persisterende ductus arteriosus (PDA)`}</Inline></SubHeading>
      <PBody text={`De **ductus arteriosus** is een bloedvat dat vóór de geboorte de **longslagader** en de **aorta** met elkaar verbindt. Zo wordt de longcirculatie in de foetus omzeild. Na de geboorte hoort deze verbinding te sluiten en verandert hij in een bindweefselstengeltje.`} />
      <PBody text={`Bij prematuren sluit de ductus vaak niet goed: dan is er sprake van een **PDA**. Omdat de druk in de aorta hoger is, stroomt bloed via de ductus naar het longvaatbed. Dit geeft **pulmonale overvulling** en klachten zoals een souffle, heffende pulsaties en een wijde polsdruk. Behandeling kan bestaan uit **ibuprofen**; daarmee kan de ductus sluiten.`} />
    </div>
  )
}

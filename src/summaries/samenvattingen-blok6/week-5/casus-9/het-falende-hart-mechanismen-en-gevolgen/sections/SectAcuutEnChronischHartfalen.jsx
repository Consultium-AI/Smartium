import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acuut en chronisch hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen kan acuut of chronisch verlopen. Acuut hartfalen betekent een plotselinge verslechtering van klachten, soms met hemodynamische instabiliteit. Dat kan gaan om new-onset hartfalen, dus voor het eerst optredend hartfalen, of om worsening heart failure, dus verergering van bestaand hartfalen. Vaak lopen de vullingsdrukken snel op en ontstaat longoedeem. In ernstige gevallen is er cardiogene shock.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Chronisch hartfalen verloopt geleidelijk. Patiënten kunnen lang stabiel zijn dankzij compensatiemechanismen en behandeling, maar de ziekte blijft progressief. Er kunnen periodes van decompensatie optreden, bijvoorbeeld door infectie, ritmestoornissen, therapie-ontrouw of bloeddrukschommelingen. Elke decompensatie kan leiden tot een lager functioneel niveau.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Chronisch hartfalen is dus geen rechte lijn, maar een ziekte met stabiele periodes en verslechteringen. Op de lange termijn kunnen ritmestoornissen ontstaan door fibrose en dilatatie, zoals atriumfibrilleren, ventrikeltachycardieën en geleidingsstoornissen.`}</Inline></p>
    </div>
  )
}

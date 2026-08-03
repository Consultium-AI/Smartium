import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ACHD gaat over volwassenen met een aangeboren hartafwijking. De belangrijkste afwijkingen zijn VSD, ASD, PDA en tetralogie van Fallot. De klachten hangen vooral af van de grootte van de shunt en de hemodynamische belasting. Links-rechtsshunts geven meestal volumebelasting van een ventrikel en kunnen op termijn leiden tot dilatatie, hartfalen en pulmonale hypertensie. Tetralogie van Fallot is juist een cyanotische afwijking met rechts-naar-links shunting. Behandeling bestaat vaak uit sluiting of correctie, maar op lange termijn kunnen ritmestoornissen, hartfalen, endocarditis, heringrepen en plotse hartdood optreden.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting van de kern`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Allergische aandoeningen draaien om het herkennen van het klachtenpatroon, het begrijpen van sensibilisatie en effectorfase, en het slim combineren van anamnese, testuitslagen en provocatie. Type I allergie is IgE-gemedieerd en kan leiden tot klachten aan huid, ogen, neus, longen, maag-darmkanaal en circulatie. Anafylaxie is een acute, potentieel levensbedreigende reactie waarvoor intramusculaire epinefrine de eerste keus is. Bij inhalatie- en voedselallergie zijn kruisreacties belangrijk, vooral tussen pollen en plantaardige voedingsmiddelen. De behandeling bestaat uit allergeenvermijding, farmacotherapie en soms immunotherapie. Componentdiagnostiek helpt om sensibilisatie beter te duiden en het risico op ernstige reacties in te schatten.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stoornissen in het glucosemetabolisme`}</Inline></SubHeading>
      <PBody text={`Bij **hypoglycemie** kan een diffuse encefalopathie ontstaan met daling van het bewustzijn. Vaak zijn er ook autonome verschijnselen, zoals transpireren en palpitaties. De klachten kunnen per patiënt verschillen, afhankelijk van de uitgangswaarde van het glucose en de snelheid waarmee de daling ontstaat. Een kortdurend hypoglycemisch coma kan herstellen na glucose-suppletie. Duurt het langer, dan kan hersenschade ontstaan door cellulaire necrose en neuronale dood.`} />
      <PBody text={`Bij **hyperglycemie** ontstaan neurologische verschijnselen vooral als het interne milieu ernstig ontregeld is. Vooral bij een effectieve plasma-osmolaliteit boven **320–330 mosmol/kg** zie je neurologische achteruitgang. Een coma komt vaker voor bij een **hyperosmolair hyperglycemisch non-ketotisch syndroom (HHS)** dan bij **diabetische keto-acidose (DKA)**, omdat de hyperosmolaliteit bij HHS groter is. Soms zijn er ook focale verschijnselen, zoals hemiparese, hemianopsie of insulten. Bij DKA kunnen neurologische symptomen optreden bij ernstige acidose.`} />
    </div>
  )
}

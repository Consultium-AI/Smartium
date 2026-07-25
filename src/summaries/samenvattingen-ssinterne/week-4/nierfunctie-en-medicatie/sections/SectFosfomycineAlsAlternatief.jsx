import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fosfomycine als alternatief`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als nitrofurantoïne niet gebruikt kan worden, is fosfomycine een alternatief bij ongecompliceerde urineweginfectie bij niet-zwangere vrouwen. De geadviseerde dosering is een eenmalige gift van 3 gram, 2 uur na de maaltijd, bij voorkeur voor de nacht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een creatinineklaring boven 10 mL/min blijven de fosfomycineconcentraties in de urine ongeveer 48 uur boven de MIC-waarden. Dat betekent dat het middel dan nog voldoende werkzaam is. Bij patiënten die hemodialyse ondergaan is fosfomycine niet zinvol, omdat er nauwelijks of geen urineproductie is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een eGFR van 23 mL/min kan fosfomycine dus wel worden gebruikt.`}</Inline></p>
    </div>
  )
}

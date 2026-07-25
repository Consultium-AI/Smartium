import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstof komt via de longen in het bloed en wordt vooral via hemoglobine vervoerd. De hoeveelheid opgelost zuurstof in bloed is klein; hemoglobine is daarom essentieel voor zuurstoftransport. De zuurstofdissociatiecurve laat zien hoe zuurstofbinding verandert bij pH-, CO2- en temperatuurveranderingen. Hypoxemie kan ontstaan door een diffusiestoornis, shunt, ventilatie-perfusie mismatch of hypoventilatie. Zuurstofsaturatie en bloedgasanalyse helpen om dit vast te stellen. Zuurstof kan op verschillende manieren worden toegediend, waarbij de keuze afhangt van de patiënt, de gewenste FiO2 en de klinische setting.`}</Inline></p>
    </div>
  )
}

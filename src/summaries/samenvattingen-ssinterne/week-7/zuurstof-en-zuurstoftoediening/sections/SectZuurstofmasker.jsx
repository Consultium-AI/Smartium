import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuurstofmasker`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zuurstofmasker is de minimale flow 6 l/min en de maximale flow 10 l/min. De flow bepaalt de FiO2, die ongeveer 40–60% kan zijn. Een nadeel is dat de FiO2 niet precies instelbaar is en moeilijk in te schatten is, omdat dit afhangt van de ademfrequentie en het teugvolume.`}</Inline></p>
    </div>
  )
}

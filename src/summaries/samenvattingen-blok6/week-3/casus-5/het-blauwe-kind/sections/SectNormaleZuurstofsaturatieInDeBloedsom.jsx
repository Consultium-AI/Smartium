import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Normale zuurstofsaturatie in de bloedsomloop`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om cyanose goed te begrijpen, is het handig om de normale saturaties in de verschillende hartcompartimenten te kennen. Zuurstofarm bloed komt via de vena cava superior en inferior in het rechter atrium, gaat naar de rechter ventrikel en vervolgens via de longslagader naar de longen. Daar wordt het zuurstof opgenomen. Daarna stroomt het zuurstofrijke bloed via de longvenen naar het linker atrium, de linker ventrikel en vervolgens via de aorta naar het lichaam.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het rechter hart en in de longslagader is de saturatie normaal laag, ongeveer 60%. In het linker hart en in de aorta is de saturatie normaal hoog, ongeveer 99%.`}</Inline></p>
      <DataTable rows={[["Tabel 1. Normale saturatie in de bloedsomloop"], ["Rechter atrium, rechter ventrikel, longslagader", "ongeveer 60%"], ["Linker atrium, linker ventrikel, aorta", "ongeveer 99%"]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vitale functies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met mogelijk hartfalen begin je met de vitale functies:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**ademfrequentie**: vaak verhoogd`}</Inline></li>
        <li><Inline>{`**saturatie**: kan verlaagd zijn, vooral bij longoedeem`}</Inline></li>
        <li><Inline>{`**hartfrequentie**: vaak verhoogd, soms onregelmatig`}</Inline></li>
        <li><Inline>{`**bloeddruk**: kan normaal, verhoogd of verlaagd zijn`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Let ook op tekenen van benauwdheid, gebruik van hulpademhalingsspieren en cyanose.`}</Inline></p>
    </div>
  )
}

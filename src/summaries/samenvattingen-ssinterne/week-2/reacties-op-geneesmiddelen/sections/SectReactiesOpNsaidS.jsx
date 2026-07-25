import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reacties op NSAID’s`}</Inline></SubHeading>
      <PBody text={`Bij NSAID’s kunnen verschillende soorten overgevoeligheidsreacties optreden. Een belangrijk kenmerk is dat sommige reacties **niet berusten op een klassieke allergie**, maar op een **pseudo-allergisch mechanisme**.`} />
      <p className="leading-relaxed"><Inline>{`Dat betekent dat iemand klachten kan krijgen na gebruik van meerdere verschillende NSAID’s, zonder dat er sprake hoeft te zijn van een specifieke allergie voor één enkel middel. Dit is een belangrijk herkenningspunt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Typische klachten kunnen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`huiduitslag of galbulten;`}</Inline></li>
        <li><Inline>{`zwelling;`}</Inline></li>
        <li><Inline>{`benauwdheid;`}</Inline></li>
        <li><Inline>{`verergering van bestaande luchtwegklachten;`}</Inline></li>
        <li><Inline>{`in ernstige gevallen een systemische reactie.`}</Inline></li>
      </ul>
    </div>
  )
}

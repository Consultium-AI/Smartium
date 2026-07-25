import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Cognitief functioneren en veroudering`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cognitief functioneren omvat meerdere domeinen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`mentale verwerkingssnelheid;`}</Inline></li>
        <li><Inline>{`executieve functies;`}</Inline></li>
        <li><Inline>{`planning;`}</Inline></li>
        <li><Inline>{`abstract vermogen;`}</Inline></li>
        <li><Inline>{`leren;`}</Inline></li>
        <li><Inline>{`aandacht en concentratie;`}</Inline></li>
        <li><Inline>{`visueel-ruimtelijke en constructieve vaardigheden;`}</Inline></li>
        <li><Inline>{`waarneming;`}</Inline></li>
        <li><Inline>{`taalbegrip en taalproductie;`}</Inline></li>
        <li><Inline>{`geheugen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij veroudering wordt het cognitief functioneren vaak iets trager en nemen vooral geheugentaken af. Ook comorbiditeit, zoals diabetes, zintuiglijke beperkingen of depressie, kan het functioneren beïnvloeden.`}</Inline></p>
    </div>
  )
}

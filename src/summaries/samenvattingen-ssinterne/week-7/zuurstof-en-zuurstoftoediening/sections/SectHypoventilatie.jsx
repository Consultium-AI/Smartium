import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypoventilatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hypoventilatie is er vooral sprake van hypercapnie: de PaCO2 en PACO2 stijgen, waardoor de PAO2 daalt. Daardoor ontstaat hypoxemie. Een voorbeeld is een PaCO2 van 80 mmHg, waarbij de PaO2 daalt tot ongeveer 50 mmHg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hypoventilatie kan vaak met weinig zuurstof worden gecorrigeerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke oorzaken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`centrale oorzaken, zoals drug overdose of structurele afwijkingen van het CZS;`}</Inline></li>
        <li><Inline>{`obesitas-hypoventilatie;`}</Inline></li>
        <li><Inline>{`neurologische aandoeningen zoals ALS, Guillain-Barré en phrenicusparalyse;`}</Inline></li>
        <li><Inline>{`spierziekten zoals myasthenia gravis, polymyositis en musculaire dystrofie;`}</Inline></li>
        <li><Inline>{`verminderde elasticiteit van de thorax, zoals bij fladderthorax of kyfoscoliose.`}</Inline></li>
      </ul>
    </div>
  )
}

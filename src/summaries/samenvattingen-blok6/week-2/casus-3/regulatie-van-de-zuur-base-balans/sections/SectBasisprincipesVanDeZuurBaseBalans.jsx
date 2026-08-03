import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Basisprincipes van de zuur-base balans`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De zuur-base balans is essentieel om de pH van het bloed binnen nauwe grenzen te houden, ongeveer tussen 7,35 en 7,45. Dat is belangrijk, omdat enzymen en cellulaire processen alleen goed werken binnen zo’n smalle pH-range. Het lichaam beschikt daarom over verschillende systemen die samen de pH stabiel houden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een zuur-base stoornis ontstaat wanneer er te veel zuur of te weinig base is, of juist andersom. Het lichaam probeert dat voortdurend te corrigeren. Daarbij spelen vooral drie buffersystemen een rol: het bicarbonaatbuffersysteem, het fosfaatbuffersysteem en het eiwitbuffersysteem.`}</Inline></p>
    </div>
  )
}

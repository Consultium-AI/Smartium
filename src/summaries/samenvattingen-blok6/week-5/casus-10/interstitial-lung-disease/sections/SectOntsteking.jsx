import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontsteking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ontsteking bij ILD kan verschillende oorzaken hebben. Een belangrijke oorzaak is auto-immuniteit. Bij reumatoïde artritis speelt bijvoorbeeld abnormale citrullinatie een rol. Daarbij worden eiwitten in het lichaam zó veranderd dat het immuunsysteem auto-antistoffen gaat vormen. Die auto-antistoffen activeren vervolgens macrofagen en stromale cellen, die cytokinen zoals TNF, IL-1, IL-6 en prostaglandinen vrijzetten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook andere auto-immuunziekten, zoals systemische sclerose en idiopathische inflammatoire myopathieën, hebben vergelijkbare mechanismen, maar met een ander patroon van auto-antistoffen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een andere belangrijke vorm van ontsteking is granulomateuze ontsteking. Granulomen bestaan uit dicht opeengepakte macrofagen, die soms samensmelten tot meerkernige reuscellen. Sarcoïdose is hier het klassieke voorbeeld van. Daarbij zijn de longen vaak betrokken. Hypersensitivity pneumonitis is een andere aandoening met granulomateuze ontsteking, meestal door herhaalde blootstelling aan antigenen zoals vogel- of schimmelproteïnen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ontsteking kan ook veroorzaakt worden door infectie, bestraling van de thorax of bepaalde medicijnen.`}</Inline></p>
    </div>
  )
}

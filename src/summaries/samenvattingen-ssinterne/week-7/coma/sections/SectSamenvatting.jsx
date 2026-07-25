import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Coma is een ernstige vorm van bewustzijnsdaling waarbij de patiënt niet reageert op aanspreken of pijnprikkels. De belangrijkste oorzaken zijn metabool, infectieus, neurologisch en toxisch-medicamenteus. Bij de opvang van een comateuze patiënt staat eerst stabilisatie volgens de ABCDE-methodiek centraal. Daarna volg je met hetero-anamnese, lichamelijk onderzoek, EMV-score en aanvullend onderzoek de oorzaak verder uit. Let vooral op hypoglycemie, intoxicaties, meningitis, insulten en intracraniële pathologie. De EMV-score en het neurologisch onderzoek helpen je om het beloop en de ernst goed te bewaken.`}</Inline></p>
    </div>
  )
}

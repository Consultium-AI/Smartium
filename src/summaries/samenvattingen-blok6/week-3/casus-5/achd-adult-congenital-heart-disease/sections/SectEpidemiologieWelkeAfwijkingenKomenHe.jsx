import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie: welke afwijkingen komen het vaakst voor?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn heel veel verschillende aangeboren hartafwijkingen mogelijk, maar een aantal komt duidelijk vaker voor dan andere. De meest voorkomende zijn:`}</Inline></p>
      <DataTable rows={[["Veelvoorkomende aangeboren hartafwijkingen", "Afkorting"], ["Ventrikelseptumdefect", "VSD"], ["Atriumseptumdefect", "ASD"], ["Patente ductus arteriosus / open ductus Botalli", "PDA"], ["Congenitale pulmonalisklepstenose", "PS"], ["Tetralogie van Fallot", "ToF"], ["Coarctatio aortae", "Coarc"], ["Transpositie van de grote arteriën", "TGA"], ["Congenitale aortastenose", "AoS"]]} />
      <PBody text={`Samen vormen deze afwijkingen ongeveer **85%** van alle aangeboren hartafwijkingen.`} />
    </div>
  )
}

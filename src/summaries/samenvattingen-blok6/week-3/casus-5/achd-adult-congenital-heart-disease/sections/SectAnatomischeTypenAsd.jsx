import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomische typen ASD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ASD’s kunnen op verschillende plaatsen in het atriumseptum liggen. Op basis van de ligging worden ze anatomisch ingedeeld.`}</Inline></p>
      <DataTable rows={[["Type ASD", "Ligging", "Kenmerk"], ["ASD type II / ostium secundum ASD", "centraal deel van het septum", "meest voorkomend"], ["Sinus venosus defect", "bij de inmonding van de vena cava", "kan superior of inferior zijn"], ["ASD type I", "bij de AV-kleppen", "gaat altijd samen met abnormale aanleg van de AV-kleppen als onderdeel van een atrioventriculair septumdefect"]]} />
    </div>
  )
}

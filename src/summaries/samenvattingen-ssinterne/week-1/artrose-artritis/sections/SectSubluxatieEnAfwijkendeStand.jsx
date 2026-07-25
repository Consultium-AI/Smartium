import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Subluxatie en afwijkende stand`}</Inline></SubHeading>
      <PBody text={`Bij RA kunnen ook **subluxaties** ontstaan. Daarnaast kunnen afwijkingen in de stand van de vingers of knieën zichtbaar zijn, zoals varus of valgus.`} />
    </div>
  )
}

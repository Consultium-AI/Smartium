import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`starten van een **lisdiureticum** zoals **furosemide** of **bumetanide**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`overleg of verwijzing naar **cardioloog**`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`diuretica zijn vooral passend als de zwelling echt door hartfalen komt`}</Inline></p>
      <PBody text={`**Vraagje:** waarom is amlodipine hier niet de eerste verklaring?
**Antwoord:** omdat de klachten al jaren bestaan en de cardiale voorgeschiedenis en dyspneu veel beter passen bij hartfalen.`} />
      <p className="leading-relaxed"><Inline>{`3. Trombosebeen`}</Inline></p>
    </div>
  )
}

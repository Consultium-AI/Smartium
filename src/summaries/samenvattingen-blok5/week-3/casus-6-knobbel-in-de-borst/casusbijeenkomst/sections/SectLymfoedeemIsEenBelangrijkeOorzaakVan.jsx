import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Lymfoedeem is een belangrijke oorzaak van chronische zwelling. Het kan:`}</Inline></SubHeading>
      <PBody text={`**primair** zijn`} />
      <PBody text={`**secundair** zijn, bijvoorbeeld na operatie, maligniteit of veneuze problematiek`} />
      <p className="leading-relaxed"><Inline>{`Primair lymfoedeem begint vaak met zwelling van de **voet**, waarna de enkelcontouren verdwijnen. Het is meestal geleidelijk ontstaan.`}</Inline></p>
    </div>
  )
}

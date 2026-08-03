import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Botulinetoxine A`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Botulinetoxine A remt de afgifte van acetylcholine in de synaps. Daardoor vermindert de cholinerge transmissie. Het effect is dus niet dat acetylcholine sneller wordt afgebroken, maar dat het juist minder wordt vrijgezet.`}</Inline></p>
    </div>
  )
}

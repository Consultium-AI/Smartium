import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Behandeling van hemofilie A`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`geen profylaxe bij milde vorm`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`factor VIII geven bij bloeding of ingreep`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`eventueel desmopressine (DDAVP) bij milde hemofilie A`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Desmopressine stimuleert de afgifte van lichaamseigen factor VIII en VWF.`}</Inline></p>
    </div>
  )
}

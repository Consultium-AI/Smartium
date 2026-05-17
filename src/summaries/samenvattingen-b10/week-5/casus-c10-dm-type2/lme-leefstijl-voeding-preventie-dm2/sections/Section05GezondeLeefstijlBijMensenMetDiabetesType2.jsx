import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Gezonde leefstijl bij mensen met diabetes type 2`}</Inline></h3>
      <p><Inline>{`Ook als iemand al diabetes type 2 heeft, is leefstijl van groot belang. Een gezonde leefstijl beïnvloedt dan vooral de kans op **cardiovasculaire ziekte** en cardiovasculaire sterfte. In observatiestudies zie je dat mensen met drie of meer gezonde leefstijlfactoren een duidelijk lager risico hebben op hart- en vaatziekten en sterfte dan mensen met weinig gezonde leefstijlkeuzes.`}</Inline></p>
      <p><Inline>{`Een gezonde leefstijl in deze context betekent onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gezond eten;`}</Inline></li>
        <li><Inline>{`voldoende bewegen;`}</Inline></li>
        <li><Inline>{`niet roken;`}</Inline></li>
        <li><Inline>{`verstandig omgaan met alcohol;`}</Inline></li>
        <li><Inline>{`voldoende slaap;`}</Inline></li>
        <li><Inline>{`stress beperken.`}</Inline></li>
      </ul>
      <p><Inline>{`In de besproken gegevens wordt benadrukt dat het risico op cardiovasculaire ziekte flink daalt als meerdere gezonde leefstijlfactoren samen aanwezig zijn.`}</Inline></p>
    </div>
  )
}

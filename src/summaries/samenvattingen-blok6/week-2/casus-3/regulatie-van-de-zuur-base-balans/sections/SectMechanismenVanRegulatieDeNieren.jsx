import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mechanismen van regulatie: de nieren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nieren zijn essentieel voor de langdurige regulatie van de zuur-base balans. Zij doen dit door H+ uit te scheiden en HCO3- te reabsorberen. Dit gaat langzamer dan de regulatie door de longen, maar is onmisbaar voor het handhaven van de pH op de lange termijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nier heeft dus twee belangrijke taken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bicarbonaat terugwinnen dat gefiltreerd is;`}</Inline></li>
        <li><Inline>{`nieuw bicarbonaat maken door H+ uit te scheiden.`}</Inline></li>
      </ul>
    </div>
  )
}

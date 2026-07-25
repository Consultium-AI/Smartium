import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van het syndroom van Cushing`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het syndroom van Cushing kan endogeen of exogeen zijn. Exogene oorzaken zijn het meest voorkomend en worden meestal veroorzaakt door glucocorticoïdmedicatie.`}</Inline></p>
      <SubHeading><Inline>{`Oorzaken ingedeeld`}</Inline></SubHeading>
      <DataTable rows={[["ACTH-afhankelijk", "ACTH-onafhankelijk"], ["ACTH-producerend hypofyse-adenoom", "Bijnieradenoom"], ["Ectopische ACTH-productie", "Bijniercarcinoom"], ["Ectopische CRH-productie", "Micro- of macronodulaire bijnierhyperplasie"], ["Glucocorticoïdreceptorresistentie", ""]]} />
      <p className="leading-relaxed"><Inline>{`Bij exogeen gebruik kunnen verschillende glucocorticoïden de oorzaak zijn, zoals prednison, dexamethason, hydrocortison, cortisonacetaat, beclomethason en triamcinolon. Alleen bij gebruik van hydrocortison is ook echt cortisol verhoogd in het bloed.`}</Inline></p>
    </div>
  )
}

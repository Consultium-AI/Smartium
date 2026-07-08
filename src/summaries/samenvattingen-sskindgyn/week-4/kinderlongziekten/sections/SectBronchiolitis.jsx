import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bronchiolitis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bronchiolitis is een ontsteking van de kleine luchtwegen en is een belangrijke oorzaak van ziekenhuisopname bij kinderen jonger dan 1 à 2 jaar. De incidentie ligt rond 0,5–2% van alle kinderen. De piekleeftijd is 2–6 maanden. Het risico op opname is ongeveer 1%, maar bij risicogroepen zoals prematuur geboren kinderen, kinderen met congenitale hartafwijkingen of congenitale longafwijkingen ligt dat veel hoger, namelijk 5–10%.`}</Inline></p>
      <PBody text={`De meest voorkomende verwekker is **RSV**. Risicogroepen kunnen worden geïmmuniseerd met **palivizumab**. Andere verwekkers zijn rhinovirus, adenovirus, para-influenza en humaan metapneumovirus. De piek van de ziekte ligt meestal in januari en februari, maar het seizoen loopt grofweg van oktober tot april. Co-infecties komen regelmatig voor. Bij zuigelingen jonger dan 2 maanden bestaat risico op apnoe.`} />
      <p className="leading-relaxed"><Inline>{`De behandeling is vooral ondersteunend: zuurstof en sondevoeding kunnen nodig zijn. Soms wordt ook salbutamol verneveld en/of hypertoon zout verneveld.`}</Inline></p>
    </div>
  )
}

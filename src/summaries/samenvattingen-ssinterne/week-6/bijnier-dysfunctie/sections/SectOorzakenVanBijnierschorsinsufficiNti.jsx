import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van bijnierschorsinsufficiëntie`}</Inline></SubHeading>
      <DataTable rows={[["Primair", "Secundair", "Tertiair"], ["Auto-immuun adrenalitis", "Hypofysetumor", "Hypothalamustumor"], ["Bilaterale adrenalectomie", "Status na ziekte van Cushing", "Chronisch glucocorticoïdgebruik"], ["Bilaterale bijniertumoren", "Trauma capitis", ""], ["Bilaterale bijnierbloedingen", "Radiotherapie hypofyse", ""], ["Bilaterale infectie, zoals TBC", "Craniopharyngeoom of cyste", ""]]} />
      <PBody text={`De meest voorkomende oorzaak van bijnierschorsinsufficiëntie is **chronisch gebruik van glucocorticoïden**. Dat kan gaan om tabletten, injecties, crèmes of pufjes. Door langdurige onderdrukking van de HPA-as kan de bijnier in stresssituaties onvoldoende cortisol maken. Daarom moeten deze middelen langzaam worden afgebouwd.`} />
    </div>
  )
}

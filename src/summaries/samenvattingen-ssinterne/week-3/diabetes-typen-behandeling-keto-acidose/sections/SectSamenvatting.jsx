import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes mellitus is een aandoening met verstoorde glucoseregulatie en hyperglykemie. Insuline verlaagt de bloedglucose en bevordert opslag van energie, terwijl glucagon de bloedglucose verhoogt. Diabetes type 1 is een auto-immuunziekte met absolute insulinedeficiëntie; type 2 is multifactoriëler en berust op insulineresistentie en relatieve insulinedeficiëntie. Acute ontregelingen zijn DKA en HHS, waarbij snelle herkenning en behandeling met vocht, insuline en goed kaliumbeleid essentieel zijn. Op lange termijn wil je microvasculaire en macrovasculaire complicaties voorkomen, en daarbij zijn goede glucoseregulatie, leefstijl en cardiovasculaire risicofactoren allebei belangrijk. Diabeteszorg is altijd multidisciplinair.`}</Inline></p>
    </div>
  )
}

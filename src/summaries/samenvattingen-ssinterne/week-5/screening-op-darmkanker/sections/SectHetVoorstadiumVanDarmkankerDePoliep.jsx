import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het voorstadium van darmkanker: de poliep`}</Inline></SubHeading>
      <PBody text={`Darmkanker heeft een belangrijk voorstadium: de **poliep**. Door een poliep op te sporen en te verwijderen, kun je voorkomen dat daaruit darmkanker ontstaat. Daarmee verlaag je niet alleen de incidentie van darmkanker, maar uiteindelijk ook de sterfte.`} />
      <PBody text={`Een veelvoorkomend ontstaansmechanisme is dat in normaal darmepitheel door mutaties in het **APC-gen** een **adenoom** ontstaat. Daarna kunnen in die poliep verdere mutaties optreden, waardoor uiteindelijk een carcinoom ontstaat. In het schema van de ontwikkeling van darmkanker spelen onder andere ook **K-RAS**, **p53** en **SMAD4** een rol.`} />
    </div>
  )
}

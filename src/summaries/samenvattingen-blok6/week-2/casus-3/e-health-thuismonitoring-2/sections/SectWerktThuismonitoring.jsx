import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Werkt thuismonitoring?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor hartfalen is er wetenschappelijk bewijs dat remote patient monitoring gunstig kan zijn. In een systematische review bleek dat RPM bij hartfalen het sterfterisico en het aantal eerste ziekenhuisopnames vanwege hartfalen vermindert. Belangrijke effectieve onderdelen waren zelfmanagementmodules, educatiemodules en de mogelijkheid tot videobellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat betekent niet automatisch dat thuismonitoring voor alle ziektebeelden even goed werkt. Voor elke specifieke doelgroep moet dat apart worden aangetoond. Daarbij zijn ook patiënt- en zorgverlenerservaringen belangrijk, net als een economische analyse. Een gunstige uitkomst kan namelijk ook betekenen dat de kwaliteit van zorg gelijk blijft, terwijl de kosten dalen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke uitkomsten van thuismonitoring bij hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Uitkomst", "Effect"], ["Sterfterisico", "Daalt"], ["Eerste ziekenhuisopnames wegens hartfalen", "Daalt"], ["Effectieve onderdelen", "Zelfmanagement, educatie, videobellen"]]} />
      <PBody text={`Aandachtsvraag: kun je op basis van één goede uitkomst meteen zeggen dat thuismonitoring overal werkt?
Mini-antwoord: nee, per patiëntgroep moet apart worden onderzocht of het echt voordeel geeft.`} />
    </div>
  )
}

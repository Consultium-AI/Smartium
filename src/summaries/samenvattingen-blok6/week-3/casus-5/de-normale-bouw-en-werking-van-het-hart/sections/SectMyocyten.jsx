import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Myocyten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartspiercellen van atria en ventrikels hebben wel een stabiele rustmembraanpotentiaal van ongeveer -90 mV.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hun actiepotentiaal heeft:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**fase 0:** snelle depolarisatie door Na+-instroom`}</Inline></li>
        <li><Inline>{`**fase 1:** vroege repolarisatie door K+-uitstroom`}</Inline></li>
        <li><Inline>{`**fase 2:** plateaufase door balans tussen Ca2+-instroom en K+-uitstroom`}</Inline></li>
        <li><Inline>{`**fase 3:** repolarisatie door K+-uitstroom`}</Inline></li>
        <li><Inline>{`**fase 4:** rustpotentiaal`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De plateaufase is belangrijk, omdat die zorgt voor een lange refractaire periode. Daardoor kan het hart niet in tetanus raken.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Pacemakercel versus myocyt`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Pacemakercel", "Myocyt"], ["Rustpotentiaal", "Geen stabiele rustpotentiaal", "Stabiele rustpotentiaal"], ["Fase 0", "Ca2+-instroom", "Na+-instroom"], ["Fase 2", "Afwezig of kort", "Duidelijke plateaufase"], ["Spontane activiteit", "Ja", "Nee"]]} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

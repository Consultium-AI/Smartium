import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Elastische eigenschappen van de long`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen hebben elastische eigenschappen: ze kunnen uitrekken en daarna weer terugveren. Die eigenschappen worden vooral bepaald door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`elastische vezels in het longweefsel, zoals elastine en collageen;`}</Inline></li>
        <li><Inline>{`de oppervlaktespanning in de alveoli, die wordt beïnvloed door surfactant.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De relatie tussen druk en volume is niet lineair. Dat betekent dat eenzelfde drukverandering niet overal hetzelfde effect heeft op het longvolume.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lage longvolumes leidt een kleine drukverandering tot een relatief grote volumetoename. Bij hoge longvolumes wordt het longweefsel stijver en geeft dezelfde drukverandering minder volumetoename. Hoe verder de long wordt uitgerekt, hoe sterker de terugveerkracht, ook wel recoil genoemd.`}</Inline></p>
      <SubHeading><Inline>{`Compliantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Compliantie is een maat voor de rekbaarheid van de long. Het wordt gedefinieerd als:`}</Inline></p>
      <PBody text={`**C = ΔV / ΔP**`} />
      <p className="leading-relaxed"><Inline>{`Daarbij is ΔV de verandering in longvolume en ΔP de verandering in transpulmonale druk, dus het drukverschil tussen alveolaire druk en intrapleurale druk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hoge compliantie betekent dat de long gemakkelijk uit te rekken is. Lage compliantie betekent dat de long stug is en meer druk nodig heeft om hetzelfde volume te bereiken.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij emfyseem is de compliantie verhoogd en de elastische recoil verlaagd.`}</Inline></li>
        <li><Inline>{`Bij pulmonale fibrose is de compliantie verlaagd en is meer inspiratoire spierkracht nodig om een normaal ademvolume te bereiken.`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** wat betekent een lage compliantie voor de ademhaling?
**Mini-antwoord:** de long is stugger, dus je hebt meer kracht nodig om hem uit te zetten.`} />
    </div>
  )
}

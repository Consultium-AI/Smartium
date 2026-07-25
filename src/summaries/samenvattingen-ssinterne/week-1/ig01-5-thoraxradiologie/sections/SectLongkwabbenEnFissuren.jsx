import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longkwabben en fissuren`}</Inline></SubHeading>
      <PBody text={`De longen zijn verdeeld in kwabben door de **fissuren**. Dit is belangrijk, omdat je bij een afwijking vaak wilt weten in welke kwab die zit.`} />
      <PBody text={`De **linkerlong** heeft **2 kwabben**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bovenkwab`}</Inline></li>
        <li><Inline>{`onderkwab`}</Inline></li>
      </ul>
      <PBody text={`Deze worden van elkaar gescheiden door de **fissura major**.`} />
      <PBody text={`De **rechterlong** heeft **3 kwabben**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bovenkwab`}</Inline></li>
        <li><Inline>{`middenkwab`}</Inline></li>
        <li><Inline>{`onderkwab`}</Inline></li>
      </ul>
      <PBody text={`Hier spelen de **fissura major** en **fissura minor** een rol.`} />
      <PBody text={`De **fissura minor** scheidt de rechterbovenkwab van de middenkwab. De **fissura major** scheidt de bovenkwab van de onderkwab en loopt ook mee in de scheiding van de onderkwab ten opzichte van de andere kwabben.`} />
      <PBody text={`**Aandacht-vraag:** Waarom is kennis van de fissuren nuttig?
**Mini-antwoord:** Omdat je daarmee kunt bepalen in welke longkwab een afwijking ligt.`} />
    </div>
  )
}

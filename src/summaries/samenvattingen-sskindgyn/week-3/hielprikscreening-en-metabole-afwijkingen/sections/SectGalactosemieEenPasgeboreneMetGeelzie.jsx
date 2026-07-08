import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Galactosemie: een pasgeborene met geelzien en braken`}</Inline></SubHeading>
      <PBody text={`Een pasgeborene die steeds geler wordt, slecht drinkt, afvalt en braakt, kan ernstig ziek zijn. In de casus bleek uiteindelijk sprake van **galactosemie**.`} />
      <PBody text={`Bij galactosemie moet de voeding **geen galactose** bevatten. Geschikte voedingen zijn bijvoorbeeld:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Nutramigen**`}</Inline></li>
        <li><Inline>{`**Neocate**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Lactosevrije melk is hiervoor niet geschikt als oplossing binnen deze context.`}</Inline></p>
    </div>
  )
}

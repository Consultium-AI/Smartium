import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Veelvoorkomende klachten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klachten die vaak passen bij hartfalen zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`kortademigheid`}</Inline></li>
        <li><Inline>{`vermoeidheid`}</Inline></li>
        <li><Inline>{`verminderde inspanningstolerantie`}</Inline></li>
        <li><Inline>{`slaapproblemen`}</Inline></li>
        <li><Inline>{`gewichtstoename of juist gewichtsverlies`}</Inline></li>
        <li><Inline>{`oedeem`}</Inline></li>
        <li><Inline>{`maag-darmklachten`}</Inline></li>
        <li><Inline>{`plasklachten ’s nachts`}</Inline></li>
        <li><Inline>{`cognitieve veranderingen of stemmingsveranderingen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze klachten zijn belangrijk, maar niet uniek voor hartfalen. Kortademigheid kan bijvoorbeeld ook passen bij COPD, astma, longembolie of anemie. Vermoeidheid zie je ook bij depressie, hypothyreoïdie of maligniteit. Oedeem kan ook een andere oorzaak hebben, zoals nier- of leverproblemen of veneuze insufficiëntie.`}</Inline></p>
      <SubHeading><Inline>{`Waarom zijn klachten lastig?`}</Inline></SubHeading>
      <PBody text={`Klachten bij hartfalen zijn vaak **sensitief**, maar weinig **specifiek**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Sensitief** betekent: veel patiënten met hartfalen hebben deze klachten wel.`}</Inline></li>
        <li><Inline>{`**Niet specifiek** betekent: dezelfde klachten komen ook bij andere aandoeningen voor.`}</Inline></li>
      </ul>
      <PBody text={`Sommige klachten zijn juist minder vaak aanwezig, maar wel meer typisch. Een voorbeeld is **orthopneu**: kortademigheid bij platliggen. Dat komt niet bij iedereen voor, maar als het er is, past het wel vrij goed bij hartfalen.`} />
      <PBody text={`**Aandacht-vraagje:**
Waarom is “moeheid” alleen niet genoeg om hartfalen te denken?
**Mini-antwoord:** Omdat moeheid heel vaak voorkomt bij veel andere aandoeningen en dus weinig specifiek is.`} />
    </div>
  )
}

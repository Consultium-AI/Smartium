import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hepatische encefalopathie, varicesbloeding en hepatorenaal syndroom`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze begrippen horen bij de kern van cirrosecomplicaties.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Varicesbloeding**: bloeding uit slokdarmvarices door portale hypertensie.`}</Inline></li>
        <li><Inline>{`**Spontane bacteriële peritonitis**: infectie van ascites zonder andere duidelijke bron.`}</Inline></li>
        <li><Inline>{`**Hepatorenaal syndroom**: nierfalen dat ontstaat bij ernstig leverfalen.`}</Inline></li>
        <li><Inline>{`**Hepatische encefalopathie**: stoornis in de hersenfunctie door leverfalen, waardoor afvalstoffen onvoldoende worden geklaard.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze complicaties maken duidelijk dat cirrose niet alleen een leverprobleem is, maar een ziekte met gevolgen voor het hele lichaam.`}</Inline></p>
    </div>
  )
}

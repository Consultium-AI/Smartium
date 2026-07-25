import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en eerste presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste symptomen zijn vrijwel altijd passageklachten, dus klachten waarbij voedsel moeilijk passeert. Dit leidt vaak tot gewichtsverlies. Patiënten noemen dit vaak “slikklachten”, en omdat de klachten meestal langzaam ontstaan, moet je daar in de anamnese goed op letten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast passageklachten kunnen ook andere klachten voorkomen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`retrosternale pijn;`}</Inline></li>
        <li><Inline>{`hematemesis, dus bloed opgeven;`}</Inline></li>
        <li><Inline>{`zuurbranden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Vooral zuurbranden en andere refluxklachten wijzen niet automatisch op een oesophaguscarcinoom. Daarom is het altijd belangrijk om een goede differentiaaldiagnose te maken.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat is het belangrijkste alarmsymptoom bij deze tumor?
**Kort antwoord:** passageklachten met gewichtsverlies.`} />
      <p className="leading-relaxed"><Inline>{`Bij een jonge patiënt met hematemesis na heftig braken passen ook andere oorzaken, zoals oesophagitis, gastritis of een Mallory-Weiss-afwijking. De kans op een oesophaguscarcinoom is dan zeer klein.`}</Inline></p>
    </div>
  )
}

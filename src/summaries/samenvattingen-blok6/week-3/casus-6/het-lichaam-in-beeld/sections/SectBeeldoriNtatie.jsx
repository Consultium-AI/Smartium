import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beeldoriëntatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het bekijken van beelden moet je altijd eerst bepalen in welk vlak je kijkt. Dat voorkomt verwarring.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Axiale beelden**: boven op het beeld is meestal de **anterieure** zijde; rechts op het beeld is links van de patiënt.`}</Inline></li>
        <li><Inline>{`**Coronale beelden**: boven op het beeld is **superieur**; rechts op het beeld is links van de patiënt.`}</Inline></li>
        <li><Inline>{`**Sagittale beelden**: boven op het beeld is **superieur**; links is meestal anterieur, al kan dit per ziekenhuis verschillen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij axiale en coronale beelden moet je dus goed onthouden dat links en rechts op het beeld vaak omgekeerd zijn ten opzichte van de patiënt.`}</Inline></p>
    </div>
  )
}

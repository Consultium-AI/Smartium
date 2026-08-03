import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diastole: vullen van de ventrikels`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens diastole ontspannen de ventrikels en vullen ze zich met bloed.`}</Inline></p>
      <SubHeading><Inline>{`1. Isovolumetrische relaxatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het sluiten van de semilunaire kleppen daalt de druk in de ventrikels snel. Alle kleppen zijn gesloten en het volume blijft constant op het eind-systolisch volume.`}</Inline></p>
      <SubHeading><Inline>{`2. Snelle vulling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zodra de druk in de ventrikels onder die van de boezems komt, openen de AV-kleppen. Bloed stroomt snel de ventrikels in. Hier gebeurt het grootste deel van de vulling.`}</Inline></p>
      <SubHeading><Inline>{`3. Diastase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De vulling gaat langzamer verder.`}</Inline></p>
      <SubHeading><Inline>{`4. Atriale systole`}</Inline></SubHeading>
      <PBody text={`De boezems trekken samen en geven nog een laatste extra vulling aan de ventrikels. Dit heet de **atrial kick**. Aan het einde hiervan is het eind-diastolisch volume bereikt.`} />
    </div>
  )
}

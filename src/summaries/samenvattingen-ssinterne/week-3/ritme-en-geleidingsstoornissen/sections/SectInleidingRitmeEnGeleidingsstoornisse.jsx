import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inleiding: ritme- en geleidingsstoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ritme- en geleidingsstoornissen zijn afwijkingen in de elektrische activiteit van het hart. Het is belangrijk om eerst het normale sinusritme goed te herkennen, omdat je afwijkingen daartegen afzet. In deze stof gaat het vooral om twee grote groepen: te trage ritmes en te snelle ritmes. Daarnaast leer je geleidingsstoornissen, vooral in de AV-knoop, herkennen en inschatten hoe ernstig ze zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een handig uitgangspunt is dat je bij een patiënt met een ritmestoornis altijd eerst kijkt naar de stabiliteit: is iemand hemodynamisch instabiel, dan moet je sneller handelen.`}</Inline></p>
    </div>
  )
}

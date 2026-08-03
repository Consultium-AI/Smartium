import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart bestaat uit twee atria en twee ventrikels, met kleppen die de bloedstroom in de juiste richting houden. Het linker ventrikel heeft een dikkere wand dan het rechter ventrikel, omdat het bloed naar het hele lichaam moet pompen. De bloedvoorziening van het hart verloopt via de coronairarteriën, die direct uit de aorta ontspringen. Het hartskelet geeft stevigheid en helpt de elektrische geleiding te organiseren. De prikkelgeleiding begint in de SA-knoop, loopt via de AV-knoop en de bundel van His naar de ventrikels. Het hart ligt in het mediastinum, in het pericardium, met de apex links en de ventielvlakken schuin georiënteerd. In anatomische doorsnedes en klinische beelden kun je de hartkamers, kleppen, grote vaten en omliggende structuren goed leren herkennen.`}</Inline></p>
    </div>
  )
}

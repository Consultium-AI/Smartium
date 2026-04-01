export default function Sect07TrainenEnTestenGeneraliseerbaarheid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Trainen en testen: waarom generaliseerbaarheid belangrijk is
      </h2>
      <p>
        Een methode kan heel goed lijken te werken als je haar test op dezelfde data waarop ze getraind is. Dan zie je
        vooral dat het systeem op die ene dataset goed werkt. Maar daar gaat het uiteindelijk niet om. Het gaat om
        generaliseerbaarheid: werkt de methode ook op nieuwe data die ze nog niet eerder heeft gezien?
      </p>
      <p>
        Daarom splits je een dataset op in een trainingsset en een testset. Het model leert eerst van de trainingsdata,
        daarna worden de beste parameters bepaald, en uiteindelijk wordt het getest op data die apart is gehouden.
      </p>
      <p>
        Nog sterker is testen op een externe dataset, bijvoorbeeld uit een ander ziekenhuis, met andere camera’s en
        andere pathologen. Als een methode op meerdere grote externe datasets goed werkt, komt toepassing in de praktijk
        pas echt in beeld.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Waarom is dat belangrijk?</strong>{'  '}
          Omdat een model anders alleen goed kan zijn voor zijn eigen trainingsdata, maar nog niet voor de echte wereld.
        </p>
      </div>
    </div>
  )
}

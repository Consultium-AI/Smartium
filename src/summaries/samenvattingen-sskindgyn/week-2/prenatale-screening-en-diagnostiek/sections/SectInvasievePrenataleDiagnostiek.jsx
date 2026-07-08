import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Invasieve prenatale diagnostiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Invasieve prenatale diagnostiek bestaat al sinds de jaren zeventig en wordt ingezet bij een verhoogde kans op chromosomale afwijkingen of bij een afwijkende screening.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste vormen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**chorionvillusbiopsie** (vlokkentest);`}</Inline></li>
        <li><Inline>{`**amniocentese** (vruchtwaterpunctie);`}</Inline></li>
        <li><Inline>{`**cordocentese** (navelstrengpunctie).`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het risico op verlies van de zwangerschap door de ingreep zelf is laag:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ongeveer **0,2%** bij een vlokkentest;`}</Inline></li>
        <li><Inline>{`ongeveer **0,1%** bij een vruchtwaterpunctie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat er vaak al een verhoogde kans op een miskraam bestaat door de onderliggende indicatie. Daardoor is het extra risico van de ingreep in de praktijk vaak verwaarloosbaar.`}</Inline></p>
      <SubHeading><Inline>{`Vlokkentest of vruchtwaterpunctie?`}</Inline></SubHeading>
      <PBody text={`Bij een afwijkende NIPT is vervolgonderzoek nodig. Welke test je kiest, hangt af van de situatie. Bij een afwijking zoals trisomie 7 is een **amniocentese** passender dan een vlokkentest, omdat de vlokkentest placentair weefsel onderzoekt. Als de afwijking alleen in de placenta zit, geeft de vlokkentest geen betrouwbare informatie over de foetus.`} />
    </div>
  )
}

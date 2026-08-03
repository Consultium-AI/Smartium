import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Potentie en effectiviteit`}</Inline></SubHeading>
      <PBody text={`Bij geneesmiddelen zijn twee begrippen heel belangrijk: **potentie** en **effectiviteit**.`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Potentie** zegt iets over hoeveel van een stof nodig is om een bepaald effect te bereiken.`}</Inline></li>
        <li><Inline>{`**Effectiviteit** zegt iets over hoe groot het maximale effect van een stof kan zijn.`}</Inline></li>
      </ul>
      <PBody text={`In een dosis-responscurve zie je deze begrippen terug. De **potentie** hangt samen met de ligging van de curve op de x-as: een stof die al bij een lage concentratie effect geeft, is potent. De **effectiviteit** hangt samen met de hoogte van het plateau van de curve: hoe hoger het maximale effect, hoe groter de effectiviteit.`} />
      <PBody text={`**Aandachtsvraag:** Wat is het verschil tussen potentie en effectiviteit?
**Mini-antwoord:** Potentie gaat over de benodigde concentratie; effectiviteit gaat over het maximale effect.`} />
      <SubHeading><Inline>{`Emax en EC50`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om agonisten goed te vergelijken, gebruik je vaak twee maten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Emax**: het maximale effect dat een agonist kan bereiken`}</Inline></li>
        <li><Inline>{`**EC50**: de concentratie agonist waarbij 50% van het maximale effect wordt bereikt`}</Inline></li>
      </ul>
      <PBody text={`Omdat concentraties vaak over een heel groot bereik lopen, is het onhandig om alleen met EC50 te werken. Daarom gebruikt men vaak de **pEC50**. Dat is de **negatieve logaritme van de concentratie agonist waarbij de helft van de Emax wordt bereikt**.`} />
      <p className="leading-relaxed"><Inline>{`Een hogere pEC50 betekent dat een lagere concentratie nodig is voor hetzelfde halve maximale effect, en dus dat de agonist potenter is.`}</Inline></p>
      <SubHeading><Inline>{`Logaritmische weergave van concentratie-responscurves`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een lineaire schaal is vaak onhandig, omdat lage en hoge concentraties dan moeilijk samen goed zichtbaar zijn. Bij lage concentraties zie je nog wel verschillen, maar zodra de concentraties hoger worden, wordt het eerste deel van de curve samengedrukt. Daardoor is de relatie minder goed af te lezen.`}</Inline></p>
      <PBody text={`Daarom wordt vaak een logaritmische weergave gebruikt. Dan krijg je een mooie **sigmoïde** of S-vormige curve. Dat maakt het makkelijker om de concentratie-effectrelatie te bekijken over een breed bereik.`} />
      <p className="leading-relaxed"><Inline>{`Er zijn twee manieren om van een lineaire naar een logaritmische weergave te gaan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Je berekent het logaritme van de concentraties.`}</Inline></li>
        <li><Inline>{`Je zet de data uit op een logaritmische as.`}</Inline></li>
      </ul>
      <PBody text={`Bijvoorbeeld: een concentratie van **0,003 nM** is gelijk aan **3 × 10^-12 M**. Het negatieve logaritme daarvan is **11,5**. Zo kun je voor elke concentratie een logwaarde bepalen.`} />
    </div>
  )
}

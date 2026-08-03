import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`met het begrip **denkkaders** medische handelingen in hun historische context begrijpen;`}</Inline></li>
        <li><Inline>{`uitleggen dat denkkaders medisch handelen **bevorderen én begrenzen**;`}</Inline></li>
        <li><Inline>{`de ontwikkeling van de geneeskundige praktijk in het algemeen, en de benadering van **hartproblematiek** in het bijzonder, vanaf het einde van de 18e eeuw beschrijven aan de hand van de **vijf denkkaders** van de uitgebreide Jewson-these.`}</Inline></li>
      </ul>
    </div>
  )
}

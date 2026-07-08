import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je zwangerschapsaandoeningen herkennen, de juiste diagnostiek inzetten en een passend behandelplan opstellen. Je kunt een zwangere ook uitleggen wat de gevolgen van deze aandoeningen kunnen zijn voor het beloop van de zwangerschap. Daarnaast herken je andere aandoeningen die in de zwangerschap kunnen optreden, zoals buikpijn door een urineweginfectie of een forse toename van de buikomvang door obesitas en diabetes gravidarum.`}</Inline></p>
    </div>
  )
}

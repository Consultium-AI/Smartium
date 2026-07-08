import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het doornemen van deze stof kun je zwangerschapsaandoeningen herkennen, de juiste diagnostiek inzetten en de aandoeningen behandelen. Je kunt een zwangere ook uitleggen wat de gevolgen van deze aandoeningen kunnen zijn voor het beloop van de zwangerschap. Daarnaast kun je overige aandoeningen in de zwangerschap herkennen, gericht onderzoek inzetten en de zwangere informeren over de mogelijke gevolgen voor moeder en kind.`}</Inline></p>
    </div>
  )
}

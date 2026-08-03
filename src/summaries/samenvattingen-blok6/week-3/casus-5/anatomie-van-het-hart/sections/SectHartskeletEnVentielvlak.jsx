import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hartskelet en ventielvlak`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wanneer het hart wordt bekeken in een doorsnede net boven de hartkleppen, zie je het ventielvlak. In zo’n doorsnede zijn de aortaklep, pulmonalisklep, mitralisklep en tricuspidalisklep goed te herkennen, samen met de aftakkingen van de coronairarteriën uit de aorta.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Rond de kleppen ligt het hartskelet. Dit bestaat uit stevig bindweefsel. Het geeft stevigheid aan het hart en zorgt er ook voor dat prikkels niet vrij van de atria naar de ventrikels kunnen lopen. Daardoor speelt het hartskelet een belangrijke rol in de geleiding van de elektrische prikkel door het hart.`}</Inline></p>
    </div>
  )
}

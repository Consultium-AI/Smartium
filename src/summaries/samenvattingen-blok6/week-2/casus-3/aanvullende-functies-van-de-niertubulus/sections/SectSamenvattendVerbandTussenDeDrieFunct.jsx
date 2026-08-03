import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend verband tussen de drie functies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze module laat zien dat de nier veel meer doet dan alleen urine maken. Bij EPO-productie is de nier een zuurstofsensor die via het beenmerg de aanmaak van rode bloedcellen regelt. Bij de calciumfosfaathuishouding werkt de nier samen met bijschildklieren, botten en darmen om calcium en fosfaat in balans te houden. Bij magnesiumhuishouding bepaalt de nier op specifieke plaatsen in het nefron hoeveel magnesium wordt vastgehouden of uitgescheiden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De rode draad is steeds dezelfde: als de nierfunctie verstoord raakt, ontstaan niet alleen problemen met vocht en afvalstoffen, maar ook met bloedaanmaak, botstofwisseling en elektrolytenbalans.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische kern`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze casus laat goed zien dat een luchtweginfectie snel ernstig kan worden. Een patiënt kan beginnen met een griepachtig beeld, daarna tijdelijk opknappen en vervolgens alsnog verslechteren door een bacteriële superinfectie. Daarom moet je bij koorts, dyspnoe en een zieke indruk altijd breed denken, snel aanvullend onderzoek inzetten en de ernst van de pneumonie inschatten.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vluchtige en niet-vluchtige zuren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het lichaam maakt voortdurend zuur aan. Een belangrijk onderscheid is dat tussen vluchtige en niet-vluchtige zuren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vluchtige zuren zijn zuren die uiteindelijk als CO2 kunnen worden uitgeademd. Dat is een groot voordeel, want de longen kunnen CO2 verwijderen. Daardoor kan het lichaam ongeveer 13.000 mmol H+ per dag verwerken uit deze vluchtige zuren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Niet-vluchtige zuren kunnen niet worden omgezet in iets dat je kunt uitademen. Voorbeelden zijn zuren die ontstaan uit eiwitten, zoals sulfaten en fosfaten. Deze leveren netto H+ op die het lichaam niet via de longen kwijt kan. Daarvoor zijn de nieren nodig.`}</Inline></p>
    </div>
  )
}

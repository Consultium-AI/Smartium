import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Schouderdystocie`}</Inline></SubHeading>
      <PBody text={`Bij **schouderdystocie** komt na de geboorte van het hoofd één van de schouders vast te zitten achter de symfyse. Het hoofd kan dan een ingetrokken, “schildpadachtig” aspect krijgen: het **turtle sign**. De navelstrengperfusie is dan minimaal en er bestaat snel risico op asfyctische schade bij het kind.`} />
      <PBody text={`De moeder is meestal niet acuut in levensgevaar, maar de situatie moet wel snel worden opgelost, liefst binnen **5 minuten**. Te veel tractie aan het hoofd kan plexuslaesies veroorzaken, met bijvoorbeeld **Erbse parese** als gevolg.`} />
      <PBody text={`De aanpak bestaat uit alert zijn, hulp inroepen en vervolgens verschillende handgrepen toepassen: **McRoberts-manoeuvre** met hyperflexie van de heupen, eventueel episiotomie, suprapubische druk, het laten geboren worden van de achterste schouder en arm, de **Wood’s screw manoeuvre** of Rubin-methode, en eventueel de houding op handen en knieën. Als dit niet lukt, kunnen extreme maatregelen zoals de **Zavanelli-manoeuvre** of symfysiotomie worden overwogen.`} />
    </div>
  )
}

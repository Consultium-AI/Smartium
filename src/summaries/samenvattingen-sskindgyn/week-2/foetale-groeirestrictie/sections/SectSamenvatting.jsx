import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetale groeirestrictie betekent dat de foetus minder goed groeit dan verwacht en is niet hetzelfde als SGA. De diagnose is lastig en berust vooral op goede datering van de zwangerschap, seriële echoscopie en beoordeling van groeicurven. Belangrijke criteria zijn EFW < p10, AC < p10 of afbuigende groei. De belangrijkste oorzaken zijn maternale, foetale en placentaire factoren, met placentaire insufficiëntie als veelvoorkomende achtergrond.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op FGR zijn aanvullend onderzoek, Doppleronderzoek en foetale bewaking belangrijk. Vooral de arteria umbilicalis, arteria cerebri media en de CPR spelen een rol. CTG en foetale bewegingen helpen bij de bewaking. Het beleid hangt af van de zwangerschapsduur en de ernst van de afwijkingen: soms kun je afwachten, soms is beëindiging van de zwangerschap de beste keuze. Preventie bestaat vooral uit het vermijden van risicofactoren zoals roken en toxische stoffen, en in geselecteerde hoogrisicogroepen uit acetylsalicylzuur.`}</Inline></p>
    </div>
  )
}

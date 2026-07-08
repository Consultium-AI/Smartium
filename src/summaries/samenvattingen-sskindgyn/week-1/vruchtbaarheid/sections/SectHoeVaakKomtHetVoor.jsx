import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe vaak komt het voor?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ongeveer 15% van de Nederlandse paren bezoekt ooit de huisarts met een kinderwens die niet vanzelf lukt. Uiteindelijk wordt ongeveer 10% van deze paren doorverwezen naar een specialist. Daarmee is subfertiliteit een veelvoorkomend probleem in de praktijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kans op een spontane zwangerschap neemt af naarmate de vrouw ouder wordt. Ook neemt de kans af naarmate een zwangerschap langer uitblijft. Dat is belangrijk voor de prognose: hoe langer het al niet lukt, hoe kleiner de kans op een spontane zwangerschap in de komende periode.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een vrouw van 31 jaar is na 6 maanden ongeveer 60-70% van de paren zwanger. Na 12 maanden is dat ongeveer 85%. Daarom voldoet na 1 jaar ongeveer 15% van de paren aan de definitie van subfertiliteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De afname van de vruchtbaarheid met de leeftijd komt vooral door een afname van de kwaliteit en kwantiteit van de eicellen.`}</Inline></p>
    </div>
  )
}

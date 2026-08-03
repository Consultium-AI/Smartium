import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma is een chronische, heterogene luchtwegontsteking met wisselende klachten van piepen, hoesten en kortademigheid. De diagnose stel je op basis van passende klachten én variabele luchtwegobstructie. Astma ontstaat door meerdere onderliggende processen, waarbij type 2-inflammatie, allergie, roken, infecties, leefomgeving en overgewicht allemaal een rol kunnen spelen. De behandeling richt zich op goede controle, het vermijden van triggers, educatie, monitoring en inhalatiemedicatie. Bij longaanvallen en ernstig astma is snelle inschatting van de ernst belangrijk, omdat dan aanvullende of gespecialiseerde behandeling nodig kan zijn.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is astma?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma is een veelvoorkomende aandoening van de luchtwegen. Het gaat om een heterogene ziekte, meestal met chronische ontsteking van de luchtwegen. Kenmerkend zijn klachten zoals piepen, kortademigheid, een drukkend gevoel op de borst en hoesten. Deze klachten wisselen in de tijd en in ernst. Daarbij is er sprake van een expiratoire luchtwegobstructie: vooral het uitademen gaat moeilijker.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat astma niet altijd op hetzelfde moment even duidelijk aanwezig is. Iemand kan op het ene moment bijna geen klachten hebben en op een ander moment juist duidelijk benauwd zijn. Dat maakt de diagnose soms lastiger, maar ook typisch voor astma.`}</Inline></p>
      <SubHeading><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Astma komt vaak voor, zowel in Nederland als wereldwijd. Het is dus een aandoening die je als arts regelmatig zult tegenkomen, in de huisartsenpraktijk én in de acute zorg.`}</Inline></p>
    </div>
  )
}

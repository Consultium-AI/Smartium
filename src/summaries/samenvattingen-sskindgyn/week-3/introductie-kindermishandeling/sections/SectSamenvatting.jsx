import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kindermishandeling is een brede term voor lichamelijke, psychische en seksuele schade of dreiging daarvan bij een kind. Het kan gaan om mishandeling, verwaarlozing, getuige zijn van huiselijk geweld en ook om factititous disorder by proxy. De signalen zijn vaak niet bewijzend, maar wel belangrijk om serieus te nemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een vermoeden handel je gestructureerd volgens de meldcode: signalen in kaart brengen, overleggen, het gesprek aangaan, wegen, en daarna beslissen of melden of hulp organiseren nodig is. Blauwe plekken verdienen extra aandacht, zeker als ze op verdachte plaatsen zitten of een patroon hebben. De kern is steeds: wees alert, werk zorgvuldig en handel in het belang van het kind.`}</Inline></p>
    </div>
  )
}

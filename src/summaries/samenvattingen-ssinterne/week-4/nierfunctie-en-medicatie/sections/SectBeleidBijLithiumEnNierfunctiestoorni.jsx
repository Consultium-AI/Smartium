import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beleid bij lithium en nierfunctiestoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als lithium vermoedelijk de oorzaak is van de nierontsteking, kan worden overwogen om lithium te stoppen en te vervangen door een ander geneesmiddel. Soms wordt daar toch niet voor gekozen, bijvoorbeeld als lithium goed werkt en andere middelen slecht werden verdragen. Dan wordt de behandeling voortgezet, ondanks het risico.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat laat meteen een belangrijk principe zien: bij medicatie en nierfunctie gaat het niet alleen om de nier zelf, maar ook om de balans tussen effect en risico.`}</Inline></p>
    </div>
  )
}

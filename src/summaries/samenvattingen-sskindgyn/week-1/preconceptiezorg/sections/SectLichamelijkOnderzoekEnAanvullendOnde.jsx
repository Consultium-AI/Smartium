import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek en aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het lichamelijk onderzoek let je vooral op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lengte;`}</Inline></li>
        <li><Inline>{`gewicht;`}</Inline></li>
        <li><Inline>{`BMI;`}</Inline></li>
        <li><Inline>{`bloeddruk;`}</Inline></li>
        <li><Inline>{`aanwezigheid van uterus en ovaria;`}</Inline></li>
        <li><Inline>{`en, afhankelijk van de voorgeschiedenis, eventueel aanvullend lichamelijk onderzoek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek is niet standaard bij iedereen nodig. Dat hangt af van de situatie. Als iemand bijvoorbeeld nog niet gericht probeert zwanger te worden en er geen aanwijzingen zijn voor een probleem, is er niet meteen reden voor extra onderzoek.`}</Inline></p>
    </div>
  )
}

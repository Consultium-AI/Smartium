import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 5: melden of hulp organiseren`}</Inline></SubHeading>
      <SubHeading><Inline>{`Wanneer is melden noodzakelijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Melden bij Veilig Thuis is noodzakelijk als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het vermoeden bevestigd is;`}</Inline></li>
        <li><Inline>{`er een reële kans op schade voor het kind bestaat.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een melding geldt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ouders worden in principe op de hoogte gesteld, tenzij dat niet mogelijk is vanwege veiligheidsrisico’s;`}</Inline></li>
        <li><Inline>{`ook als ouders bezwaar hebben, kan de melding doorgaan;`}</Inline></li>
        <li><Inline>{`let goed op wie het ouderlijk gezag heeft.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wanneer kun je hulp organiseren?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als ouders ervoor openstaan, kun je ook zelf hulp opstarten of regelen. Dan moet je de situatie blijven volgen en nagaan of het risico op kindermishandeling daadwerkelijk afneemt.`}</Inline></p>
    </div>
  )
}

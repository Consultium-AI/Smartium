import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom motorische ontwikkeling belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een normale motorische ontwikkeling is belangrijk voor de lichamelijke én psychosociale ontwikkeling van een kind. De motorische ontwikkeling kun je volgen door te kijken of een kind bepaalde mijlpalen haalt, zoals rollen, zitten, staan, kruipen en lopen. Naarmate een kind ouder wordt, wordt het moment waarop deze mijlpalen worden bereikt steeds variabeler. Daarom is het niet genoeg om alleen te kijken óf een kind iets kan; je moet ook letten op de kwaliteit van het bewegen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat observeren is een belangrijk onderdeel van het motorisch onderzoek. Juist door goed te kijken leer je veel over de motorische ontwikkeling van een kind.`}</Inline></p>
    </div>
  )
}

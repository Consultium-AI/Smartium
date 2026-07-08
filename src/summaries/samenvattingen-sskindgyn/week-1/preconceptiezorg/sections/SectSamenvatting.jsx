import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Preconceptiezorg draait om het vroeg herkennen van risico’s vóór een zwangerschap. Je begint met een brede risico-inventarisatie via anamnese, lichamelijk onderzoek en zo nodig aanvullend onderzoek. Daarbij let je op voorgeschiedenis, medicatie, erfelijkheid, leefstijl, infectierisico’s, arbeidsomstandigheden en obstetrische voorgeschiedenis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Er is een verschil tussen algemene preconceptiezorg en specialistische preconceptiezorg. Specialistische zorg is nodig bij chronische ziekte, risicovolle medicatie, belaste voorgeschiedenis, erfelijke belasting of psychosociale problemen. Belangrijke hulpmiddelen zijn de PIL, ZwangerWijzer, Lareb, Rookvrije Start en de Slimmer Zwanger-app.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern van het consult is: risico’s herkennen, uitleg geven, leefstijl verbeteren, medicatie beoordelen en zo nodig verwijzen. Het doel is altijd een zo veilig mogelijke start van de zwangerschap.`}</Inline></p>
    </div>
  )
}

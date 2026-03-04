import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04DefinitieEnMeestVoorkomendSummary = () => {
  const toc = [
    { id: 'definitie', title: 'Definitie en impact', icon: AlertTriangle },
    { id: 'meest', title: 'Meest voorkomende infecties', icon: AlertTriangle },
  ]
  return (
    <SummaryLayout
      title="Wat zijn zorggerelateerde infecties? – Definitie en impact"
      description="Definitie, wereldwijde impact en de vier meest voorkomende zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image04"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Definitie en impact</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Zorggerelateerde infecties is een breed en algemeen begrip. Je kunt in het ziekenhuis te maken krijgen met meerdere soorten zorggerelateerde infecties, afhankelijk van de medische voorgeschiedenis van de patiënt, de duur van opname als ook de behandeling die de patiënt gedurende de opname krijgt/nodig heeft.
        </p>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Wereldwijd is de mortaliteit van zorggerelateerde infecties hoger dan malaria, tuberculose en AIDS bij elkaar opgeteld. Daarnaast is de ziektelast door toedoen van de 6 meest voorkomende zorggerelateerde infecties hoger dan het totaal van de 32 meest voorkomende infecties veroorzaakt door virussen en bacteriën. Om deze reden is de preventie van dit soort infecties extra van belang en zijn ziekenhuizen normaliter erg fanatiek in het bedenken, uitvoeren en controleren van preventieve maatregelen.
        </p>
        <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
          <strong>Referenties:</strong> Colzani E et al. (BCoDE 2015); Cassini A et al. PLoS Med. 2016;13:e1002150.
        </div>
      </section>
      <section id="meest" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">De 4 meest voorkomende zorggerelateerde infecties</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Urineweginfectie</li>
          <li>Onderste luchtweginfectie</li>
          <li>Lijninfectie</li>
          <li>Postoperatieve wondinfectie (POWI)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image04DefinitieEnMeestVoorkomendSummary

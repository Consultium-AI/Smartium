import { AlertTriangle, BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04ZIDefinitieEnImpactSummary = () => {
  const toc = [
    { id: 'definitie', title: 'Definitie en impact', icon: AlertTriangle },
    { id: 'meest-voorkomend', title: '4 meest voorkomende ZI', icon: BarChart3 },
  ]
  return (
    <SummaryLayout
      title="Definitie en impact – Zorggerelateerde infecties"
      description="Definitie, wereldwijde impact en de meest voorkomende zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image04"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Definitie en impact</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Zorggerelateerde infecties is een breed en algemeen begrip. Patiënten kunnen in het ziekenhuis te maken krijgen met meerdere soorten zorggerelateerde infecties, afhankelijk van de medische voorgeschiedenis, de duur van opname en de behandeling die de patiënt gedurende de opname krijgt/nodig heeft.</p>
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Wereldwijde impact</h4>
            <p className="text-red-700 text-sm mb-2">Wereldwijd is de mortaliteit van zorggerelateerde infecties hoger dan malaria, tuberculose en AIDS bij elkaar opgeteld.</p>
            <p className="text-red-700 text-sm m-0">De ziektelast door de 6 meest voorkomende zorggerelateerde infecties is hoger dan het totaal van de 32 meest voorkomende infecties veroorzaakt door virussen en bacteriën.</p>
          </div>
          <p>Om deze reden is de preventie van dit soort infecties extra van belang en zijn ziekenhuizen normaliter erg fanatiek in het bedenken, uitvoeren en controleren van preventieve maatregelen.</p>
        </div>
      </section>
      <section id="meest-voorkomend" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">4 meest voorkomende zorggerelateerde infecties</h2>
        </div>
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

export default Image04ZIDefinitieEnImpactSummary

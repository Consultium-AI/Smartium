import { Hexagon } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21FRAMOpbouwSummary = () => {
  const toc = [{ id: 'opbouw', title: 'FRAM – de opbouw', icon: Hexagon }]
  return (
    <SummaryLayout
      title="FRAM – de opbouw"
      description="Hexagons, functies en de zes aspecten: Input, Output, Tijd, Controle, Voorwaarde, Bron."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image21"
    >
      <section id="opbouw" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM – de opbouw</h2>
        <p className="text-slate-700 mb-4">FRAM is een visueel model bestaande uit hexagons die met elkaar in contact staan. Elke hexagon is een <strong>functie</strong> en beschrijft een actie + uitvoerder (bijv. arts verricht anamnese, verpleegkundige voert intake uit).</p>
        <h3 className="font-bold text-slate-800 mb-2">Zes aspecten (als punten op de functie)</h3>
        <ul className="list-disc pl-6 text-slate-700 space-y-1">
          <li><strong>Input:</strong> De start van de functie</li>
          <li><strong>Output:</strong> Het resultaat van de functie</li>
          <li><strong>Tijd:</strong> Tijdsaspect dat de functie kan beïnvloeden</li>
          <li><strong>Controle:</strong> Welke controle vindt plaats voordat de functie uitgevoerd kan worden?</li>
          <li><strong>Voorwaarde:</strong> Van welke factoren hangt de uitvoering af?</li>
          <li><strong>Bron:</strong> Welke bron wordt geraadpleegd om de functie uit te voeren?</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image21FRAMOpbouwSummary

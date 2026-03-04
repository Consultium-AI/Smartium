import { Hexagon } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22FramOpbouwSummary = () => {
  const toc = [{ id: 'opbouw', title: 'FRAM – De opbouw', icon: Hexagon }]
  return (
    <SummaryLayout
      title="FRAM – De opbouw"
      description="Functies, aspecten en de zeshoek-structuur."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image22"
    >
      <section id="opbouw" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM – De opbouw</h2>
        <p className="text-slate-700 mb-4">Een FRAM is een visueel model van zeshoeken die met elkaar in contact staan. Een zeshoek is een <strong>functie</strong> en beschrijft een handeling + uitvoerder (bijv. arts voert anamnese uit, verpleegkundige doet intake).</p>
        <p className="text-slate-700 mb-4">Functies verbind je met <strong>aspecten</strong>: input, output, tijd, controle, voorwaarde (precondition), bron (resource).</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-slate-200 rounded-lg">
            <thead><tr className="bg-slate-100"><th className="p-2 text-left">Aspect</th><th className="p-2 text-left">Uitleg</th></tr></thead>
            <tbody className="text-slate-700 text-sm">
              <tr><td className="p-2 border-t">Input</td><td className="p-2 border-t">De start van de functie</td></tr>
              <tr><td className="p-2 border-t">Output</td><td className="p-2 border-t">Het resultaat van de functie</td></tr>
              <tr><td className="p-2 border-t">Tijd</td><td className="p-2 border-t">Tijdsaspect die de functie kan beïnvloeden</td></tr>
              <tr><td className="p-2 border-t">Controle</td><td className="p-2 border-t">Welke controle vindt plaats voor de functie uitgevoerd kan worden?</td></tr>
              <tr><td className="p-2 border-t">Voorwaarde</td><td className="p-2 border-t">Van welke factoren hangt de uitvoering af?</td></tr>
              <tr><td className="p-2 border-t">Bron</td><td className="p-2 border-t">Welke bron wordt geraadpleegd om de functie uit te voeren?</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image22FramOpbouwSummary

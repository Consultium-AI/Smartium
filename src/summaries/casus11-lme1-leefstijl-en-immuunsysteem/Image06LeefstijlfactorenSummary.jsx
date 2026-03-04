import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06LeefstijlfactorenSummary = () => {
  const toc = [{ id: 'leefstijl', title: 'Leefstijlfactoren en leefstijlziekten', icon: Activity }]
  return (
    <SummaryLayout
      title="Leefstijlfactoren en leefstijlziekten (1)"
      description="Het leefstijlroer en voorbeelden van leefstijlziekten."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image06"
    >
      <section id="leefstijl" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Leefstijlroer</h2>
        <p className="text-slate-700 mb-4">Het leefstijlroer omvat zes factoren: voeding, beweging, ontspanning, slaap, middelen en (sociale) verbinding.</p>
        <h3 className="font-bold text-slate-800 mb-2">Leefstijlziekten</h3>
        <p className="text-slate-700 mb-2">Leefstijlziekten zijn aandoeningen waarbij leefstijl een belangrijke rol speelt in het ontstaan en/of verloop. Voorbeelden:</p>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>Cardiovasculaire aandoeningen</li>
          <li>Metabool syndroom en type 2 diabetes</li>
          <li>Obesitas</li>
          <li>COPD</li>
          <li>Hypertensie</li>
          <li>Kanker</li>
          <li>Burn-out</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image06LeefstijlfactorenSummary

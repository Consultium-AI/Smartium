import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Leefstijl en immuunsysteem"
      description="Holistische kijk op het functioneren van het immuunsysteem en de invloed van leefstijl."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Introductie thema</h2>
        <p className="text-slate-700 mb-4">In deze leermodule nemen we een holistische kijk op het functioneren van het immuunsysteem. We behandelen hoe verschillende aspecten van onze leefstijl effecten hebben op het immuunsysteem, en hoe veranderingen van het immuunsysteem in positieve en negatieve zin kunnen bijdragen aan ziekte en gezondheid.</p>
        <p className="text-slate-700 mb-4">We gaan in op de onderliggende mechanismen, voor zover die bekend zijn. Op basis daarvan kun je meenemen wat, vanuit immunologisch perspectief, een gezonde leefstijl is.</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Exposoom</li>
          <li>Leefstijlfactoren en leefstijlziekten</li>
          <li>Inflammaging, immunosenescence en trained immunity</li>
          <li>Voeding en immuunsysteem</li>
          <li>Andere leefstijlfactoren en immuunsysteem</li>
          <li>Afsluiting en reflectie</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

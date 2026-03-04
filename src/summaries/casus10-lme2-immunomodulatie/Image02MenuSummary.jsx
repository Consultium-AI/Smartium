import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const toc = [{ id: 'menu', title: 'Menu Immunomodulatie', icon: LayoutList }]
  return (
    <SummaryLayout
      title="Menu – Immunomodulatie"
      description="Definitie van immunomodulatie en overzicht van de module."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Introductie thema</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Immunomodulatie is een proces waarbij de activiteit van het immuunsysteem wordt aangepast om beter te reageren op ziekten, infecties of ontstekingen. Door het immuunsysteem gecontroleerd te versterken of te onderdrukken, kan immunomodulatie bijdragen aan het herstel van de balans in het lichaam. Dit biedt nieuwe kansen in de behandeling van diverse aandoeningen, van auto-immuunziekten tot infecties. Immunomodulatie vormt daarmee een belangrijke stap richting gepersonaliseerde en effectieve therapieën.
        </p>
        <p className="text-slate-700 mb-6 leading-relaxed">
          Deze module is introducerend en staat in verband met het onderwijs in blok 5: E-module Immunotherapie van kanker (casus 4), E-clip Biologicals (casus 2), en E-module Remmen vs. stimuleren van het afweersysteem (casus 15).
        </p>
        <h3 className="font-bold text-slate-800 mb-2">Onderwerpen in deze module</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Principes van immuunsuppressie</li>
          <li>Immunosuppressiva</li>
          <li>Immunostimulantia</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13BRMOSummary = () => {
  const toc = [{ id: 'brmo', title: 'BRMO', icon: Bug }]
  return (
    <SummaryLayout
      title="BRMO – Bijzonder resistente micro-organismen"
      description="Definitie, criteria en voorbeelden van BRMO's."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image13"
    >
      <section id="brmo" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">BRMO</h2>
        <p className="text-slate-700 mb-4">BRMO&apos;s (Bijzonder Resistente Micro-Organismen) voldoen aan twee voorwaarden en worden landelijk gedefinieerd door het SRI (Samenwerkingsverband Richtlijnen Infectiepreventie):</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li>Resistentie voor veel en/of belangrijke antibiotica</li>
          <li>Kan zich snel of gemakkelijk verspreiden</li>
        </ul>
        <p className="text-slate-700 mb-4">ESBL&apos;s en carbapenemasen vallen onder BRMO&apos;s. Andere resistentiemechanismen (bijv. AmpC) zijn geen BRMO&apos;s: de genen voor ESBL en carbapenemase liggen op plasmiden en verspreiden zich makkelijker; AmpC is meestal chromosomaal gelokaliseerd.</p>
        <p className="text-slate-700 mb-4">Voorbeelden: ESBL- en carbapenemase-producerende gramnegatieve staven, MRSA. Bij BRMO-kolonisatie of -infectie worden speciale maatregelen genomen: verpleging in isolatie, aangepaste reinigings- en desinfectieprotocollen. In het buitenland komen BRMO&apos;s vaker voor door minder strikte maatregelen en makkelijkere antibioticavoorschriften.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image13BRMOSummary

import { GitCompare } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08NatuurlijkVsVerkregenSummary = () => {
  const toc = [
    { id: 'natuurlijk', title: 'Natuurlijke resistentie', icon: GitCompare },
    { id: 'verkregen', title: 'Verkregen resistentie', icon: GitCompare },
    { id: 'voorbeelden', title: 'Voorbeelden', icon: GitCompare },
  ]
  return (
    <SummaryLayout
      title="Natuurlijke vs verkregen resistentie"
      description="Het onderscheid tussen natuurlijke en verkregen resistentiemechanismen."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image08"
    >
      <section id="natuurlijk" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Natuurlijke resistentie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          We spreken van natuurlijke resistentie wanneer een bacterie deze resistentie van nature al heeft. Dat betekent dat alle bacteriën van één soort wereldwijd deze resistentie hebben. Natuurlijke resistentie heeft een bacterie omdat hij een bepaalde eigenschap heeft, of juist niet heeft.
        </p>
        <p className="text-slate-700 mb-2 font-medium">Voorbeelden natuurlijke resistentie:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Resistentie van <strong>Mycoplasma spp</strong> voor alle antibiotica die aangrijpen aan de celwand – Mycoplasma spp hebben namelijk geen celwand</li>
          <li>Resistentie van een gramnegatieve bacterie voor glycopeptiden, omdat het grote glycopeptidemolecuul niet door de buitenmembraan kan komen</li>
          <li>Resistentie van <strong>Klebsiella spp</strong> voor amoxicilline door chromosomaal bètalactamase</li>
          <li>Resistentie van anaerobe bacteriën voor aminoglycosiden, omdat voor opname daarvan in de bacterie een O2-afhankelijk transport noodzakelijk is</li>
        </ul>
      </section>
      <section id="verkregen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Verkregen resistentie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Daarnaast kunnen bacteriën resistentie in de loop van de tijd opdoen. Dit is verkregen resistentie.
        </p>
        <p className="text-slate-700 mb-2 font-medium">Voorbeelden verkregen resistentie:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Resistentie van een bacterie door een toevallige fout in het chromosomaal DNA</li>
          <li>Resistentie van een bacterie door uitwisseling van mobiele stukjes DNA (plasmiden) met andere bacteriën</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image08NatuurlijkVsVerkregenSummary

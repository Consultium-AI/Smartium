import { Zap } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09InactivatieSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'inactivatie', title: 'Inactivatie door bètalactamase', icon: Zap },
    { id: 'smal', title: 'Smalspectrum bètalactamase', icon: Zap },
    { id: 'esbl', title: 'ESBL', icon: Zap },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Inactivatie – Resistentiemechanisme"
      description="Bètalactamase als resistentiemechanisme: smalspectrum en ESBL."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image09"
    >
      <section id="inactivatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Inactivatie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Door de aanmaak van het enzym bètalactamase wordt de bètalactam-ring van het antibioticum onwerkzaam gemaakt. We spreken dan van het resistentiemechanisme inactivatie. Er zijn verschillende soorten bètalactamase die je kunt indelen op basis van het spectrum.
        </p>
      </section>
      <section id="smal" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Smalspectrum bètalactamase</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het smalspectrum bètalactamase dat een bacterie maakt kan penicillines inactiveren. Voorbeelden:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
          <li><strong>E. coli</strong> maakt bètalactamase waardoor amoxicilline wordt afgebroken. Genen van E. coli coderen voor aanmaak van deze bètalactamases.</li>
          <li><strong>S. aureus</strong> die bètalactamase maakt is niet meer gevoelig voor penicilline (dat in de Tweede Wereldoorlog nog succesvol werd ingezet bij wondinfecties bij soldaten).</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          Bij gebruik van een bètalactamaseremmer, bijvoorbeeld Augmentin, kan het smalspectrum bètalactamase van de bacterie het amoxicilline niet meer onwerkzaam maken.
        </p>
      </section>
      <section id="esbl" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Breedspectrum: Extended spectrum bètalactamases (ESBL)</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Sommige gramnegatieve bacteriën kunnen bètalactamases maken gericht tegen méér soorten bètalactam-antibiotica. Bacteriën die ESBL kunnen maken, maken alle antibiotica uit de groep penicillines onwerkzaam: penicilline, amoxicilline, penicillines met bètalactamaseremmer (Augmentin) en cefalosporines zoals ceftriaxon. De carbapenem-antibiotica (meropenem) zijn de enige van de groep bètalactam-antibiotica die niet worden geïnactiveerd door ESBL&apos;s.
        </p>
        <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-2">Let op</h4>
          <p className="text-amber-700 text-sm">De genen voor ESBL&apos;s liggen meestal op plasmiden – losse circulaire DNA-pakketjes. Deze mobiele stukken DNA worden heel gemakkelijk van de ene bacterie doorgegeven aan de andere, ook tussen verschillende soorten. Daarom worden patiënten in een ziekenhuis waarbij een bacterie met ESBL wordt gekweekt in isolatie verpleegd om verspreiding tegen te gaan.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09InactivatieSummary

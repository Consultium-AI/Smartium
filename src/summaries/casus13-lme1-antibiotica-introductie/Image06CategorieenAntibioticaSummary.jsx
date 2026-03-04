import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06CategorieenAntibioticaSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'spectrum', title: 'Werkingsspectrum', icon: Layers },
    { id: 'structuur', title: 'Chemische structuur', icon: Layers },
    { id: 'mechanisme', title: 'Werkingsmechanisme', icon: Layers },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Categorieën antibiotica"
      description="Drie manieren om antibiotica te categoriseren."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image06"
    >
      <section id="spectrum" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Werkingsspectrum</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antibiotica kunnen worden ingedeeld op basis van hun werkingsspectrum: het bereik van bacteriën waartegen ze effectief zijn.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Smalspectrum antibiotica:</strong> gericht tegen een beperkte groep bacteriën</li>
          <li><strong>Breedspectrum antibiotica:</strong> bestrijden een breed scala aan bacteriën</li>
        </ul>
      </section>
      <section id="structuur" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Chemische structuur</h2>
        <p className="text-slate-700 leading-relaxed">
          Antibiotica kunnen ook worden ingedeeld in verschillende klassen op basis van hun chemische structuur.
        </p>
      </section>
      <section id="mechanisme" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Werkingsmechanisme</h2>
        <p className="text-slate-700 leading-relaxed">
          Tot slot kunnen antibiotica worden geclassificeerd op basis van hun werkingsmechanisme: hoe ze aangrijpen op verschillende onderdelen van de bacterie (celwand, eiwitsynthese, nucleïnezuursynthese, foliumzuurmetabolisme).
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image06CategorieenAntibioticaSummary

import { LayoutList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = ({ standalone = true }) => {
  const toc = [{ id: 'menu', title: 'Menu', icon: LayoutList }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Menu – Introductie Antibiotica"
      description="Overzicht van de module en het thema antibioticaresistentie."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image02"
    >
      <section id="menu" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Introductie thema</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antibioticaresistentie is een grote bedreiging voor de komende decennia. Door onnodig en verkeerd gebruik van antibiotica neemt resistentie snel toe, terwijl er momenteel geen nieuwe klassen antibiotica worden ontwikkeld. Als deze trend niet wordt gekeerd, worden naar schatting 10 miljoen doden per jaar door antibioticaresistentie verwacht in 2050.
        </p>
        <p className="text-slate-700 mb-6 leading-relaxed">
          In deze module krijg je eerst achtergrondinformatie over hoe antibiotica werken. Daarna behandel je de basiskennis van antibiotica uit een exemplarische geneesmiddelenlijst. Een vervolg-e-module gaat dieper in op de oorzaken van antibioticaresistentie.
        </p>
        <h3 className="font-bold text-slate-800 mb-2">Hoofdstukken</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Achtergrond</li>
          <li>Basiskennis Antibiotica</li>
        </ul>
        <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200 text-sm text-amber-800">
          <strong>Referentie:</strong> De Kraker et al. PLoS Med. 2016;13(7).
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

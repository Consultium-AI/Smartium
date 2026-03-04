import { Dna } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06ResistentePopulatieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'populatie', title: 'Ontstaan van een resistente populatie', icon: Dna }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Ontstaan van een resistente populatie"
      description="Hoe antibiotica gevoelige bacteriën doodt en resistente bacteriën overleven."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image06"
    >
      <section id="populatie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Ontstaan van een resistente populatie</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Bij een bacteriële infectie kan een mens zowel gevoelige als resistente bacteriën bij zich dragen. Antibiotica doodt de gevoelige bacteriën. De resistente bacteriën, die resistentiegenen bij zich hebben – ergens opgedaan of via spontane mutatie verkregen – blijven over. Op den duur houdt je een steeds resistentere populatie over.
        </p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Belangrijk</h4>
          <p className="text-primary-700 text-sm">Resistentiegenen kunnen worden verkregen door horizontale overdracht (bijv. via plasmiden) of door spontane mutatie in het chromosomaal DNA. De selectiedruk van antibiotica zorgt ervoor dat alleen resistente bacteriën overleven en zich vermenigvuldigen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06ResistentePopulatieSummary

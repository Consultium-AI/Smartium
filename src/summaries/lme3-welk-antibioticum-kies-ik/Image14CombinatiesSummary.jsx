import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14CombinatiesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'combinaties', title: 'Combinaties antibiotica', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Combinaties antibiotica"
      description="Redenen voor combinatietherapie."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image14"
    >
      <section id="combinaties" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Combinaties antibiotica</h2>
        <p className="text-slate-700 mb-4">Drie redenen voor combinaties:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Spectrum verbreden bij empirische therapie (bijv. urosepsis)</li>
          <li>Synergie (1+1=3) bij ernstige infecties, verminderde weerstand, slecht doorbloed weefsel. Let op antagonisme (tetracycline + penicilline)</li>
          <li>Resistentie beperken of voorkomen (bijv. tuberculose)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image14CombinatiesSummary

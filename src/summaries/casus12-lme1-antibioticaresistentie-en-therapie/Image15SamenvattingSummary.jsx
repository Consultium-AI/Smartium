import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15SamenvattingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'samenvatting', title: 'Samenvatting', icon: CheckCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Samenvatting – Antibioticaresistentie en BRMO's"
      description="Kernpunten van de module over antibioticaresistentie."
      caseLabel="Week 6 Casus 12 LME 1: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme1-antibioticaresistentie-en-therapie-image15"
    >
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Samenvatting</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Bacteriën kunnen resistent zijn door intrinsieke of verworven resistentiemechanismen</li>
          <li>Resistentie kan chromosomaal of plasmidaal gelokaliseerd zijn</li>
          <li>Vier belangrijke resistentiemechanismen: onwerkzaam maken, opname remmen, uitpompen, doeleiwit veranderen</li>
          <li>Een S. aureus resistent voor alle beta-lactam antibiotica noemen we MRSA; resistentie door productie van PBP2a in plaats van PBP2</li>
          <li>BRMO&apos;s zijn micro-organismen resistent voor veel en/of belangrijke antibiotica die zich gemakkelijk verspreiden</li>
          <li>Voorkomen van verspreiding van BRMO&apos;s is belangrijk; infectiepreventiemaatregelen zijn hiervoor ingesteld</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image15SamenvattingSummary

import { ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17TestProteusSummary = () => {
  const toc = [{ id: 'casus', title: 'Test je kennis – Proteus vulgaris', icon: ClipboardCheck }]
  return (
    <SummaryLayout
      title="Test je kennis – Proteus vulgaris en AMP-C"
      description="Casus: welke antibiotica zijn geschikt bij chronische prostatitis met AMP-C-producerende Proteus vulgaris?"
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image17"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Antibiotica bij Proteus vulgaris</h2>
        </div>
        <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 mb-6">
          <h4 className="font-bold text-slate-800 mb-2">Casus</h4>
          <p className="text-slate-700 text-sm mb-2">Een 80-jarige man heeft een chronische prostatitis met Proteus vulgaris. Dit is een gramnegatieve staaf, bekend om breedspectrum bètalactamase-productie (AMP-C). Je wilt hem zes weken lang behandelen met antibiotica. Gevoeligheidsspectrum:</p>
          <ul className="list-disc pl-6 text-slate-700 text-sm space-y-1">
            <li>Augmentin R (resistent)</li>
            <li>Ceftriaxon S (gevoelig)</li>
            <li>Ciprofloxacin S (gevoelig)</li>
            <li>Cotrimoxazol S (gevoelig)</li>
          </ul>
        </div>
        <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
          <h4 className="font-bold text-teal-800 mb-2">Antwoord: Ciprofloxacin en cotrimoxazol</h4>
          <p className="text-teal-700 text-sm mb-2">Proteus vulgaris maakt breedspectrum bètalactamase (AMP-C). Dit gebeurt onder druk van antibiotica. Het breedspectrum bètalactamase maakt dat de bacterie alle penicillines en cefalosporines onwerkzaam maakt.</p>
          <p className="text-teal-700 text-sm mb-2">Ceftriaxon kan dus niet worden ingezet – ook niet als het initieel als gevoelig wordt getest in het laboratorium! AMP-C kan tijdens de behandeling geïnduceerd worden.</p>
          <p className="text-teal-700 text-sm">Ciprofloxacin en cotrimoxazol kun je wel inzetten.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17TestProteusSummary

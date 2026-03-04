import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20KlontjesPepernotenSummary = () => {
  const toc = [{ id: 'sabin', title: 'Klontjes als pepernoten', icon: Pill }]
  return (
    <SummaryLayout
      title="Klontjes als pepernoten"
      description="Sabin oraal vaccin en geheim inenten in Staphorst."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image20"
    >
      <section id="sabin" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Sabin oraal vaccin</h2>
        <p className="text-slate-700 mb-4">Het Sabin oraal vaccin werd soms stiekem toegediend in Staphorst. Het onderscheid tussen curatief en preventief ingrijpen speelde een rol in de ethische discussie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20KlontjesPepernotenSummary

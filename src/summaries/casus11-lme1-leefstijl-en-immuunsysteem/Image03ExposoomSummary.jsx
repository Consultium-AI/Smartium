import { Globe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03ExposoomSummary = ({ standalone = true }) => {
  const toc = [{ id: 'exposoom', title: 'Het exposoom', icon: Globe }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Exposoom (1)"
      description="Alle factoren die invloed hebben op ons functioneren en immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image03"
    >
      <section id="exposoom" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Het exposoom</h2>
        <p className="text-slate-700 mb-4">Het immuunsysteem handhaaft samen met het endocriene en zenuwstelsel de homeostase. Bedreigingen worden gesignaleerd en afweerreacties worden in gang gezet. Infecties met pathogenen zijn een duidelijk voorbeeld.</p>
        <p className="text-slate-700 mb-4">Ons lichaam staat voortdurend bloot aan invloeden van buitenaf. De factoren die invloed hebben op ons functioneren en immuunsysteem zijn breder dan alleen de microbiële omgeving. Deze zijn samengevat in het begrip <strong>exposoom</strong>, geïntroduceerd in 2005 (Wild).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image03ExposoomSummary

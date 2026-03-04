import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06SynthetischeGlucocorticoïdenSummary = () => {
  const toc = [
    { id: 'cortisol', title: 'Basisstructuur cortisol', icon: FlaskConical },
    { id: 'synthetisch', title: 'Synthetische glucocorticoïden', icon: FlaskConical },
  ]
  return (
    <SummaryLayout
      title="Synthetische glucocorticoïden"
      description="Structuur van cortisol en voorbeelden van synthetische glucocorticoïden."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image06"
    >
      <section id="cortisol" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Basisstructuur cortisol</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Cortisol is het natuurlijk voorkomende bijnierschorshormoon. De basisstructuur van cortisol vormt het uitgangspunt voor de ontwikkeling van synthetische glucocorticoïden.
        </p>
      </section>
      <section id="synthetisch" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Synthetische glucocorticoïden</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Afgeleid van de structuur van cortisol zijn er verschillende vaak voorgeschreven synthetische glucocorticoïden. Deze verschillen onderling door hun unieke structuur onder andere in <strong>halfwaardetijd</strong> en <strong>werking (sterkte)</strong>.
        </p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Voorbeelden</h4>
          <p className="text-primary-700 text-sm mb-2">Cortisol, cortison, prednisolon, prednison, methylprednisolon, dexamethason, triamcinolon, fludrocortison.</p>
          <p className="text-primary-700 text-sm m-0">Structurele aanpassingen (zoals dubbele binding C1-C2, fluorering, methylgroepen) bepalen de farmacologische eigenschappen.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06SynthetischeGlucocorticoïdenSummary

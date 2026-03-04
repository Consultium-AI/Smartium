import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04ImmunosuppressivaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'immunosuppressiva', title: 'Immunosuppressiva', icon: Pill }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Immunosuppressiva"
      description="Definitie, toepassingen en klassen van immunosuppressiva."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 4"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image04"
    >
      <section id="immunosuppressiva" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Immunosuppressiva</h2>
        <p className="text-slate-700 mb-4">Immunosuppressiva zijn geneesmiddelen die het immuunsysteem onderdrukken of afremmen. Ze worden gebruikt om afweerreacties te verminderen bij auto-immuunziekten en om afstoting van getransplanteerde organen te voorkomen. Ze werken door specifieke delen van het immuunsysteem te blokkeren, zoals T-celactivatie of cytokineproductie.</p>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 text-sm mb-2">Corticosteroïden</h4>
            <p className="text-primary-700 text-sm">Bijv. prednison; remmen ontstekingen.</p>
          </div>
          <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 text-sm mb-2">Calcineurine-remmers</h4>
            <p className="text-teal-700 text-sm">Bijv. cyclosporine, tacrolimus; onderdrukken T-celactivatie.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 text-sm mb-2">Antimetabolieten</h4>
            <p className="text-amber-700 text-sm">Bijv. azathioprine, mycofenolzuur; remmen aanmaak van immuuncellen.</p>
          </div>
          <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 text-sm mb-2">Biologische geneesmiddelen</h4>
            <p className="text-rose-700 text-sm">Bijv. monoclonale antilichamen; blokkeren specifieke moleculen of cellen.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04ImmunosuppressivaSummary

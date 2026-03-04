import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07ThelpercellenSummary = () => {
  const tableOfContents = [
    { id: 'th', title: 'T-helpercellen', icon: Activity },
    { id: 'types', title: 'Th1, Th2, Th17, Th22', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="T-helpercellen en cytokinen"
      description="Differentiatie van naïeve CD4+ T-cellen in Th1, Th2, Th17 en Th22 – cytokinen en geassocieerde ziektebeelden."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image07"
    >
      <section id="th" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            T-helpercellen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Vanuit naïeve CD4+ T-cellen kunnen zich de verschillende typen T-helper (Th) cellen ontwikkelen. De verschillende typen T-helpercellen onderscheiden zich van elkaar op basis van de cytokinen die ze uitscheiden. Deze cytokinen spelen een belangrijke rol in de effector-functie van het desbetreffende type T-helpercel, en daarmee hun rol in de afweer tegen verschillende typen pathogenen. Overmatige activiteit van een bepaald type T-helpercel kan geassocieerd zijn met bepaalde ziektebeelden.
          </p>
        </div>
      </section>

      <section id="types" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Overzicht Th-typen
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">Th1</h4>
            <p className="text-slate-600 text-sm mb-1">Cytokinen: IFNγ. Geassocieerd met: intracellulaire pathogenen, auto-immuunziekte.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">Th2</h4>
            <p className="text-slate-600 text-sm mb-1">Cytokinen: IL-4, IL-5, IL-13. Geassocieerd met: parasitaire infecties, allergie.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">Th17</h4>
            <p className="text-slate-600 text-sm mb-1">Cytokinen: IL-17A/F, IL-21, IL-26, CCL20. Geassocieerd met: extracellulaire bacteriën en schimmels, auto-immuunziekte.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">Th22</h4>
            <p className="text-slate-600 text-sm mb-1">Cytokinen: IL-22. Geassocieerd met: schimmels, inflammatoire huidziekten.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07ThelpercellenSummary

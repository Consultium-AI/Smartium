import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14GeconjugeerdeVaccinsSummary = () => {
  const tableOfContents = [
    { id: 'waarom', title: 'Waarom geconjugeerde vaccins', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Waarom geconjugeerde vaccins"
      description="Het voordeel van eiwit-polysacharide conjugatie voor een sterkere immuunrespons, vooral bij jonge kinderen."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image14"
    >
      <section id="waarom" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Waarom geconjugeerde vaccins?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-400">
            <p className="text-indigo-800 font-medium m-0">
              Geconjugeerde vaccins zijn gekoppeld aan een eiwitdrager, wat een <strong>sterkere immuunrespons genereert, vooral bij jonge kinderen</strong>. De eiwitdrager maakt T-celactivatie mogelijk, wat leidt tot betere antilichaamproductie en geheugenvorming.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14GeconjugeerdeVaccinsSummary

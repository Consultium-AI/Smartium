import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12TypeVaccinsSummary = () => {
  const tableOfContents = [
    { id: 'types', title: 'Type vaccins', icon: Syringe },
    { id: 'conjugaat', title: 'Geconjugeerde vaccins', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Type vaccins – Polysacharide en geconjugeerd"
      description="Polysacharidevaccins en geconjugeerde vaccins voor meningokokken en pneumokokken."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 12"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image12"
    >
      <section id="types" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Type vaccins
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor meningokokken en pneumokokken worden <strong>polysacharidevaccins</strong> en <strong>geconjugeerde vaccins</strong> (polysachariden gekoppeld aan een eiwit) gebruikt.
          </p>
          
          <p>
            Polysachariden zijn <strong>T-cel-onafhankelijke antigenen</strong> – ze induceren geen T-celrespons. Geconjugeerde vaccins bevatten dezelfde polysachariden van het bacteriële oppervlak, maar gekoppeld aan een eiwitdrager (meestal tetanustoxoïde, difterietoxoïde of CRM197). Dit maakt T-celactivatie mogelijk en genereert een sterkere immuunrespons.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="conjugaat" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Geconjugeerde vaccins
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Geconjugeerde vaccins bieden betere bescherming dan pure polysacharidevaccins, vooral bij jonge kinderen, omdat ze T-cel-afhankelijke immuniteit induceren met geheugenvorming.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image12TypeVaccinsSummary

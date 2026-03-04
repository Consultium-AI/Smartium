import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14EpithelialeBarrièreTekstSummary = () => {
  const tableOfContents = [
    { id: 'theorie', title: 'Epitheliale barrière theorie', icon: Shield },
    { id: 'type2', title: 'Type 2-respons', icon: Shield },
  ]

  return (
    <SummaryLayout
      title="Epitheliale barrière theorie – Uitleg"
      description="Giftige stoffen, barrièreschade en de type 2-immuunrespons met Th2, ILC2 en eosinofielen."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 14"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image14"
    >
      <section id="theorie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epitheliale barrière theorie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De epitheliale barrière theorie integreert elementen van eerdere hypothesen. De theorie stelt dat blootstelling aan giftige stoffen in onze omgeving, geassocieerd met een moderne leefstijl, het beschermende epitheel van huid, luchtwegen en darmen beschadigt.
          </p>
          
          <p>
            Deze schade leidt ertoe dat micro-organismen en microbiële producten doordringen in het onderliggende bindweefsel. Dit triggert een ontstekingsreactie en een immuunrespons tegen zowel deze microben als onschadelijke vreemde stoffen.
          </p>
        </div>
      </section>

      <section id="type2" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Type 2-respons
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Deze respons wordt gekenmerkt door een <strong>type 2-respons</strong>, gedomineerd door Th2-cellen, ILC2 (innate lymphoid cells type 2), B-lymfocyten, eosinofiele granulocyten en de interleukinen IL-4, IL-5 en IL-13.
          </p>
          
          <p>
            In het subepitheliale weefsel zijn bij barrièreschade o.a. dendritische cellen, macrofagen, mestcellen, eosinofielen en ILC2 betrokken bij de immuunrespons tegen getransloceerde microbiota.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image14EpithelialeBarrièreTekstSummary

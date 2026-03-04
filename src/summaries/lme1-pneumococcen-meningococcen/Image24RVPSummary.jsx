import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24RVPSummary = () => {
  const tableOfContents = [
    { id: 'pneumokokken', title: 'Pneumokokkenvaccinatie', icon: Syringe },
    { id: 'meningokokken', title: 'Meningokokkenvaccinatie', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Rijksvaccinatieprogramma – Meningokokken en pneumokokken"
      description="Vaccinatieschema voor kinderen en volwassenen in Nederland."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 24"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image24"
    >
      <section id="pneumokokken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pneumokokkenvaccinatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Kinderen:</strong> krijgen een geconjugeerd vaccin (bijv. PCV10) via het RVP op 3, 5 en 12 maanden.
          </p>
          <p>
            <strong>Volwassenen ≥60 jaar:</strong> krijgen een polysacharidevaccin (Pneumovax®, 23 typen) – breed maar kortdurend, geen geheugenvorming.
          </p>
          <p>
            Geconjugeerde vaccins (PCV13, PCV20) bieden sterkere, langdurige immuniteit doordat polysachariden gekoppeld zijn aan een eiwitdrager en T-celactivatie mogelijk maken.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="meningokokken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meningokokkenvaccinatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het RVP biedt <strong>MenACWY</strong> vaccinatie op <strong>14 maanden</strong> en <strong>14 jaar</strong>. Dit is een geconjugeerd vaccin (serogroepen A, C, W, Y).
          </p>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijk</h4>
            <p className="text-amber-700 text-sm m-0">
              <strong>Meningokok B</strong> zit niet in het vaccin → komt vaker voor in Nederland. Geconjugeerde vaccins geven langdurige T-cel-afhankelijke immuniteit.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24RVPSummary

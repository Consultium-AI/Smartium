import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03EtiologiePathogeneseSummary = () => {
  const tableOfContents = [
    { id: 'etiologie', title: 'Etiologie', icon: Microscope },
    { id: 'pathogenese', title: 'Pathogenese', icon: Microscope },
  ]

  return (
    <SummaryLayout
      title="Scabiës – Etiologie, pathogenese en transmissie"
      description="De schurftmijt Sarcoptes scabiei, gangetjes in de stratum corneum en de immuunrespons."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image03"
    >
      <section id="etiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Etiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Scabiës wordt veroorzaakt door de <strong>schurftmijt <em>Sarcoptes scabiei</em></strong> var. <em>hominis</em>. De vrouwelijke mijt graaft gangetjes (burrows) in de <strong>stratum corneum</strong> van de epidermis.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="pathogenese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathogenese
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de gangetjes legt de mijt eitjes en laat fecaliën (scybala) achter. De gangetjes hebben een karakteristieke S-vorm. De dermis reageert met een inflammatoire respons (lymfocyten, histiocyten) op de aanwezigheid van de mijt en zijn producten.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijke structuren</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Gangetjes (burrows) in stratum corneum</li>
              <li>Mijt aan het einde van het gangetje</li>
              <li>Eitjes en fecaliën in het gangetje</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03EtiologiePathogeneseSummary

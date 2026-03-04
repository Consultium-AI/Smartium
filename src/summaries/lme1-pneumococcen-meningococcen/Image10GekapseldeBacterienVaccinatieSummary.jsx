import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10GekapseldeBacterienVaccinatieSummary = () => {
  const tableOfContents = [
    { id: 'vaccinatie', title: 'Vaccinatie bij asplenie', icon: Syringe },
    { id: 'gekapseld', title: 'Gekapselde bacteriën', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Gekapselde bacteriën en vaccinatie"
      description="Vaccinatie-advies voor asplenie-patiënten en voorbeelden van gekapselde bacteriën."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image10"
    >
      <section id="vaccinatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vaccinatie bij asplenie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Om de risico&apos;s te verminderen, wordt aan patiënten zonder milt of met een niet goed functionerende milt vaak geadviseerd zich te laten vaccineren tegen gekapselde bacteriën.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="gekapseld" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gekapselde bacteriën waartegen vaccinaties worden gegeven
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <ul className="list-disc pl-6 space-y-1 text-indigo-800">
              <li>Pneumokokken</li>
              <li>Haemophilus influenzae type b</li>
              <li>Meningokokken</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10GekapseldeBacterienVaccinatieSummary

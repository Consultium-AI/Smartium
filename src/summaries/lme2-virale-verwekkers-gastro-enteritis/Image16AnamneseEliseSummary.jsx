import { ClipboardList } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16AnamneseEliseSummary = () => {
  const tableOfContents = [
    { id: 'anamnese', title: 'Anamnese ouders Elise', icon: ClipboardList },
  ]

  return (
    <SummaryLayout
      title="Anamnese ouders Elise"
      description="Bevindingen uit de anamnese bij Elise, 11 maanden."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 16"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image16"
    >
      <section id="anamnese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardList className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Anamnese ouders Elise
          </h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Uit de anamnese bij de ouders van Elise (11 maanden) komen de volgende bevindingen naar voren:
          </p>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Vaccinatiestatus</h4>
            <p className="text-teal-700 text-sm m-0">
              Elise heeft geen vaccinaties gehad (inclusief geen rotavirusvaccin).
            </p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Symptomen</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Koorts: 38,8 graden Celsius</li>
              <li>Waterige ontlasting, meerdere keren per dag</li>
              <li>Braken (duur en frequentie uit anamnese)</li>
              <li>Drinkt nog redelijk, verminderde plasluiers</li>
            </ul>
          </div>
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Belangrijke overweging</h4>
            <p className="text-rose-700 text-sm m-0">
              Geen rotavirusvaccinatie verhoogt het risico op rotavirusinfectie. Rotavirus komt vooral voor in de winter en het vroege voorjaar en veroorzaakt typisch waterige diarree met braken en koorts bij jonge kinderen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16AnamneseEliseSummary

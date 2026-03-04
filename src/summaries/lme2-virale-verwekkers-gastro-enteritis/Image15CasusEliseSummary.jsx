import { MessageCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15CasusEliseSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'casus', title: 'Casus Elise aanvullende vragen', icon: MessageCircle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Casus Elise - Aanvullende vragen"
      description="Anamnestische vragen bij een kind met koorts en diarree."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 15"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image15"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus Elise aanvullende vragen
          </h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Elise is 11 maanden en presenteert zich met koorts en diarree. Bij anamnese zijn de volgende punten belangrijk:
          </p>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Symptomen</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Duur en frequentie van diarree en braken</li>
              <li>Karakter ontlasting (waterig, bloederig, slijmerig)</li>
              <li>Koorts en hoogte van de temperatuur</li>
              <li>Eet- en drinkgedrag, urineproductie</li>
            </ul>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Dehydratie-inschatting</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Hoeveel drinkt het kind nog?</li>
              <li>Hoeveel plasluiers? (verminderde urineproductie is teken van dehydratie)</li>
            </ul>
          </div>
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Expositie en voorgeschiedenis</h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li>Andere zieken in de omgeving (kinderdagverblijf, gezin)?</li>
              <li>Reizen, voedselconsumptie?</li>
              <li>Vaccinatiestatus (rotavirusvaccin?)</li>
              <li>Onderliggende aandoeningen</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15CasusEliseSummary

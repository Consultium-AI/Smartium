import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image30OefenvraagMazelenSummary = () => {
  const tableOfContents = [
    { id: 'oefen', title: 'Oefenvraag mazelen', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      title="Oefenen – Mazelen"
      description="Klinische casus: Koplikse vlekjes als pathognomonisch teken voor mazelen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 30"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image30"
    >
      <section id="oefen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus – mazelen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Typische presentatie</h4>
            <p className="text-primary-700 text-sm mb-2">
              Een 6-jarig kind met koorts, loopneus, hoestklachten en een rode huiduitslag die begonnen is in het gelaat en zich uitbreidt naar de rest van het lichaam. Het kind heeft ook kleine witte plekjes aan de binnenzijde van het wangslijmvlies.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Diagnose:</strong> Mazelen.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Koplikse vlekjes</h4>
            <p className="text-amber-700 text-sm m-0">
              De witte plekjes aan de binnenzijde van het wangslijmvlies zijn de <strong>Koplikse vlekjes</strong>; die zijn pathognomonisch voor een mazeleninfectie. Zeker tijdens een uitbraak van mazelen in de omgeving loont het de moeite om de binnenzijde van de mond goed na te kijken. Het heeft belangrijke implicaties voor de bescherming van kwetsbaren in de omgeving van de patiënt.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image30OefenvraagMazelenSummary

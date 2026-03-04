import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Introductie – Pneumokokken en meningokokken"
      description="Leerdoelen en tentamenvragen voor de module over pneumokokken- en meningokokkeninfecties."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image01"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie en leerdoelen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <p className="text-primary-700 mb-2">Als je deze module hebt doorgenomen ben je in staat:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Een pneumokokken- of meningokokkeninfectie identificeren op basis van de klinische presentatie en epidemiologische gegevens</li>
              <li>Het werkingsmechanisme van vaccins tegen deze bacteriën globaal uit te leggen</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tentamenvragen</h4>
            <p className="text-amber-700 mb-2">Voor het tentamen wordt verwacht dat je begrijpt:</p>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Welke type patiënten risico hebben op een pneumokokken- en meningokokken-infectie</li>
              <li>Wat voor type vaccins worden gebruikt in het kader van pneumokokken en meningokokken</li>
              <li>Wat de belangrijkste infectieuze oorzaken zijn van petechiën</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Bredere leerdoelen</h4>
            <ul className="list-decimal pl-6 space-y-1 text-slate-600 text-sm">
              <li>9.1: De student kan voorbeelden noemen van typen vaccins en globaal hun werkingsmechanisme uitleggen</li>
              <li>9.3: De student kan beredeneren welk micro-organisme(n) de meest waarschijnlijke ziekteveroorzaker(s) is/zijn bij een patiënt met een huidmanifestatie van een infectieziekte, in relatie tot klachtenpatroon, epidemiologische gegevens, vaccinatiestatus en aanvullende diagnostiek</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary

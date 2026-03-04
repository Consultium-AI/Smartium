import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07WaterpokkenBeleidSummary = () => {
  const tableOfContents = [
    { id: 'gezond', title: 'Gezonde kinderen', icon: Pill },
    { id: 'aciclovir', title: 'Aciclovir', icon: Pill },
    { id: 'symptomatisch', title: 'Symptomatische behandeling', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Waterpokken – Beleid"
      description="Behandeling van waterpokken: wanneer wel of geen behandeling, aciclovir en symptomatische zorg."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image07"
    >
      <section id="gezond" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gezonde kinderen &lt;12 jaar
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              Bij gezonde kinderen &lt;12 jaar is <strong>geen behandeling</strong> nodig.
            </p>
          </div>
        </div>
      </section>

      <section id="aciclovir" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Aciclovir – indicaties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Behandeling met het antivirale middel <strong>aciclovir</strong> wordt gegeven bij:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><strong>Complicaties</strong> van waterpokken, zoals varicella pneumonie</li>
            <li><strong>Immuungecompromitteerde kinderen</strong>, bijvoorbeeld tijdens chemotherapie</li>
            <li><strong>Pasgeborenen</strong> die varicella perinataal overgedragen krijgen van hun moeder – kunnen ernstig ziek worden</li>
          </ul>
        </div>
      </section>

      <section id="symptomatisch" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Symptomatische behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Verder is de behandeling vooral symptomatisch:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li><strong>Pijnstilling</strong> met paracetamol</li>
            <li><strong>Verlichting van jeuk</strong> met bijv. zinkoxide/talksuspensie</li>
          </ul>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-amber-400">
            <p className="text-slate-600 text-sm m-0">
              Soms ontstaat er een <strong>secundaire bacteriële huidinfectie</strong> van de pokken zelf; die wordt met antibiotica behandeld.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07WaterpokkenBeleidSummary

import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06NorovirusSummary = () => {
  const tableOfContents = [
    { id: 'verwekker', title: 'Verwekker', icon: Microscope },
    { id: 'kliniek', title: 'Kliniek', icon: Microscope },
  ]

  return (
    <SummaryLayout
      title="Norovirus"
      description="Kenmerken, kliniek en morfologie van norovirusinfectie."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image06"
    >
      <section id="verwekker" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verwekker
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li><strong>Familie:</strong> Caliciviridae (Calix = beker/kelk)</li>
            <li><strong>Virale kenmerken:</strong> Enkelstrengs RNA-virus, eiwitmantel zonder lipide-envelop</li>
            <li>Norovirussen zijn genetisch zeer divers; kunnen epidemieen veroorzaken door recombinanten en mutanten (genetische drift)</li>
            <li>Sapovirus behoort ook tot Caliciviridae en veroorzaakt vooral bij kinderen diarree</li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kliniek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Symptomen varieren van asymptomatisch tot ernstig, met name ernstig bij jonge kinderen. Symptomatische infecties kunnen acute diarree en soms hevig braken veroorzaken, eventueel met koorts.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li>Bij volwassenen kan braken een hoofdsymptoom zijn</li>
            <li>Infectie is gewoonlijk zelfbeperkend en duurt 12-48 uur</li>
            <li>Bij ouderen kan een norovirusinfectie fataal zijn</li>
            <li>Bij immuungecompromitteerde patienten kan de infectie chronisch worden (maanden tot jaren)</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06NorovirusSummary

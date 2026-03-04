import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23RoodvonkKliniekSummary = () => {
  const tableOfContents = [
    { id: 'etiologie', title: 'Roodvonk – bacterieel', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Roodvonk – Klinische presentatie"
      description="Streptococcus pyogenes (groep A-streptokok), in tegenstelling tot virale exantheemziekten."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 23"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image23"
    >
      <section id="etiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Roodvonk – bacteriële oorzaak
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              Roodvonk wordt, in tegenstelling tot alle eerdere exantheemziekten, door een <strong>bacterie</strong> veroorzaakt: de <strong>Streptococcus pyogenes</strong>, ofwel de groep A-streptokok. Deze bacterie kan verschillende ziektebeelden veroorzaken; roodvonk is er één van.
            </p>
          </div>
        </div>
      </section>

      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een kind met roodvonk krijgt vaak plots hoge koorts bij een (milde) keelontsteking. Het exantheem wat ontstaat is opvallend ruw aanvoelend, fijnvlekkig en puntig (als rood schuurpapier) en wordt vaak gezien in het gezicht, in de nek, op de borst en in plooien zoals onder de oksels, in de liezen en aan de binnenzijde van de bovenbenen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kenmerkende gezichtsuitslag</h4>
            <p className="text-primary-700 text-sm mb-2">
              Kenmerkend is dat de rash in het gelaat vooral op de wangen zit en de driehoek rondom neus/mond/kin vrij blijft (<strong>narcosekapje vrij</strong>).
            </p>
            <p className="text-primary-700 text-sm m-0">
              Vaak is er ook een knalrode wat gezwollen tong; ook wel <strong>frambozen- of aardbeientong</strong> genoemd.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image23RoodvonkKliniekSummary

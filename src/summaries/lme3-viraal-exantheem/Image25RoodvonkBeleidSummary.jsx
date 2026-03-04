import { Pill } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25RoodvonkBeleidSummary = () => {
  const tableOfContents = [
    { id: 'beleid', title: 'Beleid roodvonk', icon: Pill },
  ]

  return (
    <SummaryLayout
      title="Roodvonk – Beleid"
      description="Behandeling van roodvonk: zelflimiterend en optioneel antibiotica."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 25"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image25"
    >
      <section id="beleid" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Beleid roodvonk
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Roodvonk hoeft niet altijd behandeld te worden en gaat in de meeste gevallen vanzelf over. Bij een verhoogd risico op complicaties of bij een ernstig zieke patiënt kan antibiotica overwogen worden.
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron: NHG-standaard acute keelpijn, LCI-richtlijn groep A-streptokokkeninfecties.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image25RoodvonkBeleidSummary

import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06EpidemiologieMeningokokkenSummary = () => {
  const tableOfContents = [
    { id: 'leeftijd', title: 'Leeftijdsgroepen', icon: BarChart3 },
    { id: 'serogroepen', title: 'Serogroepen', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Epidemiologie van N. meningitidis"
      description="Meldingspercentages per leeftijdsgroep, geslacht en serogroepentrends van meningokokkenziekte."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image06"
    >
      <section id="leeftijd" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Leeftijdsgroepen en geslacht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De hoogste meldingspercentages werden waargenomen bij <strong>zuigelingen</strong>, gevolgd door jonge kinderen en adolescenten. Ook bij personen van 65 jaar en ouder was er een significant meldingspercentage.
          </p>
          
          <p>
            Over het algemeen waren de meldingspercentages <strong>hoger bij mannen dan bij vrouwen</strong> – de reden hiervoor is niet volkomen duidelijk.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="serogroepen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Serogroepentrends (1992-2020)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Serogroep C:</strong> Sterke daling na vaccinatie (rond 2000); sindsdien zeer laag</li>
            <li><strong>Serogroep B:</strong> Lang dominant; piek begin jaren 90; daarna geleidelijk dalend</li>
            <li><strong>Serogroep W:</strong> Toename in recente jaren (2016-2020)</li>
            <li><strong>Serogroep Y:</strong> Relatief laag gedurende de hele periode</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06EpidemiologieMeningokokkenSummary

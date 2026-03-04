import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23DiagnostiekKweekSummary = () => {
  const tableOfContents = [
    { id: 'kweek', title: 'Schimmelkweek', icon: FlaskConical },
  ]

  return (
    <SummaryLayout
      title="Diagnostiek – Schimmelkweek"
      description="Schimmelkweek voor typering van de schimmelsoort; Trichophyton interdigitale."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 23"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image23"
    >
      <section id="kweek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Schimmelkweek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Principe</h4>
            <p className="text-primary-700 text-sm mb-3">
              Met een schimmelkweek van een huidschilfer, schraapsel of stukje nagel kan met meer zekerheid gezegd worden of er een schimmel aanwezig is en is het mogelijk om te typeren welke soort schimmel of gist aanwezig is. Je kunt dit zelf direct onder de microscoop bekijken (ca. 30 min na KOH) of opsturen naar de afdeling microbiologie. Een schimmelkweek kan een aantal weken duren.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Trichophyton interdigitale</h4>
            <p className="text-teal-700 text-sm m-0">
              De kweek laat vorming van vertakte hyphen (draden) zien, opgebouwd uit aan elkaar gekoppelde ronde segmenten (arthroconidia), soms ook losliggend als separate bolletjes of in groepjes aan elkaar.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image23DiagnostiekKweekSummary

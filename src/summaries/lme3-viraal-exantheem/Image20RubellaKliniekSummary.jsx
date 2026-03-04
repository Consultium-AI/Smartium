import { Activity, AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20RubellaKliniekSummary = () => {
  const tableOfContents = [
    { id: 'epidemiologie', title: 'Rubella – epidemiologie', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Rubella (rode hond) – Klinische presentatie"
      description="Rubellavirus, epidemiologie en het ziektebeeld van rode hond."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 20"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image20"
    >
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rubella (rode hond)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ook rubella, ook wel rode hond genoemd, is na invoering van het BMR-vaccin nauwelijks meer gezien in Nederland. Af en toe zijn er nog uitbraken onder niet-gevaccineerde populaties.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-amber-800 mb-1">Risico voor zwangeren</h4>
              <p className="text-amber-700 text-sm m-0">
                Een rubella-infectie kan voor een zwangere vrouw desastreus zijn, omdat het kan leiden tot een miskraam of ernstige aangeboren afwijkingen.
              </p>
            </div>
          </div>
          
          <p>
            Het rubellavirus is aerogeen overdraagbaar en enorm besmettelijk.
          </p>
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
            Heel veel infecties verlopen subklinisch. Als er wel symptomen zijn, is de huiduitslag vaak het eerste symptoom. De rash is echter heel aspecifiek: roze/rood maculopapuleus, beginnend in het gelaat en uitbreidend naar de romp en ledematen.
          </p>
          
          <p>
            Soms zijn er ook pijnlijk vergrote lymfeklieren, en ook lichte koorts en wat malaiseklachten kunnen voorkomen.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image20RubellaKliniekSummary

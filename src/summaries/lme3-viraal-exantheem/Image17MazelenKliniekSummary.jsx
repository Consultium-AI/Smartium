import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17MazelenKliniekSummary = () => {
  const tableOfContents = [
    { id: 'epidemiologie', title: 'Mazelen – epidemiologie', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Mazelen – Klinische presentatie"
      description="Mazelenvirus, epidemiologie, transmissie en het karakteristieke ziektebeeld."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 17"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image17"
    >
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Mazelen – epidemiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Mazelen was vroeger een veel voorkomende virale exantheemziekte, maar kwam minder vaak voor na invoering van het BMR-vaccin. Door een daling van de vaccinatiegraad is het herkennen van mazelen nu nog belangrijker.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Transmissie</h4>
            <p className="text-amber-700 text-sm m-0">
              Mazelen wordt veroorzaakt door het <strong>mazelenvirus</strong>, is <strong>zeer besmettelijk</strong> en wordt <strong>aerogeen</strong> overgedragen.
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
            Het begint plotseling met algemene malaise, koorts, conjunctivitis, verkoudheidsverschijnselen en hoesten. Na 2–3 dagen verschijnen bij ongeveer 30% van de patiënten <strong>Koplikse vlekjes</strong> (kleine witte vlekjes op het mondslijmvlies) – pathognomonisch voor mazelen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Exantheem</h4>
            <p className="text-primary-700 text-sm m-0">
              Tussen drie en zeven dagen na het begin van de klachten ontstaat een grofvlekkig, ruw aanvoelend exantheem (als schuurpapier). De rash begint achter de oren en langs de haarlijn en verspreidt zich binnen enkele dagen over het gezicht, de nek, romp en extremiteiten.
            </p>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <p className="text-slate-600 text-sm m-0">
              Bij patiënten met een donkere huidkleur is het exantheem vooral <strong>voelbaar</strong>.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17MazelenKliniekSummary

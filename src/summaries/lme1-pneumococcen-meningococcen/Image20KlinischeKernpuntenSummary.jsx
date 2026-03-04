import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20KlinischeKernpuntenSummary = () => {
  const tableOfContents = [
    { id: 'alarmsymptomen', title: 'Alarmsymptomen', icon: Stethoscope },
    { id: 'kernpunten', title: 'Klinische kernpunten', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Klinische kernpunten – Petechiën"
      description="Alarmsymptomen bij meningitis/sepsis en het belang van snel handelen."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 20"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image20"
    >
      <section id="alarmsymptomen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Alarmsymptomen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De huid is slechts één onderdeel van het totale klinische beeld. Bij een <strong>acuut zieke patiënt</strong> met petechiën (meningitis/sepsis) vallen vaak eerst andere alarmsymptomen op:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Hoge koorts</li>
            <li>Sufheid</li>
            <li>Nekstijfheid</li>
            <li>Hyperventilatie</li>
            <li>Fotofobie</li>
            <li>Lage bloeddruk</li>
          </ul>
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <p className="text-rose-700 font-medium m-0">
              <strong>Snel handelen is belangrijker dan zoeken naar petechiën.</strong>
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="kernpunten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische kernpunten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Beoordeel altijd de algehele toestand van de patiënt</li>
            <li>Petechiën/purpura hebben veel mogelijke oorzaken → denk breed</li>
            <li>Verwijs kinderen met petechiën of purpura altijd direct naar de SEH</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image20KlinischeKernpuntenSummary

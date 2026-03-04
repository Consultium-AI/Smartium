import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18HerkenningEczeemBenenSummary = () => {
  const tableOfContents = [
    { id: 'eczeem', title: 'Eczeem op donkere huid', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      title="Herkenning – Eczeem (geen schimmel)"
      description="Eczeem op donkere huid: erytheem minder zichtbaar, voorkeurslocatie flexuren, papels en krabeffecten."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 18"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image18"
    >
      <section id="eczeem" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Eczeem vs. schimmelinfectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Geen schimmelinfectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Dit is eczeem. Op de donkere huid is het erytheem (de roodheid) minder goed zichtbaar. Het beeld past beter bij eczeem, omdat het op de voorkeurslocatie van eczeem zit (flexuren), er is geen duidelijke randactiviteit. De zichtbare papels (bultjes), schilfering en krabeffecten passen beter bij eczeem.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Belangrijke differentiatiepunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Donkere huid: erytheem minder zichtbaar</li>
              <li>Flexuren = voorkeurslocatie eczeem</li>
              <li>Geen randactiviteit bij eczeem</li>
              <li>Papels, schilfering en krabeffecten passen bij eczeem</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image18HerkenningEczeemBenenSummary

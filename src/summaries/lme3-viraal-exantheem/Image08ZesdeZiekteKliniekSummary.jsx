import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08ZesdeZiekteKliniekSummary = () => {
  const tableOfContents = [
    { id: 'etiologie', title: 'Exanthema subitum (zesde ziekte)', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Zesde ziekte – Exanthema subitum"
      description="Humaan herpesvirus 6 (HHV6), epidemiologie en het karakteristieke ziektebeeld van de zesde ziekte."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 8"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image08"
    >
      <section id="etiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Exanthema subitum (zesde ziekte)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Exanthema subitum, ook wel <strong>zesde ziekte</strong> of <strong>roseola infantum</strong> genoemd, is een veel voorkomende kinderziekte veroorzaakt door het <strong>humaan herpesvirus 6 (HHV6)</strong>.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Epidemiologie</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Piekincidentie tussen 6–9 maanden</li>
              <li>Meeste infecties vóór 2 jaar</li>
              <li>Meer dan 95% van volwassenen heeft antistoffen</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Na primaire infectie persisteert het virus in mononucleaire cellen in het bloed, speekselklieren en het centrale zenuwstelsel.
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
            Kinderen met HHV6-infectie krijgen acuut hoge koorts zonder andere duidelijke symptomen. Na een paar dagen (meestal 3–5) daalt de koorts abrupt.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kenmerkende rash</h4>
            <p className="text-primary-700 text-sm mb-2">
              De karakteristieke rash (vlekjes) verschijnt <strong>als de koorts daalt</strong>. De rash begint typisch op het gezicht en de romp en verspreidt zich naar de nek en armen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Vaak zijn er milde symptomen van een bovenste luchtweginfectie en gezwollen lymfeklieren in de hals. De ziekte komt vaak voor in het voorjaar en verloopt meestal mild.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image08ZesdeZiekteKliniekSummary

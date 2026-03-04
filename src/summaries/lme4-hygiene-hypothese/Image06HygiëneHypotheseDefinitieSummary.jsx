import { Info } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06HygiëneHypotheseDefinitieSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Hygiënehypothese', icon: Info },
    { id: 'gevolgen', title: 'Gevolgen', icon: Info },
    { id: 'assen', title: 'Darm-long en andere assen', icon: Info },
  ]

  return (
    <SummaryLayout
      title="Hygiënehypothese – Definitie"
      description="De hygiënehypothese: geringe blootstelling aan pathogenen, Th-celbalans en gevolgen voor allergie en auto-immuunziekten."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image06"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Hygiënehypothese
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De hygiënehypothese stelt dat een geringe blootstelling aan ziekteverwekkers, met name bacteriën en wormen, op jonge kinderleeftijd tot gevolg heeft dat het immuunsysteem zich minder goed ontwikkelt. Dit kan resulteren in een verstoorde balans tussen de verschillende typen immuuncellen, voornamelijk de verschillende typen T-helpercellen.
          </p>
        </div>
      </section>

      <section id="gevolgen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gevolgen van de verstoring
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een dergelijke verstoring kan resulteren in een ongewenste reactie van het verworven immuunsysteem tegen normaliter onschadelijke stoffen uit de omgeving (allergenen), met een allergie tot gevolg. Ook kan deze respons gericht zijn tegen lichaamseigen eiwitten (auto-antigenen), waardoor een auto-immuunziekte zich kan ontwikkelen.
          </p>
        </div>
      </section>

      <section id="assen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Info className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Darm-long en andere assen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een directe relatie tussen darm- en long-microbioom en -immuunsysteem maakt dat verstoringen in de darm ook effect hebben op de luchtwegen, wat kan leiden tot astma. Ook tussen de darm en de huid, en de darm en de hersenen bestaat een dergelijk verband.
          </p>
          
          <p className="text-slate-600 text-sm">
            Bron: Hu et al. 2021. Front Physiol
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06HygiëneHypotheseDefinitieSummary

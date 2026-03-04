import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image35AtopischEczeemSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Atopisch eczeem', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Atopisch eczeem"
      description="Atopische constitutie, typische lokalisaties en kenmerken van atopisch eczeem bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 35"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image35"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Atopisch eczeem
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Atopisch eczeem komt veel voor bij kinderen met een <strong>atopische constitutie</strong>, zoals een meisje met astma en hooikoorts.
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
            Typisch aan atopisch eczeem is dat het erg kan jeuken, de rash schilferend en rood/verheven is en vooral in de plooien te vinden is.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Typische lokalisaties bij kinderen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Binnenkant van de ellebogen</li>
              <li>Achter in de knieholtes</li>
              <li>Achter de oorschelpen</li>
            </ul>
          </div>
          
          <p>
            Bij lichamelijk onderzoek vallen vaak meerdere krabeffecten op, en de huid voelt droog en ruw aan. Er is geen sprake van koorts.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image35AtopischEczeemSummary

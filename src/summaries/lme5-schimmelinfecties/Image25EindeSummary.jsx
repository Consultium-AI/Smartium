import { CheckCircle2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image25EindeSummary = () => {
  const tableOfContents = [
    { id: 'einde', title: 'Leerpunten en literatuur', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Einde – Schimmelinfecties"
      description="Leerpunten en gebruikte literatuur van de module."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 25"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image25"
    >
      <section id="einde" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Leerpunten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Na deze module</h4>
            <p className="text-primary-700 text-sm mb-3">Formuleer nu jouw eigen leerpunten. Je zou het volgende moeten kennen:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De benaming van schimmelinfecties van de huid, nagels en haren</li>
              <li>De symptomen en klinische presentatie</li>
              <li>Opties tot diagnostiek</li>
              <li>Een globaal idee van het beleid</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Gebruikte literatuur</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
              <li>Kleine kwalen in de huisartsenpraktijk. Eekhof e.a. Bohn Stafleu van Loghum 2019</li>
              <li>Hoofdstuk 54 Pityriasis versicolor</li>
              <li>KOH-preparaat, Wood&apos;s lamp (huidziekten.nl)</li>
              <li>NHG standaard Dermatomycosen. www.nhg.org. Februari 2022</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image25EindeSummary

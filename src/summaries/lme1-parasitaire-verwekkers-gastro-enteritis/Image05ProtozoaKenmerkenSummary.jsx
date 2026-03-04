import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05ProtozoaKenmerkenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'protozoa', title: 'Kenmerken parasitaire protozoa', icon: Microscope },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Kenmerken van parasitaire protozoa"
      description="Onderscheidende kenmerken van Giardia, Cryptosporidium en Entamoeba histolytica."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image05"
    >
      <section id="protozoa" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kenmerken parasitaire protozoa
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij de mens zijn <strong>Giardia lamblia</strong>, <strong>Cryptosporidium</strong>-soorten en <strong>Entamoeba histolytica</strong> de meest voorkomende parasitaire protozoa die diarree veroorzaken. Alle veroorzaken buikpijn en diarree, maar elke infectie heeft eigen kenmerken.
          </p>
          
          <div className="space-y-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Giardia lamblia (giardiasis)</h4>
              <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
                <li>Winderigheid</li>
                <li>Brijige diarree</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Cryptosporidium species (cryptosporidiose)</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Waterdunne diarree</li>
                <li>Infectieduur 1–2 weken</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Entamoeba histolytica (amoebendysenterie)</h4>
              <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
                <li>Bloederige diarree</li>
                <li>Infectie uit de tropen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05ProtozoaKenmerkenSummary

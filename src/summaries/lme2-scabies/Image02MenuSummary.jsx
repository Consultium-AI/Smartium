import { BookOpen, Stethoscope, Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02MenuSummary = () => {
  const tableOfContents = [
    { id: 'overview', title: 'Module-overzicht', icon: BookOpen },
    { id: 'chapters', title: 'Hoofdstukken', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Module-overzicht – Scabiës"
      description="Scabiës als belangrijke infectieziekte van de huid – epidemiologie, diagnose en behandeling."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 2"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image02"
    >
      <section id="overview" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Module-overzicht
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In deze e-module wordt <strong>scabiës</strong> uitgelicht als een belangrijke infectieziekte van de huid, vanwege de <strong>hoge prevalentie</strong> en de <strong>grote besmettelijkheid</strong>, vooral in gemeenschappelijke settings zoals studentenhuizen en zorginstellingen.
          </p>
          
          <p>
            Het begrijpen van de epidemiologie, diagnose en behandeling is essentieel om verdere verspreiding te voorkomen. Middels e-clips en vragen worden de epidemiologie, pathogenese en transmissie, diagnostiek en behandeling van scabiës doorlopen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="chapters" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Hoofdstukken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Hoofdstuk 1: Scabiës etiologie, pathogenese en transmissie</strong>
                <p className="text-slate-600 text-sm mt-1">Oorzaak, ontwikkeling en verspreiding van scabiës.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Stethoscope className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Hoofdstuk 2: Scabiës diagnostiek</strong>
                <p className="text-slate-600 text-sm mt-1">Hoe scabiës wordt herkend en vastgesteld.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <Syringe className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <strong>Hoofdstuk 3: Scabiës behandeling</strong>
                <p className="text-slate-600 text-sm mt-1">Behandelopties en preventie van verspreiding.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02MenuSummary

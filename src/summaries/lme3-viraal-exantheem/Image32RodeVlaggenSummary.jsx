import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image32RodeVlaggenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Levensbedreigende vormen', icon: AlertTriangle },
    { id: 'vlaggen', title: 'Rode vlaggen', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      title="Rode vlaggen – Levensbedreigende rash"
      description="Wanneer moet bij rash bij kinderen spoed een arts worden geraadpleegd?"
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 32"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image32"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Levensbedreigende vormen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Hoewel een rash bij een verder gezond kind zonder onderliggende ziektes zoals een afweerstoornis dus meestal niet zo ernstig is, zijn er wel een aantal levensbedreigende vormen van rash bij kinderen die belangrijk zijn om te onthouden.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              Alle onderstaande scenario&apos;s zijn zogenaamde <strong>rode vlaggen</strong>: hoewel het nog steeds om een onschuldig verschijnsel zou kunnen gaan, moet hier met spoed een arts naar kijken.
            </p>
          </div>
        </div>
      </section>

      <section id="vlaggen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rode vlaggen
          </h2>
        </div>
        
        <div className="space-y-4">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">A. Blaren die zich snel uitbreiden</h4>
            <p className="text-slate-600 text-sm m-0">
              Zou kunnen passen bij het <strong>stafylococcal scalded skin syndrome</strong>, waarbij een groot deel van de huid kan loslaten en een jong kind snel kan uitdrogen.
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">B. Tekenen van shock</h4>
            <p className="text-slate-600 text-sm m-0">
              Slecht wekbaar, niet goed reageren, aanhoudend braken, bleek zien, aanhoudend kreunen en huilen. Zou kunnen passen bij <strong>toxic shock syndrome</strong> (streptokokken- of stafylokokkeninfectie) – snel en dodelijk verlopend.
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">C. Rood/paarse vlekjes die niet wegdrukbaar zijn en zich uitbreiden</h4>
            <p className="text-slate-600 text-sm m-0">
              Past bij <strong>petechiën of purpura</strong> – kan gezien worden bij bloedstollingsproblemen bij infectie met meningokok of pneumokok (sepsis/meningitis). Ook sommige virale infecties kunnen petechiën veroorzaken; die breiden meestal niet snel uit.
            </p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-1">D. Rash waarbij ook mondslijmvliezen en conjunctiva zijn aangedaan</h4>
            <p className="text-slate-600 text-sm m-0">
              Kan passen bij <strong>toxisch epidermale necrolyse</strong> – meestal als reactie op een geneesmiddel (bijv. antibiotica). Door uitgebreide necrose kan de gehele huid loslaten, wat levensbedreigend is.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image32RodeVlaggenSummary

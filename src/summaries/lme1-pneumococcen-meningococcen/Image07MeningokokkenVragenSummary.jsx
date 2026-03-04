import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07MeningokokkenVragenSummary = () => {
  const tableOfContents = [
    { id: 'zuigelingen', title: 'Hoge incidentie zuigelingen', icon: BarChart3 },
    { id: 'incidentie', title: 'Pneumokokken vs meningokokken', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      title="Epidemiologie meningokokken – Vragen en antwoorden"
      description="Verklaringen voor hoge incidentie bij zuigelingen en vergelijking pneumokokken vs meningokokken."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image07"
    >
      <section id="zuigelingen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verklaring hoge incidentie bij zuigelingen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Nog niet gevaccineerd, immatuur immuunsysteem.</strong> Zuigelingen hebben nog niet de volledige vaccinatieserie ontvangen en zijn extra kwetsbaar door een nog niet volledig ontwikkeld immuunsysteem.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="incidentie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pneumokokken vs meningokokken incidentie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Pneumokokken</strong> is geassocieerd met veel diverse infecties (o.a. pneumonie, otitis media); een groot aantal wordt niet gemeld. De totale ziektelast door pneumokokken is daardoor hoger dan door meningokokken.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijk</h4>
            <p className="text-primary-700 text-sm m-0">
              Hoewel meningokokkenziekte vaak ernstiger is en meer aandacht krijgt, is de totale ziektelast door pneumokokken hoger door de grote diversiteit aan infecties (o.a. pneumonie, otitis media) die niet allemaal gemeld worden.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07MeningokokkenVragenSummary

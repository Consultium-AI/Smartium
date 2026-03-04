import { FileText } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24SamenvattingSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'samenvatting', title: 'Samenvatting', icon: FileText }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Samenvatting virale gastro-enteritis"
      description="Kernpunten van de module virale verwekkers van gastro-enteritis."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 24"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image24"
    >
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <FileText className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Samenvatting</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Rotavirus, norovirus, adenovirus en astrovirus zijn de belangrijkste virale verwekkers van gastro-enteritis.</li>
            <li>Rotavirus: Reoviridae, dubbelstrengs RNA, piek winter/voorjaar, ernstige uitdroging bij jonge kinderen.</li>
            <li>Norovirus: Caliciviridae, enkelstrengs RNA, lage infectiedosis, aerogene verspreiding, uitbraken.</li>
            <li>Transmissie: feco-oraal. Diagnostiek: NAAT op faeces. Behandeling: supportive, ORS of IV rehydratie.</li>
            <li>Rotavirusvaccin in RVP voorkomt ernstige infecties.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image24SamenvattingSummary

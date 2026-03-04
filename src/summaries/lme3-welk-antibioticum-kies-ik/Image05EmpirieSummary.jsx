import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05EmpirieSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'empirie', title: 'Empirische therapie', icon: Microscope }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Principes – Empirische vs breed-spectrum therapie"
      description="Wanneer smal-spectrum en wanneer breed-spectrum antibiotica."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image05"
    >
      <section id="empirie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Empirische therapie</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Empirische therapie hoeft niet per definitie breed te zijn. Sommige infecties worden door slechts enkele bacterien veroorzaakt. Huidinfecties: vaak streptokokken en S. aureus, behandeling met flucloxacilline (smal spectrum).</p>
          <p>Bij ernstig zieke patienten kies je breder spectrum omdat je geen tijd hebt om af te wachten. Toch lukt het nooit om alle verwekkers tegelijk te behandelen; er moet altijd een keuze gemaakt worden.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image05EmpirieSummary

import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19TerminologieHospitalAcquiredSummary = () => {
  const toc = [{ id: 'hospital-acquired', title: 'Hospital acquired – Empirisch beleid', icon: Stethoscope }]
  return (
    <SummaryLayout
      title="Terminologie – Hospital acquired"
      description="Waarom de definitie van 'hospital acquired' belangrijk is voor het empirische beleid."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image19"
    >
      <section id="hospital-acquired" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Waarom is 'hospital acquired' belangrijk?</h2>
        <p className="text-slate-700 mb-4">Het is belangrijk dat een arts op de SEH weet wat de definitie is van 'hospital acquired' wanneer hij/zij een patiënt beoordeelt met koorts met een verdenking op een infectie.</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Belangrijke reden: empirisch beleid</h4>
          <p className="text-primary-700 text-sm m-0">Verwekkers van hospital acquired infecties zijn anders dan de verwekkers uit de community. Het empirische antibiotica beleid is gebaseerd op de community, waarbij soms een switch naar een antibioticum noodzakelijk is, als sprake blijkt van een zorggerelateerde infectie.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19TerminologieHospitalAcquiredSummary

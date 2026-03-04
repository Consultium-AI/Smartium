import { Building2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19HospitalAcquiredSummary = () => {
  const toc = [{ id: 'hospital', title: 'Hospital acquired', icon: Building2 }]
  return (
    <SummaryLayout
      title="Terminologie – Hospital acquired"
      description="Waarom het belangrijk is de definitie van 'hospital acquired' te kennen op de SEH."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image19"
    >
      <section id="hospital" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Hospital acquired – Belang voor empirisch beleid</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Het is belangrijk dat een arts op de SEH weet wat de definitie is van &apos;hospital acquired&apos; wanneer hij/zij een patiënt beoordeelt met koorts met een verdenking op een infectie, om het <strong>juiste empirische beleid</strong> in te kunnen stellen.
        </p>
        <p className="text-slate-700 leading-relaxed">
          Verwekkers van hospital acquired infecties zijn anders dan de verwekkers uit de community. Het empirische antibiotica beleid is gebaseerd op de community, waarbij soms een switch naar een antibioticum noodzakelijk is als sprake blijkt van een zorggerelateerde infectie.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image19HospitalAcquiredSummary

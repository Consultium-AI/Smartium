import { Stethoscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15CasusSOFASummary = () => {
  const toc = [{ id: 'casus-sofa', title: 'Casus – SOFA en mortaliteit', icon: Stethoscope }]
  return (
    <SummaryLayout
      title="Sepsis in de praktijk – SOFA en mortaliteit"
      description="Casus: 78-jarige man met verdenking sepsis; SOFA-score en mortaliteitsvoorspelling."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image15"
    >
      <section id="casus-sofa" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus</h2>
        <p className="text-slate-700 mb-4">78-jarige man, SEH met verdenking sepsis. Ziek, verward, verpleeghuis, hoest al dagen. Geen koorts, lethargisch, hoge hartslag. Temperatuur 36°C, RR 86/50 mmHg, HF 116/min, RF 26/min, SpO2 95% bij 4 L O2 (FiO2 37%). Rhonchi longen, verlengde capillary refill. Opent ogen bij aanspreken, verward, kan opdrachten uitvoeren.</p>
        <p className="text-slate-700 mb-4">Lab: PaO2 88 mmHg, trombocyten 124×10⁹/L, bilirubine 24 µmol/L, kreatinine 260 µmol/L, lactaat 2,3 mmol/L.</p>
        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">SOFA en mortaliteit</h4>
          <p className="text-primary-700 text-sm">MAP 62 mmHg, GCS 12. Een SOFA van 9 punten correspondeert met circa 33% mortaliteit. NB: 9–35% van de patiënten met sepsis heeft geen koorts.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image15CasusSOFASummary

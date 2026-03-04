import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05DierhouderijSummary = ({ standalone = true }) => {
  const toc = [
    { id: 'dierhouderij', title: 'Antibioticagebruik in de dierhouderij', icon: BarChart3 },
    { id: 'maran', title: 'Resultaten MARAN 2023', icon: BarChart3 },
    { id: 'esbl', title: 'ESBL-dragerschap bij mensen', icon: BarChart3 },
  ]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Antibioticagebruik in de dierhouderij"
      description="Antibioticagebruik en resistentie in de Nederlandse veehouderij."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image05"
    >
      <section id="dierhouderij" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Antibioticagebruik in de dierhouderij</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antischimmelmiddelen en antibiotica worden gebruikt voor de behandeling van infecties bij mens en dier, en ook als groeibevorderaars om de opbrengst in de landbouw te verhogen. Sommige van deze antibiotica (zoals vancomycine en macroliden) worden ook gebruikt voor de behandeling van humane infecties. Het antibioticagebruik in de dierhouderij is tussen 2009 en 2020 aanzienlijk gedaald met ongeveer 69%.
        </p>
      </section>
      <section id="maran" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Resultaten MARAN 2023</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          In 2022 daalde de verkoop van antibiotica met 22,4% ten opzichte van 2021. In totaal is het antibioticagebruik in landbouwhuisdieren gedaald van 498 ton (2009) naar 112 ton (2022) – een daling van 77,5%. Kritieke antibiotica, belangrijk voor de behandeling van humane infecties, worden in de diersector nauwelijks of niet gebruikt.
        </p>
        <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
          <h4 className="font-bold text-teal-800 mb-2">Resistentie per diersoort</h4>
          <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
            <li><strong>Vleeskuikens:</strong> Antibioticaresistentie stabiel; ESBL&apos;s na lange daling twee jaar op een plateau</li>
            <li><strong>Varkens:</strong> ESBL-resistentie stabiel</li>
            <li><strong>Vleeskalveren:</strong> Resistentie stabiel; ESBL&apos;s gedaald</li>
            <li><strong>Melkkoeien:</strong> Resistentie blijft laag; ESBL&apos;s licht gestegen</li>
          </ul>
        </div>
      </section>
      <section id="esbl" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">ESBL-dragerschap bij mensen</h2>
        <p className="text-slate-700 leading-relaxed">
          Ongeveer 5% van de mensen is drager van ESBL&apos;s. Mensen geven ESBL&apos;s vooral aan elkaar door; alleen in beperkte mate worden ze via dierenhouderij of vleesconsumptie verkregen. Voor gezonde mensen zijn ESBL&apos;s onschadelijk, maar een infectie met deze resistente bacteriën is moeilijker te behandelen.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image05DierhouderijSummary

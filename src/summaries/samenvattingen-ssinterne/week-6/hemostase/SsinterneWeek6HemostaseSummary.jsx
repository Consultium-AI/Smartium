// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module hemostase
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectHemostaseHetStoppenVanEenBloeding from './sections/SectHemostaseHetStoppenVanEenBloeding'
import SectPrimaireHemostaseDeTrombocytenplug from './sections/SectPrimaireHemostaseDeTrombocytenplug'
import SectSecundaireHemostaseVormingVanFibrine from './sections/SectSecundaireHemostaseVormingVanFibrine'
import SectRemmingEnBalansInDeHemostase from './sections/SectRemmingEnBalansInDeHemostase'
import SectFibrinolyseHetAfbrekenVanHetStolsel from './sections/SectFibrinolyseHetAfbrekenVanHetStolsel'
import SectLaboratoriumonderzoekVanDePrimaireHe from './sections/SectLaboratoriumonderzoekVanDePrimaireHe'
import SectLaboratoriumonderzoekVanDeSecundaire from './sections/SectLaboratoriumonderzoekVanDeSecundaire'
import SectVerlengdePtApttOfTrombinetijd from './sections/SectVerlengdePtApttOfTrombinetijd'
import SectMengproefTekortOfRemmer from './sections/SectMengproefTekortOfRemmer'
import SectDDimerenEnFibrinolyse from './sections/SectDDimerenEnFibrinolyse'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Hemostase: het stoppen van een bloeding", icon: FileText },
    { id: 'sect-03', title: "Primaire hemostase: de trombocytenplug", icon: FileText },
    { id: 'sect-04', title: "Secundaire hemostase: vorming van fibrine", icon: FileText },
    { id: 'sect-05', title: "Remming en balans in de hemostase", icon: FileText },
    { id: 'sect-06', title: "Fibrinolyse: het afbreken van het stolsel", icon: FileText },
    { id: 'sect-07', title: "Laboratoriumonderzoek van de primaire hemostase", icon: Microscope },
    { id: 'sect-08', title: "Laboratoriumonderzoek van de secundaire hemostase", icon: Microscope },
    { id: 'sect-09', title: "Verlengde PT, aPTT of trombinetijd", icon: FileText },
    { id: 'sect-10', title: "Mengproef: tekort of remmer?", icon: FileText },
    { id: 'sect-11', title: "D-dimeren en fibrinolyse", icon: FileText },
    { id: 'sect-12', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek6HemostaseSummary = () => (
  <SummaryLayout
    title="Hemostase"
    description="Hemostase betekent bloedstolling. Het is het proces dat ervoor zorgt dat een bloeding stopt zodra een bloedvat beschadigd raakt. Dat is belangrijk, want zonder hemostase zou zelfs een kleine verwonding blijven bloeden."
    caseLabel="Week 6 · Hemostase"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectHemostaseHetStoppenVanEenBloeding />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectPrimaireHemostaseDeTrombocytenplug />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectSecundaireHemostaseVormingVanFibrine />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectRemmingEnBalansInDeHemostase />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectFibrinolyseHetAfbrekenVanHetStolsel />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectLaboratoriumonderzoekVanDePrimaireHe />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectLaboratoriumonderzoekVanDeSecundaire />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectVerlengdePtApttOfTrombinetijd />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectMengproefTekortOfRemmer />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectDDimerenEnFibrinolyse />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek6HemostaseSummary

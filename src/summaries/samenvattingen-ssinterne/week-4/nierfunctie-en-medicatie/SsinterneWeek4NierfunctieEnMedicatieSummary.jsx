// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module nierfunctie-en-medicatie
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
import SectNierfunctieEnMedicatieDeKernVanHetOn from './sections/SectNierfunctieEnMedicatieDeKernVanHetOn'
import SectLithiumWerkingDoseringEnControle from './sections/SectLithiumWerkingDoseringEnControle'
import SectLithiumEnNierfunctiestoornissen from './sections/SectLithiumEnNierfunctiestoornissen'
import SectBeleidBijLithiumEnNierfunctiestoorni from './sections/SectBeleidBijLithiumEnNierfunctiestoorni'
import SectLithiumEnHydrochloorthiazideEenBelan from './sections/SectLithiumEnHydrochloorthiazideEenBelan'
import SectAntibioticaBijUrineweginfectieEnVerm from './sections/SectAntibioticaBijUrineweginfectieEnVerm'
import SectFosfomycineAlsAlternatief from './sections/SectFosfomycineAlsAlternatief'
import SectJichtBehandelingMetOogVoorDeNierfunc from './sections/SectJichtBehandelingMetOogVoorDeNierfunc'
import SectDeGroteLijnWatMoetJeOnthouden from './sections/SectDeGroteLijnWatMoetJeOnthouden'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Nierfunctie en medicatie: de kern van het onderwerp", icon: FileText },
    { id: 'sect-03', title: "Lithium: werking, dosering en controle", icon: FileText },
    { id: 'sect-04', title: "Lithium en nierfunctiestoornissen", icon: FileText },
    { id: 'sect-05', title: "Beleid bij lithium en nierfunctiestoornissen", icon: HeartPulse },
    { id: 'sect-06', title: "Lithium en hydrochloorthiazide: een belangrijke interactie", icon: FileText },
    { id: 'sect-07', title: "Antibiotica bij urineweginfectie en verminderde nierfunctie", icon: FileText },
    { id: 'sect-08', title: "Fosfomycine als alternatief", icon: FileText },
    { id: 'sect-09', title: "Jicht: behandeling met oog voor de nierfunctie", icon: HeartPulse },
    { id: 'sect-10', title: "De grote lijn: wat moet je onthouden?", icon: FileText },
    { id: 'sect-11', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek4NierfunctieEnMedicatieSummary = () => (
  <SummaryLayout
    title="Nierfunctie en medicatie"
    description="Deze stof laat zien dat nierfunctie en medicatie elkaar sterk beïnvloeden. Aan de ene kant kan medicatie zelf nierfunctiestoornissen veroorzaken. Aan de andere kant kan een verminderde nierfunctie ervoor zorgen dat geneesmiddelen minder…"
    caseLabel="Week 4 · Nierfunctie en medicatie"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectNierfunctieEnMedicatieDeKernVanHetOn />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectLithiumWerkingDoseringEnControle />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectLithiumEnNierfunctiestoornissen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectBeleidBijLithiumEnNierfunctiestoorni />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectLithiumEnHydrochloorthiazideEenBelan />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectAntibioticaBijUrineweginfectieEnVerm />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectFosfomycineAlsAlternatief />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectJichtBehandelingMetOogVoorDeNierfunc />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectDeGroteLijnWatMoetJeOnthouden />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek4NierfunctieEnMedicatieSummary

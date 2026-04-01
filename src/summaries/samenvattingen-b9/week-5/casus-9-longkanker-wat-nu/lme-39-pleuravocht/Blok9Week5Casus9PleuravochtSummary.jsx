import {
  BookOpen,
  Layers,
  Droplets,
  GitBranch,
  ListTree,
  Stethoscope,
  Syringe,
  ListChecks,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AnatomieVanDePleura from './Sect02AnatomieVanDePleura'
import Sect03FysiologiePleuravochtproductie from './Sect03FysiologiePleuravochtproductie'
import Sect04PathofysiologieTranssudaatExsudaat from './Sect04PathofysiologieTranssudaatExsudaat'
import Sect05OorzakenVanPleuravocht from './Sect05OorzakenVanPleuravocht'
import Sect06KliniekEnDiagnostiek from './Sect06KliniekEnDiagnostiek'
import Sect07BehandelingVanPleuravocht from './Sect07BehandelingVanPleuravocht'
import Sect08SamenvattingVanDeKern from './Sect08SamenvattingVanDeKern'
import Sect09Samenvatting from './Sect09Samenvatting'

const Blok9Week5Casus9PleuravochtSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Anatomie van de pleura', icon: Layers },
    { id: 'sect-03', title: 'Fysiologie van pleuravochtproductie', icon: Droplets },
    { id: 'sect-04', title: 'Pathofysiologie: hoe ontstaat pleuravocht?', icon: GitBranch },
    { id: 'sect-05', title: 'Oorzaken van pleuravocht', icon: ListTree },
    { id: 'sect-06', title: 'Kliniek en diagnostiek', icon: Stethoscope },
    { id: 'sect-07', title: 'Behandeling van pleuravocht', icon: Syringe },
    { id: 'sect-08', title: 'Samenvatting van de kern', icon: ClipboardList },
    { id: 'sect-09', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Pleuravocht"
      description="De pleura is een dun vlies rond de longen. Het bestaat uit twee bladen: de viscerale pleura ligt direct op het longoppervlak; de pariëtale pleura bekleedt de binnenkant van de thoraxwand, de thoracale zijde van het mediastinum en het diafragma."
      caseLabel="Week 5 · Casus 9: Longkanker, wat nu"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02AnatomieVanDePleura /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03FysiologiePleuravochtproductie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04PathofysiologieTranssudaatExsudaat /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05OorzakenVanPleuravocht /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06KliniekEnDiagnostiek /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07BehandelingVanPleuravocht /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08SamenvattingVanDeKern /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus9PleuravochtSummary

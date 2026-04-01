import {
  BookOpen,
  Crosshair,
  GitBranch,
  Globe,
  LayoutGrid,
  ListChecks,
  Ruler,
  Scan,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02TnmClassificatieEnTabel1 from './Sect02TnmClassificatieEnTabel1'
import Sect03RolCtEnPetCt from './Sect03RolCtEnPetCt'
import Sect04MaligneBeeldkenmerkenOpCt from './Sect04MaligneBeeldkenmerkenOpCt'
import Sect05TStadium from './Sect05TStadium'
import Sect06NStadium from './Sect06NStadium'
import Sect07MStadium from './Sect07MStadium'
import Sect08BeeldvormingSamengevat from './Sect08BeeldvormingSamengevat'
import Sect09KlinischeVoorbeelden from './Sect09KlinischeVoorbeelden'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok9Week5Casus9VoorbereidingCtEnPetCtSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'TNM-classificatie bij longkanker', icon: Table2 },
    { id: 'sect-03', title: 'De rol van CT en PET/CT', icon: Scan },
    { id: 'sect-04', title: 'Maligne beeldkenmerken op CT', icon: Crosshair },
    { id: 'sect-05', title: 'Het T-stadium: primaire longtumor', icon: Ruler },
    { id: 'sect-06', title: 'Het N-stadium: regionale lymfekliermetastasen', icon: GitBranch },
    { id: 'sect-07', title: 'Het M-stadium: metastasen op afstand', icon: Globe },
    { id: 'sect-08', title: 'Beeldvorming samengevat: wat zie je waar?', icon: LayoutGrid },
    { id: 'sect-09', title: 'Klinische voorbeelden', icon: Stethoscope },
    { id: 'sect-10', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding CT en PET-CT"
      description="Bij longkanker wordt de uitgebreidheid van de ziekte ingedeeld met de TNM-classificatie. Dit is een internationale standaard voor tumorclassificatie."
      caseLabel="Week 5 · Casus 9: Longkanker, wat nu"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02TnmClassificatieEnTabel1 /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03RolCtEnPetCt /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04MaligneBeeldkenmerkenOpCt /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05TStadium /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06NStadium /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07MStadium /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08BeeldvormingSamengevat /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09KlinischeVoorbeelden /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week5Casus9VoorbereidingCtEnPetCtSummary

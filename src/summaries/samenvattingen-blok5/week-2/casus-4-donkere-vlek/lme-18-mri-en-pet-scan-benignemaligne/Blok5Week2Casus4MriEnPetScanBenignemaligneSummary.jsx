import {
  Activity,
  BookOpen,
  Brain,
  Camera,
  CircleCheck,
  ClipboardList,
  Droplets,
  Layers,
  ListOrdered,
  Scan,
  Share2,
  ShieldAlert,
  Table2,
  Target,
  Timer,
  Waves,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02NucleaireGeneeskundeEnFdgPetCt from './Sect02NucleaireGeneeskundeEnFdgPetCt'
import Sect03IndicatiesFdgPetCt from './Sect03IndicatiesFdgPetCt'
import Sect04VoorbereidingFdgPetCt from './Sect04VoorbereidingFdgPetCt'
import Sect05HoeVerlooptNormaleFdgPetCt from './Sect05HoeVerlooptNormaleFdgPetCt'
import Sect06NormaleFysiologischeFdgOpname from './Sect06NormaleFysiologischeFdgOpname'
import Sect07PetCtOncologieEnValkuilen from './Sect07PetCtOncologieEnValkuilen'
import Sect08MriBasisprincipesEnSequenties from './Sect08MriBasisprincipesEnSequenties'
import Sect09MriBijDeHersenen from './Sect09MriBijDeHersenen'
import Sect10BeeldvormingBijMelanoom from './Sect10BeeldvormingBijMelanoom'
import Sect11MelanoomEnHersenmetastasen from './Sect11MelanoomEnHersenmetastasen'
import Sect12SentinelNodeProcedureBijMelanoom from './Sect12SentinelNodeProcedureBijMelanoom'
import Sect13ZwellingInDeLiesEchoEnLiesbreuk from './Sect13ZwellingInDeLiesEchoEnLiesbreuk'
import Sect14LiesbreukDirectEnIndirect from './Sect14LiesbreukDirectEnIndirect'
import Sect15ValkuilenInFdgPetCt from './Sect15ValkuilenInFdgPetCt'
import Sect16Samenvatting from './Sect16Samenvatting'

const Blok5Week2Casus4MriEnPetScanBenignemaligneSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Nucleaire geneeskunde en FDG PET/CT', icon: Activity },
    { id: 'sect-03', title: 'Indicaties van FDG PET/CT', icon: ListOrdered },
    { id: 'sect-04', title: 'Voorbereiding op FDG PET/CT', icon: ClipboardList },
    { id: 'sect-05', title: 'Hoe verloopt een normale FDG PET/CT?', icon: Timer },
    { id: 'sect-06', title: 'Normale fysiologische FDG-opname', icon: Droplets },
    { id: 'sect-07', title: 'PET/CT in de oncologie en valkuilen', icon: Scan },
    { id: 'sect-08', title: 'MRI: basisprincipes en sequenties', icon: Layers },
    { id: 'sect-09', title: 'MRI bij de hersenen', icon: Brain },
    { id: 'sect-10', title: 'Beeldvorming bij melanoom', icon: Camera },
    { id: 'sect-11', title: 'Melanoom en hersenmetastasen', icon: Target },
    { id: 'sect-12', title: 'Sentinel node procedure bij melanoom', icon: Share2 },
    { id: 'sect-13', title: 'Zwelling in de lies: echo en liesbreuk', icon: Waves },
    { id: 'sect-14', title: 'Liesbreuk: direct en indirect', icon: Table2 },
    { id: 'sect-15', title: 'Valkuilen in FDG PET/CT', icon: ShieldAlert },
    { id: 'sect-16', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="MRI en PET-scan benignemaligne"
      description="Bij nucleaire geneeskunde worden radioactieve stoffen gebruikt om processen in het lichaam zichtbaar te maken. De radioactieve stof wordt aan de patiënt toegediend en de straling die het lichaam uitzendt wordt opgevangen met een gamma- of PET-camera. Het gaat dus om een functioneel onderzoek: je ziet niet alleen waar iets zit, maar ook hoe actief het weefsel is."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-mri-en-pet-scan-benignemaligne"
    summaryVariantToggle={{
      activeLmeId: 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne',
      variants: [
        { id: 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne', label: 'Uitgebreid' },
        { id: 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02NucleaireGeneeskundeEnFdgPetCt />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03IndicatiesFdgPetCt />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04VoorbereidingFdgPetCt />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05HoeVerlooptNormaleFdgPetCt />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06NormaleFysiologischeFdgOpname />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PetCtOncologieEnValkuilen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08MriBasisprincipesEnSequenties />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09MriBijDeHersenen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10BeeldvormingBijMelanoom />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11MelanoomEnHersenmetastasen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12SentinelNodeProcedureBijMelanoom />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13ZwellingInDeLiesEchoEnLiesbreuk />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14LiesbreukDirectEnIndirect />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15ValkuilenInFdgPetCt />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4MriEnPetScanBenignemaligneSummary

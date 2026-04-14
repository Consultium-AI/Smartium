import {
  Activity,
  AlertTriangle,
  BookOpen,
  CircleCheck,
  Dna,
  Layers,
  ListChecks,
  Microscope,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02NadeligeReactiesAlgemeenIdee from './Sect02NadeligeReactiesAlgemeenIdee'
import Sect03KlinischeIndelingTabel1 from './Sect03KlinischeIndelingTabel1'
import Sect04TypeA from './Sect04TypeA'
import Sect05TypeB from './Sect05TypeB'
import Sect06TypeCEnD from './Sect06TypeCEnD'
import Sect07PathofysiologischeIndelingPseudoallergisch from './Sect07PathofysiologischeIndelingPseudoallergisch'
import Sect08AllergischeReactiesKenmerken from './Sect08AllergischeReactiesKenmerken'
import Sect09Tabel2PathofysiologischeIndelingAllergisch from './Sect09Tabel2PathofysiologischeIndelingAllergisch'
import Sect10TypeITotIVDetails from './Sect10TypeITotIVDetails'
import Sect11PIConcept from './Sect11PIConcept'
import Sect12Biologicals from './Sect12Biologicals'
import Sect13ErnstigeReactieTabel3 from './Sect13ErnstigeReactieTabel3'
import Sect14Anamnese from './Sect14Anamnese'
import Sect15DiagnostiekTryptase from './Sect15DiagnostiekTryptase'
import Sect16Huidtesten from './Sect16Huidtesten'
import Sect17Provocatietesten from './Sect17Provocatietesten'
import Sect18Kruisallergie from './Sect18Kruisallergie'
import Sect19OntlabelenPenFastScarKinderen from './Sect19OntlabelenPenFastScarKinderen'
import Sect20Samenvatting from './Sect20Samenvatting'

const Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Nadelige reacties van medicatie: het algemene idee', icon: Layers },
    { id: 'sect-03', title: 'Klinische indeling van nadelige reacties', icon: Table2 },
    { id: 'sect-04', title: 'Type A: farmacologische bijwerkingen', icon: Pill },
    { id: 'sect-05', title: 'Type B: overgevoeligheidsreacties', icon: ShieldAlert },
    { id: 'sect-06', title: 'Type C en D', icon: Activity },
    { id: 'sect-07', title: 'Pathofysiologische indeling', icon: ListChecks },
    { id: 'sect-08', title: 'Allergische reacties', icon: Stethoscope },
    { id: 'sect-09', title: 'De typen allergische reacties', icon: Table2 },
    { id: 'sect-10', title: 'Type I tot en met IV', icon: ListChecks },
    { id: 'sect-11', title: 'Het bijzondere P-I concept', icon: Dna },
    { id: 'sect-12', title: 'Overgevoeligheidsreacties op biologicals', icon: Syringe },
    { id: 'sect-13', title: 'Hoe herken je een ernstige reactie?', icon: AlertTriangle },
    { id: 'sect-14', title: 'Anamnese en diagnostiek', icon: BookOpen },
    { id: 'sect-15', title: 'Diagnostiek en tryptase', icon: Microscope },
    { id: 'sect-16', title: 'Huidtesten', icon: Stethoscope },
    { id: 'sect-17', title: 'Provocatietesten', icon: Activity },
    { id: 'sect-18', title: 'Kruisallergie', icon: Layers },
    { id: 'sect-19', title: 'Ontlabelen van penicilline-allergie', icon: Pill },
    { id: 'sect-20', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Nadelige reacties van medicatie (Adverse Drug Reactions)"
      description="Bij gebruik van medicijnen kan een patiënt nadelig reageren. Belangrijk is dat een reactie tijdens medicatiegebruik niet automatisch betekent dat het medicijn ook echt de oorzaak is. Soms valt een reactie toevallig samen met een andere aandoening, of verergert een bestaande aandoening juist op dat moment."
      caseLabel="Week 1 · Casus 2: De veranderde barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus2-nadelige-reacties-van-medicatie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week1-casus2-nadelige-reacties-van-medicatie',
      variants: [
        { id: 'blok5-week1-casus2-nadelige-reacties-van-medicatie', label: 'Uitgebreid' },
        { id: 'blok5-week1-casus2-nadelige-reacties-van-medicatie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02NadeligeReactiesAlgemeenIdee />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KlinischeIndelingTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04TypeA />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TypeB />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06TypeCEnD />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PathofysiologischeIndelingPseudoallergisch />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AllergischeReactiesKenmerken />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Tabel2PathofysiologischeIndelingAllergisch />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10TypeITotIVDetails />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11PIConcept />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Biologicals />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13ErnstigeReactieTabel3 />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Anamnese />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15DiagnostiekTryptase />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Huidtesten />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Provocatietesten />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18Kruisallergie />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19OntlabelenPenFastScarKinderen />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary

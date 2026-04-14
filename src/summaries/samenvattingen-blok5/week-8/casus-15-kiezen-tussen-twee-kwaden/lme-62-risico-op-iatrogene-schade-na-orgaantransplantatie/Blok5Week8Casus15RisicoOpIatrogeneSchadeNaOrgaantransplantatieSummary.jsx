import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Pill,
  ShieldAlert,
  Stethoscope,
  Sun,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02OrgaantransplantatieEnImmunosuppressie from './Sect02OrgaantransplantatieEnImmunosuppressie'
import Sect03BelangrijksteImmunosuppressivaTabel1 from './Sect03BelangrijksteImmunosuppressivaTabel1'
import Sect04ToxiciteitVanImmunosuppressiva from './Sect04ToxiciteitVanImmunosuppressiva'
import Sect05RisicoPlaveiselcelcarcinoom from './Sect05RisicoPlaveiselcelcarcinoom'
import Sect06ImmunosuppressivaEnHuidkanker from './Sect06ImmunosuppressivaEnHuidkanker'
import Sect07ScreeningWie from './Sect07ScreeningWie'
import Sect08Tabel3RisicocategorieScreening from './Sect08Tabel3RisicocategorieScreening'
import Sect09ChemopreventieEnFollowUp from './Sect09ChemopreventieEnFollowUp'
import Sect10Acitretine from './Sect10Acitretine'
import Sect11MtorRemmers from './Sect11MtorRemmers'
import Sect12SamenvattendKlinischBeeld from './Sect12SamenvattendKlinischBeeld'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    {
      id: 'sect-02',
      title: 'Orgaantransplantatie en immunosuppressie: waarom is het zo belangrijk?',
      icon: Stethoscope,
    },
    { id: 'sect-03', title: 'De belangrijkste immunosuppressiva', icon: Table2 },
    { id: 'sect-04', title: 'Toxiciteit van immunosuppressiva', icon: ShieldAlert },
    { id: 'sect-05', title: 'Waarom is het risico op plaveiselcelcarcinoom zo sterk verhoogd?', icon: Sun },
    { id: 'sect-06', title: 'Welke immunosuppressiva zijn vooral relevant bij huidkanker?', icon: Target },
    { id: 'sect-07', title: 'Wie moet je screenen?', icon: ClipboardList },
    { id: 'sect-08', title: 'Tabel 3. Risicocategorie en screeninginterval', icon: Table2 },
    { id: 'sect-09', title: 'Chemopreventie en follow-up', icon: Activity },
    { id: 'sect-10', title: 'Acitretine', icon: Pill },
    { id: 'sect-11', title: 'mTOR-remmers', icon: Syringe },
    { id: 'sect-12', title: 'Samenvattend klinisch beeld', icon: Stethoscope },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Risico op iatrogene schade na orgaantransplantatie"
      description="Iatrogene schade betekent schade die ontstaat door behandeling."
      caseLabel="Week 8 · Casus 15: Kiezen tussen twee kwaden"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie',
      variants: [
        { id: 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie', label: 'Uitgebreid' },
        { id: 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02OrgaantransplantatieEnImmunosuppressie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03BelangrijksteImmunosuppressivaTabel1 />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04ToxiciteitVanImmunosuppressiva />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05RisicoPlaveiselcelcarcinoom />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06ImmunosuppressivaEnHuidkanker />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07ScreeningWie />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Tabel3RisicocategorieScreening />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ChemopreventieEnFollowUp />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Acitretine />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11MtorRemmers />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12SamenvattendKlinischBeeld />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary

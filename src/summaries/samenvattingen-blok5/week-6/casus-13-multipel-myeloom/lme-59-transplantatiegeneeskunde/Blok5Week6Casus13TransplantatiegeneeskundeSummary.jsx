import {
  Activity,
  BookOpen,
  CircleCheck,
  Dna,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  ShieldAlert,
  Stethoscope,
  Syringe,
  Table2,
  Users,
  Bug,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Blok5Week6Casus13TransplantatiegeneeskundeOefenvragenCallout from './Blok5Week6Casus13TransplantatiegeneeskundeOefenvragenCallout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02InleidingTotTransplantatiegeneeskunde from './Sect02InleidingTotTransplantatiegeneeskunde'
import Sect03IndicatiesVoorOrgaantransplantatie from './Sect03IndicatiesVoorOrgaantransplantatie'
import Sect04ContraIndicatiesVoorOrgaantransplantatie from './Sect04ContraIndicatiesVoorOrgaantransplantatie'
import Sect05GeschikteDonorenDbddcd from './Sect05GeschikteDonorenDbddcd'
import Sect06LevendeDonoren from './Sect06LevendeDonoren'
import Sect07TransplantatieantigenenEnHerkenning from './Sect07TransplantatieantigenenEnHerkenning'
import Sect08RejectieVanHetOrgaan from './Sect08RejectieVanHetOrgaan'
import Sect09MatchingEnHLATypering from './Sect09MatchingEnHLATypering'
import Sect10Immunosuppressie from './Sect10Immunosuppressie'
import Sect11BelangrijksteBijwerkingen from './Sect11BelangrijksteBijwerkingen'
import Sect12InfectiesNaTransplantatie from './Sect12InfectiesNaTransplantatie'
import Sect13PreventieVanInfecties from './Sect13PreventieVanInfecties'
import Sect14KankerNaOrgaantransplantatie from './Sect14KankerNaOrgaantransplantatie'
import Sect15Samenvatting from './Sect15Samenvatting'

const PRACTICE_LME_PATH = '/oefenvragen?lme=blok5-week6-casus13-transplantatiegeneeskunde'

const Blok5Week6Casus13TransplantatiegeneeskundeSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Inleiding tot transplantatiegeneeskunde', icon: Activity },
    { id: 'sect-03', title: 'Indicaties voor orgaantransplantatie', icon: Stethoscope },
    { id: 'sect-04', title: 'Contra-indicaties voor orgaantransplantatie', icon: ShieldAlert },
    { id: 'sect-05', title: 'Geschikte donoren (DBD, DCD)', icon: HeartPulse },
    { id: 'sect-06', title: 'Levende donoren', icon: Users },
    { id: 'sect-07', title: 'Immunologie: transplantatieantigenen', icon: Dna },
    { id: 'sect-08', title: 'Rejectie van het orgaan', icon: ShieldAlert },
    { id: 'sect-09', title: 'Matching en HLA-typering', icon: Layers },
    { id: 'sect-10', title: 'Immunosuppressie', icon: Pill },
    { id: 'sect-11', title: 'Belangrijkste bijwerkingen', icon: Table2 },
    { id: 'sect-12', title: 'Infecties na transplantatie', icon: Bug },
    { id: 'sect-13', title: 'Preventie van infecties', icon: Syringe },
    { id: 'sect-14', title: 'Kanker na orgaantransplantatie', icon: Microscope },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Transplantatiegeneeskunde"
      description="Orgaantransplantatie is bedoeld voor patiënten met onomkeerbaar orgaanfalen."
      caseLabel="Week 6 · Casus 13: Multipel myeloom"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink={PRACTICE_LME_PATH}
      practiceFooter={
        <Blok5Week6Casus13TransplantatiegeneeskundeOefenvragenCallout to={PRACTICE_LME_PATH} />
      }
    summaryVariantToggle={{
      activeLmeId: 'blok5-week6-casus13-transplantatiegeneeskunde',
      variants: [
        { id: 'blok5-week6-casus13-transplantatiegeneeskunde', label: 'Uitgebreid' },
        { id: 'blok5-week6-casus13-transplantatiegeneeskunde-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02InleidingTotTransplantatiegeneeskunde />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03IndicatiesVoorOrgaantransplantatie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04ContraIndicatiesVoorOrgaantransplantatie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05GeschikteDonorenDbddcd />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06LevendeDonoren />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07TransplantatieantigenenEnHerkenning />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08RejectieVanHetOrgaan />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09MatchingEnHLATypering />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Immunosuppressie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11BelangrijksteBijwerkingen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12InfectiesNaTransplantatie />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13PreventieVanInfecties />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14KankerNaOrgaantransplantatie />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus13TransplantatiegeneeskundeSummary

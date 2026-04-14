import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  FlaskConical,
  Layers,
  ListChecks,
  Microscope,
  Pill,
  Shield,
  Syringe,
  Table2,
  Zap,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02FarmacokinetiekEnADME from './Sect02FarmacokinetiekEnADME'
import Sect03BiologischeBeschikbaarheidEnTabel from './Sect03BiologischeBeschikbaarheidEnTabel'
import Sect04DeHuidAlsBarriere from './Sect04DeHuidAlsBarriere'
import Sect05OpbouwEnFunctieVanDeEpidermis from './Sect05OpbouwEnFunctieVanDeEpidermis'
import Sect06HoeGeneesmiddelenViaDeHuidWordenOpgenomen from './Sect06HoeGeneesmiddelenViaDeHuidWordenOpgenomen'
import Sect07FicksLawEnFactoren from './Sect07FicksLawEnFactoren'
import Sect08EigenschappenVanTopicaalGeneesmiddel from './Sect08EigenschappenVanTopicaalGeneesmiddel'
import Sect09VehiclesEnDeOpnameViaDeHuid from './Sect09VehiclesEnDeOpnameViaDeHuid'
import Sect10ToedieningsvormenViaDeHuid from './Sect10ToedieningsvormenViaDeHuid'
import Sect11MedicatietoedieningenEnDeHuid from './Sect11MedicatietoedieningenEnDeHuid'
import Sect12Toedieningstechnieken from './Sect12Toedieningstechnieken'
import Sect13SubcutaanEnIntramusculairInjecteren from './Sect13SubcutaanEnIntramusculairInjecteren'
import Sect14Complicaties from './Sect14Complicaties'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Farmacokinetiek en ADME', icon: Layers },
    { id: 'sect-03', title: 'Biologische beschikbaarheid', icon: Table2 },
    { id: 'sect-04', title: 'De huid als barrière', icon: Shield },
    { id: 'sect-05', title: 'Opbouw en functie van de epidermis', icon: ListChecks },
    { id: 'sect-06', title: 'Hoe geneesmiddelen via de huid worden opgenomen', icon: Droplets },
    { id: 'sect-07', title: "Fick's law en factoren die opname bepalen", icon: FlaskConical },
    { id: 'sect-08', title: 'Eigenschappen van topicaal geneesmiddel', icon: Pill },
    { id: 'sect-09', title: 'Vehicles en de opname via de huid', icon: Activity },
    { id: 'sect-10', title: 'Toedieningsvormen via de huid', icon: Zap },
    { id: 'sect-11', title: 'Medicatietoedieningen en de huid', icon: Microscope },
    { id: 'sect-12', title: 'Toedieningstechnieken', icon: Syringe },
    { id: 'sect-13', title: 'Subcutaan en intramusculair injecteren', icon: Syringe },
    { id: 'sect-14', title: 'Complicaties van toediening via de huid', icon: ListChecks },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Hoe werkt een geneesmiddel via de huid"
      description="Farmacokinetiek beschrijft wat het lichaam doet met een geneesmiddel nadat het is toegediend. Het gaat dus om hoe een medicijn wordt opgenomen, verdeeld, gemetaboliseerd en uitgescheiden."
      caseLabel="Week 1 · Casus 1: De huid als succesvolle barrière"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid',
      variants: [
        { id: 'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid', label: 'Uitgebreid' },
        { id: 'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02FarmacokinetiekEnADME />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03BiologischeBeschikbaarheidEnTabel />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04DeHuidAlsBarriere />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05OpbouwEnFunctieVanDeEpidermis />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06HoeGeneesmiddelenViaDeHuidWordenOpgenomen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07FicksLawEnFactoren />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08EigenschappenVanTopicaalGeneesmiddel />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09VehiclesEnDeOpnameViaDeHuid />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10ToedieningsvormenViaDeHuid />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11MedicatietoedieningenEnDeHuid />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Toedieningstechnieken />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13SubcutaanEnIntramusculairInjecteren />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Complicaties />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary

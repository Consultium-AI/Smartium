import {
  BookOpen,
  CircleCheck,
  HeartPulse,
  Layers,
  Microscope,
  Pill,
  Shield,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02InfectiesBijVerminderdeAfweer from './Sect02InfectiesBijVerminderdeAfweer'
import Sect03WanneerInfectiesAanAfweerstoornis from './Sect03WanneerInfectiesAanAfweerstoornis'
import Sect04OpportunistischeEnBanaleInfecties from './Sect04OpportunistischeEnBanaleInfecties'
import Sect05TypischeInfectiepatronenPerAfweerdefect from './Sect05TypischeInfectiepatronenPerAfweerdefect'
import Sect06Diagnostiek from './Sect06Diagnostiek'
import Sect07BehandelingVanOpportunistischeInfecties from './Sect07BehandelingVanOpportunistischeInfecties'
import Sect08Profylaxe from './Sect08Profylaxe'
import Sect09InfectiesNaStamceltransplantatie from './Sect09InfectiesNaStamceltransplantatie'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologieSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Infecties bij verminderde afweer', icon: HeartPulse },
    { id: 'sect-03', title: 'Wanneer infecties aan een afweerstoornis doen denken', icon: Shield },
    { id: 'sect-04', title: 'Opportunistische en banale infecties', icon: Layers },
    { id: 'sect-05', title: 'Typische infectiepatronen per afweerdefect', icon: Table2 },
    { id: 'sect-06', title: 'Diagnostiek', icon: Microscope },
    { id: 'sect-07', title: 'Behandeling van opportunistische infecties', icon: Pill },
    { id: 'sect-08', title: 'Profylaxe', icon: Syringe },
    { id: 'sect-09', title: 'Infecties na stamceltransplantatie', icon: Stethoscope },
    { id: 'sect-10', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Infecties binnen de kinderoncologie"
      description="Bij kinderen die behandeld worden voor kinderkanker hoort infectierisico onlosmakelijk bij de klinische zorg. Chemotherapie kan neutropenie geven, slijmvliezen beschadigen en de afweer tegen micro-organismen verzwakken."
      caseLabel="Week 6 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie',
      variants: [
        { id: 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02InfectiesBijVerminderdeAfweer />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WanneerInfectiesAanAfweerstoornis />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04OpportunistischeEnBanaleInfecties />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TypischeInfectiepatronenPerAfweerdefect />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Diagnostiek />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BehandelingVanOpportunistischeInfecties />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Profylaxe />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09InfectiesNaStamceltransplantatie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologieSamenvattingSummary

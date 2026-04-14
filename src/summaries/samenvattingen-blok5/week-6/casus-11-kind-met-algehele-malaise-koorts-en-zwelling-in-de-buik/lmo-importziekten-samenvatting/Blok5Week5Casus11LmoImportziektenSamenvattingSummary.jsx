import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  Globe2,
  Hand,
  Layers,
  MapPin,
  Microscope,
  ShieldAlert,
  Stethoscope,
  Thermometer,
  Bug,
  Droplets,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02ImportziektenAlsVoorbereidingOpHetVow from './Sect02ImportziektenAlsVoorbereidingOpHetVow'
import Sect03KernSystematischeAanpak from './Sect03KernSystematischeAanpak'
import Sect04Larisa from './Sect04Larisa'
import Sect05MalariaHoofdregelEnKliniek from './Sect05MalariaHoofdregelEnKliniek'
import Sect06MalariaDiagnostiekEnBehandeling from './Sect06MalariaDiagnostiekEnBehandeling'
import Sect07Arbovirussen from './Sect07Arbovirussen'
import Sect08Leptospirose from './Sect08Leptospirose'
import Sect09EnterischeKoorts from './Sect09EnterischeKoorts'
import Sect10AfrikaanseTrypanosomiasis from './Sect10AfrikaanseTrypanosomiasis'
import Sect11HuidafwijkingenNaTropenbezoek from './Sect11HuidafwijkingenNaTropenbezoek'
import Sect12ImportziektenBijImmuungecompromitteerden from './Sect12ImportziektenBijImmuungecompromitteerden'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week5Casus11LmoImportziektenSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Importziekten als voorbereiding op het VOW', icon: ClipboardList },
    { id: 'sect-03', title: 'De kern: een zieke reiziger vraagt om een systematische aanpak', icon: Layers },
    { id: 'sect-04', title: 'LARISA: het denkraam bij koorts na reizen', icon: Globe2 },
    { id: 'sect-05', title: 'Eerste hoofdregel: malaria tot het tegendeel bewezen is', icon: ShieldAlert },
    { id: 'sect-06', title: 'Diagnostiek en behandeling van malaria', icon: Microscope },
    { id: 'sect-07', title: 'Arbovirussen: dengue, chikungunya en zika', icon: Bug },
    { id: 'sect-08', title: 'Leptospirose: denk aan zoet water en conjunctivitis', icon: Droplets },
    { id: 'sect-09', title: 'Enterische koorts: tyfus en paratyfus', icon: Thermometer },
    { id: 'sect-10', title: 'Afrikaanse trypanosomiasis', icon: MapPin },
    { id: 'sect-11', title: 'Huidafwijkingen na tropenbezoek', icon: Hand },
    { id: 'sect-12', title: 'Importziekten bij immuungecompromitteerden', icon: Stethoscope },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Importziekten"
      description="Deze samenvatting is bedoeld als voorbereiding op het VOW Opportunistische infecties en importziektes. Het doel is dat je de grote lijnen al begrijpt, zodat je in het VOW sneller klinisch kunt redeneren. Het VOW zelf blijft dus leidend."
      caseLabel="Week 6 · Casus 11: Kind met algehele malaise, koorts en zwelling in de buik"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week5-casus11-lmo-importziekten"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus11-lmo-importziekten',
      variants: [
        { id: 'blok5-week5-casus11-lmo-importziekten', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus11-lmo-importziekten-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02ImportziektenAlsVoorbereidingOpHetVow />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03KernSystematischeAanpak />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Larisa />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05MalariaHoofdregelEnKliniek />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06MalariaDiagnostiekEnBehandeling />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Arbovirussen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Leptospirose />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09EnterischeKoorts />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10AfrikaanseTrypanosomiasis />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11HuidafwijkingenNaTropenbezoek />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12ImportziektenBijImmuungecompromitteerden />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus11LmoImportziektenSamenvattingSummary

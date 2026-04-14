import {
  BookOpen,
  Bone,
  CircleCheck,
  Layers,
  Microscope,
  Shield,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01IntroEnLeerdoelen from './Sect01IntroEnLeerdoelen'
import Sect02EerstHetGroteGeheel from './Sect02EerstHetGroteGeheel'
import Sect03HyalienKraakbeen from './Sect03HyalienKraakbeen'
import Sect04Synovium from './Sect04Synovium'
import Sect05Bot from './Sect05Bot'
import Sect06KlinischeAnalyseGewrichtsklachten from './Sect06KlinischeAnalyseGewrichtsklachten'
import Sect07ReumatoideArtritisWatIsHet from './Sect07ReumatoideArtritisWatIsHet'
import Sect08WatGebeurtErInHetGewrichtBijRA from './Sect08WatGebeurtErInHetGewrichtBijRA'
import Sect09ImmuunmechanismenBijRA from './Sect09ImmuunmechanismenBijRA'
import Sect10HoeHerkenJeRAOpVerschillendeNiveaus from './Sect10HoeHerkenJeRAOpVerschillendeNiveaus'
import Sect11Tabel1NormaalGewrichtVersusRA from './Sect11Tabel1NormaalGewrichtVersusRA'
import Sect12Tabel2KlinischePatroonherkenning from './Sect12Tabel2KlinischePatroonherkenning'
import Sect13KernpuntenEnSlot from './Sect13KernpuntenEnSlot'

const Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Intro en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Eerst het grote geheel', icon: Layers },
    { id: 'sect-03', title: 'Normaal gewricht: hyalien kraakbeen', icon: BookOpen },
    { id: 'sect-04', title: 'Synovium', icon: Layers },
    { id: 'sect-05', title: 'Bot', icon: Bone },
    { id: 'sect-06', title: 'Klinische analyse van gewrichtsklachten', icon: Stethoscope },
    { id: 'sect-07', title: 'Reumatoïde artritis: wat is het?', icon: BookOpen },
    { id: 'sect-08', title: 'Wat gebeurt er in het gewricht bij RA?', icon: Layers },
    { id: 'sect-09', title: 'Immuunmechanismen bij RA', icon: Shield },
    { id: 'sect-10', title: 'Hoe herken je RA op verschillende niveaus?', icon: Microscope },
    { id: 'sect-11', title: 'Tabel 1. Normaal gewricht versus RA', icon: Table2 },
    { id: 'sect-12', title: 'Tabel 2. Klinische patroonherkenning', icon: Table2 },
    { id: 'sect-13', title: 'Kernpunten en samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Klinische presentatie en immuunmechanismen"
      description="Deze samenvatting is alleen bedoeld als voorbereiding op het VOW RA: klinische presentatie en immuunmechanismen. Het vervangt het VOW niet; het VOW zelf moet nog steeds gevolgd worden. De leerdoelen van dit onderwijs zijn het beschrijven van kraakbeen, synovium en bot in normale en artritiscondities, het uitleggen van immunologische processen bij RA en het klinisch analyseren van gewrichtsklachten op patroon."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen',
      variants: [
        { id: 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01IntroEnLeerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02EerstHetGroteGeheel />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HyalienKraakbeen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04Synovium />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Bot />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06KlinischeAnalyseGewrichtsklachten />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07ReumatoideArtritisWatIsHet />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WatGebeurtErInHetGewrichtBijRA />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ImmuunmechanismenBijRA />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10HoeHerkenJeRAOpVerschillendeNiveaus />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Tabel1NormaalGewrichtVersusRA />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Tabel2KlinischePatroonherkenning />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KernpuntenEnSlot />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenSummary

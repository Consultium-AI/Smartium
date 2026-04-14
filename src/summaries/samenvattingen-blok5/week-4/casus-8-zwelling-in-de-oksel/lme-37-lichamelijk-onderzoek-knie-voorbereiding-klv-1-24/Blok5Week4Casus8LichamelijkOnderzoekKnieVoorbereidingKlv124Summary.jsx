import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Layers,
  MessageCircle,
  Microscope,
  Shield,
  Stethoscope,
  Table2,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02AnatomieVanDeKnie from './Sect02AnatomieVanDeKnie'
import Sect03Tabel1AnatomischeStructuren from './Sect03Tabel1AnatomischeStructuren'
import Sect04SpierenRondDeKnie from './Sect04SpierenRondDeKnie'
import Sect05BandapparaatVanDeKnie from './Sect05BandapparaatVanDeKnie'
import Sect06Tabel2Kniebanden from './Sect06Tabel2Kniebanden'
import Sect07Menisci from './Sect07Menisci'
import Sect08PijnlijkeKnieWatWilJeWeten from './Sect08PijnlijkeKnieWatWilJeWeten'
import Sect09ContextEnVoorgeschiedenis from './Sect09ContextEnVoorgeschiedenis'
import Sect10HypothesetoetsendeVragenEnTabel3 from './Sect10HypothesetoetsendeVragenEnTabel3'
import Sect11Meniscusletsel from './Sect11Meniscusletsel'
import Sect12Kruisbandletsel from './Sect12Kruisbandletsel'
import Sect13Fractuur from './Sect13Fractuur'
import Sect14Artrose from './Sect14Artrose'
import Sect15BacterieleArtritis from './Sect15BacterieleArtritis'
import Sect16OmgangMetPatiëntIntro from './Sect16OmgangMetPatiëntIntro'
import Sect17VoorafUitlegGeven from './Sect17VoorafUitlegGeven'
import Sect18TijdensHetOnderzoek from './Sect18TijdensHetOnderzoek'
import Sect19VeiligheidEnDiversiteit from './Sect19VeiligheidEnDiversiteit'
import Sect20Samenvatting from './Sect20Samenvatting'

const Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Anatomie van de knie', icon: Activity },
    { id: 'sect-03', title: 'Tabel 1. Anatomische structuren', icon: Table2 },
    { id: 'sect-04', title: 'Spieren rond de knie', icon: Layers },
    { id: 'sect-05', title: 'Bandapparaat van de knie', icon: ClipboardList },
    { id: 'sect-06', title: 'Tabel 2. Kniebanden', icon: Table2 },
    { id: 'sect-07', title: 'Menisci', icon: Microscope },
    { id: 'sect-08', title: 'De pijnlijke knie: wat wil je weten?', icon: MessageCircle },
    { id: 'sect-09', title: 'Context en voorgeschiedenis', icon: ClipboardList },
    { id: 'sect-10', title: 'Hypothesetoetsende vragen en Tabel 3', icon: Stethoscope },
    { id: 'sect-11', title: 'Meniscusletsel', icon: Stethoscope },
    { id: 'sect-12', title: 'Kruisbandletsel', icon: Stethoscope },
    { id: 'sect-13', title: 'Fractuur', icon: Stethoscope },
    { id: 'sect-14', title: 'Artrose', icon: Stethoscope },
    { id: 'sect-15', title: 'Bacteriële artritis', icon: Stethoscope },
    { id: 'sect-16', title: 'Omgang met de patiënt en communicatie', icon: Users },
    { id: 'sect-17', title: 'Vooraf uitleg geven', icon: MessageCircle },
    { id: 'sect-18', title: 'Tijdens het onderzoek', icon: Activity },
    { id: 'sect-19', title: 'Veiligheid en diversiteit', icon: Shield },
    { id: 'sect-20', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Lichamelijk onderzoek Knie (voorbereiding KLV 1.24)"
      description="De knie is een van de grootste en meest complexe gewrichten van het menselijk lichaam. Het is een synoviaal scharniergewricht: dat betekent dat het vooral flexie en extensie mogelijk maakt, dus buigen en strekken."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24',
      variants: [
        { id: 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02AnatomieVanDeKnie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1AnatomischeStructuren />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04SpierenRondDeKnie />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05BandapparaatVanDeKnie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel2Kniebanden />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Menisci />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08PijnlijkeKnieWatWilJeWeten />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09ContextEnVoorgeschiedenis />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10HypothesetoetsendeVragenEnTabel3 />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Meniscusletsel />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Kruisbandletsel />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Fractuur />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Artrose />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15BacterieleArtritis />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16OmgangMetPatiëntIntro />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17VoorafUitlegGeven />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18TijdensHetOnderzoek />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19VeiligheidEnDiversiteit />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary

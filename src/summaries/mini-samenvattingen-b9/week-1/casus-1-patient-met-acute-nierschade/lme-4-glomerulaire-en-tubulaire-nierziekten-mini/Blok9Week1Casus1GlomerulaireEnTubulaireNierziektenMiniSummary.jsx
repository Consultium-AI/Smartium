import {
  BookOpen,
  HelpCircle,
  FlaskConical,
  Microscope,
  Sparkles,
  Atom,
  Layers,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Intro from './Sect01Intro'
import Sect02WaaromNierbiopt from './Sect02WaaromNierbiopt'
import Sect03AfnameVerwerking from './Sect03AfnameVerwerking'
import Sect04Lichtmicroscopie from './Sect04Lichtmicroscopie'
import Sect05IFIHC from './Sect05IFIHC'
import Sect06Elektronenmicroscopie from './Sect06Elektronenmicroscopie'
import Sect07BelangrijkeLaesies from './Sect07BelangrijkeLaesies'
import Sect08Samengevat from './Sect08Samengevat'

const Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Glomerulaire en tubulaire nierziekten: kern', icon: BookOpen },
    { id: 'mini-sect-02', title: 'Waarom het nierbiopt?', icon: HelpCircle },
    { id: 'mini-sect-03', title: 'Afname en drie technieken', icon: FlaskConical },
    { id: 'mini-sect-04', title: 'Lichtmicroscopie', icon: Microscope },
    { id: 'mini-sect-05', title: 'IF en IHC', icon: Sparkles },
    { id: 'mini-sect-06', title: 'Elektronenmicroscopie', icon: Atom },
    { id: 'mini-sect-07', title: 'Drie laesies', icon: Layers },
    { id: 'mini-sect-08', title: 'Samengevat', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Glomerulaire en tubulaire nierziekten"
      description="Een nierbiopt is een belangrijk onderdeel van de aanvullende diagnostiek bij het zoeken naar de oorzaak van een nierziekte. Het gaat hier niet om een biopt uit een macroscopisch afwijkende nier, vaak een tumoreuze afwijking, maar om onderzoek van nierweefsel zelf."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten-mini',
        variants: [
          { id: 'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12">
        <Sect01Intro />
      </section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromNierbiopt />
      </section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12">
        <Sect03AfnameVerwerking />
      </section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12">
        <Sect04Lichtmicroscopie />
      </section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12">
        <Sect05IFIHC />
      </section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12">
        <Sect06Elektronenmicroscopie />
      </section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12">
        <Sect07BelangrijkeLaesies />
      </section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12">
        <Sect08Samengevat />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenMiniSummary

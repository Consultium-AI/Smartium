import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  ListChecks,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Brondocumentkop from './Sect01Brondocumentkop'
import Sect02Leerdoelen from './Sect02Leerdoelen'
import Sect03HidradenitisWatIsHet from './Sect03HidradenitisWatIsHet'
import Sect04KlinischBeeldEnGebieden from './Sect04KlinischBeeldEnGebieden'
import Sect05TypeHsLaesies from './Sect05TypeHsLaesies'
import Sect06Pathogenese from './Sect06Pathogenese'
import Sect07ClassificatieVolgensHurley from './Sect07ClassificatieVolgensHurley'
import Sect08Behandeling from './Sect08Behandeling'
import Sect09KlinischeHerkenning from './Sect09KlinischeHerkenning'
import Sect10KortePraktischePunten from './Sect10KortePraktischePunten'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok5Week4Casus8HydradenitisSuppurativaSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 35 – Hydradenitis suppurativa', icon: BookOpen },
    { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Hidradenitis suppurativa: wat is het?', icon: Stethoscope },
    { id: 'sect-04', title: 'Klinisch beeld en aangedane gebieden', icon: Stethoscope },
    { id: 'sect-05', title: 'Type HS-laesies', icon: Table2 },
    { id: 'sect-06', title: 'Pathogenese: hoe ontstaat HS?', icon: Microscope },
    { id: 'sect-07', title: 'Classificatie volgens Hurley', icon: ClipboardList },
    { id: 'sect-08', title: 'Behandeling: meerdere facetten', icon: Syringe },
    { id: 'sect-09', title: 'Klinische herkenning en behandelkeuzes', icon: Stethoscope },
    { id: 'sect-10', title: 'Korte praktische punten', icon: ListChecks },
    { id: 'sect-11', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Hidradenitis suppurativa"
      description="Hidradenitis suppurativa, vaak afgekort als HS, is een chronische huidziekte die wordt gekenmerkt door recidiverende, pijnlijke ontstekingen vanuit de haarzakjes."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-hydradenitis-suppurativa"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus8-hydradenitis-suppurativa',
      variants: [
        { id: 'blok5-week4-casus8-hydradenitis-suppurativa', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus8-hydradenitis-suppurativa-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Brondocumentkop />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Leerdoelen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HidradenitisWatIsHet />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlinischBeeldEnGebieden />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TypeHsLaesies />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Pathogenese />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07ClassificatieVolgensHurley />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Behandeling />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KlinischeHerkenning />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10KortePraktischePunten />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8HydradenitisSuppurativaSummary

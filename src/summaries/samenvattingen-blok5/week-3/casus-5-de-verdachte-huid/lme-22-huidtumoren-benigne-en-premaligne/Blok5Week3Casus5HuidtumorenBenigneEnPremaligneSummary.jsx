import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Droplets,
  Layers,
  ListChecks,
  Microscope,
  Shield,
  Sparkles,
  Stethoscope,
  Sun,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02Introductie from './Sect02Introductie'
import Sect03Deel1BenigneOverzicht from './Sect03Deel1BenigneOverzicht'
import Sect04KeratinocytenEnAdnexen from './Sect04KeratinocytenEnAdnexen'
import Sect05Fibroblasten from './Sect05Fibroblasten'
import Sect06Endotheelcellen from './Sect06Endotheelcellen'
import Sect07Vetcellen from './Sect07Vetcellen'
import Sect08AndereDermaleCellen from './Sect08AndereDermaleCellen'
import Sect09KleurHerkennen from './Sect09KleurHerkennen'
import Sect10Deel2PremaligneIntro from './Sect10Deel2PremaligneIntro'
import Sect11ActinischeKeratose from './Sect11ActinischeKeratose'
import Sect12MorbusBowen from './Sect12MorbusBowen'
import Sect13KlinischRedeneren from './Sect13KlinischRedeneren'
import Sect14ZonbeschermingEnZelfinspectie from './Sect14ZonbeschermingEnZelfinspectie'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Introductie', icon: ClipboardList },
    { id: 'sect-03', title: 'Deel 1: benigne huidtumoren (overzicht)', icon: Layers },
    { id: 'sect-04', title: 'Keratinocyten en adnexen', icon: Microscope },
    { id: 'sect-05', title: 'Fibroblasten', icon: Activity },
    { id: 'sect-06', title: 'Endotheelcellen', icon: Droplets },
    { id: 'sect-07', title: 'Vetcellen', icon: Layers },
    { id: 'sect-08', title: 'Andere dermale cellen', icon: Stethoscope },
    { id: 'sect-09', title: 'Kleur herkennen', icon: Sparkles },
    { id: 'sect-10', title: 'Deel 2: premaligne huidtumoren', icon: Shield },
    { id: 'sect-11', title: 'Actinische keratose', icon: Syringe },
    { id: 'sect-12', title: 'Morbus Bowen', icon: Table2 },
    { id: 'sect-13', title: 'Klinisch redeneren bij vergelijkbare huidafwijkingen', icon: ListChecks },
    { id: 'sect-14', title: 'Zonbescherming en zelfinspectie', icon: Sun },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Huidtumoren benigne en premaligne"
      description="Iedereen heeft huidplekken of huidafwijkingen. Dat is op zichzelf meestal niet verontrustend. Toch is het voor een arts belangrijk om te weten welke afwijkingen onschuldig zijn en welke juist aandacht vragen."
      caseLabel="Week 3 · Casus 5: De verdachte huid"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus5-huidtumoren-benigne-en-premaligne"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Introductie />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Deel1BenigneOverzicht />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KeratinocytenEnAdnexen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Fibroblasten />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Endotheelcellen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Vetcellen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AndereDermaleCellen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KleurHerkennen />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Deel2PremaligneIntro />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ActinischeKeratose />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12MorbusBowen />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13KlinischRedeneren />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14ZonbeschermingEnZelfinspectie />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary

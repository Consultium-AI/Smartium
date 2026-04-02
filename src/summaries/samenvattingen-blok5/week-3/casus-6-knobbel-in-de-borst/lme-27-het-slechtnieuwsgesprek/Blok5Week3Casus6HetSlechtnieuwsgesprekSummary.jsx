import {
  BookOpen,
  CircleCheck,
  ClipboardList,
  HeartHandshake,
  Layers,
  ListChecks,
  MessageCircle,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaaromBelangrijk from './Sect02WaaromBelangrijk'
import Sect03WatVerstaanWeOnderSlechtNieuws from './Sect03WatVerstaanWeOnderSlechtNieuws'
import Sect04SlechtNieuwsIsSubjectief from './Sect04SlechtNieuwsIsSubjectief'
import Sect05Voorbereiding from './Sect05Voorbereiding'
import Sect06WatIsNietAanTeRaden from './Sect06WatIsNietAanTeRaden'
import Sect07BelangVanDuidelijkeTaal from './Sect07BelangVanDuidelijkeTaal'
import Sect08ModellenEnTabel1 from './Sect08ModellenEnTabel1'
import Sect09SadNewsModelIntroEnTabel2 from './Sect09SadNewsModelIntroEnTabel2'
import Sect10Stap1SetUpAndSitDown from './Sect10Stap1SetUpAndSitDown'
import Sect11Stap2AskDontTell from './Sect11Stap2AskDontTell'
import Sect12Stap3DeliverTheNews from './Sect12Stap3DeliverTheNews'
import Sect13Stap4NoFancyLingo from './Sect13Stap4NoFancyLingo'
import Sect14Stap5ExpectPermitRespond from './Sect14Stap5ExpectPermitRespond'
import Sect15Stap6Wait from './Sect15Stap6Wait'
import Sect16Stap7SupportAndSummarize from './Sect16Stap7SupportAndSummarize'
import Sect17Tabel3DosAndDonts from './Sect17Tabel3DosAndDonts'
import Sect18KlinischeRelevantie from './Sect18KlinischeRelevantie'
import Sect19Samenvatting from './Sect19Samenvatting'

const Blok5Week3Casus6HetSlechtnieuwsgesprekSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Waarom een slechtnieuwsgesprek belangrijk is', icon: HeartHandshake },
    { id: 'sect-03', title: 'Wat verstaan we onder slecht nieuws?', icon: MessageCircle },
    { id: 'sect-04', title: 'Slecht nieuws is subjectief', icon: Layers },
    { id: 'sect-05', title: 'Voorbereiding is een belangrijk onderdeel', icon: ClipboardList },
    { id: 'sect-06', title: 'Wat is niet aan te raden?', icon: ListChecks },
    { id: 'sect-07', title: 'Het belang van duidelijke taal', icon: MessageCircle },
    { id: 'sect-08', title: 'Modellen voor slechtnieuwsgesprekken', icon: Table2 },
    { id: 'sect-09', title: 'Het SAD NEWS-model stap voor stap', icon: Layers },
    { id: 'sect-10', title: '1. Set up and sit down', icon: ClipboardList },
    { id: 'sect-11', title: '2. Ask, don’t tell', icon: MessageCircle },
    { id: 'sect-12', title: '3. Deliver the news', icon: MessageCircle },
    { id: 'sect-13', title: '4. No fancy lingo', icon: MessageCircle },
    { id: 'sect-14', title: '5. Expect, permit and respond to emotion', icon: HeartHandshake },
    { id: 'sect-15', title: '6. Wait', icon: ClipboardList },
    { id: 'sect-16', title: '7. Support and summarize', icon: ClipboardList },
    { id: 'sect-17', title: 'Praktische do’s en don’ts', icon: Table2 },
    { id: 'sect-18', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-19', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Het slechtnieuwsgesprek"
      description="Een slechtnieuwsgesprek hoort bij de medische praktijk en is voor artsen vaak een van de lastigste onderdelen van het werk. Slecht nieuws is voor patiënten meestal niet iets om naar uit te kijken."
      caseLabel="Week 3 · Casus 6: Knobbel in de borst"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week3-casus6-het-slechtnieuwsgesprek"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaaromBelangrijk />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WatVerstaanWeOnderSlechtNieuws />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04SlechtNieuwsIsSubjectief />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Voorbereiding />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06WatIsNietAanTeRaden />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07BelangVanDuidelijkeTaal />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ModellenEnTabel1 />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SadNewsModelIntroEnTabel2 />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Stap1SetUpAndSitDown />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11Stap2AskDontTell />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Stap3DeliverTheNews />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Stap4NoFancyLingo />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14Stap5ExpectPermitRespond />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Stap6Wait />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16Stap7SupportAndSummarize />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17Tabel3DosAndDonts />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18KlinischeRelevantie />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week3Casus6HetSlechtnieuwsgesprekSummary

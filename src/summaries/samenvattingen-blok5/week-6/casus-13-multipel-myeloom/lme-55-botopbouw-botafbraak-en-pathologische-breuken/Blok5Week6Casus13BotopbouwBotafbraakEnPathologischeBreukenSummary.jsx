import {
  Activity,
  BookOpen,
  Bone,
  CircleCheck,
  LayoutList,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02NormaleOpbouwVanBot from './Sect02NormaleOpbouwVanBot'
import Sect03DeBotcellen from './Sect03DeBotcellen'
import Sect04BotaanmaakEnBotafbraak from './Sect04BotaanmaakEnBotafbraak'
import Sect05RegulatieVanRemodelling from './Sect05RegulatieVanRemodelling'
import Sect06Fractuurgenezing from './Sect06Fractuurgenezing'
import Sect07PathologischeFracturen from './Sect07PathologischeFracturen'
import Sect08OsteolyseEnOsteoscleroseBijMetastasen from './Sect08OsteolyseEnOsteoscleroseBijMetastasen'
import Sect09KlinischeRelevantie from './Sect09KlinischeRelevantie'
import Sect10Samenvatting from './Sect10Samenvatting'

const Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Normale opbouw van bot', icon: Bone },
    { id: 'sect-03', title: 'De botcellen', icon: Microscope },
    { id: 'sect-04', title: 'Botaanmaak en botafbraak', icon: Activity },
    { id: 'sect-05', title: 'Regulatie van remodelling', icon: Table2 },
    { id: 'sect-06', title: 'Fractuurgenezing', icon: LayoutList },
    { id: 'sect-07', title: 'Pathologische fracturen', icon: Bone },
    { id: 'sect-08', title: 'Osteolyse en osteosclerose bij metastasen', icon: Table2 },
    { id: 'sect-09', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-10', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Botopbouw, botafbraak en pathologische breuken"
      description="Bot is geen “hard blok”, maar gespecialiseerd bindweefsel."
      caseLabel="Week 6 · Casus 13: Multipel myeloom"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02NormaleOpbouwVanBot />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03DeBotcellen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04BotaanmaakEnBotafbraak />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05RegulatieVanRemodelling />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Fractuurgenezing />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07PathologischeFracturen />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08OsteolyseEnOsteoscleroseBijMetastasen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09KlinischeRelevantie />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary

import {
  BadgeCheck,
  BookOpen,
  CircleCheck,
  Eye,
  HeartHandshake,
  Layers,
  Scale,
  Shield,
  Smartphone,
  Sparkles,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02DermaAppsAlsEthischVraagstuk from './Sect02DermaAppsAlsEthischVraagstuk'
import Sect03WaaromEthiekHierNodigIs from './Sect03WaaromEthiekHierNodigIs'
import Sect04DeDrieGebruikscontexten from './Sect04DeDrieGebruikscontexten'
import Sect05RespectVoorAutonomie from './Sect05RespectVoorAutonomie'
import Sect06PrivacyEnBeroepsgeheim from './Sect06PrivacyEnBeroepsgeheim'
import Sect07RechtvaardigheidEnInclusiviteit from './Sect07RechtvaardigheidEnInclusiviteit'
import Sect08WeldoenEnNietSchaden from './Sect08WeldoenEnNietSchaden'
import Sect09TransparantieVerantwoordelijkheidAansprakelijkheid from './Sect09TransparantieVerantwoordelijkheidAansprakelijkheid'
import Sect10VertrouwenEnRegulering from './Sect10VertrouwenEnRegulering'
import Sect11WatJeUiteindelijkMetSkinVisionMoetKunnenDoen from './Sect11WatJeUiteindelijkMetSkinVisionMoetKunnenDoen'
import Sect12Samenvatting from './Sect12Samenvatting'

const Blok5Week7Casus14LmoEthiekVanDermaAppsSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Derma-apps als ethisch vraagstuk', icon: Smartphone },
    { id: 'sect-03', title: 'Waarom ethiek hier nodig is', icon: Sparkles },
    { id: 'sect-04', title: 'De drie gebruikscontexten', icon: Layers },
    { id: 'sect-05', title: 'Respect voor autonomie', icon: Scale },
    { id: 'sect-06', title: 'Privacy en beroepsgeheim', icon: Shield },
    { id: 'sect-07', title: 'Rechtvaardigheid en inclusiviteit', icon: Table2 },
    { id: 'sect-08', title: 'Weldoen en niet-schaden', icon: HeartHandshake },
    { id: 'sect-09', title: 'Transparantie, verantwoordelijkheid en aansprakelijkheid', icon: Eye },
    { id: 'sect-10', title: 'Vertrouwen en regulering', icon: BadgeCheck },
    { id: 'sect-11', title: 'Wat je uiteindelijk met SkinVision moet kunnen doen', icon: Smartphone },
    { id: 'sect-12', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Ethiek van derma-apps"
      description="Huidkanker komt veel voor en de druk op de dermatologische zorg neemt toe. Daardoor is het begrijpelijk dat er veel interesse is in AI-toepassingen die kunnen helpen bij het beoordelen van huidafwijkingen."
      caseLabel="Week 7 · Casus 14: AI in de zorg"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week7-casus14-lmo-ethiek-van-derma-apps"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week7-casus14-lmo-ethiek-van-derma-apps',
      variants: [
        { id: 'blok5-week7-casus14-lmo-ethiek-van-derma-apps', label: 'Uitgebreid' },
        { id: 'blok5-week7-casus14-lmo-ethiek-van-derma-apps-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02DermaAppsAlsEthischVraagstuk />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03WaaromEthiekHierNodigIs />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04DeDrieGebruikscontexten />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05RespectVoorAutonomie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06PrivacyEnBeroepsgeheim />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07RechtvaardigheidEnInclusiviteit />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08WeldoenEnNietSchaden />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09TransparantieVerantwoordelijkheidAansprakelijkheid />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VertrouwenEnRegulering />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11WatJeUiteindelijkMetSkinVisionMoetKunnenDoen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week7Casus14LmoEthiekVanDermaAppsSamenvattingSummary

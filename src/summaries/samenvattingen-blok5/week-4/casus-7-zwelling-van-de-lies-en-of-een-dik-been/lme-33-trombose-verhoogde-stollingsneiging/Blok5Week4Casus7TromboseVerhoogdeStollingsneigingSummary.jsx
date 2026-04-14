import {
  Activity,
  BookOpen,
  CircleCheck,
  ClipboardList,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Brondocumentkop from './Sect01Brondocumentkop'
import Sect02Leerdoelen from './Sect02Leerdoelen'
import Sect03WatIsTrombose from './Sect03WatIsTrombose'
import Sect04HoeVaakKomtHetVoor from './Sect04HoeVaakKomtHetVoor'
import Sect05PathogeneseTriasVanVirchow from './Sect05PathogeneseTriasVanVirchow'
import Sect06DiagnostiekTrombosebeen from './Sect06DiagnostiekTrombosebeen'
import Sect07Anamnese from './Sect07Anamnese'
import Sect08DdimeerEnKlinischeKansschatting from './Sect08DdimeerEnKlinischeKansschatting'
import Sect09Tabel2DiagnostischeOnderzoeken from './Sect09Tabel2DiagnostischeOnderzoeken'
import Sect10DiagnostischeStrategie from './Sect10DiagnostischeStrategie'
import Sect11KlinischeBeslisregel from './Sect11KlinischeBeslisregel'
import Sect12BehandelingVanTrombose from './Sect12BehandelingVanTrombose'
import Sect13Heparine from './Sect13Heparine'
import Sect14LMWH from './Sect14LMWH'
import Sect15VKA from './Sect15VKA'
import Sect16INR from './Sect16INR'
import Sect17DOACEnTabel3 from './Sect17DOACEnTabel3'
import Sect18DOACOfVKATabel4 from './Sect18DOACOfVKATabel4'
import Sect19DuurVanDeBehandelingEnTabel5 from './Sect19DuurVanDeBehandelingEnTabel5'
import Sect20BloedingenBijOraleAntistolling from './Sect20BloedingenBijOraleAntistolling'
import Sect21PosttrombotischSyndroom from './Sect21PosttrombotischSyndroom'
import Sect22VillaltaScore from './Sect22VillaltaScore'
import Sect23BehandelingEnPreventieVanPTS from './Sect23BehandelingEnPreventieVanPTS'
import Sect24Samenvatting from './Sect24Samenvatting'

const Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 33 – Trombose verhoogde stollingsneiging', icon: BookOpen },
    { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Wat is trombose?', icon: Stethoscope },
    { id: 'sect-04', title: 'Hoe vaak komt het voor?', icon: Activity },
    { id: 'sect-05', title: 'Pathogenese: de trias van Virchow', icon: Table2 },
    { id: 'sect-06', title: 'Diagnostiek bij verdenking op een trombosebeen', icon: ClipboardList },
    { id: 'sect-07', title: 'Anamnese: waar vraag je naar?', icon: ClipboardList },
    { id: 'sect-08', title: 'D-dimeer en klinische kansschatting', icon: Microscope },
    { id: 'sect-09', title: 'Tabel 2. Diagnostische onderzoeken en hun plaats', icon: Table2 },
    { id: 'sect-10', title: 'Diagnostische strategie', icon: ClipboardList },
    { id: 'sect-11', title: 'Klinische beslisregel', icon: ClipboardList },
    { id: 'sect-12', title: 'Behandeling van trombose', icon: Syringe },
    { id: 'sect-13', title: 'Heparine', icon: Syringe },
    { id: 'sect-14', title: 'Low Molecular Weight Heparin (LMWH)', icon: Syringe },
    { id: 'sect-15', title: 'Vitamine K-antagonisten (VKA)', icon: Syringe },
    { id: 'sect-16', title: 'Wat is INR?', icon: Microscope },
    { id: 'sect-17', title: 'Directe orale anticoagulantia (DOAC)', icon: Table2 },
    { id: 'sect-18', title: 'DOAC of VKA?', icon: Table2 },
    { id: 'sect-19', title: 'Duur van de behandeling', icon: Stethoscope },
    { id: 'sect-20', title: 'Bloedingen bij orale antistolling', icon: Activity },
    { id: 'sect-21', title: 'Posttrombotisch syndroom (PTS)', icon: Stethoscope },
    { id: 'sect-22', title: 'Villalta-score', icon: Table2 },
    { id: 'sect-23', title: 'Behandeling en preventie van PTS', icon: Stethoscope },
    { id: 'sect-24', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Trombose verhoogde stollingsneiging"
      description="Trombose is de onbedoelde vorming van een bloedstolsel in een bloedvat."
      caseLabel="Week 4 · Casus 7: Zwelling van de lies en of een dik been"
      blokLabel="Blok 5"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok5-week4-casus7-trombose-verhoogde-stollingsneiging"
    summaryVariantToggle={{
      activeLmeId: 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging',
      variants: [
        { id: 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging', label: 'Uitgebreid' },
        { id: 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging-mini', label: 'Kort' },
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
        <Sect03WatIsTrombose />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HoeVaakKomtHetVoor />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05PathogeneseTriasVanVirchow />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06DiagnostiekTrombosebeen />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07Anamnese />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08DdimeerEnKlinischeKansschatting />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Tabel2DiagnostischeOnderzoeken />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10DiagnostischeStrategie />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11KlinischeBeslisregel />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BehandelingVanTrombose />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Heparine />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14LMWH />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15VKA />
      </section>
      <section id="sect-16" className="scroll-mt-24 mb-12">
        <Sect16INR />
      </section>
      <section id="sect-17" className="scroll-mt-24 mb-12">
        <Sect17DOACEnTabel3 />
      </section>
      <section id="sect-18" className="scroll-mt-24 mb-12">
        <Sect18DOACOfVKATabel4 />
      </section>
      <section id="sect-19" className="scroll-mt-24 mb-12">
        <Sect19DuurVanDeBehandelingEnTabel5 />
      </section>
      <section id="sect-20" className="scroll-mt-24 mb-12">
        <Sect20BloedingenBijOraleAntistolling />
      </section>
      <section id="sect-21" className="scroll-mt-24 mb-12">
        <Sect21PosttrombotischSyndroom />
      </section>
      <section id="sect-22" className="scroll-mt-24 mb-12">
        <Sect22VillaltaScore />
      </section>
      <section id="sect-23" className="scroll-mt-24 mb-12">
        <Sect23BehandelingEnPreventieVanPTS />
      </section>
      <section id="sect-24" className="scroll-mt-24 mb-12">
        <Sect24Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary

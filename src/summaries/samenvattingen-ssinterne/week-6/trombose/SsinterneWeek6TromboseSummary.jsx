// Auto-generated SSInterne samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-ssinterne-samenvattingen.mjs --module trombose
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectTromboseWatIsHetEnWaaromIsHetBelangr from './sections/SectTromboseWatIsHetEnWaaromIsHetBelangr'
import SectPathogeneseHoeOntstaatTrombose from './sections/SectPathogeneseHoeOntstaatTrombose'
import SectTabel1TriasVanVirchowMetVoorbeelden from './sections/SectTabel1TriasVanVirchowMetVoorbeelden'
import SectErfelijkeTrombofilie from './sections/SectErfelijkeTrombofilie'
import SectTabel2BelangrijksteErfelijkeTrombofi from './sections/SectTabel2BelangrijksteErfelijkeTrombofi'
import SectDiagnostiekBijVerdenkingOpEenTrombos from './sections/SectDiagnostiekBijVerdenkingOpEenTrombos'
import SectDifferentiaaldiagnoseVanEenDikEnPijn from './sections/SectDifferentiaaldiagnoseVanEenDikEnPijn'
import SectKunJeMetAlleenAnamneseEnLichamelijkO from './sections/SectKunJeMetAlleenAnamneseEnLichamelijkO'
import SectWelkeOnderzoekenGebruikJe from './sections/SectWelkeOnderzoekenGebruikJe'
import SectKlinischeBeslisregel from './sections/SectKlinischeBeslisregel'
import SectTabel3KlinischeBeslisregelBijVerdenk from './sections/SectTabel3KlinischeBeslisregelBijVerdenk'
import SectDDimeer from './sections/SectDDimeer'
import SectDiagnostischeStrategie from './sections/SectDiagnostischeStrategie'
import SectTabel4DiagnostischeStrategieBijVerde from './sections/SectTabel4DiagnostischeStrategieBijVerde'
import SectBehandelingVanEenTrombosebeen from './sections/SectBehandelingVanEenTrombosebeen'
import SectAntistollingsmiddelen from './sections/SectAntistollingsmiddelen'
import SectTabel5AntistollingsmiddelenEnHunWerk from './sections/SectTabel5AntistollingsmiddelenEnHunWerk'
import SectHeparine from './sections/SectHeparine'
import SectLmwhEnPentasaccharide from './sections/SectLmwhEnPentasaccharide'
import SectVitamineKAntagonisten from './sections/SectVitamineKAntagonisten'
import SectDoacS from './sections/SectDoacS'
import SectTabel6BelangrijksteDoacS from './sections/SectTabel6BelangrijksteDoacS'
import SectDoacOfVka from './sections/SectDoacOfVka'
import SectStartVanDeBehandelingNaObjectieveDia from './sections/SectStartVanDeBehandelingNaObjectieveDia'
import SectTabel7GebruikelijkeDoseringenVanDoac from './sections/SectTabel7GebruikelijkeDoseringenVanDoac'
import SectBloedingenOnderOraleAntistolling from './sections/SectBloedingenOnderOraleAntistolling'
import SectDuurVanDeBehandeling from './sections/SectDuurVanDeBehandeling'
import SectTijdelijkeRisicofactoren from './sections/SectTijdelijkeRisicofactoren'
import SectNietTijdelijkeOfIdiopathischeRisicof from './sections/SectNietTijdelijkeOfIdiopathischeRisicof'
import SectDuurBijEenEersteEvent from './sections/SectDuurBijEenEersteEvent'
import SectErfelijkeTrombofilieEnRecidiefkans from './sections/SectErfelijkeTrombofilieEnRecidiefkans'
import SectPosttrombotischSyndroom from './sections/SectPosttrombotischSyndroom'
import SectKlachtenEnVillaltaScore from './sections/SectKlachtenEnVillaltaScore'
import SectTabel8VillaltaScore from './sections/SectTabel8VillaltaScore'
import SectTabel9UitslagVillaltaScore from './sections/SectTabel9UitslagVillaltaScore'
import SectBehandelingEnPreventieVanPts from './sections/SectBehandelingEnPreventieVanPts'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Trombose: wat is het en waarom is het belangrijk?", icon: FileText },
    { id: 'sect-03', title: "Pathogenese: hoe ontstaat trombose?", icon: FileText },
    { id: 'sect-04', title: "Tabel 1. Trias van Virchow met voorbeelden", icon: Table2 },
    { id: 'sect-05', title: "Erfelijke trombofilie", icon: FileText },
    { id: 'sect-06', title: "Tabel 2. Belangrijkste erfelijke trombofiliefactoren", icon: Table2 },
    { id: 'sect-07', title: "Diagnostiek bij verdenking op een trombosebeen", icon: Microscope },
    { id: 'sect-08', title: "Differentiaaldiagnose van een dik en pijnlijk been", icon: FileText },
    { id: 'sect-09', title: "Kun je met alleen anamnese en lichamelijk onderzoek de diagnose stellen?", icon: Microscope },
    { id: 'sect-10', title: "Welke onderzoeken gebruik je?", icon: Microscope },
    { id: 'sect-11', title: "Klinische beslisregel", icon: FileText },
    { id: 'sect-12', title: "Tabel 3. Klinische beslisregel bij verdenking DVT", icon: Table2 },
    { id: 'sect-13', title: "D-dimeer", icon: FileText },
    { id: 'sect-14', title: "Diagnostische strategie", icon: Microscope },
    { id: 'sect-15', title: "Tabel 4. Diagnostische strategie bij verdenking DVT", icon: Table2 },
    { id: 'sect-16', title: "Behandeling van een trombosebeen", icon: HeartPulse },
    { id: 'sect-17', title: "Antistollingsmiddelen", icon: FileText },
    { id: 'sect-18', title: "Tabel 5. Antistollingsmiddelen en hun werking", icon: Table2 },
    { id: 'sect-19', title: "Heparine", icon: FileText },
    { id: 'sect-20', title: "LMWH en pentasaccharide", icon: FileText },
    { id: 'sect-21', title: "Vitamine K-antagonisten", icon: FileText },
    { id: 'sect-22', title: "DOAC’s", icon: FileText },
    { id: 'sect-23', title: "Tabel 6. Belangrijkste DOAC’s", icon: Table2 },
    { id: 'sect-24', title: "DOAC of VKA?", icon: FileText },
    { id: 'sect-25', title: "Start van de behandeling na objectieve diagnose", icon: HeartPulse },
    { id: 'sect-26', title: "Tabel 7. Gebruikelijke doseringen van DOAC’s bij DVT", icon: Table2 },
    { id: 'sect-27', title: "Bloedingen onder orale antistolling", icon: FileText },
    { id: 'sect-28', title: "Duur van de behandeling", icon: HeartPulse },
    { id: 'sect-29', title: "Tijdelijke risicofactoren", icon: FileText },
    { id: 'sect-30', title: "Niet-tijdelijke of idiopathische risicofactoren", icon: FileText },
    { id: 'sect-31', title: "Duur bij een eerste event", icon: FileText },
    { id: 'sect-32', title: "Erfelijke trombofilie en recidiefkans", icon: FileText },
    { id: 'sect-33', title: "Posttrombotisch syndroom", icon: FileText },
    { id: 'sect-34', title: "Klachten en Villalta-score", icon: Activity },
    { id: 'sect-35', title: "Tabel 8. Villalta-score", icon: Table2 },
    { id: 'sect-36', title: "Tabel 9. Uitslag Villalta-score", icon: Table2 },
    { id: 'sect-37', title: "Behandeling en preventie van PTS", icon: HeartPulse },
    { id: 'sect-38', title: "Samenvatting", icon: CircleCheck },
]

const SsinterneWeek6TromboseSummary = () => (
  <SummaryLayout
    title="Trombose"
    description="Trombose: wat is het en waarom is het belangrijk?"
    caseLabel="Week 6 · Trombose"
    blokLabel="Interne Geneeskunde"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectTromboseWatIsHetEnWaaromIsHetBelangr />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectPathogeneseHoeOntstaatTrombose />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectTabel1TriasVanVirchowMetVoorbeelden />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectErfelijkeTrombofilie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectTabel2BelangrijksteErfelijkeTrombofi />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectDiagnostiekBijVerdenkingOpEenTrombos />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectDifferentiaaldiagnoseVanEenDikEnPijn />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectKunJeMetAlleenAnamneseEnLichamelijkO />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectWelkeOnderzoekenGebruikJe />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectKlinischeBeslisregel />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectTabel3KlinischeBeslisregelBijVerdenk />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectDDimeer />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectDiagnostischeStrategie />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectTabel4DiagnostischeStrategieBijVerde />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectBehandelingVanEenTrombosebeen />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectAntistollingsmiddelen />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectTabel5AntistollingsmiddelenEnHunWerk />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectHeparine />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectLmwhEnPentasaccharide />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectVitamineKAntagonisten />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectDoacS />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectTabel6BelangrijksteDoacS />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectDoacOfVka />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectStartVanDeBehandelingNaObjectieveDia />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectTabel7GebruikelijkeDoseringenVanDoac />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectBloedingenOnderOraleAntistolling />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectDuurVanDeBehandeling />
    </section>
    <section id="sect-29" className="scroll-mt-24 mb-12">
      <SectTijdelijkeRisicofactoren />
    </section>
    <section id="sect-30" className="scroll-mt-24 mb-12">
      <SectNietTijdelijkeOfIdiopathischeRisicof />
    </section>
    <section id="sect-31" className="scroll-mt-24 mb-12">
      <SectDuurBijEenEersteEvent />
    </section>
    <section id="sect-32" className="scroll-mt-24 mb-12">
      <SectErfelijkeTrombofilieEnRecidiefkans />
    </section>
    <section id="sect-33" className="scroll-mt-24 mb-12">
      <SectPosttrombotischSyndroom />
    </section>
    <section id="sect-34" className="scroll-mt-24 mb-12">
      <SectKlachtenEnVillaltaScore />
    </section>
    <section id="sect-35" className="scroll-mt-24 mb-12">
      <SectTabel8VillaltaScore />
    </section>
    <section id="sect-36" className="scroll-mt-24 mb-12">
      <SectTabel9UitslagVillaltaScore />
    </section>
    <section id="sect-37" className="scroll-mt-24 mb-12">
      <SectBehandelingEnPreventieVanPts />
    </section>
    <section id="sect-38" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SsinterneWeek6TromboseSummary

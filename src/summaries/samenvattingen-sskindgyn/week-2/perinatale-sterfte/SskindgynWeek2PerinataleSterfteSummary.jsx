// Auto-generated SSKindgyn samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-sskindgyn-samenvattingen.mjs --module perinatale-sterfte
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
import SectPerinataleSterfteWatBedoelenWeErmee from './sections/SectPerinataleSterfteWatBedoelenWeErmee'
import SectCijfersEnBetekenisVanPerinataleSterf from './sections/SectCijfersEnBetekenisVanPerinataleSterf'
import SectWaaromIsDePerinataleSterfteInNederla from './sections/SectWaaromIsDePerinataleSterfteInNederla'
import SectDeBelangrijksteOorzakenDeBig4 from './sections/SectDeBelangrijksteOorzakenDeBig4'
import SectRisicofactorenVoorPerinataleSterfte from './sections/SectRisicofactorenVoorPerinataleSterfte'
import SectVerschillenTussenLandenStedenEnRegio from './sections/SectVerschillenTussenLandenStedenEnRegio'
import SectNachtEnDagVerschilInUitkomsten from './sections/SectNachtEnDagVerschilInUitkomsten'
import SectPrenataleZorgInNederland from './sections/SectPrenataleZorgInNederland'
import SectPreventieWatKunJeDoen from './sections/SectPreventieWatKunJeDoen'
import SectStuurgroepZwangerschapEnGeboorte from './sections/SectStuurgroepZwangerschapEnGeboorte'
import SectSubstandaardFactorenEnPerinataleAudi from './sections/SectSubstandaardFactorenEnPerinataleAudi'
import SectKlinischeBetekenisVanDeCasus from './sections/SectKlinischeBetekenisVanDeCasus'
import SectAdviezenVoorEenVolgendeZwangerschap from './sections/SectAdviezenVoorEenVolgendeZwangerschap'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Perinatale sterfte: wat bedoelen we ermee?", icon: FileText },
    { id: 'sect-03', title: "Cijfers en betekenis van perinatale sterfte", icon: FileText },
    { id: 'sect-04', title: "Waarom is de perinatale sterfte in Nederland relatief hoog?", icon: FileText },
    { id: 'sect-05', title: "De belangrijkste oorzaken: de “big 4”", icon: FileText },
    { id: 'sect-06', title: "Risicofactoren voor perinatale sterfte", icon: FileText },
    { id: 'sect-07', title: "Verschillen tussen landen, steden en regio’s", icon: FileText },
    { id: 'sect-08', title: "Nacht en dag: verschil in uitkomsten", icon: FileText },
    { id: 'sect-09', title: "Prenatale zorg in Nederland", icon: FileText },
    { id: 'sect-10', title: "Preventie: wat kun je doen?", icon: FileText },
    { id: 'sect-11', title: "Stuurgroep Zwangerschap en Geboorte", icon: FileText },
    { id: 'sect-12', title: "Substandaard factoren en perinatale audit", icon: FileText },
    { id: 'sect-13', title: "Klinische betekenis van de casus", icon: Activity },
    { id: 'sect-14', title: "Adviezen voor een volgende zwangerschap", icon: FileText },
    { id: 'sect-15', title: "Samenvatting", icon: CircleCheck },
]

const SskindgynWeek2PerinataleSterfteSummary = () => (
  <SummaryLayout
    title="Perinatale sterfte"
    description="Na het doornemen van deze stof kun je uitleg geven over de organisatie van de perinatale zorg in Nederland, met als doel de perinatale sterfte verder te verlagen. Je kunt ook maatregelen benoemen die de perinatale sterfte beïnvloeden en…"
    caseLabel="Week 2 · Perinatale sterfte"
    blokLabel="Kindergeneeskunde & Gynaecologie"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectPerinataleSterfteWatBedoelenWeErmee />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectCijfersEnBetekenisVanPerinataleSterf />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectWaaromIsDePerinataleSterfteInNederla />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectDeBelangrijksteOorzakenDeBig4 />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectRisicofactorenVoorPerinataleSterfte />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectVerschillenTussenLandenStedenEnRegio />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectNachtEnDagVerschilInUitkomsten />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectPrenataleZorgInNederland />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectPreventieWatKunJeDoen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectStuurgroepZwangerschapEnGeboorte />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectSubstandaardFactorenEnPerinataleAudi />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectKlinischeBetekenisVanDeCasus />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectAdviezenVoorEenVolgendeZwangerschap />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default SskindgynWeek2PerinataleSterfteSummary

import SummaryLayout from '../../../../../components/SummaryLayout';
import {
  Layers,
  Zap,
  Shield,
  SlidersHorizontal,
  ShieldCheck,
  AlertTriangle,
  Pill,
  BookOpen,
} from 'lucide-react'
import Section01AnatomieEnCeltypenMiniSummary from './Section01AnatomieEnCeltypenMiniSummary'
import Section02HclProductieMiniSummary from './Section02HclProductieMiniSummary'
import Section03FunctiesMiniSummary from './Section03FunctiesMiniSummary'
import Section04RegulatieMiniSummary from './Section04RegulatieMiniSummary'
import Section05BeschermingMiniSummary from './Section05BeschermingMiniSummary'
import Section06SchadelijkeFactorenMiniSummary from './Section06SchadelijkeFactorenMiniSummary'
import Section07FarmacotherapieMiniSummary from './Section07FarmacotherapieMiniSummary'

const ICONS = {
  Layers,
  Zap,
  Shield,
  SlidersHorizontal,
  ShieldCheck,
  AlertTriangle,
  Pill,
};

const sectionMeta = [
  {
    id: "sect-01",
    title: "Anatomie & celtypen van de maag",
    iconKey: "Layers",
  },
  {
    id: "sect-02",
    title: "HCl-productie door de pariëtale cel",
    iconKey: "Zap",
  },
  { id: "sect-03", title: "Functies van maagzuur", iconKey: "Shield" },
  {
    id: "sect-04",
    title: "Regulatie van maagzuursecretie",
    iconKey: "SlidersHorizontal",
  },
  {
    id: "sect-05",
    title: "Bescherming van de maagwand",
    iconKey: "ShieldCheck",
  },
  {
    id: "sect-06",
    title: "Schadelijke factoren: NSAIDs & H. pylori",
    iconKey: "AlertTriangle",
  },
  {
    id: "sect-07",
    title: "Zollinger-Ellison, vagotomie & farmacotherapie",
    iconKey: "Pill",
  },
];

const tableOfContents = sectionMeta.map(({ id, title, iconKey }) => {
  const I = ICONS[iconKey] || BookOpen;
  return { id, title, icon: I };
});

const Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurMiniSummary = () => {
  return (
    <SummaryLayout
      title="Fysiologie van maagzuur"
      description="Verkorte samenvatting (~900 woorden)."
      caseLabel="Week 1 · Casus 1: Maagklachten"
      blokLabel="Blok 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur"
      summaryVariantToggle={{
        activeLmeId: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur-mini',
        variants: [
          { id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur', label: 'Uitgebreid' },
          { id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur-mini', label: 'Kort' },
        ],
      }}
    >
      <div className="space-y-12">
        <Section01AnatomieEnCeltypenMiniSummary id="sect-01" />
        <Section02HclProductieMiniSummary id="sect-02" />
        <Section03FunctiesMiniSummary id="sect-03" />
        <Section04RegulatieMiniSummary id="sect-04" />
        <Section05BeschermingMiniSummary id="sect-05" />
        <Section06SchadelijkeFactorenMiniSummary id="sect-06" />
        <Section07FarmacotherapieMiniSummary id="sect-07" />
      </div>
    </SummaryLayout>
  )
}

export default Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurMiniSummary

import {
  BookOpen,
  CircleCheck,
  GitBranch,
  HelpCircle,
  Layers,
  Scale,
  Shield,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02SelectieWaaromEnBLymfocyten from './Sect02SelectieWaaromEnBLymfocyten'
import Sect03Tabel1TolerantieMechanismen from './Sect03Tabel1TolerantieMechanismen'
import Sect04AandachtVraagjeReceptorEditing from './Sect04AandachtVraagjeReceptorEditing'
import Sect05TSelectieCortexEnLineage from './Sect05TSelectieCortexEnLineage'
import Sect06Tabel2EnNegatieveSelectieMedulla from './Sect06Tabel2EnNegatieveSelectieMedulla'
import Sect07AireEnRegulatorischeT from './Sect07AireEnRegulatorischeT'
import Sect08ThymusPeriferieEnVraagjes from './Sect08ThymusPeriferieEnVraagjes'
import Sect09SamenhangEnSlot from './Sect09SamenhangEnSlot'

const Blok5Week5Casus9LmoPositieveEnNegatieveSelectieSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Selectie van lymfocyten en B-celontwikkeling', icon: GitBranch },
    { id: 'sect-03', title: 'Tabel 1. Mechanismen van tolerantie', icon: Table2 },
    { id: 'sect-04', title: 'Aandacht-vraagje (receptor editing)', icon: HelpCircle },
    { id: 'sect-05', title: 'T-selectie in de thymus (cortex, lineage)', icon: Shield },
    { id: 'sect-06', title: 'Tabel 2 en negatieve selectie in de medulla', icon: Table2 },
    { id: 'sect-07', title: 'Rol van AIRE en regulatorische T-cellen', icon: Layers },
    { id: 'sect-08', title: 'Thymus output, perifere tolerantie, vraagjes', icon: Scale },
    { id: 'sect-09', title: 'Samenhang en samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Positieve en negatieve selectie"
      description="Tijdens hun ontwikkeling maken B- en T-lymfocyten receptoren aan waarmee zij antigenen kunnen herkennen. Dat gebeurt niet doelgericht, maar door herschikking van gensegmenten. Daardoor ontstaat een enorme variatie aan receptoren, wat gunstig is voor de afweer tegen veel verschillende ziekteverwekkers. Tegelijk ontstaat daardoor ook een risico: sommige lymfocyten krijgen een receptor die lichaamseigen structuren herkent."
      caseLabel="Week 5 · Casus 9: Patiënt met auto-immuunziekte"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week5-casus9-lmo-positieve-en-negatieve-selectie"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie',
      variants: [
        { id: 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie', label: 'Uitgebreid' },
        { id: 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02SelectieWaaromEnBLymfocyten />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03Tabel1TolerantieMechanismen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04AandachtVraagjeReceptorEditing />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05TSelectieCortexEnLineage />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel2EnNegatieveSelectieMedulla />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07AireEnRegulatorischeT />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08ThymusPeriferieEnVraagjes />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09SamenhangEnSlot />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week5Casus9LmoPositieveEnNegatieveSelectieSummary

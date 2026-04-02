import {
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
import Sect03HuidinfectiesWaarZitDeInfectie from './Sect03HuidinfectiesWaarZitDeInfectie'
import Sect04KlinischBeeld from './Sect04KlinischBeeld'
import Sect05Anamnese from './Sect05Anamnese'
import Sect06Risicofactoren from './Sect06Risicofactoren'
import Sect07LichamelijkOnderzoek from './Sect07LichamelijkOnderzoek'
import Sect08AanvullendOnderzoek from './Sect08AanvullendOnderzoek'
import Sect09Verwekkers from './Sect09Verwekkers'
import Sect10Behandeling from './Sect10Behandeling'
import Sect11ExtraBeleidBijZwelling from './Sect11ExtraBeleidBijZwelling'
import Sect12BeloopEnKlinischeUitkomst from './Sect12BeloopEnKlinischeUitkomst'
import Sect13Samenvatting from './Sect13Samenvatting'

const Blok5Week4Casus8ErysipelasEnCellulitisSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'LME 34 – Erysipelas en cellulitis', icon: BookOpen },
    { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-03', title: 'Huidinfecties: waar zit de infectie?', icon: Stethoscope },
    { id: 'sect-04', title: 'Klinisch beeld: hoe zien erysipelas en cellulitis eruit?', icon: Stethoscope },
    { id: 'sect-05', title: 'Anamnese: welke klachten passen erbij?', icon: ClipboardList },
    { id: 'sect-06', title: 'Risicofactoren: exogeen en endogeen', icon: Table2 },
    { id: 'sect-07', title: 'Lichamelijk onderzoek: wat vind je?', icon: Stethoscope },
    { id: 'sect-08', title: 'Aanvullend onderzoek: wat laat het zien?', icon: Microscope },
    { id: 'sect-09', title: 'Verwekkers: welke micro-organismen passen erbij?', icon: Microscope },
    { id: 'sect-10', title: 'Behandeling: hoe pak je het aan?', icon: Syringe },
    { id: 'sect-11', title: 'Extra beleid bij zwelling', icon: Stethoscope },
    { id: 'sect-12', title: 'Beloop en klinische uitkomst', icon: ClipboardList },
    { id: 'sect-13', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Erysipelas en cellulitis"
      description="Een rood been kan passen bij een huidinfectie."
      caseLabel="Week 4 · Casus 8: Zwelling in de oksel"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week4-casus8-erysipelas-en-cellulitis"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Brondocumentkop />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02Leerdoelen />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03HuidinfectiesWaarZitDeInfectie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04KlinischBeeld />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05Anamnese />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Risicofactoren />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07LichamelijkOnderzoek />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08AanvullendOnderzoek />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Verwekkers />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10Behandeling />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11ExtraBeleidBijZwelling />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12BeloopEnKlinischeUitkomst />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week4Casus8ErysipelasEnCellulitisSummary

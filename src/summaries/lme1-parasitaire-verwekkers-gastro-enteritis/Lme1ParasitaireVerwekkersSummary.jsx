import {
  BookOpen, LayoutList, Bug, Video, Microscope, RefreshCw,
  Layers, HelpCircle
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'
import Image01IntroductieSummary from './Image01IntroductieSummary'
import Image02MenuSummary from './Image02MenuSummary'
import Image03MeestVoorkomendeParasietenSummary from './Image03MeestVoorkomendeParasietenSummary'
import Image04Kennisclip1Summary from './Image04Kennisclip1Summary'
import Image05ProtozoaKenmerkenSummary from './Image05ProtozoaKenmerkenSummary'
import Image06EntamoebaLevenscyclusSummary from './Image06EntamoebaLevenscyclusSummary'
import Image07Kennisclip2Summary from './Image07Kennisclip2Summary'
import Image08VermenigvuldigingSummary from './Image08VermenigvuldigingSummary'
import Image09DiagnostiekVraagSummary from './Image09DiagnostiekVraagSummary'
import Image10Kennisclip3Summary from './Image10Kennisclip3Summary'
import Image11DiagnostiekTechniekenSummary from './Image11DiagnostiekTechniekenSummary'

const Lme1ParasitaireVerwekkersSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Introductie en leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Introductie thema', icon: LayoutList },
    { id: 'sect-03', title: 'Meest voorkomende darmparasieten', icon: Bug },
    { id: 'sect-04', title: 'Kennisclip 1 – Inleiding en classificatie', icon: Video },
    { id: 'sect-05', title: 'Kenmerken parasitaire protozoa', icon: Microscope },
    { id: 'sect-06', title: 'Levenscyclus Entamoeba histolytica', icon: RefreshCw },
    { id: 'sect-07', title: 'Kennisclip 2 – Gastro-intestinale wormen', icon: Video },
    { id: 'sect-08', title: 'Vermenigvuldiging van darmparasieten', icon: Layers },
    { id: 'sect-09', title: 'Diagnostiek en verschillen', icon: HelpCircle },
    { id: 'sect-10', title: 'Kennisclip 3 – Inleiding diagnostiek', icon: Video },
    { id: 'sect-11', title: 'Diagnostische technieken', icon: Microscope },
  ]

  return (
    <SummaryLayout
      title="Parasitaire verwekkers van gastro-enteritis"
      description="Complete samenvatting van de module over parasitaire oorzaken van diarree: classificatie, protozoa, wormen en diagnostiek."
      caseLabel="Week 5 Casus 9 LME 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis"
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Image01IntroductieSummary standalone={false} />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Image02MenuSummary standalone={false} />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Image03MeestVoorkomendeParasietenSummary standalone={false} />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Image04Kennisclip1Summary standalone={false} />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Image05ProtozoaKenmerkenSummary standalone={false} />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Image06EntamoebaLevenscyclusSummary standalone={false} />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Image07Kennisclip2Summary standalone={false} />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Image08VermenigvuldigingSummary standalone={false} />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Image09DiagnostiekVraagSummary standalone={false} />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Image10Kennisclip3Summary standalone={false} />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Image11DiagnostiekTechniekenSummary standalone={false} />
      </section>
    </SummaryLayout>
  )
}

export default Lme1ParasitaireVerwekkersSummary

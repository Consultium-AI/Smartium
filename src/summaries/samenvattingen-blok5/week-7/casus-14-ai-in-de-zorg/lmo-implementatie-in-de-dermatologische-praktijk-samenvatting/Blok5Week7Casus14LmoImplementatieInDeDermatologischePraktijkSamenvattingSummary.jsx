import {
  BookOpen,
  CircleCheck,
  Image,
  LayoutList,
  Scale,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WaarGaatHetOm from './Sect02WaarGaatHetOm'
import Sect03AiInDeAlgemenePopulatie from './Sect03AiInDeAlgemenePopulatie'
import Sect04HuisartsenpraktijkArtikelen from './Sect04HuisartsenpraktijkArtikelen'
import Sect05FigurenTweeEnDrie from './Sect05FigurenTweeEnDrie'
import Sect06Tabel2KansenEnKnelpunten from './Sect06Tabel2KansenEnKnelpunten'
import Sect07IntegraalZorgakkoord from './Sect07IntegraalZorgakkoord'
import Sect08Samenvatting from './Sect08Samenvatting'

const Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkSamenvattingSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Implementatie van AI in de dermatologie: waar gaat het eigenlijk om?', icon: LayoutList },
    { id: 'sect-03', title: 'AI in de algemene populatie', icon: Table2 },
    { id: 'sect-04', title: 'AI in de huisartsenpraktijk', icon: Stethoscope },
    { id: 'sect-05', title: 'Wat leren we van figuur 2 en 3?', icon: Image },
    { id: 'sect-06', title: 'Tabel 2. Belangrijkste kansen en knelpunten in de huisartsenpraktijk', icon: Table2 },
    { id: 'sect-07', title: 'Waarom sluit dit aan bij het Integraal Zorgakkoord?', icon: Scale },
    { id: 'sect-08', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Implementatie in de dermatologische praktijk"
      description="Deze module gaat niet vooral over de vraag of AI huidafwijkingen technisch kan herkennen, maar vooral over de vraag wat er gebeurt als je zo’n AI-toepassing echt in de zorg invoert. Dat is een belangrijk verschil. Een algoritme kan in onderzoek goed presteren, maar implementatie lukt pas echt als het ook in de praktijk uitvoerbaar, bruikbaar, veilig en zinvol is."
      caseLabel="Week 7 · Casus 14: AI in de zorg"
      blokLabel="Blok 5"
      moduleKind="lmo"
      practiceLink="/oefenvragen?lme=blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk"
      tableOfContents={tableOfContents}
    summaryVariantToggle={{
      activeLmeId: 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk',
      variants: [
        { id: 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk', label: 'Uitgebreid' },
        { id: 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk-mini', label: 'Kort' },
      ],
    }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02WaarGaatHetOm />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03AiInDeAlgemenePopulatie />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04HuisartsenpraktijkArtikelen />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05FigurenTweeEnDrie />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Tabel2KansenEnKnelpunten />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07IntegraalZorgakkoord />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkSamenvattingSummary

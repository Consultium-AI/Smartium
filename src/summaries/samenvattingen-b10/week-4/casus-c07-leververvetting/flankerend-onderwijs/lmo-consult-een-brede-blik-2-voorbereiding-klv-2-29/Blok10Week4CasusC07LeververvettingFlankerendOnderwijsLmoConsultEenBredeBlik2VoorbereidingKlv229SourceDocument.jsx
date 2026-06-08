import SummaryLayout from '../../../../../../components/SummaryLayout'
import SourceDocumentViewer from '../../../../../../components/SourceDocumentViewer'

const DOCUMENT_SLUG = 'lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29'
const PUBLIC_FOLDER = `${import.meta.env.BASE_URL}flankerend-onderwijs/blok10/week-4/casus-c07-leververvetting/`

const Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoConsultEenBredeBlik2VoorbereidingKlv229SourceDocument = () => (
  <SummaryLayout
    title="Consult Een brede blik 2 (voorbereiding KLV 2.29)"
    moduleKind="lmo"
    description="Origineel brondocument. Bekijk het materiaal hieronder of download het Word-bestand."
    caseLabel="Week 4 · Casus C07: Leververvetting"
    blokLabel="Blok 10"
    tableOfContents={[]}
    practiceLink="/oefenvragen?lme=blok10-week4-casus-c07-leververvetting-lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29"
  >
    <SourceDocumentViewer
      htmlUrl={`${PUBLIC_FOLDER}${DOCUMENT_SLUG}.html`}
      docxUrl={`${PUBLIC_FOLDER}${DOCUMENT_SLUG}.docx`}
      docxFileName="LMO Consult Een brede blik 2 (voorbereiding KLV 2.29).docx"
    />
  </SummaryLayout>
)

export default Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoConsultEenBredeBlik2VoorbereidingKlv229SourceDocument

import SummaryLayout from '../../components/SummaryLayout'
import { Target } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-10', title: 'Samenvatting', icon: Target },
]

export default function Image10SamenvattingSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Samenvatting'
      description='Kernpunten over normale reflux, refluxziekte, alarmsignalen en eerste beleid.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-10' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Target className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Samenvatting</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>Reflux bij kinderen is vaak <strong>fysiologisch</strong> en dus normaal, vooral bij zuigelingen. Het is belangrijk om onderscheid te maken tussen <strong>gewone reflux (GOR)</strong>, <strong>refluxziekte (GORZ)</strong>, <strong>regurgitatie</strong>, <strong>braken</strong> en <strong>ruminatie</strong>. De kernvraag is steeds: zijn de klachten hinderlijk of zijn er complicaties?</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Let bij de anamnese altijd op <strong>groei</strong>, <strong>hoeveelheid voeding</strong>, <strong>alarmsymptomen</strong>, het <strong>aspect van het braaksel</strong>, ontlasting, koorts, buikpijn en familieanamnese. Red flags zoals <strong>onvoldoende groei</strong>, <strong>galbraken</strong>, <strong>hematemesis</strong>, <strong>nachtelijk braken</strong>, <strong>neurologische tekenen</strong> of <strong>abdominale distensie</strong> vragen om verder onderzoek.</p>
          </div>

          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p className='text-teal-800'>Bij een gezonde baby zonder alarmsignalen begin je met <strong>uitleg, het voorkomen van overvoeding, goede houding, en zo nodig indikken van de voeding</strong>. Als klachten blijven bestaan, denk je aan andere voeding of aan verwijzing. Bij een kind met onvoldoende groei of duidelijke distress moet je ook denken aan een onderliggende oorzaak, zoals <strong>koemelkallergie</strong>.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}

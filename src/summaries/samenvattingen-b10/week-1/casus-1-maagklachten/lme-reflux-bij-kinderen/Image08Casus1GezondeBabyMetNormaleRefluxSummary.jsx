import SummaryLayout from '../../components/SummaryLayout'
import { HeartPulse } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-08', title: 'Casus 1: gezonde baby met normale reflux', icon: HeartPulse },
]

export default function Image08Casus1GezondeBabyMetNormaleRefluxSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Casus 1: gezonde baby met normale reflux'
      description='Een gezonde zuigeling met spugen na de fles, goede groei en geen alarmsignalen.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-08' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <HeartPulse className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Casus 1: gezonde baby met normale reflux</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p>In de eerste casus gaat het om een baby van 3 maanden die bij de geboorte 3,5 kg woog en nu 5,3 kg weegt. De baby spuugt ongeveer 20 minuten na de fles een flinke golf terug, maar is direct daarna meestal weer comfortabel. Hij slaapt goed, lacht, is beweeglijk en heeft geen alarmsignalen. Er wordt ook veel geboord en soms is er droge hoest.</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Dit past bij <strong>normale reflux</strong> bij een gezonde zuigeling. De groei is goed, en er zijn geen signalen voor refluxziekte.</p>
          </div>

          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>Belangrijk in dit geval zijn de adviezen:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>breng het flesvolume terug naar een normale hoeveelheid;</li>
              <li>voorkom overvoeding;</li>
              <li>geef uitleg dat spugen op deze leeftijd vaak voorkomt;</li>
              <li>let op houding tijdens en na de voeding;</li>
              <li>laat tussendoor goed boeren;</li>
              <li>zo nodig kan voeding worden verdikt.</li>
            </ul>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Bij deze baby was 8 × 50 ml per dag bijvoorbeeld maar 400 ml totaal, wat neerkomt op ongeveer <strong>105 ml/kg/dag</strong>. Dat is duidelijk minder dan de geadviseerde <strong>150 ml/kg/dag</strong>. De klachten konden dus goed verklaard worden door een te lage totale inname en niet door refluxziekte.</p>
            <p>Nabespreking na 2-3 weken is verstandig om te beoordelen of de adviezen effect hebben.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}

import SummaryLayout from '../../components/SummaryLayout'
import { Shield } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-09', title: 'Casus 2: baby met refluxklachten en onvoldoende groei', icon: Shield },
]

export default function Image09Casus2BabyMetRefluxklachtenEnOnvoldoendeGroeiSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Casus 2: baby met refluxklachten en onvoldoende groei'
      description='Een zuigeling met ontroostbaarheid, weinig totale voeding en onvoldoende groei.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-09' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Shield className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Casus 2: baby met refluxklachten en onvoldoende groei</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-amber-50 rounded-xl border border-amber-200'>
            <p>In de tweede casus is er een baby van 2,5 maand met veel huilen, slecht slapen, overstrekken na de voeding, veel windjes en wisselende, vaak dunne ontlasting. Ze krijgt vaak kleine beetjes, maar per dag toch te weinig totale voeding binnen. Haar geboortegewicht was 3,4 kg en haar huidige gewicht is 3,8 kg. Dat is onvoldoende groei.</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Hier denk je niet meer alleen aan gewone reflux. De combinatie van <strong>onvoldoende groei</strong> en <strong>ontroostbaarheid na voedingen</strong> wijst op een mogelijk onderliggend probleem, zoals <strong>koemelkallergie</strong>.</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Ook hier bleek de totale voeding laag: 8 × 50 ml per dag is 400 ml per dag, wat bij 3,8 kg neerkomt op ongeveer <strong>105 ml/kg/dag</strong>. Dat is flink minder dan de aanbevolen hoeveelheid. Daarom is het logisch om naast reflux ook de voedingsinname en een mogelijke allergische component te beoordelen.</p>
          </div>

          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>Als klachten ondanks verdikken van de voeding niet verbeteren, zijn de vervolgstappen:</p>
            <ul className='list-disc pl-6 space-y-1 text-primary-700 text-sm'>
              <li>verder uitdiepen van alarmsignalen;</li>
              <li>zo nodig diagnostiek inzetten;</li>
              <li>overstappen op een <strong>eiwithydrolysaat</strong> of <strong>aminozuurgebaseerde voeding</strong>;</li>
              <li>bij borstvoeding: eliminatie van koemelk uit het dieet van de moeder gedurende 2-4 weken;</li>
              <li>pas later, als het nodig blijft, zuurremmers overwegen;</li>
              <li>bij aanhoudende klachten of terugkeer van klachten tijdens afbouwen: verwijzen naar de kinderarts/kinder-MDL.</li>
            </ul>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}

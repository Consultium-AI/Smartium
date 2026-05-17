import SummaryLayout from '../../components/SummaryLayout'
import { Layers } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-02', title: 'Reflux bij kinderen: wat bedoelen we ermee?', icon: Layers },
]

export default function Image02RefluxBijKinderenWatBedoelenWeErmeeSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Reflux bij kinderen: wat bedoelen we ermee?'
      description='Normale reflux, regurgitatie, braken, ruminatie en het onderscheid met refluxziekte.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-02' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <Layers className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Reflux bij kinderen: wat bedoelen we ermee?</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>
              Bij kinderen komt maaginhoud soms via de mond weer terug. Ouders zien dat vaak als een teken van ziekte of problemen van maag of darmen. Toch is dat bij zuigelingen lang niet altijd zo. Het teruggeven van kleine beetjes voeding is in de eerste levensmaanden juist heel gebruikelijk. Het is daarom belangrijk om goed onderscheid te maken tussen <strong>normale reflux</strong> en <strong>een afwijkende vorm van spugen of braken</strong>.
            </p>
          </div>

          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p className='font-semibold text-teal-900 mb-3'>Tabel 1. Belangrijke begrippen bij reflux</p>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse bg-white rounded-lg overflow-hidden'>
                <thead>
                  <tr className='bg-teal-100'>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Begrip</th>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Betekenis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Gastro-oesofageale reflux (GOR)</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Terugvloed van maaginhoud in de slokdarm, vaak met regurgitatie. Dit is een normaal fysiologisch proces dat meerdere keren per dag kan optreden bij gezonde kinderen van alle leeftijden, meestal na de maaltijd.</td>
                  </tr>
                  <tr className='bg-teal-50'>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Gastro-oesofageale refluxziekte (GORZ)</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Reflux van maaginhoud die leidt tot hinderlijke klachten die het dagelijks leven beïnvloeden en/of tot complicaties, zoals overmatig huilen, prikkelbaarheid, voedselweigering en groeivertraging.</td>
                  </tr>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Regurgitatie</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Spontaan, onvrijwillig terugvloeien van voeding uit de maag tot in de mond, meestal in de vorm van “teruggeven”. Dit gebeurt vooral in het eerste uur na de voeding en kost geen moeite.</td>
                  </tr>
                  <tr className='bg-teal-50'>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Braken</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Krachtig uitspugen van maaginhoud nadat het braakcentrum is geactiveerd door een trigger, zoals een giftige stof, ziekte, een probleem van het evenwichtsorgaan of verhoogde druk in de hersenen. Vaak gaat dit vooraf door misselijkheid, bleekheid, zweten en kokhalzen.</td>
                  </tr>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Ruminatie</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>Vrijwillig, maar soms ook onbewust, omhoogwerken van voeding vanuit de maag tot in de mond. De voeding kan daarna opnieuw worden gekauwd en doorgeslikt of weer worden uitgespuugd.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='p-5 bg-violet-50 rounded-xl border border-violet-200'>
            <p className='text-violet-800'><strong>Aandachtsvraag:</strong> Is reflux altijd ziekelijk?</p>
            <p className='text-violet-700'><strong>Mini-antwoord:</strong> Nee. Bij gezonde zuigelingen kan het teruggeven van kleine beetjes voeding heel normaal zijn.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}

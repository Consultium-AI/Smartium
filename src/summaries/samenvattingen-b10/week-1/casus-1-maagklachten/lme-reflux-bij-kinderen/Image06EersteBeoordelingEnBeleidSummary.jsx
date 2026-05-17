import SummaryLayout from '../../components/SummaryLayout'
import { ClipboardList } from 'lucide-react'

const tableOfContents = [
  { id: 'sect-06', title: 'Eerste beoordeling en beleid', icon: ClipboardList },
]

export default function Image06EersteBeoordelingEnBeleidSummary({ standalone = true }) {
  const ContentTag = standalone ? 'section' : 'div'

  return (
    <SummaryLayout
      standalone={standalone}
      title='Eerste beoordeling en beleid'
      description='De eerste diagnostische stap, groeibeoordeling, voeding en praktisch beleid bij refluxklachten.'
      caseLabel='Week 1 Casus 1 - Maagklachten LME Reflux bij kinderen'
      tableOfContents={tableOfContents}
      practiceLink='/oefenvragen?lme=blok10-week1-casus1-maagklachten-reflux-bij-kinderen'
    >
      <ContentTag id={standalone ? 'sect-06' : undefined} className='scroll-mt-24'>
        <div className='flex items-center gap-3 mb-5'>
          <div className='w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'>
            <ClipboardList className='w-5 h-5 text-primary-600' />
          </div>
          <h2 className='text-xl font-bold text-slate-900'>Eerste beoordeling en beleid</h2>
        </div>

        <div className='text-slate-700 space-y-4 leading-relaxed'>
          <div className='p-5 bg-primary-50 rounded-xl border border-primary-200'>
            <p className='text-primary-800'>De eerste stap is bijna altijd: <strong>goed uitvragen, goed kijken en de groei beoordelen</strong>. De groeicurve zegt veel over de ernst van het probleem. Een goede groei maakt een ernstige oorzaak minder waarschijnlijk, terwijl onvoldoende groei juist een belangrijk aandachtspunt is.</p>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Ook de <strong>hoeveelheid voeding</strong> is belangrijk. Bij zuigelingen is over- of ondervoeding vaak een deel van het probleem. Een richtwaarde die hier genoemd wordt is ongeveer <strong>150 ml/kg/dag</strong>. Als een baby duidelijk minder binnenkrijgt, kan dat de klachten en de groei verklaren.</p>
          </div>

          <div className='p-5 bg-teal-50 rounded-xl border border-teal-200'>
            <p className='font-semibold text-teal-900 mb-3'>Tabel 4. Eerste stappen bij refluxklachten bij een kind</p>
            <div className='overflow-x-auto'>
              <table className='w-full text-sm border-collapse bg-white rounded-lg overflow-hidden'>
                <thead>
                  <tr className='bg-teal-100'>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Situatie</th>
                    <th className='border border-teal-200 px-3 py-2 text-left font-semibold text-teal-900'>Eerste aanpak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Geen alarmsymptomen, groeicurve goed</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>uitleg en educatie, voorkom overvoeding, let op houding tijdens en na de voeding, eventueel voeding verdikken</td>
                  </tr>
                  <tr className='bg-teal-50'>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Geen verbetering na verdikken</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>overweeg een <strong>eiwithydrolysaat</strong> of <strong>aminozuurgebaseerde voeding</strong>; bij borstgevoede zuigelingen: eliminatie van melk uit de maternale voeding gedurende 2-4 weken</td>
                  </tr>
                  <tr>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Nog steeds klachten</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>overweeg behandeling met <strong>zuurremmers</strong> gedurende 4-8 weken, waarbij een PPI de eerste keuze is</td>
                  </tr>
                  <tr className='bg-teal-50'>
                    <td className='border border-teal-200 px-3 py-2 align-top'><strong>Blijvende of terugkerende klachten, of alarmsymptomen</strong></td>
                    <td className='border border-teal-200 px-3 py-2 align-top'>verwijs naar kinderarts/kinder-MDL voor verdere evaluatie en/of behandeling</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Bij zuigelingen met refluxklachten en geen alarmsignalen zijn praktische adviezen belangrijk:</p>
            <ul className='list-disc pl-6 space-y-1 text-slate-700 text-sm'>
              <li>verminder de flesvolume naar normale hoeveelheden;</li>
              <li>verdik de flesvoeding indien nodig, bijvoorbeeld met johannesbroodpitmeel of door een kunstvoeding te gebruiken waarin dat al zit;</li>
              <li>let op de juiste houding tijdens en na het voeden;</li>
              <li>laat het kind tussendoor extra boeren;</li>
              <li>geef uitleg en geruststelling aan ouders.</li>
            </ul>
          </div>

          <div className='p-5 bg-slate-50 rounded-xl border border-slate-200'>
            <p>Belangrijk is dat het niet uitmaakt wie de fles geeft, zolang de <strong>techniek goed</strong> is. Ook “vaker een fles geven” is niet automatisch beter; een te kleine hoeveelheid per voeding kan juist verklaren waarom een baby veel honger lijkt te hebben, maar toch onvoldoende totale inname krijgt.</p>
            <p>Als er sprake is van borstgevoede zuigelingen waarbij koemelkallergie vermoed wordt, kan eliminatie van melk uit de maternale voeding een rol spelen. Als klachten tijdens afbouwen terugkomen, is verdere vervolgstap nodig.</p>
          </div>
        </div>
      </ContentTag>
    </SummaryLayout>
  )
}

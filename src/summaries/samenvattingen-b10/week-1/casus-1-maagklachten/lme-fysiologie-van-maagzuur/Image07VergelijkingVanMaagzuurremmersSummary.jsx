import SummaryLayout from '../../components/SummaryLayout'
import { GitCompare } from 'lucide-react'

export default function Image07VergelijkingVanMaagzuurremmersSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-07', title: 'Vergelijking van maagzuurremmers', icon: <GitCompare className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Vergelijking van maagzuurremmers'}
      description={'H2-receptorantagonisten en protonpompremmers grijpen op verschillende plaatsen aan in de regulatie van maagzuur.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-07'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <GitCompare className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Vergelijking van maagzuurremmers</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>Maagzuurremmers worden veel gebruikt. Er zijn twee belangrijke groepen: <strong>H2-receptorantagonisten</strong> en <strong>protonpompremmers (PPI’s)</strong>.</p>
          </div>
          <div className={'p-5 bg-amber-50 rounded-xl border border-amber-200'}>
            <p className={'text-amber-800'}><strong>H2-receptorantagonisten</strong></p>
            <p className={'text-amber-700'}>Deze middelen remmen de <strong>H2-receptor</strong> op de pariètale cel. Ze werken dus via de <strong>basolaterale zijde</strong>. Daardoor remmen ze het signaal dat tot zuursecretie leidt.</p>
            <ul className={'list-disc pl-6 space-y-1 text-amber-700 text-sm'}>
              <li>ineffectief in de <strong>cefale fase</strong>;</li>
              <li>werkzaam op de signaalroute van histamine;</li>
              <li>ook van invloed op de intrinsic factor-secretie.</li>
            </ul>
          </div>
          <div className={'p-5 bg-teal-50 rounded-xl border border-teal-200'}>
            <p className={'text-teal-800'}><strong>Protonpompremmers</strong></p>
            <p className={'text-teal-700'}>PPI’s, zoals <strong>omeprazol</strong>, remmen direct de <strong>H+/K+-ATPase</strong>. Ze werken via de <strong>apicale zijde</strong> van de pariètale cel. Ze zijn prodrugs: ze worden pas actief in het zure milieu van de secretoire vesikels van de pariètale cel. Daardoor is hun werking sterk bij lage pH. De pomp wordt pas weer functioneel als er nieuwe protonpompen worden aangemaakt.</p>
            <ul className={'list-disc pl-6 space-y-1 text-teal-700 text-sm'}>
              <li>ook in de <strong>cefale fase</strong>;</li>
              <li>direct op de eindstap van de zuursecretie;</li>
              <li>niet of nauwelijks op de intrinsic factor-secretie.</li>
            </ul>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Eigenschap</th>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>H2-antagonist</th>
                  <th className={'border-b border-primary-200 py-2'}>PPI</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Aangrijpingspunt</td><td className={'border-b border-primary-100 py-2 pr-3'}>H2-receptor</td><td className={'border-b border-primary-100 py-2'}>H+/K+-ATPase</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Locatie van werking</td><td className={'border-b border-primary-100 py-2 pr-3'}>basolateraal</td><td className={'border-b border-primary-100 py-2'}>apicaal</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Effect op intrinsic factor</td><td className={'border-b border-primary-100 py-2 pr-3'}>remt</td><td className={'border-b border-primary-100 py-2'}>geen effect</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Effect in cefale fase</td><td className={'border-b border-primary-100 py-2 pr-3'}>ineffectief</td><td className={'border-b border-primary-100 py-2'}>ook effectief</td></tr>
                <tr><td className={'py-2 pr-3'}>Afhankelijk van pH</td><td className={'py-2 pr-3'}>nee</td><td className={'py-2'}>ja, werking sterker bij lage pH</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

import SummaryLayout from '../../components/SummaryLayout'
import { AlertTriangle } from 'lucide-react'

export default function Image09HelicobacterPyloriEnMaagzweerSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-09', title: 'Helicobacter pylori en maagzweer', icon: <AlertTriangle className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Helicobacter pylori en maagzweer'}
      description={'Helicobacter pylori kan de mucosalaag aantasten, somatostatine remmen en zo ulceratie en ontsteking bevorderen.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-09'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <AlertTriangle className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Helicobacter pylori en maagzweer</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-amber-50 rounded-xl border border-amber-200'}>
            <p className={'text-amber-800'}><strong>Helicobacter pylori</strong> kan de mucosalaag van de maag aantasten. De bacterie is zuurbestendig, onder andere door de productie van <strong>urease</strong>. Ze hecht zich aan de epitheelcellen van de maagwand, vooral in het antrum.</p>
            <p className={'text-amber-700'}>De kolonisatie van de mucosalaag leidt tot afbraak van de beschermende laag, waardoor zuur en pepsine de epitheelcellen kunnen bereiken. Daardoor ontstaat lokale beschadiging en een ontstekingsreactie. Dit kan gepaard gaan met maagzweren.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Stap</th>
                  <th className={'border-b border-primary-200 py-2'}>Gevolg</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>H. pylori remt somatostatine-afgifte door D-cellen</td><td className={'border-b border-primary-100 py-2'}>minder remming</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Minder somatostatine</td><td className={'border-b border-primary-100 py-2'}>meer gastrine-afgifte door G-cellen</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Meer gastrine</td><td className={'border-b border-primary-100 py-2'}>meer stimulatie van pariètale cellen</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Meer zoutzuur</td><td className={'border-b border-primary-100 py-2'}>meer schade aan epitheel</td></tr>
                <tr><td className={'py-2 pr-3'}>Meer schade</td><td className={'py-2'}>heftigere ontstekingsreactie en maagklachten</td></tr>
              </tbody>
            </table>
          </div>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>Bij chronische H. pylori-infectie kan de maagzuurproductie toenemen doordat de remming wegvalt.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

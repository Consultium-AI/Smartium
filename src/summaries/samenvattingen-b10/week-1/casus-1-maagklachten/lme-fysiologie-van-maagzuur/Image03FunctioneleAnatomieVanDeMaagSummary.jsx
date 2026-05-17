import SummaryLayout from '../../components/SummaryLayout'
import { Layers } from 'lucide-react'

export default function Image03FunctioneleAnatomieVanDeMaagSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-03', title: 'Functionele anatomie van de maag', icon: <Layers className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Functionele anatomie van de maag'}
      description={'De maag ligt tussen oesofagus en duodenum en heeft functioneel verschillende onderdelen met eigen taken.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-03'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <Layers className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Functionele anatomie van de maag</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>De maag ligt tussen de <strong>oesofagus</strong> en het <strong>duodenum</strong>. Functioneel kan de maag worden verdeeld in:</p>
            <ul className={'list-disc pl-6 space-y-1 text-slate-700 text-sm'}>
              <li><strong>fundus</strong></li>
              <li><strong>corpus</strong></li>
              <li><strong>antrum</strong></li>
            </ul>
            <p>De maag is van de oesofagus en het duodenum gescheiden door sfincters, die op het juiste moment voedsel of chymus doorlaten.</p>
            <p>De maagwand bestaat aan de binnenzijde uit de <strong>mucosa</strong> met de maagklieren. Aan de buitenzijde liggen meerdere spierlagen. Die spierlagen zorgen voor het <strong>malen en kneden</strong> van de maaginhoud.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Onderdeel</th>
                  <th className={'border-b border-primary-200 py-2'}>Belangrijke functie</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Onderste oesofageale sfincter</td><td className={'border-b border-primary-100 py-2'}>Voorkomen van “brandend maagzuur”</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Fundus</td><td className={'border-b border-primary-100 py-2'}>Expansie bij grote maaltijd, verzamelen van ingeslikt gas</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Corpus</td><td className={'border-b border-primary-100 py-2'}>Start met vertering van voedsel</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Antrum</td><td className={'border-b border-primary-100 py-2'}>Monitoren of maaginhoud voldoende bewerkt is</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Pylorus</td><td className={'border-b border-primary-100 py-2'}>Doorlaten van bewerkte maaginhoud</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Maagklieren</td><td className={'border-b border-primary-100 py-2'}>Afgifte van maagsap</td></tr>
                <tr><td className={'py-2 pr-3'}>Spierlagen</td><td className={'py-2'}>Malen en kneden van de maaginhoud</td></tr>
              </tbody>
            </table>
          </div>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>In de maagklieren van met name <strong>fundus</strong> en <strong>corpus</strong> wordt het maagsap geproduceerd. In het <strong>antrum</strong> zitten vooral cellen die hormonen afscheiden die de zuurproductie regelen.</p>
            <p>De cellen van het maagepitheel en de maagklieren ontstaan uit <strong>stamcellen in de hals van de maagklieren</strong>. Dat gebied wordt ook wel de <strong>progenitor zone</strong> genoemd.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

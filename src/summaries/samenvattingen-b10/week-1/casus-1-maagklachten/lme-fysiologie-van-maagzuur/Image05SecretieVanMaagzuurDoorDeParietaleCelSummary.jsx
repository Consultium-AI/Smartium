import SummaryLayout from '../../components/SummaryLayout'
import { FlaskConical } from 'lucide-react'

export default function Image05SecretieVanMaagzuurDoorDeParietaleCelSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-05', title: 'Secretie van maagzuur door de pariètale cel', icon: <FlaskConical className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Secretie van maagzuur door de pariètale cel'}
      description={'De pariètale cel scheidt zoutzuur uit via de H+/K+-ATPase met behulp van koolzuuranhydrase, K+-kanalen en chloridekanalen.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-05'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <FlaskConical className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Secretie van maagzuur door de pariètale cel</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>De <strong>pariètale cel</strong> is de cel die zoutzuur afscheidt. De kern van dit proces is de <strong>H+/K+-ATPase</strong> in de <strong>apicale membraan</strong> van de cel.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <p className={'text-primary-800'}><strong>Hoe werkt de zoutzuursecretie?</strong></p>
            <p className={'text-primary-700'}>De pariètale cel splitst koolzuur in <strong>H+</strong> en <strong>bicarbonaat</strong>. Dit gebeurt met behulp van <strong>koolzuuranhydrase</strong>.</p>
            <ul className={'list-disc pl-6 space-y-1 text-primary-700 text-sm'}>
              <li>wordt <strong>H+</strong> via de <strong>H+/K+-pomp</strong> naar het maaglumen getransporteerd in ruil voor K+;</li>
              <li>verlaat <strong>K+</strong> de cel weer via <strong>K+-kanalen</strong> aan de apicale zijde, zodat de pomp kan blijven werken;</li>
              <li>wordt <strong>bicarbonaat</strong> aan de basolaterale zijde uitgewisseld met <strong>chloride</strong>;</li>
              <li>verlaat <strong>chloride</strong> de cel vervolgens via een chloridekanaal aan de apicale zijde;</li>
              <li>in het lumen vormen <strong>H+</strong> en <strong>Cl-</strong> samen <strong>zoutzuur</strong>.</li>
            </ul>
            <p className={'text-primary-700'}>Deze zuursecretie blijft <strong>elektroneutraal</strong>.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Stap</th>
                  <th className={'border-b border-primary-200 py-2'}>Wat gebeurt er?</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>1</td><td className={'border-b border-primary-100 py-2'}>Koolzuur wordt gesplitst in H+ en bicarbonaat</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>2</td><td className={'border-b border-primary-100 py-2'}>H+ wordt via H+/K+-ATPase naar het lumen getransporteerd</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>3</td><td className={'border-b border-primary-100 py-2'}>K+ verlaat de cel via K+-kanalen en kan opnieuw worden gebruikt</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>4</td><td className={'border-b border-primary-100 py-2'}>Bicarbonaat wordt basolateraal uitgewisseld met chloride</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>5</td><td className={'border-b border-primary-100 py-2'}>Chloride verlaat de cel apicaal</td></tr>
                <tr><td className={'py-2 pr-3'}>6</td><td className={'py-2'}>In het lumen vormen H+ en Cl- samen zoutzuur</td></tr>
              </tbody>
            </table>
          </div>
          <div className={'p-5 bg-violet-50 rounded-xl border border-violet-200'}>
            <p className={'text-violet-800'}><strong>Aandacht-vragetje:</strong> Waarom moet K+ de cel weer uit?</p>
            <p className={'text-violet-700'}><strong>Mini-antwoord:</strong> Zodat er genoeg K+ beschikbaar blijft om de H+/K+-pomp te laten doorgaan.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

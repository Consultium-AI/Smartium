import SummaryLayout from '../../components/SummaryLayout'
import { Brain } from 'lucide-react'

export default function Image06RegulatieVanDeMaagzuursecretieSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-06', title: 'Regulatie van de maagzuursecretie', icon: <Brain className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Regulatie van de maagzuursecretie'}
      description={'De maagzuurproductie wordt gestimuleerd door acetylcholine, gastrine en histamine, en geremd door somatostatine en andere factoren.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-06'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <Brain className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Regulatie van de maagzuursecretie</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>De regulatie van maagzuur is complex, maar heel belangrijk. De maagzuurproductie moet namelijk precies passen bij de situatie.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <p className={'text-primary-800'}><strong>Belangrijkste stimulerende stoffen</strong></p>
            <p className={'text-primary-700'}>De belangrijkste stimulerende factoren zijn:</p>
            <ul className={'list-disc pl-6 space-y-1 text-primary-700 text-sm'}>
              <li><strong>acetylcholine</strong> uit de nervus vagus;</li>
              <li><strong>gastrine</strong> uit de G-cellen;</li>
              <li><strong>histamine</strong> uit de enterochromaffine-achtige cellen (<strong>ECL-cellen</strong>).</li>
            </ul>
            <p className={'text-primary-700'}>Histamine is de centrale fysiologische stimulator. De afgifte van histamine wordt gestimuleerd door gastrine en acetylcholine.</p>
          </div>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p><strong>Belangrijkste remmende stoffen</strong></p>
            <p>De belangrijkste remmende factor is <strong>somatostatine</strong>, afkomstig uit de D-cellen in het antrum. Daarnaast werken ook <strong>PGE2</strong>, <strong>secretine</strong>, <strong>GIP</strong> en <strong>CCK</strong> remmend.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Stof</th>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Effect</th>
                  <th className={'border-b border-primary-200 py-2'}>Bron</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Acetylcholine</td><td className={'border-b border-primary-100 py-2 pr-3'}>Stimuleert</td><td className={'border-b border-primary-100 py-2'}>N. vagus / ENS</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Gastrine</td><td className={'border-b border-primary-100 py-2 pr-3'}>Stimuleert</td><td className={'border-b border-primary-100 py-2'}>G-cellen in antrum</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Histamine</td><td className={'border-b border-primary-100 py-2 pr-3'}>Stimuleert</td><td className={'border-b border-primary-100 py-2'}>ECL-cellen</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Somatostatine</td><td className={'border-b border-primary-100 py-2 pr-3'}>Remt</td><td className={'border-b border-primary-100 py-2'}>D-cellen in antrum</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>PGE2</td><td className={'border-b border-primary-100 py-2 pr-3'}>Remt</td><td className={'border-b border-primary-100 py-2'}>lokaal</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Secretine</td><td className={'border-b border-primary-100 py-2 pr-3'}>Remt</td><td className={'border-b border-primary-100 py-2'}>duodenum</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>GIP</td><td className={'border-b border-primary-100 py-2 pr-3'}>Remt</td><td className={'border-b border-primary-100 py-2'}>duodenum</td></tr>
                <tr><td className={'py-2 pr-3'}>CCK</td><td className={'py-2 pr-3'}>Remt</td><td className={'py-2'}>duodenum</td></tr>
              </tbody>
            </table>
          </div>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p><strong>Drie fasen van maagfunctie</strong></p>
            <ol className={'list-decimal pl-6 space-y-2 text-slate-700 text-sm'}>
              <li><strong>Cefale fase</strong> - De maag wordt al geactiveerd vóórdat voedsel echt in de maag zit. Prikkels zoals zien, ruiken, proeven, kauwen en slikken activeren via de nervus vagus de maag.</li>
              <li><strong>Gastrische fase</strong> - Dit is de belangrijkste fase. Uitrekking van de maagwand en de aanwezigheid van peptiden en aminozuren stimuleren de zuurproductie het sterkst.</li>
              <li><strong>Intestinale fase</strong> - In de dunne darm kan nog een beperkte stimulatie optreden, maar er is vooral remming door factoren zoals zuur en vet.</li>
            </ol>
            <p>In de <strong>gastrische fase</strong> kan de zuurproductie het best worden aangepast aan de behoefte.</p>
          </div>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p><strong>Welke signalen bepalen of er meer zuur moet worden gemaakt?</strong></p>
            <p>Als de maagwand uitrekt en er eiwitafbraakproducten aanwezig zijn, neemt de zuurproductie toe. De uitrekking van de maagwand activeert een <strong>vago-vagale reflex</strong>, waardoor G-cellen, ECL-cellen en pariètale cellen worden gestimuleerd.</p>
            <p>Als de luminale pH in het antrum te laag wordt, reageren D-cellen met afgifte van <strong>somatostatine</strong>. Dit remt vervolgens de G-cellen en de pariètale cel. Daardoor wordt overmatige zuurproductie afgeremd.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <table className={'w-full text-sm border-collapse'}>
              <thead>
                <tr className={'text-left text-primary-800'}>
                  <th className={'border-b border-primary-200 py-2 pr-3'}>Stimulerend</th>
                  <th className={'border-b border-primary-200 py-2'}>Remmend</th>
                </tr>
              </thead>
              <tbody className={'text-primary-700'}>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Rek van de maagwand</td><td className={'border-b border-primary-100 py-2'}>Lage luminale pH in het antrum</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Peptiden en aminozuren</td><td className={'border-b border-primary-100 py-2'}>Somatostatine</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Acetylcholine</td><td className={'border-b border-primary-100 py-2'}>Secretine, GIP, CCK, PGE2</td></tr>
                <tr><td className={'border-b border-primary-100 py-2 pr-3'}>Gastrine</td><td className={'border-b border-primary-100 py-2'}></td></tr>
                <tr><td className={'py-2 pr-3'}>Histamine</td><td className={'py-2'}></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

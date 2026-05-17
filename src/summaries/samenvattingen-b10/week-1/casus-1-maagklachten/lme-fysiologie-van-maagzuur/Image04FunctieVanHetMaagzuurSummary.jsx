import SummaryLayout from '../../components/SummaryLayout'
import { Activity } from 'lucide-react'

export default function Image04FunctieVanHetMaagzuurSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-04', title: 'Functie van het maagzuur', icon: <Activity className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Functie van het maagzuur'}
      description={'Maagzuur helpt bij afweer, denaturatie, enzymactivatie, vetvertering en het vrijkomen van vitamine B12.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-04'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <Activity className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Functie van het maagzuur</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>Maagzuur heeft meerdere belangrijke functies.</p>
          </div>
          <div className={'p-5 bg-primary-50 rounded-xl border border-primary-200'}>
            <ul className={'list-disc pl-6 space-y-3 text-primary-700 text-sm'}>
              <li>
                <p><strong>1. Eerste verdedigingslinie tegen voedselvergiftiging</strong></p>
                <p>Via voedsel en drinken komen ook bacteriën, virussen en toxines binnen. Door de <strong>zuurshock</strong> in de maag worden de meeste bacteriën en schimmels gedood en worden virussen en toxines onschadelijk gemaakt. Het zuur denatureert membraaneiwitten, waardoor de celmembraan kapot gaat. Het zuur kan de bacterie of schimmel binnendringen en daar ook intracellulaire eiwitten en DNA beschadigen. Daardoor verliezen veel ziekteverwekkers hun schadelijke werking.</p>
                <p>Sommige bacteriën zijn <strong>zuurtolerant</strong> en kunnen een korte tijd in de maag overleven. Zij kunnen het zuur intracellulair bufferen en beschadigde eiwitten en DNA herstellen.</p>
              </li>
              <li>
                <p><strong>2. Denaturatie van eiwitten</strong></p>
                <p>Door maagzuur worden eiwitten uit het voedsel <strong>gedenatureerd</strong>. Dat betekent dat de 3-dimensionale structuur van het eiwit verdwijnt doordat ionogene bindingen en andere structuren worden verbroken. Hierdoor worden de eiwitten beter toegankelijk voor verteringsenzymen.</p>
              </li>
              <li>
                <p><strong>3. Activatie van pepsine</strong></p>
                <p>Pepsine is een belangrijk eiwitsplitsend enzym dat goed werkt bij een lage pH. Het wordt in de maag niet direct als actief enzym gemaakt, maar als <strong>pepsinogeen</strong>. In het zure milieu van de maag wordt de remmende eiwitstaart van pepsinogeen afgesplitst, waardoor <strong>pepsine</strong> ontstaat. Pepsine activeert op zijn beurt weer meer pepsinogeen: zo ontstaat een kettingreactie.</p>
                <p>Pepsine heeft een <strong>pH-optimum van ongeveer 1,5 tot 3</strong>.</p>
              </li>
              <li>
                <p><strong>4. Vertering van vetten</strong></p>
                <p>De hoofdcellen scheiden naast pepsinogeen ook <strong>maaglipase</strong> uit. Dit enzym splitst triglyceriden uit voedingsvet in een vetzuur en een diglyceride. Bij pasgeborenen is dit maaglipase belangrijk voor de vertering van melkvet. Bij volwassenen speelt het vooral een rol in de vorming van vetzuren, die een signaalfunctie hebben voor de synthese van maag-hormonen en het openen van de pylorus.</p>
              </li>
              <li>
                <p><strong>5. Effect op vitamine B12</strong></p>
                <p>Vitamine B12, ook wel <strong>cobalamine</strong>, uit de voeding zit gebonden aan eiwit. Onder invloed van zuur en pepsine komt B12 los van dit eiwit. Daarna bindt het eerst aan <strong>haptocorrin</strong>, een eiwit dat in speeksel en maag wordt uitgescheiden en dat B12 beschermt tijdens de passage door de maag. In het duodenum wordt haptocorrin afgebroken door proteasen, waarna B12 vrijkomt en kan binden aan <strong>intrinsic factor</strong>. Dit complex wordt uiteindelijk in het <strong>ileum</strong> opgenomen.</p>
              </li>
            </ul>
          </div>
          <div className={'p-5 bg-violet-50 rounded-xl border border-violet-200'}>
            <p className={'text-violet-800'}><strong>Aandacht-vragetje:</strong> Waarom is intrinsic factor zo belangrijk?</p>
            <p className={'text-violet-700'}><strong>Mini-antwoord:</strong> Omdat B12 pas goed in het ileum kan worden opgenomen wanneer het aan intrinsic factor gebonden is.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

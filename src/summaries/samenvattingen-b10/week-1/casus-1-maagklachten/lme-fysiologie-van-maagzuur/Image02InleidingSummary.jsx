import SummaryLayout from '../../components/SummaryLayout'
import { BookOpen } from 'lucide-react'

export default function Image02InleidingSummary({ standalone = true }) {
  const tableOfContents = [
    { id: 'sect-02', title: 'Inleiding', icon: <BookOpen className={'w-4 h-4'} /> },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title={'Inleiding'}
      description={'De maag produceert zuur maagsap met functies in de vertering, maar de maag moet zichzelf daartegen ook beschermen.'}
      caseLabel={'Week 1 Casus 1 - Maagklachten LME Fysiologie van maagzuur'}
      tableOfContents={tableOfContents}
    >
      <section id={'sect-02'} className={'scroll-mt-24 mb-12'}>
        <div className={'flex items-center gap-3 mb-5'}>
          <div className={'w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center'}>
            <BookOpen className={'w-5 h-5 text-primary-600'} />
          </div>
          <h2 className={'text-xl font-bold text-slate-900'}>Inleiding</h2>
        </div>
        <div className={'text-slate-700 space-y-4 leading-relaxed'}>
          <div className={'p-5 bg-slate-50 rounded-xl border border-slate-200'}>
            <p>De maag produceert per dag ongeveer <strong>1,5 tot 2,5 liter maagsap</strong> met een zeer lage pH, meestal tussen <strong>1 en 2,5</strong>. Dat betekent dat de maaginhoud sterk zuur is. Dit zuur heeft een belangrijke functie in de vertering, maar het kan ook schade veroorzaken aan de eigen maagwand als die niet goed beschermd is.</p>
            <p>Het maagsap bestaat niet alleen uit zoutzuur. Er zitten ook andere belangrijke stoffen in, zoals <strong>pepsinogeen</strong>, <strong>pepsine</strong> en <strong>intrinsic factor</strong>. Pepsine speelt een rol bij de vertering van eiwitten. Intrinsic factor is belangrijk voor de opname van <strong>vitamine B12</strong>.</p>
          </div>
          <div className={'p-5 bg-violet-50 rounded-xl border border-violet-200'}>
            <p className={'text-violet-800'}><strong>Aandacht-vragetje:</strong> Waarom is maagzuur niet alleen “agressief”, maar ook nuttig?</p>
            <p className={'text-violet-700'}><strong>Mini-antwoord:</strong> Omdat het helpt bij de vertering, bacteriën doodt en eiwitten toegankelijk maakt voor enzymen.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

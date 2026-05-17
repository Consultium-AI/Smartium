export default function Sect02Inleiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Inleiding</h2>
      <p>
        De maag produceert per dag ongeveer{' '}
        <strong className="text-slate-900 dark:text-slate-100">1,5 tot 2,5 liter maagsap</strong> met een zeer lage
        pH, meestal tussen <strong className="text-slate-900 dark:text-slate-100">1 en 2,5</strong>. Dat betekent dat
        de maaginhoud sterk zuur is. Dit zuur heeft een belangrijke functie in de vertering, maar het kan ook schade
        veroorzaken aan de eigen maagwand als die niet goed beschermd is.
      </p>
      <p>
        Het maagsap bestaat niet alleen uit zoutzuur. Er zitten ook andere belangrijke stoffen in, zoals{' '}
        <strong className="text-slate-900 dark:text-slate-100">pepsinogeen</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">pepsine</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">intrinsic factor</strong>. Pepsine speelt een rol bij
        de vertering van eiwitten. Intrinsic factor is belangrijk voor de opname van{' '}
        <strong className="text-slate-900 dark:text-slate-100">vitamine B12</strong>.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandacht-vragetje:</strong>{' '}
          Waarom is maagzuur niet alleen {'"'}agressief{'"'}, maar ook nuttig?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong>{' '}Omdat het helpt bij de vertering, bacteriën doodt en eiwitten
          toegankelijk maakt voor enzymen.
        </p>
      </div>
    </div>
  )
}

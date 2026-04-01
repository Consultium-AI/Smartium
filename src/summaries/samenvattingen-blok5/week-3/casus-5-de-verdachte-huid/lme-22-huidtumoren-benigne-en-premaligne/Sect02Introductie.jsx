export default function Sect02Introductie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Introductie</h2>
      <p>
        Iedereen heeft huidplekken of huidafwijkingen. Dat is op zichzelf meestal niet verontrustend. Toch is het voor
        een arts belangrijk om te weten welke afwijkingen onschuldig zijn en welke juist aandacht vragen. Dat voorkomt
        onnodige ongerustheid, maar ook onnodige verwijzingen.
      </p>
      <p>Deze stof is opgebouwd in twee delen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Benigne huidtumoren</li>
        <li>Premaligne huidtumoren</li>
      </ul>
      <p>
        Een belangrijk uitgangspunt is dat je huidafwijkingen systematisch beschrijft. Daarbij helpt de beschrijving
        volgens PROVOKE:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Plaats</li>
        <li>Rangschikking</li>
        <li>Omvang</li>
        <li>Vorm</li>
        <li>Omtrek</li>
        <li>Kleur</li>
        <li>Efflorescentie</li>
      </ul>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is dat handig?{' '}
          <span className="font-medium">Mini-antwoord: Omdat je zo huidafwijkingen veel gerichter kunt vergelijken en herkennen.</span>
        </p>
      </div>
    </div>
  )
}

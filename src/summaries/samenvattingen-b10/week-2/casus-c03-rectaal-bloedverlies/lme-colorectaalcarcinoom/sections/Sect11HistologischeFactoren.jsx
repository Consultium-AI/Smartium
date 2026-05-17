export default function Sect11HistologischeFactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Histologische factoren</h2>
      <p>
        Deze factoren zijn alleen beschikbaar als de tumor is verwijderd of als er een poging tot resectie is gedaan.
        Belangrijke kenmerken zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          radicaliteit: R0 met marge &gt; 0,1 mm, R1 met marge ≤ 0,1 mm, Rx als niet te beoordelen;
        </li>
        <li>(lymf-)angio-invasie;</li>
        <li>hooggradige tumor budding (Bd2-3);</li>
        <li>slechte differentiatie.</li>
      </ul>
      <p>Deze kenmerken helpen vooral om het risico op lymfkliermetastasen in te schatten.</p>
    </div>
  )
}

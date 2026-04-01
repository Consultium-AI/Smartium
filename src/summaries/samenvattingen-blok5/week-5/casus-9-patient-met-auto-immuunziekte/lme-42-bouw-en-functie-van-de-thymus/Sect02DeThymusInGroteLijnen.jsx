export default function Sect02DeThymusInGroteLijnen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De thymus in grote lijnen</h2>
      <p>
        De thymus is het orgaan waar T-lymfocyten rijpen. Dat is belangrijk, omdat T-cellen daar leren wat
        lichaamseigen is en wat lichaamsvreemd is. De voorlopercellen van T-lymfocyten, de prothymocyten,
        ontstaan net als B-lymfocyten in het beenmerg en migreren daarna via het bloed naar de thymus.
      </p>
      <p>
        In de thymus ondergaan deze cellen een strenge rijping. Daarbij moeten ze niet alleen een
        functionele T-celreceptor kunnen ontwikkelen, maar ook leren om op de juiste manier te reageren op
        eigen HLA-moleculen en niet op lichaamseigen peptides. Cellen die te sterk op lichaamseigen
        structuren reageren, zijn autoreactief en worden verwijderd door apoptose. Zo draagt de thymus bij
        aan een goed werkend en veilig immuunsysteem.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is de thymus
          zo belangrijk?{' '}
          <span className="text-amber-900 dark:text-amber-100">
            Kort antwoord: Omdat T-cellen hier leren om lichaamseigen van lichaamsvreemd te onderscheiden.
          </span>
        </p>
      </div>
    </div>
  )
}

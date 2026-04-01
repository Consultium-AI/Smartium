export default function Sect07PositieveEnNegatieveSelectie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Positieve en negatieve selectie</h2>
      <p>
        Tijdens hun ontwikkeling worden thymocyten getest. Alleen cellen met een geschikte T-celreceptor
        mogen verder ontwikkelen.
      </p>
      <p>
        Bij positieve selectie blijven thymocyten over die eigen HLA-moleculen voldoende kunnen herkennen.
        Dat is nodig, omdat T-cellen later in het lichaam alleen goed functioneren als ze lichaamsantigenen
        in de context van HLA kunnen waarnemen.
      </p>
      <p>
        Bij negatieve selectie worden thymocyten verwijderd die te sterk reageren op lichaamseigen
        structuren. Zulke cellen zijn autoreactief en worden door apoptose uitgeschakeld. Dit is essentieel
        voor zelftolerantie.
      </p>
      <p>
        Vergelijk dit kort met B-cellen in het beenmerg: daar kunnen autoreactieve onrijpe B-lymfocyten
        worden tegengegaan door receptor editing en klonale deletie. In de thymus speelt vooral klonale
        deletie een rol. Daarbij is de transcriptiefactor AIRE belangrijk.
      </p>
      <p>Samengevat:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>positieve selectie = cellen behouden die voldoende eigen HLA herkennen;</li>
        <li>negatieve selectie = cellen verwijderen die te sterk op lichaamseigen structuren reageren;</li>
        <li>AIRE speelt een belangrijke rol bij klonale deletie in de thymus.</li>
      </ul>
    </div>
  )
}

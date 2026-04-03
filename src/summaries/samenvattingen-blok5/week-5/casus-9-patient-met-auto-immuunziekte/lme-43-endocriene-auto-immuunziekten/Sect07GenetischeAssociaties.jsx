export default function Sect07GenetischeAssociaties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Genetische associaties</h2>
      <p>
        T1DM is geassocieerd met onder andere HLA-DRB1*03. Daarnaast speelt een polymorfisme in de promotor
        van het insulinegen een rol. Dat polymorfisme beïnvloedt de expressie van insuline in de thymus. Als
        daar minder insuline wordt gemaakt, verloopt de negatieve selectie van autoreactieve T-cellen minder
        goed. Daardoor kunnen deze cellen later in de periferie de pancreas aanvallen en diabetes
        veroorzaken.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtspunt:</strong> Waarom is de thymus
          hier belangrijk?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}omdat daar de negatieve selectie van autoreactieve T-cellen plaatsvindt; minder
          insuline-expressie in de thymus kan deze selectie verstoren.
        </p>
      </div>
    </div>
  )
}

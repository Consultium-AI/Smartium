export default function Sect15BispecifiekeAntistoffen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bispecifieke antistoffen</h2>
      <p>
        Bispecifieke antistoffen binden met de ene arm aan CD3 op de T-cel en met de andere arm aan een doelwit op de
        myeloomcel, zoals BCMA of GPRC5D. Daardoor wordt de T-cel direct naast de myeloomcel gebracht en kan deze de
        tumorcel doden.
      </p>
      <p>
        Voorbeelden zijn teclistamab en talquetamab. De T-cel wordt actief gemaakt, en vervolgens komen perforinen en
        granzymen vrij die de tumorcel vernietigen.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> Waarom zijn bispecifieke
          antistoffen zo handig?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Omdat ze een T-cel en een
          myeloomcel letterlijk bij elkaar brengen, zodat de T-cel de tumorcel kan doden.
        </p>
      </div>
    </div>
  )
}

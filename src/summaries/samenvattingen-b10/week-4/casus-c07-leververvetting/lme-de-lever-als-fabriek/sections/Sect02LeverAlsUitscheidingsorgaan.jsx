export default function Sect02LeverAlsUitscheidingsorgaan() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De lever als uitscheidingsorgaan</h2>
      <p>
        De lever speelt een centrale rol bij het verwerken en uitscheiden van veel stoffen. Dat geldt niet alleen voor
        geneesmiddelen, maar ook voor kruidenpreparaten en alcohol. Veel van deze stoffen zijn{' '}
        <strong className="text-slate-900 dark:text-slate-100">lipofiel</strong>: ze lossen goed op in vet, maar niet
        goed in water. Daardoor kunnen ze niet zomaar via de nieren met de urine worden uitgescheiden.
      </p>
      <p>
        De lever zet zulke lipofiele stoffen om in <strong className="text-slate-900 dark:text-slate-100">meer hydrofiele</strong>{' '}
        stoffen. Hydrofi el betekent dat ze beter in water oplossen. Daardoor kunnen ze makkelijker het lichaam
        verlaten, vooral via de urine. Een klein deel kan ook via de gal en de feces worden uitgescheiden.
      </p>
      <p>
        De belangrijkste cellen waarin dit proces plaatsvindt, zijn de{' '}
        <strong className="text-slate-900 dark:text-slate-100">hepatocyten</strong>. Deze cellen ontvangen veel bloed
        uit de <strong className="text-slate-900 dark:text-slate-100">poortader</strong>. Daardoor komt een groot deel
        van de via de darm opgenomen stoffen direct in de lever terecht. Dat is het bekende{' '}
        <strong className="text-slate-900 dark:text-slate-100">first-pass effect</strong>: orale geneesmiddelen passeren
        eerst de darm en de lever voordat ze in de systemische circulatie komen.
      </p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> Waarom zijn
          orale geneesmiddelen zo vaak al deels gemetaboliseerd vóórdat ze in het lichaam rondgaan?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Omdat ze eerst
          via de darm en de lever gaan; daar vindt het first-pass effect plaats.
        </p>
      </div>
    </div>
  )
}

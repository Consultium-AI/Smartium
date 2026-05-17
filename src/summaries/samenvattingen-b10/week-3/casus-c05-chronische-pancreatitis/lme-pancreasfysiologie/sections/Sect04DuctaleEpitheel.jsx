export default function Sect04DuctaleEpitheel () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Ductale epitheelcellen: bicarbonaat en hoge pH
      </h2>
      <p>
        De ductale epitheelcellen hebben een andere bouw dan acinaire cellen. Zij bevatten minder ruw ER en minder
        granula, maar aan de lumenkant wel veel{' '}
        <strong className="text-slate-900 dark:text-slate-100">villi</strong> en membranegroeiingen. Daardoor is het
        membraanoppervlak groter en is er meer ruimte voor transporteiwitten.
      </p>
      <p>
        Hun belangrijkste taak is de productie en afgifte van{' '}
        <strong className="text-slate-900 dark:text-slate-100">bicarbonaat (HCO3−)</strong>. Dat gebeurt via transporters en
        kan op meerdere manieren worden ondersteund:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>via <strong className="text-slate-900 dark:text-slate-100">Cl−/HCO3−-uitwisseling</strong> aan de lumenzijde;</li>
        <li>
          via <strong className="text-slate-900 dark:text-slate-100">CFTR</strong> en andere chloridekanalen;
        </li>
        <li>via opname van bicarbonaat aan de basolaterale zijde;</li>
        <li>
          via vorming van bicarbonaat uit <strong className="text-slate-900 dark:text-slate-100">CO2 en water</strong> met
          behulp van <strong className="text-slate-900 dark:text-slate-100">carbonic anhydrase</strong>.
        </li>
      </ul>
      <p>Door de bicarbonaatafgifte stijgt de pH van het duodenum. Dat is belangrijk om twee redenen:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>het zure maagsap wordt geneutraliseerd;</li>
        <li>de verteringsenzymen van de pancreas kunnen in een gunstiger milieu werken.</li>
      </ol>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom zijn ductale cellen anders gebouwd dan
          acinaire cellen?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Kort antwoord:</strong> omdat ductale cellen vooral transport doen. Ze
          hebben daarom minder eiwitgranula en meer membraanoppervlak voor transporteiwitten.
        </p>
      </div>
    </div>
  )
}

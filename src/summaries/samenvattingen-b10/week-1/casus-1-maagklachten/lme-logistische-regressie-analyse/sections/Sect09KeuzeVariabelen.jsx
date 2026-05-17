export default function Sect09KeuzeVariabelen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Keuze van variabelen en onderzoeksvraag
      </h2>
      <p>
        Welke variabelen je opneemt, hangt af van je{' '}
        <strong className="text-slate-900 dark:text-slate-100">onderzoeksvraag</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Beschrijvende onderzoeksvraag</h3>
      <p>
        Hier ligt de nadruk op het samenvatten van patronen en verbanden, zonder expliciete causale of voorspellende ambitie.
        Je kunt bijvoorbeeld leeftijd en geslacht opnemen om verschillen zichtbaar te maken.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Etiologische onderzoeksvraag</h3>
      <p>
        Hier wil je een mogelijk <strong className="text-slate-900 dark:text-slate-100">causaal verband</strong> onderzoeken,
        bijvoorbeeld tussen BMI en GORZ. Dan neem je vaak confounders mee, zoals geslacht, roken en leeftijd, zodat je het
        effect van de hoofdvariabele kunt corrigeren.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Predictieve onderzoeksvraag</h3>
      <p>
        Hier wil je voorspellen welke patiënten een verhoogd risico hebben. Dan neem je meerdere relevante variabelen
        tegelijk op, bijvoorbeeld leeftijd, BMI, roken, geslacht en andere markers.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          Aandachtsvraag: waarom is de onderzoeksvraag zo belangrijk?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> omdat die bepaalt welke variabelen
          je kiest en hoe je het model interpreteert.
        </p>
      </div>
    </div>
  )
}

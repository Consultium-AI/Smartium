export default function Sect04VoorbeeldVerschil() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Een voorbeeld om het verschil te begrijpen</h2>
      <p>
        Stel dat iemand een natrium van 130 mmol/L heeft, een glucose van 5 mmol/L en een ureum van 25 mmol/L. Dan kun je de osmolaliteit grofweg berekenen als:
      </p>
      <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
        2 × 130 + 5 + 25 = 290 mosmol/kg
      </p>
      <p>
        Dat lijkt dus normaal. Maar omdat het ureum zo hoog is, kan de effectieve osmolaliteit eigenlijk veel lager zijn, bijvoorbeeld rond 270 mosmol/kg. Dan is de patiënt dus hypo-osmolair ten opzichte van de intracellulaire ruimte, met risico op een waterverplaatsing naar de cellen.
      </p>
      <p>Een ander belangrijk punt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Een hypertoon milieu is altijd ook hyperosmolair.</li>
        <li>Maar een hyperosmolair milieu hoeft niet altijd hypertoon te zijn.</li>
      </ul>
      <p>Dat verschil wordt vooral duidelijk bij ureum:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij hoog ureum kan iemand wel hyperosmolair lijken, maar niet echt hypertoon zijn;</li>
        <li>bij hoog glucose is dat wel anders, want glucose beïnvloedt de toniciteit duidelijker.</li>
      </ul>
    </div>
  )
}

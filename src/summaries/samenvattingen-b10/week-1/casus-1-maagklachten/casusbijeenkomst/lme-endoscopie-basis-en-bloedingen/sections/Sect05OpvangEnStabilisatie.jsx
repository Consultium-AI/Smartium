export default function Sect05OpvangEnStabilisatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Opvang en stabilisatie</h2>
      <p>
        Bij verdenking op een gastro-intestinale bloeding begint het beleid altijd met{' '}
        <strong className="text-slate-900 dark:text-slate-100">stabilisatie</strong>. Eerst kijk je of de patiënt
        hemodynamisch stabiel is of tekenen heeft van circulatoire dreiging.
      </p>
      <p>Belangrijke parameters zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bloeddruk;</li>
        <li>hartfrequentie;</li>
        <li>bewustzijn;</li>
        <li>urineproductie.</li>
      </ul>
      <p>
        Klachten zoals duizeligheid, collaps of syncope kunnen wijzen op significant volumeverlies. Het doel van de eerste
        beoordeling is het bepalen of <strong className="text-slate-900 dark:text-slate-100">directe resuscitatie</strong>{' '}
        en intensieve monitoring nodig zijn.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Eerste stappen</h3>
        <p className="mt-4">De eerste behandeling bestaat uit:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            het aanleggen van <strong className="text-slate-900 dark:text-slate-100">minstens één goedlopend infuus</strong>{' '}
            met een grote naald;
          </li>
          <li>
            zo nodig een <strong className="text-slate-900 dark:text-slate-100">tweede infuus</strong>;
          </li>
          <li>
            <strong className="text-slate-900 dark:text-slate-100">volume-resuscitatie</strong> met crystalloïden zoals NaCl
            0,9% of Ringer-lactaat;
          </li>
          <li>
            continue monitoring van bloeddruk, polsfrequentie en urineproductie, met als richtwaarde{' '}
            <strong className="text-slate-900 dark:text-slate-100">&gt;30 ml/uur</strong>.
          </li>
        </ul>
        <p className="mt-4">
          Bij ernstige instabiliteit of belangrijke comorbiditeit hoort opname op een bewaakte afdeling zoals{' '}
          <strong className="text-slate-900 dark:text-slate-100">MCU of ICU</strong>.
        </p>
        <p className="mt-4">
          Verder moet je alert zijn op <strong className="text-slate-900 dark:text-slate-100">aspiratie</strong>, vooral
          bij hematemesis, verminderd bewustzijn of massaal bloedverlies. In zulke situaties kan endotracheale intubatie
          nodig zijn.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Wanneer is een bloeding klinisch relevant?
        </h3>
        <p className="mt-4">
          Een gastro-intestinale bloeding wordt als klinisch relevant gezien bij{' '}
          <strong className="text-slate-900 dark:text-slate-100">hemodynamische instabiliteit</strong>. Dit kan worden
          gedefinieerd als:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            systolische bloeddruk <strong className="text-slate-900 dark:text-slate-100">&lt;100 mmHg</strong>;
          </li>
          <li>
            hartfrequentie <strong className="text-slate-900 dark:text-slate-100">&gt;100/min</strong>.
          </li>
        </ul>
        <p className="mt-4">
          Bij gebruik van bijvoorbeeld <strong className="text-slate-900 dark:text-slate-100">β-blokkers</strong> kan de
          hartfrequentie lager uitvallen, dus dat moet je altijd meewegen.
        </p>
      </div>
    </div>
  )
}

export default function Sect03TnmClassificatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">TNM-classificatie en stadiëring</h2>
      <p>
        Voor de stadiëring wordt de TNM-classificatie gebruikt. Daarmee wordt gekeken naar de primaire tumor, de
        lymfeklieren en metastasen op afstand. Bij de primaire tumor wordt onderscheid gemaakt tussen C- en
        P-classificatie. Een C-classificatie wordt beoordeeld aan de hand van beeldvorming en/of klinische beoordeling.
        Een P-classificatie wordt beoordeeld op basis van een resectiepreparaat met voldoende vrije marge.
      </p>
      <p>
        In de casus is sprake van een cT2N0 graad 2 tumor. Dat betekent dat de tumor klinisch is ingedeeld als T2,
        zonder aanwijzingen voor betrokken lymfeklieren, en graad 2 heeft.
      </p>
      <p>
        Aandachtsvraag: wat is het verschil tussen CTV en PTV later in de radiotherapie?{'  '}
        Mini-antwoord: CTV is het klinische doelvolume met marge voor microscopische uitbreiding; PTV is CTV plus extra
        marge voor bewegings- en instellingsonzekerheden.
      </p>
    </div>
  )
}

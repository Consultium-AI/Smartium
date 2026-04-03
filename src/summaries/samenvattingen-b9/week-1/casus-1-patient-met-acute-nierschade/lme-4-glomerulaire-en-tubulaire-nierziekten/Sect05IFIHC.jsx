export default function Sect05IFIHC() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immunofluorescentie en immunohistochemie</h2>
      <p>
        Immunofluorescentie en immunohistochemie gebruiken antilichamen om specifieke eiwitten te detecteren. Dat is cruciaal voor de diagnostiek van allerlei specifieke processen, vooral immuungemedieerde nierziekten. Beide technieken werken dus met gericht aangrijpen op een doelantigeen in het biopt, maar de manier waarop je het signaal ziet is anders.
      </p>
      <p>
        Bij IF worden antilichamen voorzien van een fluorescerende marker, een fluorochroom, zoals fluoresceïne-isothiocyanaat (FITC). Deze gelabelde antilichamen binden aan specifieke doelantigenen, bijvoorbeeld immuuncomplexen, die aanwezig zijn in het nierbiopt. Als het preparaat onder een fluorescentiemicroscoop wordt bekeken, lichten de gebonden gebieden op. Daardoor zie je de aanwezigheid, locatie en het patroon van immuunafzettingen. IF wordt vooral gebruikt om immunoglobulinen, zoals IgA, IgG en IgM, of delen daarvan, zoals lambda- en kappa-ketens, en complementeiwitten, zoals C1q en C3c, aan te tonen.
      </p>
      <p>
        Bij IHC worden antilichamen zichtbaar gemaakt met een chromogeen, zoals DAB. Ook hier binden de gelabelde antilichamen aan specifieke doelantigenen die in het nierbiopt aanwezig zijn. Deze techniek wordt vooral gebruikt bij niertransplantatiebiopten om complementfactor C4d aan te tonen, wat wijst op antistoffen gericht tegen de donor. Ook kan IHC worden gebruikt om het SV40-antigeen aan te tonen, om polyomavirus zichtbaar te maken. Daarnaast wordt IHC gebruikt om specifieke immuuncellen te onderscheiden, bijvoorbeeld T-cellen met CD3 en B-cellen met CD20.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Immunofluorescentie en immunohistochemie vergeleken</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Techniek</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Marker of signaal</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische toepassing</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">IF</td>
              <td className="px-4 py-3">Fluorochroom, bijvoorbeeld FITC</td>
              <td className="px-4 py-3">Immunoglobulinen, complement en immuuncomplexen zichtbaar maken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">IHC</td>
              <td className="px-4 py-3">Chromogeen, bijvoorbeeld DAB</td>
              <td className="px-4 py-3">C4d in transplantbiopten, SV40, en celmarkers zoals CD3 en CD20</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een fluorochroom geeft dus een lichtsignaal onder de fluorescentiemicroscoop, terwijl een chromogeen een zichtbare kleurreactie geeft. Dat maakt IF en IHC verwant, maar wel net verschillend in aflezing.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vragetje: Wat is een groot voordeel van IF?</p>
        <p className="mt-2">
          <span className="font-semibold">Kort antwoord:</span>{' '}Het is extreem gevoelig en de hoeveelheid eiwit kan grof worden geclassificeerd van afwezig tot ernstig.
        </p>
      </div>
    </div>
  )
}

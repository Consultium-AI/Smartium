export default function Sect07SubtypenVanMelanoom() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Subtypen van melanoom</h2>
      <p>
        Er zijn verschillende clinicopathologische subtypen van maligne melanoom. Die moet je kunnen herkennen, omdat ze
        verschillen in voorkeurslocatie, groeipatroon, frequentie en prognose.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke subtypen van melanoom</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Subtype
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Frequentie / klinische betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lentigo maligna melanoom</td>
              <td className="px-4 py-3 align-top">
                Ontstaat uit lentigo maligna, een in situ vorm. Grillig gevormde gepigmenteerde maculae, vooral in het gelaat
                bij oudere patiënten. Sterk gerelateerd aan langdurige zonblootstelling.
              </td>
              <td className="px-4 py-3 align-top">Ongeveer 5% van alle melanomen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Superficieel spreidend melanoom</td>
              <td className="px-4 py-3 align-top">Meest voorkomende vorm. Groeit eerst horizontaal in de huid en pas later dieper.</td>
              <td className="px-4 py-3 align-top">Ongeveer 70% van alle melanomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nodulair melanoom</td>
              <td className="px-4 py-3 align-top">
                Groeit sneller in de diepte en heeft daarom vaak een slechtere prognose dan superficieel spreidend melanoom.
              </td>
              <td className="px-4 py-3 align-top">Ongeveer 20% van alle melanomen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Acrolentigineus melanoom</td>
              <td className="px-4 py-3 align-top">
                Subunguaal melanoom en melanoom van handpalmen en voetzolen. Zeldzaam, treedt onafhankelijk van huidtype op
                en heeft een relatief slechte prognose.
              </td>
              <td className="px-4 py-3 align-top">Ongeveer 5% van alle melanomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Amelanotisch melanoom</td>
              <td className="px-4 py-3 align-top">Niet echt een apart subtype, maar een van de bovengenoemde subtypen waarbij het pigment grotendeels verdwenen is.</td>
              <td className="px-4 py-3 align-top">Belangrijk om te herkennen omdat pigment kan ontbreken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lentigo maligna melanoom</h3>
      <p>
        Dit subtype ontstaat uit lentigo maligna, een in situ vorm van melanoom. Het komt vooral voor bij oudere patiënten,
        vaak in het gelaat, en hangt duidelijk samen met langdurige zonblootstelling.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Superficieel spreidend melanoom</h3>
      <p>
        Dit is de meest voorkomende vorm van melanoom. Het groeit eerst oppervlakkig, in horizontale richting, en pas later
        dieper in de huid.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Nodulair melanoom</h3>
      <p>
        Dit subtype groeit sneller de diepte in. Daardoor is de prognose vaak slechter dan bij het superficieel spreidend
        melanoom.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Acrolentigineus melanoom</h3>
      <p>
        Dit is een zeldzaam subtype. Het gaat om melanomen van de handpalmen, voetzolen en onder de nagels. Het kan bij elk
        huidtype voorkomen en heeft een relatief slechte prognose.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Amelanotisch melanoom</h3>
      <p>
        Hier is het pigment grotendeels verdwenen. Het is dus niet echt een apart subtype, maar een melanoom dat minder of
        geen bruine pigmentatie laat zien. Daardoor kan het klinisch lastiger te herkennen zijn.
      </p>
    </div>
  )
}

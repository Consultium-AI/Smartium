export default function Sect04HallmarksEnDirecteInvloed() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Welke hallmarks hebben direct met het immuunsysteem te maken?
      </h2>
      <p>
        Niet alle klassieke kenmerken van kanker hangen rechtstreeks samen met immuuncellen. De immunologische
        betrokkenheid is vooral duidelijk bij ontsteking, immuunontwijking en angiogenese/metastase.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hallmark of Cancer
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betrokkenheid van het immuunsysteem
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Tumor-bevorderende ontsteking
              </td>
              <td className="px-4 py-3 align-top">Direct betrokken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vermijden van immuundestructie
              </td>
              <td className="px-4 py-3 align-top">Direct betrokken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Induceren van of toegang verschaffen tot bloedvaten
              </td>
              <td className="px-4 py-3 align-top">Direct betrokken, onder andere via immuuncellen zoals macrofagen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Instandhouden van proliferatieve signalering
              </td>
              <td className="px-4 py-3 align-top">Niet een directe immuuncel-functie in deze context</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Directe invloed van het immuunsysteem op tumorgroei
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Tumor-bevorderende ontsteking
              </td>
              <td className="px-4 py-3 align-top">
                Ontsteking is in algemene zin een gevolg van immuunactivatie, maar chronische ontsteking in een tumor kan
                juist immuunsuppressief werken
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Vermijden van immuundestructie
              </td>
              <td className="px-4 py-3 align-top">Tumoren ontsnappen aan vernietiging door immuuncellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Angiogenese en metastasering
              </td>
              <td className="px-4 py-3 align-top">
                Vooral macrofagen kunnen angiogenese stimuleren en bijdragen aan afbraak van bindweefsel, waardoor
                tumorcellen makkelijker uitzaaien
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Klinisch is dit belangrijk, omdat het laat zien waarom de tumoromgeving zelf een behandeldoel kan zijn.
      </p>
    </div>
  )
}

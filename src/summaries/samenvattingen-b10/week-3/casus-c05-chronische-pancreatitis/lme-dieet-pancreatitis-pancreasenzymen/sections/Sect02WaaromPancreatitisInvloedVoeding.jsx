export default function Sect02WaaromPancreatitisInvloedVoeding () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Waarom pancreatitis zo’n grote invloed heeft op voeding
      </h2>
      <p>
        Pancreatitis beïnvloedt de voedselvertering, de voedselpassage en de opname van voedingsstoffen. Daardoor ontstaat
        al snel een risico op ondervoeding. Dat geldt zowel bij <strong className="text-slate-900 dark:text-slate-100">acute</strong> als bij{' '}
        <strong className="text-slate-900 dark:text-slate-100">chronische</strong> pancreatitis.
      </p>
      <p>
        Bij pancreatitis spelen meestal meerdere factoren tegelijk een rol. De patiënt eet vaak minder door pijn, misselijkheid
        of geen eetlust. Tegelijk is er een verhoogde behoefte aan energie en eiwit, vooral door ontsteking en lichamelijke
        stress. Daar komt bij dat de vertering verstoord kan zijn, met vetmalabsorptie als belangrijk gevolg. Zeker bij{' '}
        <strong className="text-slate-900 dark:text-slate-100">exocriene pancreasinsufficiëntie (EPI)</strong>, waarbij er
        te weinig verteringsenzymen zijn, kunnen gewichtsverlies en vitaminedeficiënties ontstaan.
      </p>
      <p>Een goede voedingsaanpak is daarom een belangrijk onderdeel van de behandeling.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Acute versus chronische pancreatitis en de voedingstoestand
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Aspect</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Acute pancreatitis</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Chronische pancreatitis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Hoofdprobleem voor voeding</td>
              <td className="p-3 align-top">Inflammatoire stress, pijn, misselijkheid, vaak weinig eten</td>
              <td className="p-3 align-top">Langdurige pijn, angst om te eten, verstoorde pancreasfunctie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Energiebehoefte</td>
              <td className="p-3 align-top">Verhoogd door katabole stress</td>
              <td className="p-3 align-top">Vaak langdurig verhoogd of moeilijk haalbaar</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Eiwit</td>
              <td className="p-3 align-top">Verhoogde behoefte, eiwitverlies kan optreden</td>
              <td className="p-3 align-top">Ondersteuning met eiwitrijke voeding is belangrijk</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Vetvertering</td>
              <td className="p-3 align-top">Kan verstoord zijn</td>
              <td className="p-3 align-top">Vaak duidelijk verstoord bij EPI</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Extra aandacht</td>
              <td className="p-3 align-top">Snelle verslechtering van voedingstoestand</td>
              <td className="p-3 align-top">
                Geleidelijk progressief gewichtsverlies, ook endocriene insufficiëntie zoals diabetes type 3c
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> Waarom is gewichtsverlies bij pancreatitis extra
          belangrijk?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> Omdat gewichtsverlies niet alleen minder lichaamsmassa
          betekent, maar vaak ook verlies van vetvrije massa en spierfunctie.
        </p>
      </div>
    </div>
  )
}

export default function Sect02ExogeneInsulineWatBedoelenWeDaarmee() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Exogene insuline: wat bedoelen we daarmee?</h2>
      <p>
        Exogene insuline is insuline die van buiten het lichaam wordt toegediend. Dat is nodig wanneer het lichaam zelf onvoldoende insuline maakt of wanneer de insulinebehoefte niet meer goed wordt opgevangen door andere behandeling. Bij diabetes mellitus speelt insuline een centrale rol, omdat het de opname en opslag van glucose in het lichaam mogelijk maakt.
      </p>
      <p>
        Insulinebehandeling draait steeds om het nabootsen van de natuurlijke insulineafgifte. Het lichaam maakt normaal gesproken op de achtergrond een basale hoeveelheid insuline aan, en daarnaast extra insuline rond maaltijden. Daarom worden insulineschema’s vaak opgebouwd uit een <strong className="text-slate-900 dark:text-slate-100">basale component</strong> en een <strong className="text-slate-900 dark:text-slate-100">boluscomponent</strong>.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Basale insuline</strong> dekt de continue behoefte tussen maaltijden en ’s nachts.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Bolusinsuline</strong> wordt gegeven rond maaltijden om de stijging van glucose na eten op te vangen.
        </li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <h3 className="text-base font-semibold text-amber-900 dark:text-amber-100 m-0">Aandachtsvraag</h3>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Waarom is het belangrijk om basale en bolusinsuline apart te bekijken?</strong>
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          Omdat een probleem in de glucosewaarden vaak laat zien of vooral de achtergrondinsuline tekortschiet, of juist de maaltijdinsuline.
        </p>
      </div>
    </div>
  )
}

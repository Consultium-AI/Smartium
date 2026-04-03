export default function Sect02WaterEnVolumebalans() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Water- en volumebalans: twee verschillende systemen</h2>
      <p>
        Bij stoornissen in de natriumconcentratie gaat het in de praktijk bijna altijd om een probleem in de waterbalans en veel minder vaak om een probleem in de natriumbalans zelf. Dat is een belangrijk uitgangspunt: een afwijkende serum-natriumwaarde zegt vooral iets over de verhouding tussen natrium en water.
      </p>
      <p>Er zijn twee regelkringen die je van elkaar moet onderscheiden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Volumeregulatie: dit loopt via het RAAS-systeem, dus het renine-angiotensine-aldosteronsysteem.</li>
        <li>Waterregulatie / osmoregulatie: dit loopt via ADH.</li>
      </ul>
      <p>
        Deze twee systemen werken natuurlijk samen, maar het helpt om ze eerst apart te begrijpen. Als je bijvoorbeeld door dorst of door vochtverlies in de problemen komt, moeten beide systemen uiteindelijk meebewegen.
      </p>
      <p>
        Een duidelijke klinische gedachte is dus:  hyponatriëmie is eigenlijk hyperaquarémie en hypernatriëmie is eigenlijk hypoaquarémie. Met andere woorden: de waterverhouding is verstoord.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom is serum-natrium zo’n belangrijk getal?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat het meestal een afspiegeling is van de waterbalans, niet alleen van de natriumbalans.
        </p>
      </div>
    </div>
  )
}

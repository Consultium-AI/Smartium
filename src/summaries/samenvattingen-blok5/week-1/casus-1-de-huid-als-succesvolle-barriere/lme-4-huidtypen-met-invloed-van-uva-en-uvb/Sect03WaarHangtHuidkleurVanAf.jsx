export default function Sect03WaarHangtHuidkleurVanAf() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waar hangt huidkleur van af?</h2>
      <p>De variatie in huidkleur wordt bepaald door drie factoren:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de hoeveelheid en verdeling van melanine binnen epidermale melanocyten en keratinocyten;</li>
        <li>de verhouding tussen eumelanine (bruin-zwart) en feomelanine (geel-rood);</li>
        <li>blootstelling aan ultraviolette straling, die de melanineproductie beïnvloedt.</li>
      </ul>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {`  *Wordt huidkleur vooral bepaald door het aantal melanocyten?*  Mini-antwoord: Nee, vooral door de hoeveelheid en verdeling van melanine, niet door het aantal melanocyten.`}
      </p>
      <p>
        Bij mensen met sproeten en rood haar is feomelanine relatief belangrijker. Donkerder huidtypen bevatten meer
        eumelanine, wat beter beschermt tegen UV-straling.
      </p>
      <p>
        Voor dermatologen is het belangrijk om te weten dat klinische verschijnselen per huidtype anders kunnen lijken.
        Ontstekingsreacties, genezing en pigmentverschuivingen kunnen verschillen. Bij een donkere huid kunnen bijvoorbeeld
        hyperpigmentatie en hypopigmentatie na ontsteking duidelijker opvallen, terwijl erytheem of roodheid minder
        prominent zichtbaar kan zijn. Ook aandoeningen zoals eczeem, psoriasis en acne kunnen er visueel anders uitzien.
      </p>
    </div>
  )
}

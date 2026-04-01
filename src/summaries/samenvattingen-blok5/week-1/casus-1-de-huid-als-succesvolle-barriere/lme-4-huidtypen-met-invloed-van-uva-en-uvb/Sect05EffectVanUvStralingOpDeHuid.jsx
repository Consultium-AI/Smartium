export default function Sect05EffectVanUvStralingOpDeHuid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Effect van UV-straling op de huid</h2>
      <p>
        UV-straling kan de huid op korte en op lange termijn beïnvloeden. De zichtbare, korte-termijneffecten zijn vooral
        zonnebrand/zonneverbranding en bruin worden.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Zonnebrand en zonneverbranding</h3>
      <p>
        Bij te veel blootstelling aan UV-straling ontstaat zonnebrand. Dit is zichtbaar als een rode, pijnlijke huid. In
        sommige gevallen ontstaan ook blaarvorming en schilfering. Zonnebrand ontwikkelt zich vooral na UVB-blootstelling
        en bereikt zijn maximale intensiteit pas 6 tot 24 uur later. Een directe roodheid wordt daarbij zelden gezien.
      </p>
      <p>Op cellulair niveau veroorzaakt UV-straling verschillende veranderingen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>oedeem van de epidermis: zwelling van de bovenste huidlaag;</li>
        <li>spongiose: kleine vochtige ruimtes tussen huidcellen;</li>
        <li>acanthose: verdikking van de epidermis, vooral van de basale en spinous cellen;</li>
        <li>hyperkeratose: verdikking van de hoornlaag door overmatige productie van keratine;</li>
        <li>zonnebrandcellen: dode of beschadigde huidcellen die door apoptose worden afgebroken;</li>
        <li>uitputting van Langerhanscellen: minder immuuncellen in de huid;</li>
        <li>verhoogde melanineproductie;</li>
        <li>vasodilatatie: verwijding van bloedvaten, wat roodheid geeft;</li>
        <li>ontstekingsreactie met toename van lymfocyten en neutrofielen.</li>
      </ul>
      <p>Op moleculair niveau zorgt UV-straling voor stress in de cellen. Daarbij ontstaan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stress-eiwitten;</li>
        <li>cytokinen zoals IL-1, IL-6 en TNF;</li>
        <li>antimicrobiële peptiden.</li>
      </ul>
      <p>
        UVB activeert bovendien ionkanalen in huidcellen, waardoor calcium naar binnen stroomt. Die calciuminstroom is
        betrokken bij de pijn die hoort bij zonnebrand.
      </p>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {`  *Waardoor ontstaat de pijn bij zonnebrand?*  Mini-antwoord: Door activatie van ionkanalen in keratinocyten, waardoor calcium naar binnen stroomt.`}
      </p>
    </div>
  )
}

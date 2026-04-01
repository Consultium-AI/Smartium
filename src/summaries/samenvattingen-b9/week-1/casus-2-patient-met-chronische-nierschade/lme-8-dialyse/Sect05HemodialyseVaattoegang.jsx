export default function Sect05HemodialyseVaattoegang() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hemodialyse</h2>
      <p>
        Bij hemodialyse moet je niet alleen toegang tot de bloedbaan hebben, maar ook een aantal andere onderdelen regelen. Er zijn verschillende noodzakelijke componenten: een vaattoegang, een dialysemachine, dialysevloeistof, een kunsthier/filter, antistolling, een individueel behandelplan en dialysepersoneel.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Vaattoegang</h3>
        <p className="mb-3">Voor hemodialyse zijn twee hoofdvormen van vaattoegang belangrijk:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Centrale veneuze katheter</li>
          <li>Arterioveneuze fistel of shunt</li>
        </ul>

        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">Centrale veneuze katheter</h4>
        <p className="mb-3">
          Een centrale veneuze katheter kan binnen enkele minuten toegang geven tot de bloedbaan. Meestal wordt deze geplaatst in de vena jugularis; de vena femoralis is een alternatief, maar de jugularis heeft een kleiner infectierisico. De katheter wordt vaak slechts kortdurend gebruikt, van dagen tot weken. Soms wordt hij getunneld onder de huid om de kans op infectie te verkleinen.
        </p>
        <p className="mb-2">Complicaties zijn onder andere:</p>
        <ul className="list-disc pl-6 space-y-1 mb-6">
          <li>infectie;</li>
          <li>trombose van het vat;</li>
          <li>stenose van de vene;</li>
          <li>afvloeiproblemen of stuwing.</li>
        </ul>

        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-2">Arterioveneuze fistel/shunt</h4>
        <p className="mb-3">
          Een arterioveneuze fistel wordt door de vaatchirurg gemaakt tussen een arterie en een vene, meestal in de onderarm van de niet-dominante hand. Na aanleg duurt het enkele weken voordat de fistel rijp is. Door de hoge druk in de arterie wordt de vene dikker en groter, zodat er een voldoende grote bloedflow ontstaat. Dit heet het rijpen van de shunt. De gewenste bloedflow ligt rond 500–750 ml/min.
        </p>
        <p className="mb-2">Voordelen van een shunt zijn:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>lagere kans op infecties;</li>
          <li>lagere kans op trombose vergeleken met een centrale lijn.</li>
        </ul>
        <p className="mb-2">Mogelijke problemen zijn:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>onvoldoende rijpen;</li>
          <li>steal-syndroom: de hand krijgt te weinig bloed door de shunting;</li>
          <li>stenose in de shunt of in de afvoerende venen;</li>
          <li>afname van flow;</li>
          <li>aneurysmatische verwijding door herhaald prikken op dezelfde plek.</li>
        </ul>
      </div>
    </div>
  )
}

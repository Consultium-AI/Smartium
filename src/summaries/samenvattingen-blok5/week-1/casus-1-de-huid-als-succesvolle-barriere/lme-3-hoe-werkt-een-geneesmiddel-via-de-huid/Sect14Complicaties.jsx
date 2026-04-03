export default function Sect14Complicaties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Complicaties van toediening via de huid</h2>
      <p>
        Ondanks dat conventionele injecties een goede en betrouwbare manier zijn om geneesmiddelen toe te dienen, hebben
        deze technieken ook nadelen. Zeker bij patiënten die dit zelfstandig thuis moeten doen, kan injecteren lastig of
        zelfs onveilig zijn. Bij kwetsbare of oudere patiënten moet in zulke gevallen soms iemand uit de omgeving of de
        thuiszorg helpen.
      </p>
      <p>Mogelijke complicaties en bijwerkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Algemene lokale reacties: hematoomvorming, irritatie, huiduitslag en pijn.
        </li>
        <li>
          Depotvorming: wanneer geneesmiddelen in hogere concentraties of herhaaldelijk op dezelfde plek worden
          geïnjecteerd, kan een depot onder de huid ontstaan. Het middel kan dan eerst onvoldoende werken, maar later alsnog
          vrijkomen. Dit komt onder andere voor bij insuline en kan leiden tot langdurige of herhaalde hypoglykemieën zodra
          de insuline uit zo&apos;n depot alsnog wordt opgenomen.
        </li>
        <li>
          Huidperfusie: voor goede opname uit het subcutane weefsel is een goede doorbloeding nodig. Bij circulatoire shock
          kan opname van subcutane medicatie sterk afnemen.
        </li>
        <li>
          Infecties: goede hygiëne en desinfectie zijn cruciaal. Toch blijft er altijd risico op huidinfecties, zoals
          cellulitis en erysipelas. Bij intramusculaire injecties bestaat ook risico op dieper gelegen infecties, waaronder
          abcesvorming.
        </li>
        <li>
          Lipodystrofie: herhaald injecteren op dezelfde plek kan leiden tot lipo-hypertrofie of lipo-atrofie. Dit wordt
          vooral gezien bij mensen die regelmatig insuline injecteren. Daarom is het belangrijk om injectieplaatsen af te
          wisselen.
        </li>
      </ul>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span> Waarom moet je injectieplaatsen afwisselen?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Om lipodystrofie en lokale complicaties te voorkomen.
      </p>
    </div>
  )
}

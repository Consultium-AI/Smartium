import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Weerstand en de Wet van Poiseuille`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De weerstand in een bloedvat hangt af van de eigenschappen van het bloed en van het vat zelf. De Wet van Poiseuille beschrijft dit voor laminaire flow in een cilindrisch vat:`}</Inline></p>
      <PBody text={`**R = 8ηl / πr⁴**`} />
      <p className="leading-relaxed"><Inline>{`Hierin is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**η** de viscositeit van het bloed`}</Inline></li>
        <li><Inline>{`**l** de lengte van het vat`}</Inline></li>
        <li><Inline>{`**r** de radius van het vat`}</Inline></li>
      </ul>
      <PBody text={`De belangrijkste factor is de **radius**. Omdat die tot de vierde macht in de formule staat, heeft een kleine verandering in de radius een heel groot effect op de weerstand. Als de radius kleiner wordt, stijgt de weerstand sterk. Als de radius groter wordt, daalt de weerstand sterk.`} />
      <PBody text={`**Aandacht-vraagje:**
Wat gebeurt er met de flow als de radius van een vat halveert?
**Mini-antwoord:** De flow wordt veel kleiner, namelijk 16 keer zo klein als alle andere factoren gelijk blijven.`} />
      <p className="leading-relaxed"><Inline>{`Arteriolen zijn hierbij heel belangrijk. Dat zijn kleine slagadertjes vóór de haarvaten. Ze kunnen vernauwen of verwijden en zo de weerstand sterk beïnvloeden. Daardoor regelen ze:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de totale perifere weerstand`}</Inline></li>
        <li><Inline>{`de verdeling van het bloed over organen en weefsels`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Prediabetes`}</Inline></h3>
      <p><Inline>{`Tussen normale glucoseregulatie en DM2 bestaat een tussenfase: **prediabetes**. Daarbij is er al een periode van toenemende insulineresistentie en verminderde insulineproductie, maar er zijn nog niet altijd duidelijke symptomen. Dat maakt deze fase lastig zichtbaar.`}</Inline></p>
      <p><Inline>{`Prediabetes kan zich uiten als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**gestoorde nuchtere glucosewaarde**;`}</Inline></li>
        <li><Inline>{`**gestoorde glucosetolerantie**;`}</Inline></li>
        <li><Inline>{`of internationaal soms als een licht verhoogd HbA1c.`}</Inline></li>
      </ul>
      <p><Inline>{`Mensen met prediabetes hebben een duidelijk verhoogd risico op het ontwikkelen van DM2 en ook een hoger cardiovasculair risico en sterfterisico dan mensen met normale glucosewaarden.`}</Inline></p>
    </div>
  )
}

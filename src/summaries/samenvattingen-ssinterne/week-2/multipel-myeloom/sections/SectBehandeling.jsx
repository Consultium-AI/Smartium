import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De patiënte wordt behandeld met een combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bortezomib**`}</Inline></li>
        <li><Inline>{`**thalidomide**`}</Inline></li>
        <li><Inline>{`**dexamethason**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze combinatie is gericht op het remmen van de ziekte en het beïnvloeden van de kwaadaardige plasmacellen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Behandeling en bijwerkingen`}</Inline></SubHeading>
      <DataTable rows={[["Middel", "Groep", "Belangrijke bijwerkingen"], ["Thalidomide", "immunomodulerend middel (IMiD)", "slaperigheid, teratogeniteit, trombo-embolische complicaties"], ["Bortezomib", "proteasoomremmer", "trombocytopenie, polyneuropathie, herpes zoster-infectie"], ["Dexamethason", "corticosteroïd", "stemmingswisselingen, diabetes mellitus, proximale spierzwakte"]]} />
      <SubHeading><Inline>{`Kort uitgelegd`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Immunomodulerende middelen** beïnvloeden het immuunsysteem en de groei van de tumorcellen.`}</Inline></li>
        <li><Inline>{`**Proteasoomremmers** verstoren een belangrijk afbraaksysteem in de cel.`}</Inline></li>
        <li><Inline>{`**Corticosteroïden** werken ontstekingsremmend en hebben ook invloed op de tumorbehandeling.`}</Inline></li>
      </ul>
    </div>
  )
}

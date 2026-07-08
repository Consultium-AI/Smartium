import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Distributie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De verdeling van geneesmiddelen over het lichaam verschilt bij kinderen. Neonaten hebben relatief veel lichaamswater. Dat betekent dat wateroplosbare middelen zich anders verdelen dan bij volwassenen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Gentamicine is een wateroplosbaar geneesmiddel en wordt daarom per kilogram lichaamsgewicht gedoseerd. Omdat het verdelingsvolume bij jonge kinderen groter is, kan de plasmaspiegel bij gelijke mg/kg-dosis lager zijn dan bij volwassenen.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** waarom kan een kind bij dezelfde mg/kg-dosis een lagere spiegel hebben?
**Mini-antwoord:** omdat het geneesmiddel zich over een groter waterig compartiment verdeelt.`} />
      <SubHeading><Inline>{`Eiwitbinding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pasgeborenen hebben een lagere eiwitbinding, onder andere door minder albumine en minder bindingsplaatsen. Dat is klinisch belangrijk. Sulfonamiden kunnen bilirubine verdringen van albumine, waardoor de vrije bilirubinespiegel stijgt. Dat geeft risico op kernicterus. Daarom is cotrimoxazol gecontra-indiceerd bij kinderen jonger dan 1 maand. Ceftriaxon kan hetzelfde probleem geven en wordt in de eerste levensmaand bij voorkeur niet gebruikt.`}</Inline></p>
    </div>
  )
}

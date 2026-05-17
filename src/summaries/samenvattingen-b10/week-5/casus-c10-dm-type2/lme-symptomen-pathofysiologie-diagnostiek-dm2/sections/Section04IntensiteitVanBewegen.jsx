import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Intensiteit van bewegen`}</Inline></h3>
      <p><Inline>{`Bij intensiteit kun je grofweg denken aan vier categorieën: zitgedrag, licht intensief, matig intensief en zwaar intensief. Dat onderscheid is nuttig, omdat niet elke vorm van bewegen hetzelfde effect heeft.`}</Inline></p>
      <PBody text={`**Aandacht-vragetje:** *Hoe herken je matig intensief bewegen?*  
**Kort antwoord:** Je hartslag en ademhaling gaan omhoog, maar praten lukt nog wel.`} />
      <p><Inline>{`Tabel 1. Intensiteit van bewegen met voorbeelden`}</Inline></p>
      <DataTable rows={[["Categorie", "Kenmerken", "Voorbeelden"], ["Zitgedrag", "Zittende of (half)liggende activiteiten die weinig energie kosten", "zitten, rustig tv-kijken, lezen"], ["Licht intensief", "Geen duidelijke toename van hartslag of versnelde ademhaling", "afwassen, boodschappen doen, auto wassen, darten, rustig rolstoeldansen"], ["Matig intensief", "Hartslag en ademhaling nemen toe, praten blijft mogelijk", "wandelen, schoonmaken van de badkamer, power yoga, skateboarden"], ["Zwaar intensief", "Sterkere ademhaling of hijgen, praten wordt moeilijk", "skeeleren, hockey, squashen, fietsen met 20 km/uur, judo"]]} />
      <p><Inline>{`Licht intensief bewegen hoort dus nog steeds bij een actieve leefstijl, maar voor de gezondheid zijn vooral matig tot zwaar intensieve activiteiten belangrijk. Het verschil is vooral zichtbaar in hoe hard je lichaam moet werken.`}</Inline></p>
    </div>
  )
}

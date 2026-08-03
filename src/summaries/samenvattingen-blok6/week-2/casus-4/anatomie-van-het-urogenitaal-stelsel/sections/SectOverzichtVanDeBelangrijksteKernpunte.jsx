import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Overzicht van de belangrijkste kernpunten`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 5. Kernoverzicht urinewegstelsel", "Belangrijkste punten"], ["Nieren", "Retroperitoneaal, ter hoogte van T12-L3, rechter nier ligt lager"], ["Bescherming nier", "Perirenaal vet, fascia renalis, pararenaal vet"], ["Nieropbouw", "Cortex, medulla, pelvis, piramiden, calices"], ["Functionele eenheid", "Nefron; corpuscula, tubuli en verzamelbuizen"], ["Bloedvoorziening nier", "Aorta → a. renalis → a. interlobaris → a. arcuata → a. corticalis radiata"], ["Ureter", "Retroperitoneaal, 25-30 cm, peristaltiek, vaste relaties met vaten en organen"], ["Blaas", "Opslagplaats voor urine, 500-1500 ml capaciteit, plasdrang vanaf 250-500 ml"], ["Blaaswand", "Detrusor voor contractie, mucosa voor bescherming"], ["Urethra", "Afsluiting door m. sphincter externus in het diaphragma urogenitale"]]} />
    </div>
  )
}

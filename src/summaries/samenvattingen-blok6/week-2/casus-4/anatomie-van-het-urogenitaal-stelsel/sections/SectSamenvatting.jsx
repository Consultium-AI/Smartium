import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De nieren liggen retroperitoneaal ter hoogte van T12 tot L3, waarbij de rechter nier lager ligt dan de linker door de lever. Ze worden omgeven door organen, vetlagen en de fascia renalis, die samen steun en bescherming geven. In de nier liggen cortex, medulla en pelvis renalis, met daarin onder andere de piramiden, calices en nefronen. De glomeruli, corpuscula renalia en tubuli liggen in de cortex. Het bloed bereikt de glomeruli via een vaste arteriële route vanaf de aorta.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De ureter is een retroperitoneale buis van 25 tot 30 cm die urine door peristaltiek naar de blaas vervoert. Hij heeft vaste anatomische relaties met de vas gonadalis, a. iliaca communis, ductus deferens en a. uterina. De ureter krijgt bloed uit meerdere arteriële takken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De vesica urinaria slaat urine op en ontvangt deze via de ostia ureteris. De blaaswand bestaat uit een spierlaag, de detrusor, en een mucosale beschermlaag. De blaas ligt ventrocaudaal van de uterus en craniaal van de prostaat. De urethra wordt afgesloten door de m. sphincter externus in het diaphragma urogenitale.`}</Inline></p>
    </div>
  )
}

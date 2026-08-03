import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De glomerulaire filtratiebarrière`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De glomerulus is het deel van het nefron waar bloed onder druk wordt gefiltreerd. De filtratiebarrière zorgt ervoor dat niet alles zomaar in de voorurine terechtkomt. Vooral macromoleculen, zoals eiwitten, worden tegengehouden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De filtratiebarrière bestaat uit meerdere lagen die de gefilterde stof achter elkaar passeert. De volgorde is belangrijk:`}</Inline></p>
      <PBody text={`**Tabel 1. Volgorde van de glomerulaire filtratiebarrière**`} />
      <DataTable rows={[["Volgorde", "Structuur", "Belang"], ["1", "Glycocalyx", "Belangrijk voor ladingselectiviteit"], ["2", "Gefenestreerd endotheel", "Laat kleine stoffen door via openingen"], ["3", "Glomerulair basaalmembraan (GBM)", "Zorgt vooral voor structurele stevigheid en restrictie"], ["4", "Podocytenvoetjes", "Vormt samen de filtratiespleet"], ["5", "Ruimte van Bowman", "Hier komt het filtraat terecht"]]} />
      <PBody text={`De **glycocalyx** bestaat vooral uit suikermoleculen op en naast het endotheel. Deze laag speelt een belangrijke rol in de integriteit van de filtratiebarrière. Als de glycocalyx beschadigd raakt, neemt de uitscheiding van eiwitten sterk toe.`} />
      <PBody text={`Daarna komt de stof langs het **gefenestreerde endotheel**. “Gefenestreerd” betekent dat er kleine openingen in zitten. Daardoor kunnen veel kleine stoffen relatief makkelijk passeren.`} />
      <PBody text={`Vervolgens volgt het **glomerulaire basaalmembraan**. Dit membraan zorgt vooral voor de structurele stevigheid van de barrière. Daarnaast treedt hier veel restrictie op, vooral voor negatief geladen moleculen. Dat komt doordat het membraan zelf ook negatief geladen is, onder andere door heparansulfaat.`} />
      <PBody text={`Daarna komen de **podocyten** met hun **podocytenvoetjes**. Deze voetjes grijpen als het ware in elkaar, als een rits. Tussen die voetjes zit de **filtratiespleet**. Die spleet bevat onder andere de eiwitten **podocine** en **nefrine**. Uiteindelijk komt de gefilterde stof in de **ruimte van Bowman** terecht.`} />
    </div>
  )
}

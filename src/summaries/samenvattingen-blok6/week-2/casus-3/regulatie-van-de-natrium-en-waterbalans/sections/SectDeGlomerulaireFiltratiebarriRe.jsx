import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De glomerulaire filtratiebarrière`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De glomerulus filtert bloed, maar houdt niet alles tegen. Water en zouten moeten worden gefiltreerd, terwijl eiwitten juist zoveel mogelijk in het bloed moeten blijven. De filtratiebarrière heeft daarom twee belangrijke eigenschappen: grootte-selectiviteit en ladingsselectiviteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De grootte-selectiviteit zorgt ervoor dat grote eiwitten niet door de barrière passen. De ladingsselectiviteit zorgt ervoor dat negatief geladen eiwitten worden afgestoten. Albumine is bijvoorbeeld negatief geladen en wordt daardoor normaal gesproken tegengehouden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De filtratiebarrière bestaat uit endotheelcellen met fenestrae, de glomerulaire basaalmembraan en podocyten met filtratiespleten. De ladingsselectiviteit hangt vooral samen met negatief geladen glycoproteïnen, terwijl de grootte-selectiviteit vooral wordt bepaald door de filtratiespleten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Kleine eiwitten kunnen soms wel worden gefiltreerd, maar worden normaal gesproken in de proximale tubulus weer gereabsorbeerd. Dat gebeurt via opname en afbraak tot aminozuren of via binding aan transporteiwitten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Selectiviteit van de glomerulaire filtratiebarrière`}</Inline></SubHeading>
      <DataTable rows={[["Eigenschap", "Wat wordt tegengehouden?", "Gevolg bij verlies"], ["Grootte-selectiviteit", "Grote eiwitten", "Ook grote eiwitten komen in de urine"], ["Ladingsselectiviteit", "Negatief geladen eiwitten", "Vooral kleine negatief geladen eiwitten, zoals albumine, komen in de urine"]]} />
      <p className="leading-relaxed"><Inline>{`Bij ziektebeelden kan het belangrijk zijn om te bepalen of er sprake is van verlies van grootte-selectiviteit of ladingsselectiviteit. Daarvoor kan een selectiviteitsindex worden gebruikt, waarbij een groot eiwit zoals IgG wordt vergeleken met albumine in de urine. Een hoge index past bij behoud van selectiviteit, een lage index bij verlies van selectiviteit.`}</Inline></p>
    </div>
  )
}

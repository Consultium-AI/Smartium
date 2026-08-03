import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interpretatie van DLCO, VA en KCO`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De normale waarden hangen af van lengte, leeftijd en geslacht. Beoordeling gebeurt met de Z-score. Voor DLCO en VA geldt dat een Z-score tussen -1,645 en +1,645 normaal is. Voor KCO geldt die beoordeling alleen als DLCO en VA normaal zijn, omdat KCO niet lineair met VA meebeweegt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een lage DLCO moet altijd samen met VA en KCO worden bekeken. Dat patroon vertelt namelijk iets over de oorzaak.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Typische patronen bij verschillende aandoeningen`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "VA", "KCO", "DLCO", "Verklaring"], ["Incomplete expansie", "↓", "↑↑", "↓", "Minder volume, maar relatief efficiëntere gaswisseling"], ["Gedeeltelijk longverlies", "↓", "↑", "↓", "Minder longweefsel, maar resterend weefsel krijgt meer perfusie"], ["Diffuse longschade", "↓", "↓", "↓↓", "Minder volume en verdikt membraan"], ["Destructie van alveolaire septa", "↔/↓", "↓", "↓/↓↓", "Minder gaswisselend oppervlak"], ["Verhoogde pulmonale perfusie", "↔", "↑", "↑", "Meer capillair bloedvolume"]]} />
      <PBody text={`Bij **incomplete expansie** of **longresectie** is het longvolume kleiner, waardoor VA daalt. KCO stijgt dan vaak relatief, omdat het overgebleven longweefsel efficiënter wordt benut.
Bij **diffuse longschade**, zoals idiopathische pulmonale fibrose, zijn zowel VA als KCO verlaagd.
Bij **emfyseem** is vooral het gaswisselend oppervlak afgenomen door destructie van alveolaire wanden. Daardoor daalt KCO en vaak ook DLCO, terwijl VA relatief behouden kan blijven.`} />
      <PBody text={`**Aandacht-vraagje:** Wat past bij een sterk verlaagde DLCO, normale VA en lage KCO?
**Mini-antwoord:** Dat past het best bij longemfyseem.`} />
      <SubHeading><Inline>{`Ernst van een diffusiestoornis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ernst van een diffusiestoornis wordt vooral beoordeeld op basis van de DLCO en bij voorkeur de Z-score.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Ernst van een diffusiestoornis`}</Inline></SubHeading>
      <DataTable rows={[["DLCO Z-score", "Interpretatie", "DLCO % voorspeld"], ["> 1,645", "Abnormaal hoog", "> 140%"], ["-1,645 tot 1,645", "Normaal", "76% tot 140%"], ["-1,65 tot -2,5", "Mild", "61% tot 75%"], ["-2,5 tot -4,0", "Matig", "41% tot 60%"], ["< -4,0", "Ernstig", "< 40%"]]} />
    </div>
  )
}

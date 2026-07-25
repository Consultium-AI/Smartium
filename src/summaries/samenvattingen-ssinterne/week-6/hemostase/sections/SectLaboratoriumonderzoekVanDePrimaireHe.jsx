import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Laboratoriumonderzoek van de primaire hemostase`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als je wilt weten of de primaire hemostase goed functioneert, kijk je vooral naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het **aantal trombocyten**;`}</Inline></li>
        <li><Inline>{`de **functie van trombocyten**;`}</Inline></li>
        <li><Inline>{`de **von Willebrand factor**: antigeen en activiteit.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het trombocytenaantal is eenvoudig te meten. De functie van trombocyten is lastiger te testen. Daarbij worden trombocyten gestimuleerd met een agonist en wordt gekeken of ze reageren. Dat gebeurt via een verandering in lichtdoorlaatbaarheid: hoe meer aggregatie, hoe meer licht er wordt doorgelaten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest gebruikte agonisten zijn ADP, adrenaline, collageen, ristocetine en arachidonzuur.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Onderzoek van de primaire hemostase`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Onderzoek"], ["Trombocytenaantal", "Eenvoudig te meten"], ["Trombocytenfunctie", "Aggregatietest"], ["Von Willebrand factor", "Antigeen en activiteit"], ["Extra bij verdenking VWD", "Multimerenpatroon"]]} />
      <p className="leading-relaxed"><Inline>{`Bij von Willebrand factor kun je ook het multimerenpatroon bepalen, vooral als er verdenking is op ziekte van von Willebrand. Dan kijk je of bepaalde multimeren ontbreken, zoals de hoog-molecuulgewicht multimeren bij VWD type 2A.`}</Inline></p>
      <SubHeading><Inline>{`Interpretatie van aggregatietesten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De uitslag van aggregatietesten kan passen bij verschillende aandoeningen. Hieronder staat het overzicht zoals het wordt gebruikt.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Interpretatie van aggregatietesten`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening", "Kenmerkend patroon"], ["Normaal", "Normaal patroon"], ["VWD type I en IIA", "Afwijking bij ristocetine"], ["VWD type IIB", "Verhoogde reactie met lage ristocetine"], ["Bernard-Soulier syndroom", "Afwijking bij ristocetine"], ["Glanzmann-stoornis", "Afwijking bij meerdere agonisten, ristocetine normaal"], ["Storage pool disease", "Verminderde of partiële reacties"], ["Membrane receptor defect", "Verminderde reacties"], ["Cyclo-oxygenase-deficiëntie (aspirine)", "Verminderde reactie op meerdere agonisten"], ["Hermansky-Pudlak syndroom / SSRI", "Afwijkend patroon"], ["Gray platelets", "Verminderde reacties"], ["Quebec", "Afwijking bij één patroon"]]} />
      <PBody text={`Een belangrijk voorbeeld is de **Bernard-Soulier**-trombocytopathie. Daarbij is de aggregatie met ristocetine gestoord of afwezig. Dat past bij een erfelijke stoornis van de trombocytenfunctie.`} />
    </div>
  )
}

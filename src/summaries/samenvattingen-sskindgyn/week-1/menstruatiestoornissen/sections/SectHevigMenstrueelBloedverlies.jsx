import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hevig menstrueel bloedverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hevig menstrueel bloedverlies betekent dat een vrouw tijdens de menstruatie veel bloed verliest, vaak ook gedurende een langere periode. Er is ooit exact gemeten hoeveel bloedverlies nog normaal is: de bovengrens ligt rond 80 ml. Bij meer dan 80-100 ml spreekt men van menorragie. Tegenwoordig wordt liever de term hevig menstrueel bloedverlies of heavy menstrual bleeding gebruikt. De term hypermenorroe wordt niet meer gebruikt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omdat bloedverlies lastig precies te meten is, kan een menstruatiescorekaart worden gebruikt. Daarbij noteert de vrouw hoeveel maandverbanden en/of tampons zij per dag gebruikt. Deze score hangt vrij goed samen met de hoeveelheid bloedverlies. Ook een ijzergebreksanemie ondersteunt de diagnose: dan zie je bijvoorbeeld een klein erytrocytenvolume en een laag serumijzer.`}</Inline></p>
      <SubHeading><Inline>{`Wat kan de patiënte ervaren?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een vrouw kan verschillende veranderingen als probleem ervaren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de cyclusduur is veranderd;`}</Inline></li>
        <li><Inline>{`de cyclus is onregelmatig geworden;`}</Inline></li>
        <li><Inline>{`het aantal bloedingsdagen is toegenomen;`}</Inline></li>
        <li><Inline>{`het bloedverlies is toegenomen;`}</Inline></li>
        <li><Inline>{`de menstruaties zijn pijnlijker geworden.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Wanneer is een cyclus gemiddeld normaal?**
De gemiddelde duur is 28-29 dagen.`} />
      <p className="leading-relaxed"><Inline>{`Een spreiding van 25 tot 35 dagen wordt nog als redelijk normaal gezien. Als de menstruatie met tussenpozen van meer dan 5 weken optreedt, of minder dan 8 keer per jaar, spreek je van oligomenorroe.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke begrippen rond het menstruatiepatroon`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["Oligomenorroe", "Te lange, onregelmatige cyclus; menstruatie met tussenpozen van meer dan 5 weken of minder dan 8x per jaar"], ["Amenorroe", "Uitblijven van menstruatie"], ["Menorragie", "Langdurig en overvloedig bloedverlies tijdens de menstruatie"], ["Dysmenorroe", "Pijnlijke menstruatie"], ["Metrorragie", "Hevig vaginaal bloedverlies zonder herkenbaar cyclisch patroon"], ["Intermenstrueel bloedverlies", "Bloedverlies tussen twee menstruaties in"]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wie krijgt een cardiovasculair risicoprofiel?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een cardiovasculair risicoprofiel wordt opgesteld bij patiënten met bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`eerder vastgestelde hart- en vaatziekten;`}</Inline></li>
        <li><Inline>{`diabetes mellitus;`}</Inline></li>
        <li><Inline>{`chronische nierschade;`}</Inline></li>
        <li><Inline>{`een belaste familieanamnese voor premature hart- en vaatziekten;`}</Inline></li>
        <li><Inline>{`een vermoeden van een erfelijke cholesterolstoornis;`}</Inline></li>
        <li><Inline>{`risicofactoren zoals roken, obesitas, verhoogde bloeddruk of cholesterol;`}</Inline></li>
        <li><Inline>{`COPD;`}</Inline></li>
        <li><Inline>{`inflammatoire aandoeningen zoals reumatoïde artritis of Crohn.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wat moet je uitvragen en onderzoeken?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goed risicoprofiel heb je minimaal nodig:`}</Inline></p>
      <DataTable rows={[["Onderdeel", "Wat je nodig hebt"], ["Anamnese", "Leeftijd, geslacht, voorgeschiedenis, roken, alcohol/drugs, voeding, lichamelijke activiteit, familieanamnese"], ["Lichamelijk onderzoek", "Lengte en gewicht/BMI, middelomtrek, bloeddruk, stigmata van erfelijke dyslipidemie, algemeen onderzoek op aanwijzingen voor andere oorzaken zoals hypothyreoïdie of Cushing"], ["Aanvullend onderzoek", "Nierfunctie, eiwit in de urine, lipidenprofiel, glucose en HbA1c bij diabetes"]]} />
      <p className="leading-relaxed"><Inline>{`ECG of uitgebreid aanvullend onderzoek is niet standaard nodig, tenzij daar een reden voor is.`}</Inline></p>
    </div>
  )
}

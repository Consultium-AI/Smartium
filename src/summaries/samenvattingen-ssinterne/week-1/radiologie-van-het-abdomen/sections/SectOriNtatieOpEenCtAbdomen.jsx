import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oriëntatie op een CT-abdomen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een CT van het abdomen wordt meestal beoordeeld in dwarsdoorsneden. Daarbij is het belangrijk dat je weet hoe je je moet oriënteren. Bovenaan zie je de voorkant van de patiënt, onderaan de achterkant. Links op het beeld is de rechterkant van de patiënt en rechts op het beeld is de linkerkant van de patiënt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een CT-abdomen laat vaak niet alleen de buikorganen zien, maar ook een deel van de longbasissen en het hart. Dat is handig, omdat je zo ook het meest bovenste deel van de buikorganen goed meepakt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Meestal wordt een CT-abdomen ongeveer 70 seconden na contrasttoediening gemaakt. Soms wordt eerder of later gescand, afhankelijk van waar men naar zoekt. Bij een arteriële fase zijn de arteriën beter zichtbaar; later kun je juist andere afwijkingen beter zien.`}</Inline></p>
    </div>
  )
}

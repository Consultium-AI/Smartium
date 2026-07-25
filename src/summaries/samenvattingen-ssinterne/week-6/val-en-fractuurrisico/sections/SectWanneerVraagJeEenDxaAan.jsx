import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer vraag je een DXA aan?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een DXA is niet alleen zinvol na een fractuur. Ook bij patiënten ouder dan 60 jaar zonder fractuur kan een DXA geïndiceerd zijn als het fractuurrisico hoog genoeg is. Daarvoor wordt een fractuurrisicoscore gebruikt. Bij een score van 4 punten of meer wordt een DXA geadviseerd.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Fractuurrisicoscore`}</Inline></SubHeading>
      <DataTable rows={[["Risicofactor", "Punten"], ["Gewicht < 60 kg en/of BMI < 20 kg/m²", "1"], ["Leeftijd > 60 jaar", "1"], ["Leeftijd > 70 jaar", "2"], ["Eerdere fractuur na het 50e levensjaar", "1"], ["Heupfractuur bij een ouder", "1"], ["Verminderde mobiliteit", "1"], ["Reumatoïde artritis", "1"], ["Meer dan 1 keer vallen in het laatste jaar", "1"], ["Aandoening of situatie geassocieerd met secundaire osteoporose", "1"], ["Glucocorticoïden > 3 maanden, ≥ 7,5 mg/dag", "4"]]} />
    </div>
  )
}

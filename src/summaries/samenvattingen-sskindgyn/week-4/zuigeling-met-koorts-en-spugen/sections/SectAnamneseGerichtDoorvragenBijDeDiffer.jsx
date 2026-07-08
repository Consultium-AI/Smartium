import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese: gericht doorvragen bij de differentiaaldiagnose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als je een vermoeden hebt van een bepaalde aandoening, vraag je gericht door. Bij verschillende infecties horen verschillende aanvullende vragen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Gerichte vragen per mogelijke diagnose`}</Inline></SubHeading>
      <DataTable rows={[["Diagnose", "Vragen die helpen"], ["Gastro-enteritis", "Hoe vaak ontlasting? Hoe ziet de ontlasting eruit?"], ["Bovenste luchtweginfectie", "Verkoudheid? Neusuitvloed? Grijpen naar oren?"], ["Pneumonie", "Snelle ademhaling? Moeite met ademen?"], ["Meningitis", "Meningeale prikkeling, bijvoorbeeld nekpijn of pijn bij bewegen"], ["Urineweginfectie", "Troebele urine, stinkende urine"], ["Sepsis", "Kreunen, sufheid, prikkelbaarheid"]]} />
      <p className="leading-relaxed"><Inline>{`Bij ernstige bacteriële infecties op deze leeftijd zijn de klachten vaak vaag. Slecht drinken, braken, koorts, kreunen, sufheid en prikkelbaarheid passen allemaal bij een ernstig ziek kind.`}</Inline></p>
    </div>
  )
}

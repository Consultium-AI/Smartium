import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CVRM draait om het vroeg herkennen en behandelen van risicofactoren voor hart- en vaatziekten. De belangrijkste factoren zijn leeftijd, geslacht, roken, diabetes, hypertensie, dyslipidemie, nierziekte, obesitas, familieanamnese en bepaalde andere aandoeningen. Bij de risicoschatting gebruik je anamnese, lichamelijk onderzoek, laboratoriumonderzoek en risicotabellen zoals SCORE2. Patiënten met bestaande hart- en vaatziekten, ernstige diabetes of ernstige nierschade hebben een zeer hoog risico en moeten behandeld worden. Leefstijl is altijd de basis. Bij hypertensie en dyslipidemie spelen medicatie, therapietrouw, bijzondere situaties zoals zwangerschap en het herkennen van secundaire oorzaken een belangrijke rol.`}</Inline></p>
    </div>
  )
}

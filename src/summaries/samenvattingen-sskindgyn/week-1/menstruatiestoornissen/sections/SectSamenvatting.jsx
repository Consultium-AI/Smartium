import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij menstruatiestoornissen is een goede cyclusanamnese de basis. Denk steeds aan de leeftijd, de cyclus, de laatste menstruatie en de mogelijkheid van zwangerschap. Hevig menstrueel bloedverlies kan passen bij hormonale oorzaken, maar ook bij myomen, endometrium- of cervixpathologie, stollingsstoornissen, een IUD of maligniteit. Metrorragie en intermenstrueel bloedverlies moeten altijd apart worden herkend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij toenemende pijn tijdens de menstruatie moet je denken aan dysmenorroe en mogelijk endometriose. De pijn, het tijdstip van optreden en bijkomende klachten zoals dyspareunie, dysurie en dyschezie helpen bij de diagnose. Endometriose kan lichamelijk onderzoek en aanvullend onderzoek ondersteunen en wordt behandeld met hormonale remming of chirurgie, maar behandeling kan botsen met een kinderwens.`}</Inline></p>
    </div>
  )
}

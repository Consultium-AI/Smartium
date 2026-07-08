import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De baring als fysiologisch proces`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een normale bevalling is een fysiologische gebeurtenis. Het is belangrijk om te begrijpen wat er in de verschillende fasen gebeurt, omdat je dan beter kunt beoordelen of de baring normaal verloopt of dat er sprake is van vertraging of problemen. De baring wordt klassiek verdeeld in vier tijdperken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het ontsluitingstijdperk`}</Inline></li>
        <li><Inline>{`het uitdrijvingstijdperk`}</Inline></li>
        <li><Inline>{`het nageboortetijdperk`}</Inline></li>
        <li><Inline>{`het postplacentaire tijdperk, dus de periode na de geboorte van de placenta`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een normale baring is de zwangerschap tussen 37 en 42 weken, ligt de foetus in hoofdligging, beginnen de weeën spontaan en verlopen ontsluiting en uitdrijving zonder medische interventies. De placenta en vliezen worden binnen een uur geboren, het bloedverlies blijft onder 1000 ml, het perineum blijft gaaf of heeft hooguit een 1e- of 2e-graadsruptuur of episiotomie, en de pasgeborene heeft na 5 minuten een Apgarscore boven 7 en heeft geen directe zorg nodig.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Kenmerken van een normale bevalling`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Normaal"], ["Zwangerschapsduur", "37-42 weken"], ["Ligging foetus", "Hoofdligging"], ["Begin baring", "Spontane weeën"], ["Verloop", "Ontsluiting en uitdrijving zonder medische interventies"], ["Placenta en vliezen", "Binnen 1 uur geboren"], ["Bloedverlies", "< 1000 ml"], ["Perineum", "Gaaf, 1e/2e graadsruptuur of episiotomie"], ["Neonatale toestand", "Apgarscore > 7 na 5 minuten, geen directe zorg nodig"]]} />
    </div>
  )
}

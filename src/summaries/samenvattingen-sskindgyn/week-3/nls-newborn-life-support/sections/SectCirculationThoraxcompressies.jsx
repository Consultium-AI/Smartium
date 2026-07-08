import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Circulation: thoraxcompressies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als de hartfrequentie onder de 60 per minuut blijft terwijl je zeker weet dat luchtweg en beademing adequaat zijn, start je thoraxcompressies. Het doel is om zuurstofrijk bloed naar de coronairen te verplaatsen. Op het moment dat compressies beginnen, verhoog je de zuurstofconcentratie naar 100%. Daarna pas je die aan op geleide van de saturatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De compressies geef je met de twee-duimen-omcirkel-techniek, afgekort TDOT, ongeacht het aantal hulpverleners. Je plaatst beide duimen op de onderste helft van het sternum, met de toppen naar boven. De handen omsluiten de thorax en de vingertoppen steunen de rug. Je drukt de borstkas minstens een derde in, laat hem volledig terugveren en vermijdt druk op ribben, xiphoid of bovenbuik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De frequentie is 100-120 per minuut. De verhouding tussen compressies en beademingen is 3:1, ook als het kind geïntubeerd is.`}</Inline></p>
    </div>
  )
}

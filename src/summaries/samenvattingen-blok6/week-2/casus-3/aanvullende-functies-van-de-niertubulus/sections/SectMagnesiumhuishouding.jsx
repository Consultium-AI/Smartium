import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Magnesiumhuishouding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Magnesium is een belangrijk elektrolyt dat nodig is voor veel enzymatische reacties en fysiologische processen. Het wordt opgenomen via de darm en uiteindelijk uitgescheiden via de nier. Bepaalde geneesmiddelen kunnen de magnesiumopname verstoren, vooral protonpompremmers.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De nier regelt de magnesiumhuishouding niet overal op dezelfde manier. De meeste magnesiumreabsorptie vindt plaats in het dikke opstijgende deel van de lis van Henle, ongeveer 75%. De proximale tubulus neemt ongeveer 15% voor zijn rekening en de distale tubulus ongeveer 10%.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Plaatsen van magnesiumreabsorptie in het nefron`}</Inline></SubHeading>
      <DataTable rows={[["Deel van het nefron", "Aandeel in magnesiumreabsorptie"], ["Dikke opstijgende lis van Henle", "ongeveer 75%"], ["Proximale tubulus", "ongeveer 15%"], ["Distale tubulus", "ongeveer 10%"]]} />
      <p className="leading-relaxed"><Inline>{`De terugresorptie van magnesium hangt samen met de positieve lading in het lumen. Die positieve lading wordt vooral veroorzaakt door het NKCC2-kanaal in combinatie met het ROMK-kanaal. Als dit systeem verstoord raakt, bijvoorbeeld door lisdiuretica, kan hypomagnesiëmie ontstaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Lisdiuretica verstoren niet alleen de magnesiumreabsorptie, maar ook de calciumreabsorptie. Daardoor kunnen ze zowel het magnesium- als het calciumgehalte verlagen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom kunnen lisdiuretica hypomagnesiëmie geven?
**Mini-antwoord:** Omdat ze de positieve lading in het lumen verstoren, waardoor magnesium minder goed wordt teruggeresorbeerd.`} />
      <p className="leading-relaxed"><Inline>{`Klinisch is het ook belangrijk om te onthouden dat hypomagnesiëmie een oorzaak kan zijn van hypokaliëmie. Dat is een verband dat je in de praktijk regelmatig tegenkomt.`}</Inline></p>
    </div>
  )
}

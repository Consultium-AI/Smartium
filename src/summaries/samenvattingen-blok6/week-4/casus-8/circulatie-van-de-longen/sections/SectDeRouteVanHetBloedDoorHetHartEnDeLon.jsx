import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De route van het bloed door het hart en de longen`}</Inline></SubHeading>
      <PBody text={`Om het geheel goed te begrijpen, is het handig om de bloedstroom stap voor stap te zien. Zuurstofrijk bloed wordt vanuit de **linkerventrikel** naar het lichaam gepompt via de systemische circulatie. De weefsels gebruiken de zuurstof en nemen afvalstoffen op, waardoor het bloed zuurstofarm wordt. Dat bloed keert via de aders terug naar het hart.`} />
      <PBody text={`Bloed uit het bovenlichaam, hoofd en armen komt via de **vena cava superior** terug. Bloed uit het onderlichaam komt via de **vena cava inferior** terug. Daarnaast komt bloed uit de hartspier zelf via de **coronary sinus** terug in het **rechteratrium**. Vanuit het rechteratrium gaat het bloed naar de **rechterventrikel** en daarna naar de longen via de pulmonale circulatie. Na gasuitwisseling komt het bloed via de pulmonale venen terug in het **linkeratrium**. Vervolgens gaat het naar de linkerventrikel en begint de cyclus opnieuw.`} />
      <SubHeading><Inline>{`Tabel 3. Hoofdroute van het bloed`}</Inline></SubHeading>
      <DataTable rows={[["Van", "Naar", "Functie"], ["Linkerventrikel", "Lichaam", "Zuurstofrijk bloed naar de weefsels"], ["Weefsels", "Rechteratrium", "Zuurstofarm bloed met afvalstoffen terug"], ["Rechterventrikel", "Longen", "Bloed naar de pulmonale circulatie"], ["Longen", "Linkeratrium", "Zuurstofrijk bloed terug naar het hart"]]} />
    </div>
  )
}

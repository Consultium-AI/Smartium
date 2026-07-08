import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Antenatale zorg is gericht op een goede uitkomst van de zwangerschap en op het vroeg herkennen van pathologie. De zwangerschap wordt vastgesteld met hCG in de urine en bevestigd met echoscopie of foetale harttonen. De zwangerschapsduur wordt tegenwoordig vooral bepaald met de termijnecho en CRL.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij de eerste controle zijn anamnese, lichamelijk onderzoek, screenend laboratoriumonderzoek en bespreking van leefstijl en medicatie essentieel. Daarna volgen controles van moeder en foetus, met aandacht voor bloeddruk, fundushoogte, foetale bewegingen, klachten, bloedverlies, vruchtwaterverlies en foetale harttonen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens de zwangerschap zijn urineweginfecties, anemie, hypertensie en groeirestrictie belangrijke aandachtspunten. Daarnaast speelt prenatale screening een grote rol, met combinatietest, NIPT en de twintigwekenecho. Verwijzing naar eerste, tweede of derde lijn hangt af van het risico en de medische voorgeschiedenis.`}</Inline></p>
    </div>
  )
}

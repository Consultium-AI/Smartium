import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Detectiekans van de 20-weken echo`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De 20-weken echo vindt niet alle afwijkingen. De detectiekans hangt af van het type afwijking en van praktische factoren, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de aard van de afwijking;`}</Inline></li>
        <li><Inline>{`ongunstige ligging van de foetus;`}</Inline></li>
        <li><Inline>{`maternale adipositas;`}</Inline></li>
        <li><Inline>{`littekenvorming.`}</Inline></li>
      </ul>
      <PBody text={`**Tabel 3. Detectiekans van de 20-weken echo voor verschillende afwijkingen**`} />
      <DataTable rows={[["Afwijking", "Detectiekans"], ["Alle ernstige afwijkingen", "37%"], ["Centraal zenuwstelsel totaal", "84%"], ["Spina bifida", "88% / 86%"], ["Anencefalie", "100% / 100%"], ["Skeletafwijkingen", "26%"], ["Hartafwijkingen totaal", "54%"], ["Geïsoleerde hartafwijkingen", "44%"], ["Complexe cardiale afwijkingen", "85–93%"], ["Nieren en urinewegen", "31%"], ["Obstructie schisis", "76% / 30%"], ["Buikwanddefecten", "80%"], ["Hernia diafragmatica", "37%"], ["Longafwijkingen", "100%"]]} />
      <p className="leading-relaxed"><Inline>{`De tabel laat zien dat sommige afwijkingen goed zichtbaar zijn, zoals anencefalie, terwijl andere veel moeilijker te detecteren zijn, zoals skeletafwijkingen of nier- en urinewegafwijkingen.`}</Inline></p>
    </div>
  )
}

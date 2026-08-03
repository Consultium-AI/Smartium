import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Belangrijkste indicaties voor een nier-echo`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste redenen om een echo van de nieren aan te vragen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verdenking op obstructie van de urinewegen, bijvoorbeeld hydronefrose;`}</Inline></li>
        <li><Inline>{`beoordeling van niergrootte en nierstructuur;`}</Inline></li>
        <li><Inline>{`opsporen van cysten of tumoren;`}</Inline></li>
        <li><Inline>{`evaluatie van de blaas.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hydronefrose betekent dat het nierbekken en de nierkelken verwijd zijn doordat urine niet goed kan afvloeien. Dat is een belangrijk teken van obstructie, al moet je altijd in de klinische context blijven denken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij onbegrepen hematurie of proteinurie kan echografie ook vroeg in het diagnostisch traject worden gebruikt. Hematurie betekent bloed in de urine, proteinurie betekent eiwit in de urine. Beide kunnen passen bij nierziekten en vragen vaak om verdere beoordeling.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke indicaties voor nier-echo`}</Inline></SubHeading>
      <DataTable rows={[["Indicatie", "Wat wil je ermee beoordelen?"], ["Verdenking op obstructie", "Is er hydronefrose of een andere belemmering van de urineafvoer?"], ["Niergrootte en -structuur", "Zijn de nieren normaal van vorm en grootte?"], ["Cysten of tumoren", "Zijn er ruimte-innemende afwijkingen?"], ["Blaasbeoordeling", "Is de blaas leeg, overvuld of afwijkend?"], ["Onbegrepen hematurie/proteinurie", "Zijn er aanwijzingen voor een structurele oorzaak?"]]} />
    </div>
  )
}

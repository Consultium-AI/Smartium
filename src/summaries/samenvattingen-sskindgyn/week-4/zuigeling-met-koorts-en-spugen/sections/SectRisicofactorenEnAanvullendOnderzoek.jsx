import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicofactoren en aanvullend onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij kinderen met een UWI moet je ook zoeken naar risicofactoren en onderliggende afwijkingen van de urinewegen. Daarom is aanvullend onderzoek naar de nierfunctie en de urinewegen belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Direct onderzoek bestaat uit serumcreatinine, ureum, natrium, kalium en bloedgas. Daarnaast wordt een echo van buik, blaas en nieren verricht. Deze echo wordt volgens de richtlijnen binnen 6 weken uitgevoerd. Daarbij is het belangrijk om te weten of er prenatale echografie is verricht en of daar afwijkingen op te zien waren.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Onderzoek naar risicofactoren bij UWI`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Waarom?"], ["Serumcreatinine, ureum, Na, K, bloedgas", "Nierfunctie en metabole ontregeling beoordelen"], ["Echo buik, blaas en nieren", "Anatomische afwijkingen opsporen"], ["Navraag prenatale echo", "Inschatten of ernstige pathologie al eerder is uitgesloten"]]} />
    </div>
  )
}

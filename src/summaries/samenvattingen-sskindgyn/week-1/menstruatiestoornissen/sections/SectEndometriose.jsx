import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Endometriose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Endometriose betekent dat baarmoederslijmvlies, dus endometrium, buiten de baarmoederholte voorkomt. Er zijn twee vormen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`endometriose interna;`}</Inline></li>
        <li><Inline>{`endometriose externa.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De afwijkingen kunnen op verschillende plaatsen in de buikholte voorkomen, bijvoorbeeld rond ovarium, rectum, uterus en blaas.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer denk je eraan?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Endometriose kan een verklaring zijn voor dysmenorroe, zeker als de pijn toeneemt. Dysmenorroe is een subjectief gegeven en kan acuut of chronisch ontstaan. Het heeft een eigen tijdslijn van ontstaan, verergering en optreden. Een goede pijnanamnese helpt dus sterk bij de differentiaaldiagnose.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Welke klachten passen naast dysmenorroe bij endometriose?**
Dyspareunie, dysurie en dyschezie.`} />
      <SubHeading><Inline>{`Hoe ziet de pijn eruit?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het onderscheiden van endometriose en uterus myomatosus helpt vooral de aard van de pijn en het tijdstip van optreden, al is er veel overlap.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij uterus myomatosus is de pijn vaak krampend en in vlagen, vooral tijdens de bloedingsdagen.`}</Inline></li>
        <li><Inline>{`Bij endometriose is de pijn vaker afwisselend zeurend en scherp, en kan zij al merkbaar zijn vóór de feitelijke menstruele bloeding.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de beoordeling van de ernst van dysmenorroe kun je de pijn kwantificeren met een visueel-analoge score, van 1 tot 10. Endometriose geeft doorgaans een hoge score, vaak boven 7. Ook is het belangrijk te vragen hoeveel pijnstilling nodig is en of de klachten leiden tot werkverzuim of uitval van dagelijkse activiteiten.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Klachten die helpen bij de verdenking op endometriose`}</Inline></SubHeading>
      <DataTable rows={[["Klacht", "Betekenis in de anamnese"], ["Dysmenorroe", "Pijnlijke menstruatie"], ["Dyspareunie", "Pijn bij gemeenschap"], ["Dysurie", "Pijn of klachten bij plassen"], ["Dyschezie", "Pijn bij ontlasting"]]} />
      <SubHeading><Inline>{`Leeftijd en dysmenorroe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Dysmenorroe komt veel voor. Bij vrouwen van 12 tot 24 jaar heeft tot wel 60% er last van. De klachten ontstaan meestal binnen een jaar na de menarche en komen alleen voor in ovulatoire cycli. Vanaf 30 tot 35 jaar neemt de prevalentie af.`}</Inline></p>
    </div>
  )
}

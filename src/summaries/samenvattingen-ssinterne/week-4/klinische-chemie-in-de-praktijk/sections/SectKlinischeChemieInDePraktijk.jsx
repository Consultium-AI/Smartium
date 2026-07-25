import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische chemie in de praktijk`}</Inline></SubHeading>
      <PBody text={`Klinische chemie gaat over het meten van **biomarkers** in lichaamsvloeistoffen, meestal in bloed, urine of soms andere materialen. Een biomarker is een meetbare stof die iets kan zeggen over gezondheid of ziekte. Door zulke stoffen te meten kun je ziekten soms vroeg opsporen, de ernst inschatten, een behandeling volgen of een diagnose ondersteunen.`} />
      <PBody text={`Laboratoriumonderzoek speelt in de geneeskunde een grote rol. Het is daarom belangrijk om niet alleen te weten **wat** je meet, maar ook **in welk materiaal** je meet, **hoe betrouwbaar** de uitslag is en **hoe je de uitslag moet interpreteren**.`} />
      <SubHeading><Inline>{`Waarom is het juiste materiaal zo belangrijk?`}</Inline></SubHeading>
      <PBody text={`Niet elke biomarker hoort in elk soort bloedmonster. Als je een bepaling uitvoert in het verkeerde materiaal, kan dat leiden tot een **vals-positieve** of **vals-negatieve** uitslag. Dan wordt de diagnose juist moeilijker in plaats van makkelijker.`} />
      <PBody text={`Bij bloedafname wordt vaak gebruikgemaakt van verschillende buizen met een eigen toevoeging. Die toevoeging kan bijvoorbeeld stolling remmen. Daarna wordt het bloed op het laboratorium verwerkt tot **serum** of **plasma**.`} />
    </div>
  )
}

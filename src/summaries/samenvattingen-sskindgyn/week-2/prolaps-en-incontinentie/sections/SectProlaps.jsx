import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prolaps`}</Inline></SubHeading>
      <PBody text={`Een prolaps is een verzakking van organen in het kleine bekken. Het gaat om het **uitzakken van organen door de hiatus genitalis naar buiten**. Dat kan voelen alsof er “iets uit de vagina hangt”. Zo’n prolaps is hinderlijk, maar niet schadelijk.`} />
      <SubHeading><Inline>{`Welke klachten kan een prolaps geven?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een prolaps geeft niet alleen een zichtbaar of voelbaar uitzakken, maar kan ook andere klachten veroorzaken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een zwaar gevoel laag in de buik of “van onderen”`}</Inline></li>
        <li><Inline>{`lage rugpijn of buikpijn`}</Inline></li>
        <li><Inline>{`mictieproblemen, zoals incontinentie of moeite met uitplassen`}</Inline></li>
        <li><Inline>{`een residugevoel, dus het gevoel dat de blaas niet leeg is`}</Inline></li>
        <li><Inline>{`obstipatie of juist verlies van ontlasting`}</Inline></li>
        <li><Inline>{`problemen bij het vrijen`}</Inline></li>
        <li><Inline>{`klachten die erger worden na inspanning of later op de dag`}</Inline></li>
      </ul>
      <PBody text={`**Aandachtsvraag:** Waarom worden klachten vaak erger aan het einde van de dag?
**Mini-antwoord:** Door belasting van de bekkenbodem nemen de verzakkingsklachten dan vaak toe.`} />
      <SubHeading><Inline>{`Risicofactoren en voorgeschiedenis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de anamnese zijn verschillende factoren belangrijk, omdat ze kunnen bijdragen aan schade van de bekkenbodem:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**pariteit**: het aantal bevallingen`}</Inline></li>
        <li><Inline>{`leeftijd waarop de bevallingen plaatsvonden`}</Inline></li>
        <li><Inline>{`geboortegewicht van de kinderen`}</Inline></li>
        <li><Inline>{`familieanamnese voor prolaps`}</Inline></li>
        <li><Inline>{`eerdere prolapsoperaties`}</Inline></li>
        <li><Inline>{`gewicht`}</Inline></li>
        <li><Inline>{`roken`}</Inline></li>
        <li><Inline>{`aard van het werk`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze factoren zijn relevant omdat ze de bekkenbodem kunnen belasten of verzwakken.`}</Inline></p>
    </div>
  )
}

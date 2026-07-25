import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Renogram bij niertransplantatie`}</Inline></SubHeading>
      <PBody text={`Bij een niertransplantatie wordt in het Erasmus MC standaard de dag na de transplantatie een **echo** en een **renogram** gemaakt. Dat gebeurt niet overal, maar hier wel om snel complicaties op te sporen en een uitgangssituatie vast te leggen.`} />
      <PBody text={`Bij een normaal renogram wordt van **achteren** afgebeeld, maar bij een **niertransplantaat** juist van **voren**. Dat komt doordat het transplantaat in het **kleine bekken** ligt en dus meer aan de voorzijde van het lichaam.`} />
      <PBody text={`Bij een transplantaat wordt ook een seriescintigram van 20 minuten gemaakt. Daarna kunnen opnames volgen van de **splint**, de **katheterzak** en de **wonddrain**. Eventueel volgt nog een late opname na 1 uur of een **SPECT/CT**.`} />
      <SubHeading><Inline>{`Wat is een splint?`}</Inline></SubHeading>
      <PBody text={`Een **splint** is een dun slangetje dat via de buikwand in de blaas en vervolgens door de ureter in het pyelum van het transplantaat wordt gelegd. Dit ontziet de nieuwe verbinding tussen ureter en blaas, zodat de urine gemakkelijk kan afvloeien en er weinig druk op de anastomose komt.`} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 6: QRS-morfologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het QRS-complex staat voor de activatie van de ventrikels. Omdat de ventrikels de grootste spiermassa hebben, zijn de uitslagen hier meestal het grootst. Daarom zie je aan het QRS-complex vaak veel pathologie.`}</Inline></p>
      <SubHeading><Inline>{`Naamgeving van QRS-afwijkingen`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Q**: eerste negatieve uitslag zonder voorafgaande positieve uitslag`}</Inline></li>
        <li><Inline>{`**R**: eerste positieve uitslag`}</Inline></li>
        <li><Inline>{`**S**: eerste negatieve uitslag na een positieve uitslag`}</Inline></li>
        <li><Inline>{`**R’**: tweede positieve uitslag`}</Inline></li>
        <li><Inline>{`kleine letters worden gebruikt bij kleine uitslagen, hoofdletters bij dominante uitslagen`}</Inline></li>
      </ul>
      <PBody text={`Een complex met alleen negatieve uitslag heet een **QS-complex**.`} />
      <SubHeading><Inline>{`Pathologische Q-golven`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een Q-golf kan wijzen op verlies van spiermassa na een doorgemaakt infarct. Dan verandert de initiële vector en loopt die weg van een afleiding. Een pathologische Q-golf moet wel aan voorwaarden voldoen, zoals een bepaalde breedte en diepte, en moet in passende afleidingen zichtbaar zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat de sensitiviteit en specificiteit niet 100% zijn. Andere oorzaken van een negatieve uitslag kunnen bijvoorbeeld WPW of een geleidingsstoornis zijn.`}</Inline></p>
      <SubHeading><Inline>{`Ventrikelhypertrofie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hypertrofie betekent verdikking van de hartspier. Daardoor worden de QRS-uitslagen meestal groter.`}</Inline></p>
      <SubHeading><Inline>{`Linkerventrikelhypertrofie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het eenvoudigste criterium is Sokolow-Lyon: de R in V5 of V6 plus de S in V1 is meer dan 35 mm. Andere criteria zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`R > 26 mm in V5 of V6`}</Inline></li>
        <li><Inline>{`R > 20 mm in I, II of III`}</Inline></li>
        <li><Inline>{`R > 12 mm in aVL, als er geen linkeranterieur hemiblok is`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Rechterventrikelhypertrofie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`RVH ontstaat vaak door longpathologie. De elektrische hartas draait dan naar rechts. In V1 wordt de R-top groter dan de S-top, met een R/S-verhouding van meer dan 1 en een R groter dan 0,5 mV.`}</Inline></p>
      <SubHeading><Inline>{`Microvoltages`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij microvoltages zijn de QRS-uitslagen klein. Dat kan komen door weinig spiermassa of door een barrière tussen hart en huid, zoals lucht, vocht of vet. Ook een foutieve instelling van het ECG-apparaat kan dit veroorzaken.`}</Inline></p>
      <SubHeading><Inline>{`Geleidingsproblemen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De ventrikels hebben normaal 80 tot 120 ms nodig om geactiveerd te worden. Vanaf 100 ms kan al sprake zijn van vertraging.`}</Inline></p>
      <SubHeading><Inline>{`Linkerbundeltakblok`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een linkerbundeltakblok geleidt de linkerbundel niet meer. De activatie van de ventrikels loopt dan via de rechterbundel. De linkerkamer wordt later geactiveerd, waardoor de QRS-duur langer wordt dan 120 ms. In V1 zie je een diepe (Q)S, en in V6 een breed positief complex met vaak een haking of R’. Een LBTB komt relatief weinig voor en gaat vaak samen met belangrijke cardiale pathologie.`}</Inline></p>
      <SubHeading><Inline>{`Rechterbundeltakblok`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een rechterbundeltakblok geleidt de rechterbundel niet meer. De rechterkamer wordt dan via de linkerkamer geactiveerd. De QRS-duur is opnieuw langer dan 120 ms. In V1 zie je een RsR’-patroon, waarbij de R’ groter is dan de R. In V6 is het complex vooral negatief. Een RBTB komt vaker voor en kan ook zonder pathologie bestaan.`}</Inline></p>
      <SubHeading><Inline>{`Fascikelhemiblokken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De linkerbundel splitst zich in een linker anterior en linker posterior fascikel. Blokkades hierin kunnen ook voorkomen. Een linkeranterior hemiblok geeft een linkeras, een linkerposterior hemiblok een rechteras.`}</Inline></p>
      <SubHeading><Inline>{`R-top progressie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De R-top progressie is eigenlijk de hartas in het horizontale vlak. Normaal zie je in V1 een kleine r en een diepe S, en in V6 een klein q’tje met daarna een grote R. De R wordt normaal groter dan de S in V3 of V4.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Snelle R-top progressie**: denk aan rechterventrikelhypertrofie of een doorgemaakt achterwandinfarct.`}</Inline></li>
        <li><Inline>{`**Trage R-top progressie**: denk aan een doorgemaakt anteroseptaal infarct, linkerventrikelhypertrofie, cardiomyopathie of een linker anterior hemiblok.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Controleer ook altijd of de elektroden goed geplaatst zijn, want verkeerde plaatsing kan een afwijkend beeld geven.`}</Inline></p>
    </div>
  )
}

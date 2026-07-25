import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Irregulaire antistoffen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Irregulaire antistoffen ontstaan na eerdere blootstelling aan bloedgroepantigenen die de eigen erytrocyten niet dragen. Dat kan gebeuren na een eerdere transfusie of tijdens een zwangerschap.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De screening op irregulaire antistoffen onderzoekt of het serum van de patiënt antistoffen bevat tegen klinisch relevante bloedgroepsystemen. Daarbij wordt gekeken naar onder meer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Rhesus;`}</Inline></li>
        <li><Inline>{`Kell;`}</Inline></li>
        <li><Inline>{`Kidd;`}</Inline></li>
        <li><Inline>{`Duffy;`}</Inline></li>
        <li><Inline>{`Lewis;`}</Inline></li>
        <li><Inline>{`P1;`}</Inline></li>
        <li><Inline>{`MNSs;`}</Inline></li>
        <li><Inline>{`Lutheran.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als de screening positief is, volgt antistofidentificatie. Dan wordt precies vastgesteld welke antistof aanwezig is. De patiënt krijgt daarvan een kaartje mee, zodat dit bij elk ziekenhuisbezoek bekend is.`}</Inline></p>
      <SubHeading><Inline>{`Screening en identificatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij screening wordt vaak een 3-celspanel gebruikt. De erytrocyten van drie donoren zijn volledig uitgetypeerd. Het plasma van de patiënt wordt met deze cellen geïncubeerd en daarna wordt gekeken of agglutinatie optreedt. Als één van de cellen reageert, is de screening positief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij identificatie wordt een 11-celspanel gebruikt. Door het reactiepatroon van de verschillende cellen te vergelijken, kan de antistof worden herkend. In het voorbeeld past het patroon bij anti-K. Zo’n patiënt moet dan erytrocyten krijgen die K-negatief zijn.`}</Inline></p>
    </div>
  )
}

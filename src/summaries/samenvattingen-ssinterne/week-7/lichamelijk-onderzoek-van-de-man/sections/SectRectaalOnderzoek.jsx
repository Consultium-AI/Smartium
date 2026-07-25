import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rectaal onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het rectaal onderzoek bestaat uit inspectie van de anus en palpatie van het rectum en de prostaat, ook wel rectaal toucher genoemd. Omdat de patiënt niet kan zien wat er gebeurt, moet je alle handelingen steeds aankondigen.`}</Inline></p>
      <SubHeading><Inline>{`Houdingen voor het onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie houdingen mogelijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Knie-ellebooghouding**: goede inspectie en toucher, en je reikt het verst. Voor de patiënt is dit wel onplezierig en veel ouderen of ernstig zieke patiënten kunnen dit niet.`}</Inline></li>
        <li><Inline>{`**Steensnedeligging**: rugligging met opgetrokken benen. De patiënt is vaak meer ontspannen en oogcontact blijft mogelijk, maar de inspectie van de anus is lastiger.`}</Inline></li>
        <li><Inline>{`**Zijligging**: ook weinig belastend en inspectie plus toucher kunnen in dezelfde houding. Nadeel is dat de onderzoeker een onhandige houding moet aannemen en geen oogcontact heeft.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Inspectie van de anus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook bij inspectie gebruik je handschoenen, omdat je de billen moet spreiden. Let op huidafwijkingen zoals perianaal eczeem, candidiasis, condylomata, fissuren, fistelopeningen, haemorrhoïden en skintags. Beschrijf afwijkingen met kloktijden en de houding waarin je onderzoekt, bijvoorbeeld: fissura ani op 5 uur in knie-ellebooghouding.`}</Inline></p>
      <SubHeading><Inline>{`Uitvoering van het rectaal toucher`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het toucher trek je zo nodig eerst handschoenen aan en breng je glijmiddel aan op de wijsvinger. Zet de vinger tegen de anus en breng ook wat glijmiddel rondom aan. Kijk goed wat je doet; je brengt de vinger niet blind in. Je kunt de patiënt vragen te persen, zodat de sfincter ontspant. Ook langzaam toenemende druk of rustig doorademen helpt. Zodra het kan, voer je de wijsvinger langzaam in het anale kanaal.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens het toucher beoordeel je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de sfincterspanning en bekkenbodemmusculatuur;`}</Inline></li>
        <li><Inline>{`de prostaat, met aandacht voor de mediane sulcus, linker en rechter kwab;`}</Inline></li>
        <li><Inline>{`het rectumslijmvlies, door 360 graden rond te voelen;`}</Inline></li>
        <li><Inline>{`benige structuren zoals os sacrum en promontorium;`}</Inline></li>
        <li><Inline>{`de omgeving van het rectum, met name het cavum Douglasi.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Na afloop trek je de vinger langzaam terug, inspecteer je de handschoen op faeces of bloed en geef je de patiënt de gelegenheid overtollig glijmiddel af te vegen.`}</Inline></p>
    </div>
  )
}

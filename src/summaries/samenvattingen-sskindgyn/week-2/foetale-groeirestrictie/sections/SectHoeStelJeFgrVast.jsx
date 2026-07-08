import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe stel je FGR vast?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose FGR is lastig. De mogelijkheden om de diagnose te stellen en de ernst goed in te schatten zijn beperkt. Er bestaat bovendien geen echte behandeling; de enige effectieve interventie is het kind op het juiste moment geboren laten worden. Daardoor komt zowel overbehandeling als onderbehandeling voor.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een goede beoordeling begint met zekerheid over de zwangerschapsduur. Zonder juiste datering van de zwangerschap kun je groei niet betrouwbaar beoordelen.`}</Inline></p>
      <SubHeading><Inline>{`Groei volgen in de zwangerschap`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De meeste groeirestricties komen tot uiting in het derde trimester. Daarom wordt groei in die fase extra goed gevolgd. Bij een normaal verloop worden controles in de zwangerschap steeds frequenter naarmate de termijn vordert.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Foetale groei kan worden beoordeeld met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitwendige palpatie;`}</Inline></li>
        <li><Inline>{`fundushoogtebepaling;`}</Inline></li>
        <li><Inline>{`symfyse-fundusmeting;`}</Inline></li>
        <li><Inline>{`echoscopie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De handgrepen van Leopold kunnen vanaf ongeveer 30 weken een indruk geven van fundushoogte, ligging, grootte en indaling van de foetus. Toch zijn uitwendige metingen alleen niet gevoelig genoeg om FGR goed op te sporen.`}</Inline></p>
      <SubHeading><Inline>{`Echoscopie als belangrijkste methode`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij echoscopie kijk je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`abdominal circumference (AC), de buikomtrek;`}</Inline></li>
        <li><Inline>{`biparietale diameter (BPD);`}</Inline></li>
        <li><Inline>{`hoofdomtrek (HC);`}</Inline></li>
        <li><Inline>{`femurlengte (FL).`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er een verdenking op FGR is, wordt de echo iedere 2 weken herhaald. Daarbij let je ook op asymmetrische groei, dus op verschillen tussen AC, HC en FL.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom zijn alleen uitwendige metingen niet genoeg?**
Omdat ze een beperkte sensitiviteit hebben; je mist daarmee dus een deel van de kinderen met groeirestrictie.`} />
    </div>
  )
}

import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Indicaties voor bariatrische chirurgie`}</Inline></h3>
      <p><Inline>{`Niet iedereen met obesitas komt in aanmerking. In Nederland wordt hiervoor de GGR-tabel gebruikt: de tabel met het gewichtsgerelateerd gezondheidsrisico. Bariatrie is een ingrijpende operatie en wordt vooral overwogen als eerdere leefstijlaanpassingen en soms ook gewichtsreducerende medicatie onvoldoende effect hebben gehad.`}</Inline></p>
      <p><Inline>{`Belangrijke voorwaarden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd meestal 18–65 jaar, soms tot 70 jaar;`}</Inline></li>
        <li><Inline>{`eerdere leefstijlaanpassingen, en soms medicatie, hebben onvoldoende gewerkt;`}</Inline></li>
        <li><Inline>{`de patiënt is bereid om leefstijlregels te volgen.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij de tabel hoort het idee dat de kans op bariatrie toeneemt bij een hoger GGR, zeker bij type 2 diabetes en een sterk verhoogd gezondheidsrisico.`}</Inline></p>
    </div>
  )
}

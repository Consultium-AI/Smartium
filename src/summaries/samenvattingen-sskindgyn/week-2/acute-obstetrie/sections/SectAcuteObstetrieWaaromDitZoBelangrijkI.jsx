import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute obstetrie: waarom dit zo belangrijk is`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zwangerschap en bevalling zijn meestal normale, gelukkige gebeurtenissen, maar soms ontstaan er plots ernstige complicaties. Die kunnen levensbedreigend zijn voor moeder, foetus of allebei. Juist dan is snel en gestructureerd handelen essentieel. Daarom wordt in acute obstetrie gewerkt met een vaste systematiek: eerst de levensbedreigende problemen herkennen en behandelen, daarna pas verder uitzoeken wat er precies aan de hand is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een zwangerschap vraagt bovendien veel van het lichaam van de moeder. Het bloedvolume neemt toe, de cardiac output stijgt en de stolling verandert. Daardoor heeft een zwangere vaak een zekere fysiologische reserve. Dat klinkt gunstig, maar het heeft ook een nadeel: problemen zoals bloedverlies of shock vallen soms pas laat op. De foetus is intussen volledig afhankelijk van de maternale circulatie en de placentaire doorbloeding. Als de moeder instabiel wordt, raakt de foetus dus snel in de problemen.`}</Inline></p>
    </div>
  )
}

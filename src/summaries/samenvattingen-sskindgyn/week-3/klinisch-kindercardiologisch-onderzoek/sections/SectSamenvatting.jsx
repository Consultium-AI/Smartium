import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij klinisch kindercardiologisch onderzoek kijk je eerst breed naar het kind: groei, kleur, ademhaling, vochtretentie en pulsaties geven vaak al belangrijke aanwijzingen. Een kind met een aangeboren hartafwijking groeit vaak slecht, kan tachypnoe en intrekkingen hebben, en cyanose herken je het best aan de tong. Zwakke pulsaties aan de benen doen denken aan coarctatio aortae.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij auscultatie zijn de 1e en 2e harttoon belangrijk. De 1e harttoon ontstaat door sluiten van de AV-kleppen en is het luidst bij de klepvlakte. Een luide 1e harttoon past bij mitralisstenose, een zachte bij onder andere obesitas, pericardeffusie of tamponade. De 2e harttoon ontstaat door sluiten van de semilunaire kleppen en kan fysiologisch gespleten zijn in inspiratie. Een gefixeerd gespleten 2e harttoon past bij een ASD.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hartgeruisen deel je in in systolisch en diastolisch. De plaats van het geruis helpt sterk bij de diagnose: rechts hoog sternal past bij aortastenose, links hoog sternal bij pulmonalisklepstenose, tussen de schouderbladen bij coarctatio, links in de anterieure axillaire lijn bij mitralisstenose en 4e intercostaal bij een VSD. Diastolische geruisen passen vooral bij lekkende semilunaire kleppen.`}</Inline></p>
    </div>
  )
}

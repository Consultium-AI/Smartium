import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Leerdoelen`}</Inline></h3>
      <p><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`uitleggen waarom voldoende lichamelijke activiteit belangrijk is voor gezondheid en kwaliteit van leven;`}</Inline></li>
        <li><Inline>{`onderscheid maken tussen licht, matig en zwaar intensief bewegen;`}</Inline></li>
        <li><Inline>{`de doelen van bewegen herkennen, zoals spierversterking, botversterking en balansoefeningen;`}</Inline></li>
        <li><Inline>{`de beweegrichtlijnen voor verschillende leeftijden benoemen;`}</Inline></li>
        <li><Inline>{`uitleggen hoe diabetes mellitus type 2 (DM2) ontstaat vanuit insulineresistentie en verminderde β-celfunctie;`}</Inline></li>
        <li><Inline>{`de belangrijkste risicofactoren en symptomen van DM2 herkennen;`}</Inline></li>
        <li><Inline>{`de diagnostische grenzen voor gestoorde glucosewaarden en DM2 benoemen;`}</Inline></li>
        <li><Inline>{`begrijpen hoe DM2 behandeld en gemonitord wordt, met aandacht voor patiëntspecifieke streefwaarden en leefstijl.`}</Inline></li>
      </ul>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de oorzaken van hyperbilirubinemie bij een pasgeborene benoemen;`}</Inline></li>
        <li><Inline>{`het principe van een bloedgroepantagonisme uitleggen;`}</Inline></li>
        <li><Inline>{`inschatten hoe risicovol een antistof tegen een bloedgroepsysteem is voor foetus of neonaat;`}</Inline></li>
        <li><Inline>{`het cEK-beleid beschrijven;`}</Inline></li>
        <li><Inline>{`een aanvraag voor laboratoriumbepalingen ten behoeve van bloedtransfusie bij zwangeren en neonaten opstellen;`}</Inline></li>
        <li><Inline>{`de lange kruisproef bij de neonaat beschrijven;`}</Inline></li>
        <li><Inline>{`de juiste bloedproducten bestellen voor een zwangere en een neonaat;`}</Inline></li>
        <li><Inline>{`de meest voorkomende transfusiereacties bij een neonaat benoemen.`}</Inline></li>
      </ul>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken en risicofactoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`FGR kan ontstaan door maternale, foetale of placentaire oorzaken. Vaak speelt placentaire insufficiëntie een belangrijke rol: de placenta levert dan onvoldoende zuurstof en voedingsstoffen aan de foetus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste risicofactoren zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`roken;`}</Inline></li>
        <li><Inline>{`FGR in een eerdere zwangerschap;`}</Inline></li>
        <li><Inline>{`maternale ziekte.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Andere risicofactoren zijn onder meer nierziekten, hypertensie, antifosfolipidensyndroom, diabetes, obesitas, cocaïnegebruik, hogere maternale leeftijd en een afwijkend zwangerschapsinterval.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Belangrijke risicofactoren voor FGR`}</Inline></SubHeading>
      <DataTable rows={[["Risicofactor", "Verband met FGR"], ["Nierziekten", "verhoogd risico"], ["Hypertensie", "verhoogd risico"], ["APS", "sterk verhoogd risico"], ["Diabetes", "verhoogd risico"], ["Obesitas", "verhoogd risico"], ["Roken", "verhoogd risico"], ["Cocaïne", "sterk verhoogd risico"], ["FGR in eerdere zwangerschap", "verhoogd risico"], ["IUVD in eerdere zwangerschap", "verhoogd risico"]]} />
      <p className="leading-relaxed"><Inline>{`APS staat voor antifosfolipidensyndroom. IUVD betekent intra-uteriene vruchtdood.`}</Inline></p>
    </div>
  )
}

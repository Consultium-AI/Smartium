import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risque professionel en risque social`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis", "Voorbeeld"], ["Risque professionel", "Arbeidsongeschiktheid door werk", "Arbeidsongeval, beroepsziekte"], ["Risque social", "Arbeidsongeschiktheid door een oorzaak buiten het werk", "Influenza, ongeval thuis"]]} />
      <p className="leading-relaxed"><Inline>{`In Nederland is de toekenning en hoogte van de uitkering tegenwoordig onafhankelijk van de oorzaak van het ziekteverzuim. Het maakt dus niet uit of de oorzaak werkgerelateerd of privé-gerelateerd is. Dat is in veel andere landen anders; daar wordt bij arbeidsongevallen en beroepsziekten vaak een hogere uitkering toegekend.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Hoe werkt gewichtsverlies na bariatrie?`}</Inline></h3>
      <p><Inline>{`Gewichtsverlies na bariatrische chirurgie ontstaat niet door één mechanisme. De belangrijkste processen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`restrictie: de patiënt kan minder eten;`}</Inline></li>
        <li><Inline>{`malabsorptie: voedingsstoffen worden minder goed opgenomen;`}</Inline></li>
        <li><Inline>{`metabole en hormonale effecten: er treden veranderingen op in bijvoorbeeld GLP-1 en andere signalen die honger, verzadiging en glucosehuishouding beïnvloeden.`}</Inline></li>
      </ul>
      <p><Inline>{`Bij de RYGB dragen alle drie deze mechanismen duidelijk bij. De kleine maagpouch beperkt de inname, de darmomleiding vermindert vertering en absorptie, en de opregulatie van GLP-1 zorgt voor meer verzadiging. Bij de gastric sleeve is vooral de restrictie belangrijk. De hormonale balans verandert wel, maar de verdere vertering en absorptie blijven meer vergelijkbaar.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Tabel 3. Vergelijking RYGB en gastric sleeve`}</Inline></h3>
      <DataTable rows={[["Kenmerk", "RYGB", "Gastric sleeve"], ["**Gewichtsverlies na 1 jaar**", "ongeveer **35–40%**", "ongeveer **25–30%**"], ["**Belangrijkste werking**", "restrictie + malabsorptie + hormonale effecten", "vooral restrictie"], ["**GLP-1**", "upregulatie", "ook hormonale verandering, maar minder centraal"], ["**Opname van voeding**", "verminderd", "relatief minder veranderd"], ["**Deficiëntierisico**", "aanwezig; multivitaminen en Ca/D3 nodig", "aanwezig; multivitaminen en Ca/D3 nodig"], ["**Specifieke klacht**", "inwendige herniatie kan optreden", "kans op **pyrosis**"], ["**Andere bijzonderheid**", "meer complexe darmomleiding", "grootste deel van de maag wordt verwijderd, pylorus blijft intact"]]} />
    </div>
  )
}

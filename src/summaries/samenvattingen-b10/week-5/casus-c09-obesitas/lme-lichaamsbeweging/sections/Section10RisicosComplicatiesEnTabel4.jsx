import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Risico’s en complicaties`}</Inline></h3>
      <p><Inline>{`Bij een bariatrische ingreep zijn er altijd risico’s. Er zijn zowel acute complicaties als klachten en problemen op de langere termijn.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Acute en vroege complicaties`}</Inline></h3>
      <p><Inline>{`Rond de operatie en in de eerste dagen daarna kunnen optreden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`naadlekkage;`}</Inline></li>
        <li><Inline>{`bloedingen;`}</Inline></li>
        <li><Inline>{`overlijden.`}</Inline></li>
      </ul>
      <p><Inline>{`In het eerste jaar na de ingreep kunnen patiënten daarnaast last krijgen van verschillende klachten.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Klachten per orgaansysteem`}</Inline></h3>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Tabel 4. Veelvoorkomende klachten en late gevolgen`}</Inline></h3>
      <DataTable rows={[["Orgaan / gebied", "Mogelijke klacht of complicatie"], ["**Haar**", "haaruitval"], ["**Mond**", "smaakverandering of voedselintolerantie, vooral voor vlees, brood, rijst en pasta; ook lactose-intolerantie komt vaak voor; klachten vaker als iemand te snel eet, slecht kauwt of tijdens het eten drinkt"], ["**Slokdarm**", "vastlopers, vooral na gastric sleeve; gevoel dat eten niet goed zakt"], ["**Lever**", "galstenen"], ["**Pancreas / glucosehuishouding**", "postprandiale hyperinsulinemische hypoglykemie, ook wel reactieve hypo of “late dumping”"], ["**Dunne darm**", "dumpingklachten, vroeg of laat na de maaltijd"], ["**Colon**", "veranderingen in ontlasting zoals diarree, steatorroe, frequente stoelgang, plotselinge aandrang, verlies van ontlasting en winderigheid"], ["**Buikholte op lange termijn**", "inwendige herniatie, vooral na gastric bypass"], ["**Botten**", "verhoogd risico op osteoporose"], ["**Algemeen**", "vermoeidheid"]]} />
      <PBody text={`Aandachtsvraag: Waarom kan een patiënt met een gastric bypass 1–1,5 jaar later buikpijn krijgen?  
Kort antwoord: Door een inwendige herniatie: de dunne darm hernieert door het nieuw gevormde peritoneale compartiment en geeft koliekachtige bovenbuikspijn.`} />
    </div>
  )
}

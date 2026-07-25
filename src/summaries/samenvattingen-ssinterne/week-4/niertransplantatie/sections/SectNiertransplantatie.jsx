import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Niertransplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een niertransplantatie heeft als doel de levensverwachting en kwaliteit van leven van de patiënt te verbeteren. Tegelijkertijd brengt deze behandeling risico’s met zich mee, vooral door afstoting en door de noodzakelijke immuunsuppressie.`}</Inline></p>
      <SubHeading><Inline>{`Wie komt in aanmerking?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet iedereen kan een niertransplantatie krijgen. Er zijn absolute en relatieve contra-indicaties.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Contra-indicaties voor niertransplantatie"], ["Absolute contra-indicaties", "Levensverwachting <2 jaar; actieve niet-curatief behandelde maligniteit; actieve systemische infectie"], ["Relatieve contra-indicaties", "Ernstige co-morbiditeit; ernstig overgewicht; ernstige atherosclerose van de iliacaal arteriën; ernstige therapieontrouw"]]} />
      <p className="leading-relaxed"><Inline>{`Bij relatieve contra-indicaties gaat het steeds om de afweging of de risico’s groter zijn dan de verwachte winst. Soms kan een situatie later opnieuw beoordeeld worden, bijvoorbeeld na gewichtsverlies of na een vaatchirurgische ingreep.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer transplanteren?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het beste moment voor een niertransplantatie is pre-emptief: wanneer dialyse nog net niet gestart is. Meestal is dat bij een verslechterende eGFR rond 15 ml/min/1,73 m². Dan is duidelijk dat nierfunctievervangende therapie nodig is, maar zijn de nadelen van een nog verder verslechterde nierfunctie en de complicaties van dialyse nog niet aanwezig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een transplantatie kan ook nog na de start van dialyse plaatsvinden. Als de nierfunctie nog te goed of te stabiel is, wegen de risico’s van transplantatie nog niet op tegen de mogelijke winst.`}</Inline></p>
    </div>
  )
}

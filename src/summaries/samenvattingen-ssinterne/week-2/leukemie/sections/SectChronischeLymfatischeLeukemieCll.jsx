import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Chronische lymfatische leukemie: CLL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CLL is een klonale ziekte van kleine rijpe B-lymfocyten die zich ophopen in bloed, beenmerg en lymfoïde weefsel. Het is meestal een langzaam verlopende, vaak beheersbare maar doorgaans niet-geneeslijke vorm van bloedkanker.`}</Inline></p>
      <SubHeading><Inline>{`Epidemiologie en ontstaan`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CLL komt vooral voor bij ouderen en ongeveer twee keer zo vaak bij mannen als bij vrouwen. De oorzaak is onbekend. De ziekte komt vaker voor bij Kaukasische patiënten en kan familiair voorkomen.`}</Inline></p>
      <SubHeading><Inline>{`Diagnostiek van CLL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose CLL wordt gesteld op basis van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een absoluut aantal **B-lymfocyten in perifeer bloed > 5 × 10^9/L**`}</Inline></li>
        <li><Inline>{`immunofenotypering`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Typisch zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CD19 positief`}</Inline></li>
        <li><Inline>{`CD20 zwak positief`}</Inline></li>
        <li><Inline>{`CD23 positief`}</Inline></li>
        <li><Inline>{`CD5 positief`}</Inline></li>
        <li><Inline>{`lage expressie van membraangebonden immunoglobuline`}</Inline></li>
        <li><Inline>{`cycline D1 negatief`}</Inline></li>
        <li><Inline>{`CD10 negatief`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat patroon helpt om CLL te onderscheiden van andere lymfatische maligniteiten, zoals mantelcellymfoom en folliculair lymfoom.`}</Inline></p>
      <SubHeading><Inline>{`Morfologie bij CLL`}</Inline></SubHeading>
      <PBody text={`In het bloeduitstrijkje kunnen **Gumprechtse schollen** worden gezien. Die zijn niet absoluut specifiek, maar wel zeer kenmerkend voor CLL.`} />
      <SubHeading><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CLL is vaak asymptomatisch en wordt in een groot deel van de gevallen toevallig ontdekt. Als er wel klachten zijn, gaat het vaak om:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vermoeidheid`}</Inline></li>
        <li><Inline>{`lymfadenopathie`}</Inline></li>
        <li><Inline>{`hepatosplenomegalie`}</Inline></li>
        <li><Inline>{`nachtzweten`}</Inline></li>
        <li><Inline>{`gewichtsverlies`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In een latere fase kunnen optreden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anemie`}</Inline></li>
        <li><Inline>{`trombocytopenie`}</Inline></li>
        <li><Inline>{`recidiverende infecties`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Die infecties ontstaan door granulocyttekort en verlaging van de immunoglobulines. Anemie en trombocytopenie kunnen ook ontstaan door verdringing van het beenmerg of door autoantistoffen.`}</Inline></p>
      <SubHeading><Inline>{`Risicoclassificatie: Rai en Binet`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CLL wordt ingedeeld met de Rai- en Binet-classificatie.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Rai- en Binet-classificatie bij CLL"], ["Rai 0", "Alleen lymfocytose"], ["Rai I", "Lymfocytose + lymfadenopathie"], ["Rai II", "Lymfocytose + hepato-/splenomegalie"], ["Rai III", "Lymfocytose + anemie"], ["Rai IV", "Lymfocytose + trombocytopenie"], ["Binet A", "Hb en trombocyten nog normaal, minder dan 3 lymfeklierstations"], ["Binet B", "Hb en trombocyten nog normaal, 3 of meer lymfeklierstations"], ["Binet C", "Anemie en/of trombocytopenie"]]} />
      <p className="leading-relaxed"><Inline>{`Er is veel variatie tussen patiënten binnen dezelfde groep. Veel patiënten worden in een laag stadium ontdekt, maar dat zegt niet altijd alles over het verdere beloop.`}</Inline></p>
      <SubHeading><Inline>{`Wanneer behandel je CLL?`}</Inline></SubHeading>
      <PBody text={`Niet elke patiënt met CLL hoeft direct behandeld te worden. Behandeling is alleen nodig bij **actieve ziekte**. Belangrijke behandelindicaties zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gewichtsverlies van meer dan 10% in 6 maanden`}</Inline></li>
        <li><Inline>{`extreme vermoeidheid`}</Inline></li>
        <li><Inline>{`koorts zonder infectie`}</Inline></li>
        <li><Inline>{`nachtzweten langer dan een maand zonder infectie`}</Inline></li>
        <li><Inline>{`toenemend beenmergfalen met anemie en/of trombocytopenie`}</Inline></li>
        <li><Inline>{`auto-immuun anemie of trombocytopenie die slecht reageert op steroïden`}</Inline></li>
        <li><Inline>{`massale of progressieve splenomegalie`}</Inline></li>
        <li><Inline>{`massale of progressieve lymfadenopathie`}</Inline></li>
        <li><Inline>{`snelle toename van lymfocytose`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Patiënten worden vaak praktisch ingedeeld in fit, minder fit en niet fit. Dat hangt af van leeftijd, comorbiditeit en performance status.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling van fitte CLL-patiënten`}</Inline></SubHeading>
      <PBody text={`Bij fitte patiënten wordt vaak behandeld met **FCR**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`fludarabine`}</Inline></li>
        <li><Inline>{`cyclofosfamide`}</Inline></li>
        <li><Inline>{`rituximab`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Het doel is langdurige progressievrije overleving en verbetering van de overall survival. De gemiddelde responsduur is bijna 5 jaar.`}</Inline></p>
      <PBody text={`Een belangrijke prognostische factor is **del17p/TP53-mutatie**. Als die aanwezig is, is de prognose met FCR veel slechter.`} />
      <SubHeading><Inline>{`Prognose en nieuwe markers bij CLL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De prognose van CLL hangt af van biologische kenmerken van de leukemie. Belangrijke markers zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`β2-microglobuline`}</Inline></li>
        <li><Inline>{`thymidine kinase`}</Inline></li>
        <li><Inline>{`IgHV-mutatiestatus`}</Inline></li>
        <li><Inline>{`ZAP70`}</Inline></li>
        <li><Inline>{`CD38`}</Inline></li>
        <li><Inline>{`CD49d`}</Inline></li>
        <li><Inline>{`cytogenetische afwijkingen via FISH`}</Inline></li>
      </ul>
      <PBody text={`Vooral **del17p13/TP53-mutatie** is een robuuste predictieve marker. Bij deze afwijking wordt conventionele chemotherapie minder gunstig geacht en wordt gekeken naar alternatieve therapieën, zoals remming van B-celsignalering.`} />
    </div>
  )
}

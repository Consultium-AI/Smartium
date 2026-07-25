import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Acute leukemie: AML en ALL`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij acute leukemie zijn de cellen onrijp. De twee hoofdvormen zijn AML en ALL.`}</Inline></p>
      <DataTable rows={[["Tabel 2. Verschil tussen AML en ALL"], ["AML", "Myeloïde voorlopercel, MPO-positief, vaker bij volwassenen, Auerse staven"], ["ALL", "Lymfoïde voorlopercel, TdT-positief, vaker bij kinderen, meer risico op CZS-betrokkenheid"]]} />
      <PBody text={`AML staat voor **acute myeloïde leukemie**. Hierbij zie je myeloïde voorlopercellen. Een belangrijk kenmerk is expressie van **MPO**; dat staat voor myeloperoxidase, een marker die past bij myeloïde differentiatie. **Auerse staven** zijn ook typisch voor AML.`} />
      <PBody text={`ALL staat voor **acute lymfatische leukemie**. Hierbij gaat het om lymfoïde voorlopercellen. Een belangrijke marker is **TdT**. Dat is een onrijpe marker en past dus bij een precursorcel. ALL komt vaker voor bij kinderen en heeft vaker verspreiding naar het centraal zenuwstelsel.`} />
      <SubHeading><Inline>{`AML: voorbeeld van een cytogenetische afwijking`}</Inline></SubHeading>
      <PBody text={`Bij AML kunnen specifieke chromosomale afwijkingen voorkomen. Een voorbeeld is **inversie 16**. Daarbij is een deel van chromosoom 16 omgedraaid, waardoor een fusiegen ontstaat. Dat fusiegen remt de differentiatie van hematopoëtische cellen en draagt zo bij aan leukemogenese.`} />
      <PBody text={`Bij AML met inversie 16 zie je een toename van afwijkende **eosinofiele granulocyten** met sterk basofiele korreling.`} />
      <SubHeading><Inline>{`Behandeling en prognose van AML`}</Inline></SubHeading>
      <PBody text={`AML wordt behandeld met intensieve chemotherapie. Het doel is een **complete remissie**: morphologisch minder dan 5% blasten in het beenmerg.`} />
      <p className="leading-relaxed"><Inline>{`De kans op complete remissie hangt af van het subtype. Bij AML met inversie 16 is die kans hoog. Toch blijft er risico op recidief.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De prognose van AML wordt beïnvloed door:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd`}</Inline></li>
        <li><Inline>{`biologische eigenschappen van de leukemie`}</Inline></li>
        <li><Inline>{`minimale restziekte`}</Inline></li>
      </ul>
      <PBody text={`**Minimal residual disease (MRD)** betekent dat er na behandeling nog een kleine hoeveelheid leukemiecellen aanwezig is, ook al lijkt de patiënt morphologisch in remissie. MRD is belangrijk, omdat het samenhangt met de kans op terugkeer van de ziekte en helpt bij het kiezen van de behandelstrategie.`} />
      <PBody text={`**Aandachtsvraag:** Waarom is MRD belangrijk?
**Mini-antwoord:** Omdat het laat zien hoeveel leukemie er nog over is en iets zegt over de kans op recidief.`} />
      <p className="leading-relaxed"><Inline>{`Bij AML is de prognose slechter op hogere leeftijd. In de stof wordt benadrukt dat patiënten boven de 60 jaar gemiddeld een veel minder gunstige overleving hebben dan jongere patiënten.`}</Inline></p>
    </div>
  )
}

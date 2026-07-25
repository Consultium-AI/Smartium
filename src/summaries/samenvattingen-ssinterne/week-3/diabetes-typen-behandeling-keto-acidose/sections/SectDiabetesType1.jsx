import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diabetes type 1`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes type 1 ontstaat door destructie van de insulineproducerende bètacellen in de pancreas. Daardoor ontstaat een absolute insulinedeficiëntie. Het proces begint bij mensen met genetische aanleg en wordt waarschijnlijk uitgelokt door omgevingsfactoren. Daarna ontstaat een T-cel-gemedieerde auto-immuunreactie met ontsteking van de eilandjes van Langerhans, ook wel insulitis genoemd.`}</Inline></p>
      <SubHeading><Inline>{`Risicofactoren en genetische aanleg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij diabetes type 1 spelen omgevingsfactoren een rol, zoals virale infecties, prenatale factoren, puberteit en psychologische stress. Vooral enterovirussen, met name Coxsackie B, worden genoemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Genetisch is er een sterke associatie met HLA-haplotypen, vooral HLA DR3-DQ2 en HLA DR4-DQ8. Daarnaast dragen meer dan 50 andere polymorfismen bij aan het risico. Er is geen simpel overervingspatroon, maar wel een duidelijk verhoogde kans bij familieleden en identieke tweelingen.`}</Inline></p>
      <SubHeading><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klassieke presentatie is een jonge patiënt met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`polyurie`}</Inline></li>
        <li><Inline>{`polydipsie`}</Inline></li>
        <li><Inline>{`gewichtsverlies`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Andere klachten kunnen zijn vermoeidheid, visusproblemen en jeuk of infecties, zoals Candida-infecties.`}</Inline></p>
      <SubHeading><Inline>{`Diagnostiek en onderscheid met type 2`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij oudere patiënten of patiënten met overgewicht kan het onderscheid tussen type 1 en type 2 lastig zijn. Dan kunnen de volgende bepalingen helpen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`C-peptide`}</Inline></li>
        <li><Inline>{`auto-antistoffen, zoals anti-GAD65, anti-IA2 en antistoffen tegen eilandjes van Langerhans`}</Inline></li>
        <li><Inline>{`nuchtere insuline`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een laag of afwezig C-peptide past bij type 1, terwijl een hoog C-peptide meer past bij insulineresistentie en dus type 2. Auto-antistoffen ondersteunen de diagnose type 1. LADA is een zeldzame vorm van auto-immuundiabetes bij volwassenen, vaak zonder overgewicht.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`C-peptide is een afbraakproduct dat ontstaat bij de vorming van insuline uit proinsuline. Medicinale insuline bevat geen C-peptide. Daarom is C-peptide nuttig om endogene insulineproductie te beoordelen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Kenmerken die passen bij type 1 of type 2`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Past meer bij type 1", "Past meer bij type 2"], ["Lichaamsbouw", "normaal of laag BMI", "overgewicht of obesitas"], ["C-peptide", "laag of afwezig", "hoog"], ["Auto-antistoffen", "vaak aanwezig", "meestal afwezig"], ["Ketonen", "vaker aanwezig", "minder typisch"], ["Ontstaan", "vaak snel", "vaak geleidelijk"]]} />
      <SubHeading><Inline>{`Behandeling van type 1`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Diabetes type 1 kan alleen behandeld worden met insuline. Er zijn verschillende schema’s:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`basaal-bolusregime`}</Inline></li>
        <li><Inline>{`tweemaal daags gemengde insuline`}</Inline></li>
        <li><Inline>{`continue subcutane insuline-infusie, oftewel pomptherapie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De benodigde dosis is individueel en hangt af van gewicht, eigen insulineproductie, voeding en beweging.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De insulinesoorten verschillen in werkingsduur:`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Werkingsduur van insuline`}</Inline></SubHeading>
      <DataTable rows={[["Snelheid", "Voorbeelden"], ["Zeer snel", "aspart, lispro, glulisine"], ["Snel", "regular"], ["Langzaam", "NPH"], ["Zeer langzaam", "glargine, detemir"]]} />
      <p className="leading-relaxed"><Inline>{`Patiënten met type 1 moeten hun bloedglucose regelmatig controleren. Dat kan met vingerprikken of met continue glucosemonitoring via een sensor.`}</Inline></p>
    </div>
  )
}

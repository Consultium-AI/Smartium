import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Nierfunctie en niermarkers`}</Inline></SubHeading>
      <SubHeading><Inline>{`Kreatinine`}</Inline></SubHeading>
      <PBody text={`**Kreatinine** wordt al lang gebruikt als marker voor chronische nierinsufficiëntie. Het zegt iets over de nierfunctie, maar alleen kreatinine is niet genoeg om die functie goed te schatten.`} />
      <SubHeading><Inline>{`Is kreatinine ook bruikbaar bij acute nierinsufficiëntie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ja, kreatinine kan ook bij acute nierinsufficiëntie gebruikt worden, maar het is niet ideaal als enige marker. De waarde verandert namelijk niet altijd meteen en geeft niet altijd direct een volledig beeld van de acute situatie.`}</Inline></p>
      <SubHeading><Inline>{`Andere biomarkers voor acute nierinsufficiëntie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor acute nierinsufficiëntie kunnen ook andere biomarkers worden gebruikt, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**cystatine C**`}</Inline></li>
        <li><Inline>{`**NGAL**`}</Inline></li>
        <li><Inline>{`**KIM-1**`}</Inline></li>
        <li><Inline>{`**urinebiomarkers** afhankelijk van de situatie`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tubulusmarkers: alfa-1-microglobuline en beta-2-microglobuline`}</Inline></SubHeading>
      <PBody text={`**Alfa-1-microglobuline** en **beta-2-microglobuline** zijn urinebiomarkers voor schade aan de proximale tubulus.`} />
      <PBody text={`Van deze twee is **beta-2-microglobuline** gevoelig voor de **pH van de urine**. Bij een lage pH wordt deze biomarker instabieler, waardoor de uitslag kan dalen. De urine-pH beïnvloedt dus de bruikbaarheid van deze test.`} />
      <SubHeading><Inline>{`Nierfunctie schatten met formules`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat kreatinine alleen onvoldoende is, worden vaak formules gebruikt om de nierfunctie te schatten. Daarbij wordt gekeken naar kreatinine in bloed, en soms ook in urine.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke formules zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**eGFR-formules**: schatten de glomerulaire filtratiesnelheid op basis van bloedkreatinine en patiëntkenmerken.`}</Inline></li>
        <li><Inline>{`**Klaringformules**: gebruiken vaak kreatinine in bloed én urine om de uitscheiding en filtratie beter te benaderen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Globaal verschil tussen nierfunctieformules`}</Inline></SubHeading>
      <DataTable rows={[["Formuletype", "Waarvoor gebruikt?", "Belangrijk kenmerk"], ["eGFR-formule", "schatting van nierfunctie", "meestal op basis van bloedkreatinine en patiëntgegevens"], ["Klaringformule", "schatting van filtratie/uitscheiding", "gebruikt vaak bloed- en urinekreatinine"]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waterreabsorptie, osmotische gradiënt en ADH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ADH werkt vooral in de verzamelbuis. Daar zorgt het ervoor dat waterkanalen, de aquaporines, tot expressie komen. Daardoor kan water uit de tubulus terug de bloedbaan in bewegen, maar alleen als er een osmotische gradiënt aanwezig is die dat water aantrekt.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het meeste water wordt in absolute zin al in de proximale tubulus teruggeresorbeerd, maar ADH heeft daar geen invloed op. De regulatie van water gebeurt dus vooral distaal, in de verzamelbuis.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er bij veel water drinken?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als je veel water drinkt, daalt de osmolaliteit. Daardoor daalt de hoeveelheid ADH in het lichaam. Zonder ADH komen er geen aquaporines in de verzamelbuis tot expressie en kan het overtollige water via de urine worden uitgescheiden. Om maximaal water uit te scheiden is niet alleen een maximaal onderdrukt ADH nodig, maar ook voldoende osmolen, dus een ruime zoutinname of inname van andere opgeloste stoffen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De urine kan maximaal verdund worden tot ongeveer 40 mOsm/l. Dat betekent dat voor elke liter water die uitgescheiden moet worden, ongeveer 40 mOsm nodig is. Daarom is een ruime hoeveelheid opgeloste stoffen nodig om veel water kwijt te kunnen.`}</Inline></p>
      <SubHeading><Inline>{`Wat gebeurt er bij waterrestrictie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij waterrestrictie stijgt de osmolaliteit. Dan wordt juist meer ADH afgegeven. De nier gaat dan water vasthouden. Ook ureum speelt hierbij een rol: ureum wordt zoveel mogelijk gereabsorbeerd, onder andere in de verzamelbuis, en draagt zo bij aan de hyperosmolale medulla. Die hoge osmolaliteit in de medulla is nodig om water uit de verzamelbuis terug te kunnen trekken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De normale serumosmolaliteit is ongeveer 290 mOsm/l. De nier kan de urine tot ongeveer een factor 7 verdunnen, maar slechts tot ongeveer een factor 4 concentreren. Onder normale omstandigheden is de nier dus beter in staat om urine te verdunnen dan om urine te concentreren.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** waarom is ureum belangrijk bij water vasthouden?
**Mini-antwoord:** ureum helpt de medulla hyperosmolair te maken, zodat water uit de verzamelbuis kan worden teruggetrokken.`} />
    </div>
  )
}

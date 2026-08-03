import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypernatriëmie, hyperkaliëmie en ketoacidose bij insulinetekort`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met diabetes mellitus type 1 die zijn insuline niet gebruikt, kan een beeld ontstaan met hyperglykemie, hypernatriëmie, hyperkaliëmie en metabole acidose. De kern van het probleem is het insulinetekort.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Zonder insuline kan glucose niet goed de cellen in. Daardoor blijft glucose in het bloed en stijgt de serumosmolaliteit. Als dit snel gebeurt, wordt het serum hyperosmolair ten opzichte van de cellen. Water verplaatst zich dan uit de cellen naar het extracellulaire compartiment. In de hersenen leidt dat tot celkrimp.`}</Inline></p>
      <SubHeading><Inline>{`Osmotische diurese en waterverlies`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De hoge glucose in het tubuluslumen wordt niet volledig teruggeresorbeerd. Daardoor trekt glucose water mee: dit heet osmotische diurese. De patiënt verliest hierdoor veel water via de nieren. Dat leidt tot volumedepletie en draagt bij aan de hypernatriëmie. Het hoge ADH kan dit niet volledig compenseren, omdat de waterverliezen groot zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Osmotische diurese kan ook optreden bij andere osmotisch actieve stoffen, zoals ureum of mannitol, zolang de nierfunctie nog aanwezig is.`}</Inline></p>
      <SubHeading><Inline>{`Waarom ontstaat hyperkaliëmie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn hier meerdere mechanismen tegelijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Acidose**: bij ketoacidose verschuift kalium uit de cellen naar het bloed.`}</Inline></li>
        <li><Inline>{`**Insulinetekort**: insuline stimuleert normaal de opname van kalium in de cellen. Dat effect valt weg.`}</Inline></li>
        <li><Inline>{`**Volumedepletie en RAAS-activatie**: het RAAS wordt maximaal geactiveerd, maar in de verzamelbuis is door de sterke natriumresorptie soms te weinig natrium over om via aldosteron voldoende kaliumuitscheiding mogelijk te maken.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zo kan er ondanks een sterke hormonale prikkel toch hyperkaliëmie ontstaan.`}</Inline></p>
      <SubHeading><Inline>{`Ketoacidose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Door het tekort aan intracellulaire glucose schakelen cellen over op vetverbranding. Daarnaast valt de rem op lipolyse weg. Daardoor ontstaan vrije vetzuren en ketonzuren. Deze zorgen voor ketoacidose, wat je terugziet als een lage pH en een laag bicarbonaat.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**Waarom is de urine hier niet geconcentreerd, ondanks veel ADH?**
Omdat de osmotische diurese door glucose het waterverlies veroorzaakt. De nier verliest water samen met de glucose, waardoor de urine niet normaal geconcentreerd kan worden.`} />
    </div>
  )
}

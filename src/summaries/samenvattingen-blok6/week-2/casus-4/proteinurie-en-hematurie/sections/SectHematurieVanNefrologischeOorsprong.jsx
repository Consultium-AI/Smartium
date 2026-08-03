import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hematurie van nefrologische oorsprong`}</Inline></SubHeading>
      <PBody text={`Als er bloedcellen in de urine zitten zonder urologische oorzaak, ligt de bron vaak in de **glomerulus**. De glomerulaire filtratiebarrière hoort bloedcellen normaal tegen te houden.`} />
      <p className="leading-relaxed"><Inline>{`Twee mechanismen kunnen hematurie veroorzaken:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Stoornissen van de GBM**, vooral van collageen type IV;`}</Inline></li>
        <li><Inline>{`**Glomerulonefritis**, dus ontsteking van de glomerulus.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Stoornissen van de glomerulaire basaalmembraan`}</Inline></SubHeading>
      <PBody text={`Een stoornis in collageen type IV kan hematurie geven. Klassiek is dat de hematurie vaak **asymptomatisch** is en toevallig wordt ontdekt. In het begin zijn er vaak geen andere urineafwijkingen en is de nierfunctie nog normaal.`} />
      <PBody text={`De bekendste aandoening is **de ziekte van Alport**:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`X-gebonden;`}</Inline></li>
        <li><Inline>{`vooral bij mannen;`}</Inline></li>
        <li><Inline>{`naast hematurie ook **doofheid**;`}</Inline></li>
        <li><Inline>{`en **lensdislocatie**.`}</Inline></li>
      </ul>
      <PBody text={`Een andere collageenziekte is **dunnebasaalmembraan nefropathie**. Daarbij is de glomerulaire basaalmembraan dun zichtbaar op elektronenmicroscopie. Dit beeld is meestal mild, zeker als er geen proteïnurie, hypertensie of nierfunctiestoornis is.`} />
      <SubHeading><Inline>{`Glomerulonefritis`}</Inline></SubHeading>
      <PBody text={`Bij glomerulonefritis is er ontsteking van de glomerulus. Dat is vaak ernstiger dan een collageendefect. De nierfunctie moet dan altijd worden bepaald, omdat die verminderd kan zijn en soms ernstig gestoord is. Dat kan een **nefrologisch spoedgeval** zijn.`} />
      <PBody text={`De meest agressieve vorm is **anti-GBM glomerulonefritis**, waarbij antistoffen tegen de glomerulaire basaalmembraan worden gevormd. In korte tijd kan iemand van normale nierfunctie naar onherstelbare nierschade en dialyse gaan.`} />
    </div>
  )
}

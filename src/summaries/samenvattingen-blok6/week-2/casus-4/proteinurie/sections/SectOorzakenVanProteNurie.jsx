import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van proteïnurie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Proteïnurie kan op verschillende niveaus ontstaan. Het is belangrijk om te weten waar het probleem zit, omdat dat iets zegt over de oorzaak en de ernst.`}</Inline></p>
      <SubHeading><Inline>{`Glomerulaire proteïnurie`}</Inline></SubHeading>
      <PBody text={`Bij een **glomerulair probleem** is de filtratiebarrière beschadigd. Daardoor kunnen veel meer eiwitten door de glomerulus heen lekken. Dit kan heel ernstig zijn. Bij een **nefrotisch syndroom** kan iemand zelfs meer dan 30 gram eiwit per dag verliezen. De grens voor nefrotisch syndroom ligt rond **3,5 gram per dag**.`} />
      <SubHeading><Inline>{`Tubulaire proteïnurie`}</Inline></SubHeading>
      <PBody text={`De proximale tubulus neemt normaal veel gefiltreerde eiwitten weer op. Als die reabsorptiecapaciteit verstoord raakt, ontstaat **tubulaire proteïnurie**. Daarbij kan eiwitverlies duidelijk verhoogd zijn, maar het blijft in principe beperkt tot wat er gefiltreerd wordt: ongeveer 1 tot 2 gram per dag. Meer dan dat past niet bij alleen een tubulair probleem.`} />
      <SubHeading><Inline>{`Systemische oorzaken`}</Inline></SubHeading>
      <PBody text={`Proteïnurie kan ook ontstaan als uiting van een **systemische ziekte**. De belangrijkste voorbeelden zijn:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Plasmacelmaligniteiten**, zoals myeloom`}</Inline></li>
        <li><Inline>{`**Hemoglobinurie** bij hemolyse`}</Inline></li>
        <li><Inline>{`**Myoglobinurie** bij rhabdomyolyse`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij myeloom worden veel paraproteïnen gemaakt. Die kunnen door de glomerulus worden gefiltreerd en vervolgens problemen geven in de tubulus of elders in de nier. Zo’n paraproteïne-geassocieerde nierziekte kan op veel manieren schade geven.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Hoofdtypen proteïnurie`}</Inline></SubHeading>
      <DataTable rows={[["Type", "Mechanisme", "Kenmerk"], ["Glomerulair", "Beschadigde filtratiebarrière", "Vaak veel eiwitverlies, soms nefrotisch syndroom"], ["Tubulair", "Verminderde reabsorptie in proximale tubulus", "Meestal beperkt tot 1–2 gram per dag"], ["Systemisch", "Eiwitten of pigmenten uit andere processen", "Bijvoorbeeld myeloom, hemolyse, rhabdomyolyse"]]} />
      <SubHeading><Inline>{`Nefrotisch syndroom`}</Inline></SubHeading>
      <PBody text={`Het nefrotisch syndroom is per definitie een **glomerulaire ziekte**. De ondergrens van 3 tot 3,5 gram eiwit per dag is gekozen omdat daar in elk geval sprake is van een duidelijk glomerulair probleem. Minder proteïnurie sluit een glomerulaire ziekte niet uit, maar boven deze grens is het zeker dat de glomerulus meedoet.`} />
      <PBody text={`**Aandacht-vraagje:** betekent minder dan 3,5 gram eiwit per dag dat er geen glomerulaire ziekte is?
**Mini-antwoord:** nee, dat hoeft niet. Maar boven die grens is er in elk geval een glomerulair probleem.`} />
    </div>
  )
}

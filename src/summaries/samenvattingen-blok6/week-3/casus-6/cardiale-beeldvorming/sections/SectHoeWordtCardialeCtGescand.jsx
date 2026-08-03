import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hoe wordt cardiale CT gescand?`}</Inline></SubHeading>
      <PBody text={`De scan wordt getimed met behulp van het ECG. Het doel is om te scannen in de **diastole**, de vullingsfase van het hart. In die fase beweegt het hart relatief het minst, waardoor de beelden het scherpst zijn. Daarom wordt tijdens de scan altijd een ECG gemaakt.`} />
      <PBody text={`Voor een optimale scan is een hartslag van **lager dan 65 slagen per minuut** gewenst. Hoe lager de hartslag, hoe langer de diastole. Als de hartslag hoger is, kan een **bètablokker** gegeven worden om die te verlagen. Dat kan oraal, maar dan moet het ruim van tevoren worden ingenomen, of intraveneus vlak voor de scan.`} />
      <p className="leading-relaxed"><Inline>{`Als er geen rekening gehouden wordt met de hartbeweging, ontstaan bewegingsartefacten. Dan zie je dubbelcontouren en onscherpe randen, waardoor de coronairen niet goed beoordeelbaar zijn. Met ECG-triggering worden de beelden juist op het goede moment gemaakt en krijg je scherpe, goed afgrensbare coronairen.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraagje`}</Inline></SubHeading>
      <PBody text={`**In welke fase van de hartcyclus wordt bij voorkeur gescand?**
In de diastole, omdat het hart dan het minst beweegt.`} />
    </div>
  )
}

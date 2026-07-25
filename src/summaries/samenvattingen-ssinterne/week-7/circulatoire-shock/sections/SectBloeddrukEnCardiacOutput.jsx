import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloeddruk en cardiac output`}</Inline></SubHeading>
      <PBody text={`De bloeddruk hangt samen met de **cardiac output** en de **totale perifere weerstand**. De cardiac output is het product van:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**hartfrequentie**`}</Inline></li>
        <li><Inline>{`**slagvolume**`}</Inline></li>
      </ul>
      <PBody text={`Het **slagvolume** wordt bepaald door drie factoren:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**preload**`}</Inline></li>
        <li><Inline>{`**contractiliteit**`}</Inline></li>
        <li><Inline>{`**afterload**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Bepalende factoren van de bloeddruk`}</Inline></SubHeading>
      <DataTable rows={[["Grootheid", "Wordt bepaald door"], ["Cardiac output", "Hartfrequentie × slagvolume"], ["Slagvolume", "Preload, contractiliteit, afterload"], ["Diastolische bloeddruk", "Totale perifere weerstand"]]} />
      <SubHeading><Inline>{`Preload`}</Inline></SubHeading>
      <PBody text={`De **preload** is de mate van rek in de hartspiervezels aan het einde van de diastole. Je kunt dit ook zien als de vulling van het hart vóór de contractie. Hoe meer het hart gevuld is, hoe krachtiger het in principe kan samentrekken, tot op zekere hoogte.`} />
      <PBody text={`De relatie tussen eind-diastolisch volume en slagvolume wordt weergegeven in de **Frank-Starlingcurve**. Deze curve laat zien dat het hart beter pompt als het meer gevuld is, maar alleen tot een bepaald punt. Als er te weinig of juist te veel rek is, kan het hart niet krachtig samentrekken.`} />
      <PBody text={`**Aandacht-vraagje:** wat betekent *fluid responsiveness*?
**Mini-antwoord:** dat het slagvolume na toediening van een vaste hoeveelheid vocht met 10% of meer stijgt; dan zit de patiënt op het steile deel van de Frank-Starlingcurve.`} />
      <PBody text={`Belangrijk is dat de Frank-Starlingcurve **niet statisch** is. Bij ziekte kan de curve verschuiven. Na een myocardinfarct of bij ernstige infectie kan de contractiliteit veranderen, waardoor dezelfde vulling een ander effect heeft op het slagvolume.`} />
      <SubHeading><Inline>{`Contractiliteit`}</Inline></SubHeading>
      <PBody text={`De **contractiliteit** is de kracht en snelheid waarmee het hart samentrekt. Als de contractiliteit daalt, kan het hart minder goed pompen, ook als de vulling nog redelijk is.`} />
      <SubHeading><Inline>{`Afterload`}</Inline></SubHeading>
      <PBody text={`De **afterload** is de weerstand waartegen de linkerventrikel moet pompen. Je kunt het zien als de moeite die het hart moet doen om bloed de aorta en de rest van het lichaam in te krijgen. Een verhoogde afterload betekent dus dat het hart harder moet werken om bloed vooruit te krijgen.`} />
      <SubHeading><Inline>{`Hartfrequentie en ritme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een hogere hartfrequentie leidt niet altijd tot een hogere cardiac output. In theorie geldt wel: meer slagen per minuut kan de cardiac output verhogen. Maar bij een te hoge frequentie stijgt de zuurstofbehoefte van het hart, wat juist de contractiliteit kan verminderen. Ook ritmestoornissen, zoals atriumfibrilleren, kunnen de vullingstijd verkorten. Daardoor daalt de preload en dus het slagvolume.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Effect van veranderingen op de circulatie`}</Inline></SubHeading>
      <DataTable rows={[["Verandering", "Gevolg"], ["Venoconstrictie", "↑ veneuze return → ↑ preload → ↑ slagvolume → ↑ cardiac output → ↑ systolische bloeddruk"], ["Arterioloconstrictie", "↑ totale perifere weerstand → ↑ diastolische bloeddruk"], ["Te hoge hartfrequentie", "Meer zuurstofverbruik, minder contractiliteit, daling cardiac output"], ["Ritmestoornis", "Minder vullingstijd, lagere preload, lager slagvolume"]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer gebruik je cardiale CT wel en wanneer niet?`}</Inline></SubHeading>
      <PBody text={`Cardiale CT is vooral geschikt als je coronairlijden wilt **uitsluiten** bij patiënten met een laag of matig risicoprofiel. Het is dus vooral een goede test bij patiënten met klachten waarbij de diagnose nog onzeker is.`} />
      <SubHeading><Inline>{`Wanneer wel?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiale CT wordt vooral gebruikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`patiënten met **thoracale pijnklachten** en een laag of matig risicoprofiel;`}</Inline></li>
        <li><Inline>{`**atypische thoracale pijn**;`}</Inline></li>
        <li><Inline>{`een **onzekere diagnose** na anamnese en lichamelijk onderzoek;`}</Inline></li>
        <li><Inline>{`een **afwijkend ECG** zonder duidelijke verklaring, zoals ST-veranderingen of nieuwe Q-golven;`}</Inline></li>
        <li><Inline>{`**nieuw ontstane hartfalenklachten**, om coronairlijden als oorzaak uit te sluiten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Wanneer niet?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Cardiale CT is minder geschikt of niet geschikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **acuut hartinfarct**: dan is directe interventie nodig en telt tijd zwaar mee;`}</Inline></li>
        <li><Inline>{`**symptomatische patiënten met een hoog risicoprofiel**: dan is directe coronairangiografie geschikter;`}</Inline></li>
        <li><Inline>{`een **hoge calciumscore** boven 400: veel verkalking maakt de beoordeling lastig en vergroot de kans op fout-positieve uitslagen.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Wanneer wel en niet cardiale CT?`}</Inline></SubHeading>
      <DataTable rows={[["Wel cardiale CT", "Geen cardiale CT"], ["Atypische thoracale pijn", "Acuut hartinfarct"], ["Laag/matig risicoprofiel", "Hoog risicoprofiel"], ["Onzekere diagnose", "Hoge calciumscore (>400)"], ["Onverklaard afwijkend ECG", "Situaties waarin directe interventie nodig is"], ["Nieuw hartfalen, oorzaak onduidelijk", ""]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Portale hypertensie en complicaties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Portale hypertensie is een direct gevolg van de verhoogde weerstand in de lever. Daardoor ontstaan onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ascites;`}</Inline></li>
        <li><Inline>{`splenomegalie;`}</Inline></li>
        <li><Inline>{`open vena umbilicalis;`}</Inline></li>
        <li><Inline>{`veneuze collateralen;`}</Inline></li>
        <li><Inline>{`oesofagusvarices;`}</Inline></li>
        <li><Inline>{`hypertensieve gastropathie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij gastroscopie kunnen graad I oesofagusvarices en milde hypertensieve gastropathie worden gezien. Dat zijn uitingen van portale hypertensie.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 6. Complicaties van cirrose`}</Inline></SubHeading>
      <DataTable rows={[["Complicatie", "Korte uitleg"], ["Ascites", "vochtophoping in de buik"], ["SBP", "spontane infectie van ascitesvocht"], ["Oesofagusvarices", "verwijde aderen in de slokdarm door portale hypertensie"], ["Hypertensieve gastropathie", "afwijkingen van het maagslijmvlies door hoge portale druk"], ["Splenomegalie", "vergrote milt door portale hypertensie"], ["Hepatische encefalopathie", "hersenfunctiestoornis door leverfalen"], ["Hepatorenaal syndroom", "nierfunctiestoornis bij ernstig leverfalen"]]} />
    </div>
  )
}

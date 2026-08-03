import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Echo van de lies en vervolgonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een lieszwelling is echo het eerste onderzoek. Daarmee kun je onderscheid maken tussen een hernia, abces, lipoom of lymfeklier. Ook kun je lymfeklieren beoordelen op grootte, vorm en interne structuur. Bovendien kun je meteen een echo-geleide punctie of biopt doen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een verdachte lymfeklier in de lies kan histologisch onderzoek aantonen of het om een metastase gaat. Als er sprake is van een lymfekliermetastase van melanoom, dan moet de uitgebreidheid van de ziekte verder worden bepaald. Dan zijn vooral CT thorax/abdomen en FDG PET/CT belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij stadium III melanoom wordt FDG PET/CT overwogen, zeker bij verdenking op recidief of bij vermoeden van metastasen in de ledematen.`}</Inline></p>
    </div>
  )
}

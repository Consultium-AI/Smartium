import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hartritme beoordelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het beoordelen van het hartritme kijk je altijd naar het hele kind. Een hongerig, angstig of pijnend kind heeft vaak een hogere hartfrequentie. Dat hoeft dus niet meteen pathologisch te zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tachycardie betekent een te snelle hartslag voor de leeftijd en de situatie. Bradycardie betekent een te trage hartslag voor de leeftijd en de situatie. Daarnaast is er de respiratoire aritmie: tijdens inademing klopt het hart sneller en tijdens uitademing langzamer. Dat is fysiologisch.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Extrasystolen kunnen goed hoorbaar zijn, maar klinisch kun je niet betrouwbaar onderscheiden of ze atriaal of ventriculair zijn. Ventriculaire extrasystolen verdwijnen vaak bij inspanning; bij kinderen kun je dat soms testen door kort te laten lopen.`}</Inline></p>
    </div>
  )
}

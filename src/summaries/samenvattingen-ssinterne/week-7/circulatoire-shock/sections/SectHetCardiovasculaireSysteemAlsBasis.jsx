import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het cardiovasculaire systeem als basis`}</Inline></SubHeading>
      <PBody text={`Om shock goed te begrijpen, moet je eerst weten hoe de circulatie normaal werkt. Het cardiovasculaire systeem bestaat uit twee door het hart gescheiden circulatiesystemen: de **pulmonale circulatie** en de **systemische circulatie**. Samen zorgen ze ervoor dat zuurstof en voedingsstoffen bij de weefsels komen en dat koolzuurgas en afvalstoffen worden afgevoerd.`} />
      <PBody text={`De circulatie kun je ook bekijken als een systeem met vijf onderdelen: **bloedvolume, hartkamers, arteriën, capillairen en venulen**. Het systeem is in principe **drukgestuurd**, maar het uiteindelijke doel is vooral de **flow**: hoeveel bloed er per tijdseenheid wordt rondgepompt. Juist die flow bepaalt hoeveel zuurstof en voedingsstoffen de cellen bereiken.`} />
      <PBody text={`Een handig onderscheid is dat de circulatie bestaat uit een **hoogdruksysteem** en een **laagdruksysteem**. Het hoogdruksysteem heeft vooral een **aanvoerfunctie**, terwijl het laagdruksysteem een **reservoirfunctie** heeft. Dat helpt om te begrijpen waarom veranderingen in vaattonus en bloedvolume zo’n grote invloed hebben op de bloeddruk en op de doorbloeding van organen.`} />
      <SubHeading><Inline>{`Tabel 1. De belangrijkste onderdelen van de circulatie`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Functie"], ["Bloedvolume", "Zorgt voor vulling van het vaatstelsel"], ["Hartkamers", "Pompen het bloed rond"], ["Arteriën", "Verdeling van bloed onder hoge druk"], ["Capillairen", "Uitwisseling van zuurstof, voedingsstoffen en afvalstoffen"], ["Venulen", "Afvoer van bloed uit de weefsels"]]} />
      <PBody text={`**Aandacht-vraagje:** waarom is alleen een normale bloeddruk niet genoeg?
**Mini-antwoord:** omdat het uiteindelijk gaat om voldoende flow naar de weefsels; een bloeddruk kan nog redelijk lijken terwijl de doorbloeding toch tekortschiet.`} />
    </div>
  )
}

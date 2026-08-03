import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voor- en nadelen van cardiale CT`}</Inline></SubHeading>
      <PBody text={`Cardiale CT heeft duidelijke voordelen. Het onderzoek is snel, poliklinisch uitvoerbaar en non-invasief: er is geen arteriële punctie nodig, alleen een infuus. Dat maakt het patiëntvriendelijker dan hartkatheterisatie. Bovendien heeft cardiale CT een **hoge negatief voorspellende waarde** van meer dan 95%. Dat betekent dat een normale uitslag heel betrouwbaar is om significant coronairlijden uit te sluiten.`} />
      <PBody text={`De nadelen zijn ook belangrijk. Cardiale CT gebruikt **ioniserende straling**, wat vooral relevant is bij jonge patiënten en zwangerschap. Daarnaast is **jodiumhoudend contrastmiddel** nodig bij CTA coronairen. Dat kan allergische reacties geven en is minder geschikt bij ernstige nierinsufficiëntie of schildklierfunctiestoornissen. Soms zijn ook extra medicijnen nodig, zoals bètablokkers om de hartslag te verlagen en nitrospray om de coronairen te verwijden.`} />
      <SubHeading><Inline>{`Tabel 3. Voor- en nadelen van cardiale CT`}</Inline></SubHeading>
      <DataTable rows={[["Voordelen", "Nadelen"], ["Snel onderzoek", "Ioniserende straling"], ["Non-invasief", "Jodiumhoudend contrastmiddel"], ["Poliklinisch uitvoerbaar", "Mogelijke allergische reacties"], ["Hoge negatief voorspellende waarde", "Risico op nierfunctieverslechtering"], ["Goede test om coronairlijden uit te sluiten", "Soms medicatie nodig voor optimale scan"]]} />
    </div>
  )
}

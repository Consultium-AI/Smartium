import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Reanimatie van de zwangere`}</Inline></SubHeading>
      <PBody text={`Bij reanimatie van een zwangere gelden de gewone CPR-protocollen, maar vanaf **20 weken** moet je ook de vena cava-compressie opheffen. Dat doe je direct met **left lateral tilt** of **manual uterine displacement**.`} />
      <PBody text={`Als dit niet binnen **4 minuten** tot herstel van circulatie leidt, moet de druk van de uterus op de maternale bloedvaten on-site worden opgeheven met een **spoedkeizersnede**. Het doel is dat het kind binnen **5 minuten** geboren is. Dit geeft de moeder de grootste kans op een succesvolle reanimatie, onder andere doordat er een autotransfusie van ongeveer **500–1000 ml** bloed uit de uterus naar de circulatie van de moeder plaatsvindt.`} />
    </div>
  )
}

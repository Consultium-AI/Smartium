import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Integratie van natrium- en waterbalans`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De waterbalans kan niet los worden gezien van de natriumbalans. Waterverplaatsing wordt namelijk bepaald door osmolaliteit, en die wordt vooral beïnvloed door natrium. Daarom is het logisch om eerst de natriumbalans en daarna de waterbalans te begrijpen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een verstoring van de nierfunctie kunnen beide systemen tegelijk ontregeld raken. Als de nier natrium niet goed kan uitscheiden, stijgt het extracellulaire volume. Tegelijk kan de osmolaliteit veranderen, waardoor ook de waterbalans wordt beïnvloed. Het lichaam probeert dit te compenseren via dorst en via ADH, maar als de nier zelf niet goed werkt, blijft de verstoring bestaan.`}</Inline></p>
      <SubHeading><Inline>{`Hoe hangen volume en osmolaliteit samen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Volume regulatie is in feite natriumregulatie. Als het lichaam natrium vasthoudt, houdt het ook water vast en neemt het volume toe. Osmoregulatie gaat juist over de natriumconcentratie en gebeurt vooral via water. Bij een stijgende osmolaliteit reageren osmoreceptoren met ADH-afgifte en dorst, zodat water wordt vastgehouden of ingenomen en de natriumconcentratie weer daalt.`}</Inline></p>
    </div>
  )
}

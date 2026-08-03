import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloeddruk en druktypes`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als we over bloeddruk spreken, bedoelen we meestal de arteriële bloeddruk. Daarin onderscheiden we verschillende waarden:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Systolische bloeddruk (SBP):** de hoogste druk tijdens de contractie van de linkerventrikel`}</Inline></li>
        <li><Inline>{`**Diastolische bloeddruk (DBP):** de laagste druk vlak vóór de volgende contractie`}</Inline></li>
        <li><Inline>{`**Polsdruk (PP):** het verschil tussen systolische en diastolische druk`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De formule voor polsdruk is:`}</Inline></p>
      <PBody text={`**PP = SBP − DBP**`} />
      <PBody text={`De **Mean Arterial Pressure (MAP)** is de gemiddelde arteriële druk gedurende één hartcyclus. Die is belangrijk omdat hij de gemiddelde drijvende kracht voor orgaanperfusie weergeeft. Een handige benadering is:`} />
      <PBody text={`**MAP ≈ DBP + 1/3 PP**`} />
      <p className="leading-relaxed"><Inline>{`Bij een bloeddruk van 120/80 mmHg is de polsdruk 40 mmHg en de MAP ongeveer 93 mmHg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een adequate MAP is nodig voor voldoende doorbloeding van vitale organen zoals hersenen, nieren en hart.`}</Inline></p>
    </div>
  )
}

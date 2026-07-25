import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Orthostase en syncope`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Orthostatische hypotensie is een belangrijke oorzaak van vallen en bewustzijnsverlies. Bij opstaan zakt bloed tijdelijk naar de benen, waardoor de veneuze terugstroom afneemt, het hartminuutvolume daalt en de bloeddruk kan zakken. Normaal is die daling klein. Bij orthostase is er sprake van een daling van de systolische bloeddruk met 20 mmHg of meer en/of van de diastolische bloeddruk met 10 mmHg of meer binnen 3 minuten na het opstaan. Als er klachten zijn die passen bij verminderde perfusie, kan ook een kleinere daling al relevant zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Syncope is een abrupt en kortdurend bewustzijnsverlies door tijdelijke cerebrale hypoperfusie. Het begint snel, duurt kort en herstelt spontaan. Oorzaken van syncope zijn onder meer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`reflexsyncope, zoals vasovagale syncope of situatieve syncope;`}</Inline></li>
        <li><Inline>{`syncope door orthostatische hypotensie;`}</Inline></li>
        <li><Inline>{`cardiale syncope, bijvoorbeeld door ritmestoornissen of structurele hartziekte.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Wanneer denk je aan autonome dysregulatie?**
Als de bloeddruk bij orthostase sterk daalt zonder duidelijke compensatie, bijvoorbeeld bij aandoeningen zoals diabetes, Parkinson, multiple system atrophy of andere neurologische ziektebeelden.`} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van prolaps`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van de klachten, de ernst van de prolaps en de wens van de patiënte.`}</Inline></p>
      <SubHeading><Inline>{`Conservatieve behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Conservatieve opties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**bekkenfysiotherapie**`}</Inline></li>
        <li><Inline>{`**pessariumtherapie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een pessarium is een hulpmiddel dat in de vagina wordt geplaatst om de verzakking te ondersteunen.`}</Inline></p>
      <PBody text={`Bij een prolaps **boven stadium 2** is fysiotherapie alleen niet zinvol; dan moet er ook pessariumtherapie worden gegeven.`} />
      <SubHeading><Inline>{`Wanneer kies je voor chirurgie?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als conservatieve behandeling met een ring of fysiotherapie niet helpt, of als patiënte dit niet wil, is er plaats voor een operatie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Chirurgische prolapsbehandeling kan op twee manieren worden benaderd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`met **lichaamseigen materiaal**`}</Inline></li>
        <li><Inline>{`met **mesh**-materiaal`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van operaties met lichaamseigen materiaal zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`voorwandplastiek`}</Inline></li>
        <li><Inline>{`achterwandplastiek`}</Inline></li>
        <li><Inline>{`Manchester-Fothergill-operatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden van operaties met mesh zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**sacrocolpopexie**`}</Inline></li>
        <li><Inline>{`vaginale mesh-inbreng bij een voorwandoperatie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De operatie kan dus verschillen in materiaal en in toegangsweg, bijvoorbeeld via een abdominale of vaginale benadering.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Behandelopties bij prolaps`}</Inline></SubHeading>
      <DataTable rows={[["Behandeling", "Voorbeelden", "Opmerking"], ["Conservatief", "Bekkenfysiotherapie, pessarium", "Eerste stap bij veel patiënten"], ["Chirurgisch met lichaamseigen materiaal", "Voorwandplastiek, achterwandplastiek, Manchester-Fothergill", "Operatie zonder mesh"], ["Chirurgisch met mesh", "Sacrocolpopexie, vaginale mesh bij voorwandoperatie", "Andere operatieve benadering"]]} />
    </div>
  )
}

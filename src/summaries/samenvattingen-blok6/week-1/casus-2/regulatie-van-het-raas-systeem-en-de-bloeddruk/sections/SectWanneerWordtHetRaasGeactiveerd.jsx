import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer wordt het RAAS geactiveerd?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het RAAS wordt geactiveerd als het lichaam denkt dat er te weinig circulerend volume of te weinig bloeddruk is. Dat kan bijvoorbeeld gebeuren bij hypotensie, hypovolemie of uitdroging. Ook bij hartfalen kan het RAAS actief zijn, omdat de nieren dan een verminderde effectieve doorbloeding waarnemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij warm weer en onvoldoende drinken wordt het RAAS ook geactiveerd. Het lichaam probeert dan vocht vast te houden om uitdroging tegen te gaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij nierinsufficiëntie speelt ook de regulatie van natrium en water een rol. Als de nier minder goed natrium kan uitscheiden, neemt het natrium in het lichaam toe en daarmee ook het volume. Tegelijk zorgt de osmoregulatie ervoor dat dorst en ADH bijdragen aan extra waterinname en waterretentie.`}</Inline></p>
    </div>
  )
}

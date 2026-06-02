import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Neuroblastoom</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Neuroblastoom is een solide tumor van neurale oorsprong. De tumor ontstaat uit zenuwweefsel, vaak in de bijnier of grensstreng. Typische kenmerken zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`jonge leeftijd, meestal onder de 4 jaar`}</Inline></li>
        <li><Inline>{`algehele malaise`}</Inline></li>
        <li><Inline>{`buikpijn of buikzwelling`}</Inline></li>
        <li><Inline>{`botpijn`}</Inline></li>
        <li><Inline>{`raccoon eyes`}</Inline></li>
        <li><Inline>{`soms opsoclonus-myoclonussyndroom`}</Inline></li>
        <li><Inline>{`verhoogde urine-HVA/VMA`}</Inline></li>
        <li><Inline>{`MIBG-opname`}</Inline></li>
      </ul>
      <p className="leading-relaxed m-0">
        <Inline>{`De stadia van neuroblastoom zijn:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Stadium', 'Betekenis'],
          ['---', '---'],
          ['1', 'beperkt tot één lichaamsdeel, meestal volledig operatief te verwijderen'],
          ['2A', 'aan één kant, maar niet helemaal weg te snijden'],
          [
            '2B',
            'aan één kant, onvolledig verwijderd, met uitzaaiing in nabijgelegen lymfeklieren',
          ],
          [
            '3',
            'doorgroei over de middellijn of aan één kant met lymfeklieruitzaaiingen aan de andere kant',
          ],
          [
            '4',
            'uitzaaiingen naar andere delen van het lichaam, zoals botten, beenmerg, lever, huid of lymfeklieren op afstand',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Bij Tom is er sprake van uitgezaaide ziekte met beenmerg- en botbetrokkenheid.`}</Inline>
      </p>

      <SubHeading level={2}>Hallmarks of cancer</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij neuroblastoom worden de hallmarks of cancer gekoppeld aan de tumorbiologie. Genoemd worden:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2 m-0">
        <li><Inline>{`zelfvoorzienend`}</Inline></li>
        <li><Inline>{`ongevoeligheid voor signalen van andere cellen`}</Inline></li>
        <li><Inline>{`invasiviteit`}</Inline></li>
        <li><Inline>{`onsterfelijkheid`}</Inline></li>
        <li><Inline>{`angiogenese`}</Inline></li>
        <li><Inline>{`geblokkeerde apoptose`}</Inline></li>
        <li><Inline>{`aangepaste energievoorziening`}</Inline></li>
        <li><Inline>{`immuunsysteem om de tuin leiden`}</Inline></li>
        <li><Inline>{`instabiliteit van het DNA van de kankercel`}</Inline></li>
        <li><Inline>{`ontstekingsactiviteit`}</Inline></li>
      </ol>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij neuroblastoom speelt **n-myc** een rol bij ongevoeligheid voor signalen van andere cellen. Ook wordt genoemd dat neuroblastoomcellen **VEGF** produceren, wat past bij angiogenese.`}</Inline>
      </p>
    </div>
  )
}

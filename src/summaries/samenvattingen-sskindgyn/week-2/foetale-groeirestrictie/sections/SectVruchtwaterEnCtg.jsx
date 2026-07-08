import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vruchtwater en CTG`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij FGR met oligohydramnion is het vruchtwater laag. Toch blijkt oligohydramnion geen goede voorspeller van peripartale problemen. Het aanpassen van beleid alleen op basis van vruchtwatermetingen is daarom niet zinvol.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`CTG wordt gebruikt als foetale bewaking, maar in de algemene populatie laat CTG geen duidelijke verbetering van uitkomsten zien. Bij FGR wordt CTG wel ingezet als onderdeel van de bewaking, afhankelijk van de ernst van de afwijkingen.`}</Inline></p>
      <SubHeading><Inline>{`Frequentie van CTG bij FGR`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`normale Dopplers: geen CTG-bewaking;`}</Inline></li>
        <li><Inline>{`PI arteria umbilicalis > p95: minimaal 2 keer per week CTG;`}</Inline></li>
        <li><Inline>{`afwezige of omgekeerde einddiastolische flow: minimaal om de dag, overweeg dagelijks CTG;`}</Inline></li>
        <li><Inline>{`afwijkende PI van de arteria cerebri media: minimaal 2 keer per week, overweeg dagelijks CTG.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zolang het CTG normaal is, kan afwachtend beleid worden gevoerd.`}</Inline></p>
    </div>
  )
}

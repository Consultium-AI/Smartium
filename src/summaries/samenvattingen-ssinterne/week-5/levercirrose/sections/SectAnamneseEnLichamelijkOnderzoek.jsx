import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anamnese en lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op levercirrose stel je gerichte vragen en let je op typische lichamelijke tekenen.`}</Inline></p>
      <SubHeading><Inline>{`Gerichte anamnese`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je vraagt onder andere naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`koorts;`}</Inline></li>
        <li><Inline>{`buikpijn of pijn in de leverstreek;`}</Inline></li>
        <li><Inline>{`medicatiegebruik en gebruik van kruidenthee;`}</Inline></li>
        <li><Inline>{`familieleden met leverziekte;`}</Inline></li>
        <li><Inline>{`buitenlandse reizen;`}</Inline></li>
        <li><Inline>{`i.v.-drugsgebruik;`}</Inline></li>
        <li><Inline>{`onbeschermde seksuele contacten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze vragen helpen om infectieuze, toxische, erfelijke en auto-immuun oorzaken in beeld te krijgen.`}</Inline></p>
      <SubHeading><Inline>{`Lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je let specifiek op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`spider naevi;`}</Inline></li>
        <li><Inline>{`erythema palmare;`}</Inline></li>
        <li><Inline>{`gynaecomastie;`}</Inline></li>
        <li><Inline>{`ascites;`}</Inline></li>
        <li><Inline>{`grootte van lever en milt;`}</Inline></li>
        <li><Inline>{`tekenen van hepatische encefalopathie;`}</Inline></li>
        <li><Inline>{`navelbreuk;`}</Inline></li>
        <li><Inline>{`veneuze collateralen op de buik.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze bevindingen passen bij chronische leverziekte en portale hypertensie.`}</Inline></p>
    </div>
  )
}

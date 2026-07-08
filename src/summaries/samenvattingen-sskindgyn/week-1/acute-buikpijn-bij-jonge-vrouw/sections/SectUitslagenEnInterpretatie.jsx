import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Uitslagen en interpretatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij deze patiënte waren het hemoglobine en de zwangerschapstest afwijkend: het HCG was positief en het Hb was laag. Het urinesediment was negatief voor erytrocyten, leukocyten en nitriet. Dat maakt een urineweginfectie minder waarschijnlijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De combinatie van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`positieve zwangerschapstest,`}</Inline></li>
        <li><Inline>{`buikpijn,`}</Inline></li>
        <li><Inline>{`opgezette buik,`}</Inline></li>
        <li><Inline>{`loslaatpijn,`}</Inline></li>
        <li><Inline>{`anemie,`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`past goed bij een bloeding door een tubaruptuur.`}</Inline></p>
      <SubHeading><Inline>{`Waarom denk je aan EUG?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een EUG moet altijd op de eerste plaats blijven staan bij een zwangere vrouw met buikpijn. Een positieve zwangerschapstest bepaalt dus sterk de richting van de differentiaaldiagnose. Bij afwezigheid van een intra-uteriene zwangerschap en een HCG boven 2000 is de verdenking op EUG extra sterk.`}</Inline></p>
    </div>
  )
}

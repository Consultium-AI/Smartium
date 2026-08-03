import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Melanoom: beeldvorming en stadiëring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij melanoom is beeldvorming niet bij iedereen nodig. De kans op metastasen is bij veel patiënten klein, vooral in vroege stadia. Beeldvorming wordt vooral ingezet als de kans op metastasen groter is of als er een concrete vraagstelling is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij melanoom kan beeldvorming bestaan uit echo, CT, FDG PET/CT of MRI, afhankelijk van de vraag.`}</Inline></p>
      <SubHeading><Inline>{`Zwelling in de lies: denk breed`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een zwelling in de lies kan verschillende oorzaken hebben. In de casus werden onder andere deze differentiaaldiagnosen genoemd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`liesbreuk;`}</Inline></li>
        <li><Inline>{`lymfekliermetastasen van melanoom;`}</Inline></li>
        <li><Inline>{`abces;`}</Inline></li>
        <li><Inline>{`lipoom.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een liesbreuk is dus een belangrijke mogelijkheid, zeker als de zwelling ontstaat na zware inspanning, zoals tillen of verhuizen.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** welk eerste onderzoek is logisch bij een lieszwelling?
**Mini-antwoord:** een echo, omdat die snel, niet-invasief en goed geschikt is om een hernia, abces, lipoom of lymfeklier te onderscheiden.`} />
    </div>
  )
}

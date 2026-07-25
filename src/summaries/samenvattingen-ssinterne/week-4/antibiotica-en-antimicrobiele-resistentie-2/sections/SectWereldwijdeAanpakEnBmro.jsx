import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wereldwijde aanpak en BMRO`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Resistentie stopt niet bij de landsgrens. Een resistente bacterie kan gemakkelijk meereizen met mensen en zich wereldwijd verspreiden. Daarom is een internationale aanpak nodig.`}</Inline></p>
      <PBody text={`Een **BMRO** is een **bijzonder resistent micro-organisme**. Dat laat zien hoe ver resistentie kan gaan en waarom infectiepreventie en zorgvuldig antibioticagebruik zo belangrijk zijn.`} />
    </div>
  )
}

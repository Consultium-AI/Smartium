import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De meest waarschijnlijke diagnose: urineweginfectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een zuigeling met hoge koorts, braken, prikkelbaarheid, een stinkende luier en geen duidelijke focus op lichamelijk onderzoek is een urineweginfectie de meest logische diagnose. Een anders ruikende, stinkende luier is hierbij een belangrijke aanwijzing.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook als het kind mager is, moeilijk te onderzoeken is, niet goed reageert op de ouder en tekenen van dehydratie heeft, moet je aan een UWI denken. De combinatie van koorts, braken en een afwijkende urinegeur past goed bij deze diagnose.`}</Inline></p>
    </div>
  )
}

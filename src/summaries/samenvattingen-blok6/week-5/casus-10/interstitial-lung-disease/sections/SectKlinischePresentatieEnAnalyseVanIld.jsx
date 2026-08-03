import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische presentatie en analyse van ILD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De presentatie van ILD is meestal niet specifiek. De meest voorkomende klachten zijn dyspneu, hoest en vermoeidheid. Soms bestaan deze klachten al maanden of zelfs jaren voordat de diagnose wordt gesteld.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek zijn bibasale Velcro-like crackles vaak hoorbaar. Clubbing kan ook voorkomen. Hypoxemie zie je vooral bij gevorderde fibrose.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Extrapulmonale klachten zijn belangrijk, omdat ze kunnen wijzen op een systemische aandoening, zoals een connective tissue disease. Denk dan aan afwijkingen van huid, handen, gewrichten of spieren. Ook vroeg grijs worden, beenmergfalen of levercirrose kunnen passen bij telomeropathieën, die samenhangen met vroeg verouderingsproces.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Soms wordt een beginnende ILD toevallig ontdekt op een CT-scan of thoraxfoto die om een andere reden is gemaakt.`}</Inline></p>
    </div>
  )
}

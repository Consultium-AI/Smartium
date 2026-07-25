import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Lichamelijk onderzoek bij dyspnoe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek let je zowel op pulmonale als cardiale oorzaken van benauwdheid. Belangrijke algemene punten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`is er dyspnoe in rust of bij lichte inspanning;`}</Inline></li>
        <li><Inline>{`welke kleur heeft de patiënt;`}</Inline></li>
        <li><Inline>{`is er cyanose;`}</Inline></li>
        <li><Inline>{`wat is de ademhalingsfrequentie;`}</Inline></li>
        <li><Inline>{`wat is de polsfrequentie;`}</Inline></li>
        <li><Inline>{`wat is de bloeddruk;`}</Inline></li>
        <li><Inline>{`wat is de temperatuur;`}</Inline></li>
        <li><Inline>{`zijn er oedemen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna onderzoek je de thorax:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`inspectie van de ademhaling en hulpademhalingsspieren;`}</Inline></li>
        <li><Inline>{`symmetrie van de ademhalingsexcursies;`}</Inline></li>
        <li><Inline>{`auscultatie van het hart op ritme, tachycardie en souffles;`}</Inline></li>
        <li><Inline>{`percussie en auscultatie van de longen;`}</Inline></li>
        <li><Inline>{`letten op tekenen van DVT in de kuiten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij astma kun je onder andere een verlengd expirium horen. Dat past bij luchtwegobstructie.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen herken je aan een patroon van klachten en tekenen, niet aan één los symptoom. Typische klachten zijn dyspnoe bij inspanning, orthopneu, paroxismale nachtelijke dyspnoe, vermoeidheid en enkeloedeem. Bij lichamelijk onderzoek let je op gestuwde halsvenen, crepitaties, een derde harttoon, hepatomegalie, ascites en perifeer oedeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Omdat klachten vaak aspecifiek zijn, is klinisch redeneren belangrijk. Je schat eerst de pre-test probability in op basis van klachten, voorgeschiedenis, leeftijd en lichamelijk onderzoek. Daarna gebruik je aanvullend onderzoek gericht: NT-proBNP om hartfalen vooral uit te sluiten, ECG om andere hartafwijkingen op te sporen, en echocardiografie om de diagnose te bevestigen en het type hartfalen vast te stellen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De NYHA-classificatie helpt om de ernst van klachten in te delen van klasse I tot IV. Het onderscheid tussen HFrEF, HFmrEF en HFpEF is belangrijk, omdat het iets zegt over de ejectiefractie, de onderliggende functie van het hart en de vervolgstappen in behandeling.`}</Inline></p>
    </div>
  )
}

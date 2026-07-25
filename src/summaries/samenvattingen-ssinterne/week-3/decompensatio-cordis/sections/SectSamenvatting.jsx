import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen betekent dat het hart niet meer goed genoeg pompt of vult om aan de behoefte van het lichaam te voldoen. Het komt veel voor, geeft veel klachten en heeft een ernstige prognose. Klachten zijn onder andere moeheid, kortademigheid en vochtretentie. Hartfalen kan links- of rechtszijdig zijn, en systolisch of diastolisch. De diagnose stel je met klachten, lichamelijk onderzoek en vooral echocardiografie, eventueel aangevuld met NT-proBNP. De behandeling bestaat uit leefstijladviezen, medicatie, behandeling van de onderliggende oorzaak en soms interventies of chirurgie.`}</Inline></p>
    </div>
  )
}

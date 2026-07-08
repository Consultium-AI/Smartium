import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Normale vitale parameters per leeftijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De normale ademhalingsfrequentie, hartfrequentie en systolische bloeddruk verschillen duidelijk per leeftijd. Dat is belangrijk, omdat een waarde die bij een baby normaal is, bij een ouder kind afwijkend kan zijn.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. Normaalwaarden per leeftijd`}</Inline></SubHeading>
      <DataTable rows={[["Leeftijd", "Ademhalingsfrequentie", "Hartfrequentie", "Systolische RR (mmHg)"], ["< 1 jaar", "30–40/min", "110–160", "70–90"], ["1–2 jaar", "25–35/min", "100–150", "80–95"], ["2–5 jaar", "25–30/min", "95–140", "80–100"], ["5–12 jaar", "20–25/min", "80–120", "90–110"], ["≥ 12 jaar", "15–20/min", "60–100", "100–120"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een kind van 10 maanden hoort dus een ademhalingsfrequentie van 30–40 per minuut normaal te zijn.`}</Inline></p>
    </div>
  )
}

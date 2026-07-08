import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Techniek van het uitstrijkje`}</Inline></SubHeading>
      <PBody text={`Een goed uitstrijkje wordt afgenomen op de **transformatiezone**. Dat is belangrijk, omdat je daar zowel **plaveiselcellen** als **cilindercellen** wilt verzamelen.`} />
      <PBody text={`Daarvoor gebruik je een speculum en een brush. De brush wordt in de juiste positie gebracht en vervolgens **vijf keer rondgedraaid in dezelfde richting**. Het doel is dat het materiaal uit de transformatiezone in het uitstrijkje terechtkomt.`} />
      <SubHeading><Inline>{`Tabel 1. Benodigdheden en aandachtspunten bij cervixcytologie`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Belangrijk"], ["Speculum", "Nodig om de portio zichtbaar te maken"], ["Brush", "Wordt gebruikt om cellen uit de transformatiezone af te nemen"], ["Potje ThinPrep", "Hierin wordt het materiaal bewaard bij liquid-based cytology"], ["Doel van het uitstrijkje", "Zowel plaveiselcellen als cilindercellen verkrijgen"]]} />
    </div>
  )
}

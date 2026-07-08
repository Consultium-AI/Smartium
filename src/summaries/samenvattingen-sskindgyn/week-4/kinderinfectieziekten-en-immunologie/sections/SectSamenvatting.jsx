import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Koorts bij kinderen is vaak onschuldig, maar je moet altijd alert zijn op alarmsymptomen en ernstige infecties. Koorts is een centraal gereguleerde temperatuurstijging, meestal vanaf 38,0 °C. Rectaal meten is het betrouwbaarst. Paracetamol geef je niet standaard, maar vooral bij pijn of discomfort. Een kind met sepsis of meningitis moet snel beoordeeld en behandeld worden, met directe antibiotica als dat nodig is.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het rijksvaccinatieprogramma beschermt tegen belangrijke verwekkers van meningitis en sepsis, zoals pneumokokken, meningokokken en Hib. Herd immunity betekent collectieve bescherming en vraagt om een hoge vaccinatiegraad. Bij empirische antibiotische behandeling denk je altijd na over de meest waarschijnlijke verwekker, de gevoeligheid voor antibiotica en patiëntgebonden factoren. Bij recidiverende onderste luchtweginfecties moet je denken aan een onderliggende aandoening, vooral een afweerstoornis of een structureel longprobleem.`}</Inline></p>
    </div>
  )
}

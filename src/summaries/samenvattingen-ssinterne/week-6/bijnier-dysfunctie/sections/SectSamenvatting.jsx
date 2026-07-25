import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De bijnierschors maakt cortisol, aldosteron en bijnierandrogenen. Cortisol en androgenen staan onder controle van de HPA-as, terwijl aldosteron vooral via het RAAS wordt geregeld. Cortisol heeft effecten op vrijwel alle orgaansystemen en is essentieel voor de stressreactie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een teveel aan cortisol spreek je van het syndroom van Cushing. De diagnose stel je met screeningstesten zoals dexamethason-suppressie, midnight speekselcortisol en 24-uurs urinecortisol. Daarna bepaal je of de oorzaak ACTH-afhankelijk of ACTH-onafhankelijk is. Een ACTH-producerend hypofyse-adenoom heet de ziekte van Cushing.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een tekort aan cortisol spreek je van bijnierschorsinsufficiëntie. Primaire insufficiëntie zit in de bijnier zelf en geeft hoge ACTH-spiegels en vaak ook aldosterontekort. De ziekte van Addison is meestal auto-immuun. De behandeling bestaat uit hydrocortison en vaak ook fludrocortison. Bij stress, ziekte of trauma moet de hydrocortison direct worden opgehoogd, omdat een Addisoncrisis levensbedreigend kan zijn.`}</Inline></p>
    </div>
  )
}

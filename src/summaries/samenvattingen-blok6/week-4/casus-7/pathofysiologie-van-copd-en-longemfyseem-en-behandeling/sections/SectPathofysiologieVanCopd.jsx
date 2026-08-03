import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathofysiologie van COPD`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij COPD kunnen pathologische veranderingen optreden in de luchtwegen, het longparenchym en de longvasculatuur. Bij de ene patiënt staat bronchitis of bronchiolitis op de voorgrond, bij de andere vooral emfyseem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De kern van de pathofysiologie is een abnormale inflammatoire respons op geïnhaleerde stoffen, zoals sigarettenrook. In de longen van patiënten met COPD worden meer macrofagen, neutrofielen en lymfocyten gevonden. Deze cellen geven pro-inflammatoire mediatoren af, waardoor de ontsteking zichzelf versterkt en uiteindelijk structurele schade ontstaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarbij speelt een disbalans tussen proteasen en antiproteasen een belangrijke rol. Proteasen breken weefsel af, antiproteasen remmen dat proces. Als die balans verstoord raakt, ontstaat schade aan luchtwegwand en alveoli. Ook oxidatieve stress draagt bij aan luchtwegobstructie en verlies van alveolair oppervlak.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Reversibele en irreversibele processen bij COPD`}</Inline></SubHeading>
      <DataTable rows={[["Reversibel", "Irreversibel"], ["Inflammatie", "Verlies van elastische vezels in terminale bronchiolus"], ["Contractie van gladde spiercellen", "Destructie van alveoli"]]} />
      <p className="leading-relaxed"><Inline>{`De structurele schade leidt tot mucushypersecretie, mucosale ontsteking en fibrose, obstructie van kleine luchtwegen en destructie van alveolaire wanden. Door verlies van elastische vezels en alveolaire aanhechtingen vallen terminale bronchioli makkelijker samen. Dat geeft air trapping, hyperinflatie en uiteindelijk luchtwegobstructie met verlies van alveolair oppervlak.`}</Inline></p>
    </div>
  )
}

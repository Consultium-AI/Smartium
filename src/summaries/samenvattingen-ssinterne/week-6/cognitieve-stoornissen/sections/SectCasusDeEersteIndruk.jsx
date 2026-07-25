import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus: de eerste indruk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De 75-jarige heer Pieterse presenteert zich met algehele malaise, veranderd gedrag en het vermoeden van cognitieve achteruitgang. Uit de heteroanamnese blijkt dat het thuis al langer slechter ging: vergeetachtigheid, herhalen in gesprekken, stoppen met de krant lezen, onregelmatig eten, afhankelijkheid van dochter voor administratie en boodschappen, en veel alcoholgebruik.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat beeld maakt duidelijk dat er waarschijnlijk meer speelt dan alleen een acuut probleem. Tegelijk is er ook sprake van een recente verslechtering met bedlegerigheid, slecht eten en verwardheid. Dat maakt de differentiaaldiagnose breed.`}</Inline></p>
    </div>
  )
}

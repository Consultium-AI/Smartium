import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interstitiële longziekten: wat zijn het?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Interstitial lung disease, vaak afgekort als ILD, is een verzamelnaam voor een brede groep longaandoeningen. Het gaat om meer dan 200 verschillende ziekten die vooral het interstitium van de long aantasten. Het interstitium is de dunne steunlaag tussen het longblaasje en het capillair. In gezonde longen is deze laag maar een paar millimeter dik en helpt hij juist bij een efficiënte gaswisseling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij ILD is er ontsteking en/of fibrose in deze tussenruimte. Daardoor wordt de gaswisseling slechter, neemt de longfunctie af en ontstaan klachten zoals benauwdheid. In ernstige gevallen kan dit uiteindelijk leiden tot respiratoire insufficiëntie en overlijden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een belangrijk kenmerk van ILD is dat het begin vaak sluipend is. Patiënten hebben dan klachten die niet specifiek zijn, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chronische droge hoest`}</Inline></li>
        <li><Inline>{`dyspneu, vooral bij inspanning`}</Inline></li>
        <li><Inline>{`vermoeidheid`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat maakt ILD lastig te herkennen en ook lastig te behandelen.`}</Inline></p>
    </div>
  )
}

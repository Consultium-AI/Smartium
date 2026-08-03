import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effect van leeftijd`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hoge leeftijd beïnvloedt vooral de nierfunctie. Daardoor wordt de klaring lager. Als de klaring daalt, gaat de plasmaconcentratie omhoog en kan ook de halfwaardetijd toenemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij oudere mensen is er vaak ook relatief meer vetmassa. Voor een geneesmiddel met gemiddelde lipofiliteit heeft dat weinig effect op het Vd. Bij sterk lipofiele middelen, zoals diazepam of digoxine, kan het Vd wel iets toenemen.`}</Inline></p>
    </div>
  )
}

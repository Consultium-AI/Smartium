import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische voorbeelden van ANA-interpretatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kern van ANA-diagnostiek is steeds hetzelfde: kijk eerst naar het klinisch beeld, bepaal dan of ANA zinvol is, en interpreteer de uitslag daarna in samenhang met de klachten.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw met alleen haaruitval en niet-inflammatoire gewrichtspijn is de kans op een ANA-geassocieerde systeemziekte laag. Dan is screening niet geïndiceerd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een jonge vrouw met fotosensitiviteit en huidafwijkingen is de kans veel hoger. Dan is ANA-screening juist wel zinvol, en SLE moet worden overwogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een oudere patiënt met progressieve dyspnoe, Raynaud en fibrotische longafwijkingen moet ook aan een systeemziekte worden gedacht. In zo’n situatie is ANA-onderzoek belangrijk, omdat het onderscheid tussen onderliggende systeemziekte en primaire longfibrose gevolgen heeft voor de behandeling. Bij een systeemziekte wordt immuunsuppressie gestart; bij primaire longfibrose worden fibroseremmers gebruikt.`}</Inline></p>
    </div>
  )
}

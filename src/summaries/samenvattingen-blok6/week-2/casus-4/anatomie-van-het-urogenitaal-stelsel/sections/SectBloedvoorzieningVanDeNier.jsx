import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedvoorziening van de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De glomeruli filteren dagelijks een grote hoeveelheid bloed. Het zuurstofrijke bloed volgt daarbij een vaste route van de aorta naar de glomeruli:`}</Inline></p>
      <DataTable rows={[["Tabel 2. Arteriële route naar de glomeruli", "Volgorde"], ["1", "Aorta"], ["2", "A. renalis"], ["3", "A. interlobaris"], ["4", "A. arcuata"], ["5", "A. corticalis radiata"]]} />
      <p className="leading-relaxed"><Inline>{`Deze route laat zien hoe het bloed steeds verder de nier in wordt geleid, totdat het bij de glomeruli aankomt.`}</Inline></p>
    </div>
  )
}

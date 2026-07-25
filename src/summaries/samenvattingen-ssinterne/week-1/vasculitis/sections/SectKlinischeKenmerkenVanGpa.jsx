import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische kenmerken van GPA`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`GPA kan gelimiteerd zijn of gegeneraliseerd. Gelimiteerd betekent dat de ziekte beperkt blijft tot de bovenste en/of onderste luchtwegen. Gegeneraliseerd betekent dat er meerdere organen betrokken zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Typische kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`KNO-afwijkingen;`}</Inline></li>
        <li><Inline>{`longafwijkingen;`}</Inline></li>
        <li><Inline>{`nierbetrokkenheid.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`KNO-afwijkingen kunnen leiden tot een zadelneus. Dat is een inzakkende neusbrug door destructie van kraakbeen. Ook perforatie van het neustussenschot kan voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Longafwijkingen kunnen bestaan uit nodulaire laesies en ground-glass afwijkingen. Nierbetrokkenheid komt vaak voor: bij begin van de ziekte ongeveer bij 18% van de patiënten, uiteindelijk bij circa 80%. Dit varieert van proteïnurie en microscopische hematurie tot snel progressieve nierinsufficiëntie door necrotiserende glomerulonefritis.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Kenmerken van GPA`}</Inline></SubHeading>
      <DataTable rows={[["Gebied", "Mogelijke afwijkingen"], ["KNO", "neuskorsten, bloedneuzen, zadelneus, septumperforatie"], ["Longen", "noduli, infiltraten, ground-glass afwijkingen"], ["Nieren", "hematurie, proteïnurie, snel progressieve nierinsufficiëntie"], ["Algemeen", "vermoeidheid, gewrichtsklachten, ontstekingsbeeld"]]} />
    </div>
  )
}

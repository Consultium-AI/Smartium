import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Proteïnurie ontstaat wanneer de nier eiwitten niet goed tegenhoudt of niet goed terugresorbeert. De glomerulaire filtratiebarrière bestaat uit endotheel, basaalmembraan en podocyten, en werkt met zowel grootte- als ladingsselectiviteit. Bij glomerulaire schade kan veel eiwit verloren gaan, bij tubulaire schade meestal minder, en systemische ziekten kunnen ook proteïnurie geven. Voor diagnostiek zijn urine-stick, eiwit-creatinine-ratio en albumine-creatinine-ratio belangrijk. De nier is daarnaast essentieel voor natrium- en volumeregulatie, zuur-basebalans, EPO-productie en calcium-fosfaatbalans.`}</Inline></p>
    </div>
  )
}

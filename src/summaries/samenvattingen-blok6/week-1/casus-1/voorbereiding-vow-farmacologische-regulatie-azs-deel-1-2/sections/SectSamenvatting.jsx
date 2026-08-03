import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het autonome zenuwstelsel regelt onbewuste lichaamsfuncties en bestaat uit een sympathisch en parasympathisch deel. In beide systemen speelt acetylcholine een rol in het ganglion via nicotine-receptoren. Daarna gebruikt het parasympathische systeem acetylcholine op muscarine-receptoren in de eindorganen, terwijl het sympathische systeem meestal noradrenaline gebruikt op adrenerge receptoren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke farmacologische aangrijpingspunten zijn de α1-, α2- en β2-adrenoceptoren, de muscarine-receptoren en de afgifte van acetylcholine. α1-stimulatie geeft vooral vasoconstrictie en bloeddrukstijging, α2-stimulatie remt de noradrenaline-afgifte via negatieve feedback, en β2-stimulatie zorgt onder andere voor bronchodilatatie en vaatverwijding. Botulinetoxine A remt de afgifte van acetylcholine. Hierdoor kun je de effecten van cholinerge en noradrenerge interventies in het autonome zenuwstelsel beredeneren.`}</Inline></p>
    </div>
  )
}

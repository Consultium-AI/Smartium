import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De samenhang tussen de stoornissen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De kracht van deze stof zit in het leggen van verbanden. Een zuur-basestoornis beïnvloedt de kaliumverdeling. Een stoornis in de nierfunctie beïnvloedt zowel kalium als zuur-base. Een verandering in volume beïnvloedt ADH en RAAS, en daarmee weer natrium, kalium en water.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Overzicht van de drie casussen`}</Inline></SubHeading>
      <DataTable rows={[["Casus", "Belangrijkste stoornissen", "Kernverklaring"], ["Casus 1", "Hyperkaliëmie, metabole acidose", "Chronische nierschade met verminderde kalium- en zuuruitscheiding, mogelijk versterkt door RAAS-remming"], ["Casus 2", "Hyponatriëmie, hypokaliëmie, metabole alkalose", "Lisdiuretica, volumedepletie, chloorverlies, meer distale kaliumuitscheiding en mogelijk laag magnesium"], ["Casus 3", "Hypernatriëmie, hyperkaliëmie, metabole acidose", "Insulinetekort met hyperglykemie, osmotische diurese, ketoacidose en kaliumshift"]]} />
    </div>
  )
}

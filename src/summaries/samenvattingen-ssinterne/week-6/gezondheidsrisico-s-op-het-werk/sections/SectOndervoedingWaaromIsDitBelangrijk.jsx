import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ondervoeding: waarom is dit belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Goede en gevarieerde voeding is belangrijk voor de gezondheid, zeker bij ouderen. Het kan het risico op ziekte verkleinen en bijdragen aan een langere overleving en een betere kwaliteit van leven. Als er een disbalans ontstaat tussen de voedingsbehoefte en de voedingsinname, kan ondervoeding ontstaan.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij oudere patiënten die in het ziekenhuis worden opgenomen komt ondervoeding vaak voor. Ziekte en ondervoeding beïnvloeden elkaar ook: ziekte kan zorgen voor minder eetlust of een eenzijdiger dieet, terwijl goede voeding juist extra belangrijk wordt als iemand ziek is. Daarom is ondervoeding een veelvoorkomend probleem waar zorgverleners vaak mee te maken krijgen.`}</Inline></p>
    </div>
  )
}

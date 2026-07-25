import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke middelen zijn belangrijk?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie typen geneesmiddelen van belang bij hepatitis C: proteaseremmers, NS5a-remmers en NS5b-remmers. In 2017 was behandeling met sofosbuvir, een NS5b-remmer, in combinatie met een tweede of derde middel de standaard.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Geneesmiddeltypen bij hepatitis C`}</Inline></SubHeading>
      <DataTable rows={[["Middeltype", "Rol in behandeling"], ["Proteaseremmers", "Antivirale middelen tegen hepatitis C"], ["NS5a-remmers", "Antivirale middelen tegen hepatitis C"], ["NS5b-remmers", "In 2017 het belangrijkste type; sofosbuvir is hier een voorbeeld van"]]} />
    </div>
  )
}

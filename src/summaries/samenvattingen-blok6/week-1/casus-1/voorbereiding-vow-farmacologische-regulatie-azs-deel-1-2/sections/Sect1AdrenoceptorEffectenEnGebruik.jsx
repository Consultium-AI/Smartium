import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`α1-adrenoceptor: effecten en gebruik`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Stimulatie van de α1-adrenoceptor geeft vooral vaatvernauwing. Daardoor stijgt de perifere weerstand en vervolgens ook de bloeddruk. Daarnaast veroorzaakt stimulatie van deze receptor mydriase, dus pupilverwijding, en sluiting van de urineblaassfincter.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Effecten van α1-adrenoceptorstimulatie`}</Inline></SubHeading>
      <DataTable rows={[["Orgaan/systeem", "Effect"], ["Bloedvaten", "Vasoconstrictie"], ["Perifere weerstand", "Verhoging"], ["Bloeddruk", "Verhoging"], ["Oog", "Mydriase"], ["Urineblaassfincter", "Sluiting"]]} />
      <p className="leading-relaxed"><Inline>{`α1-adrenoceptoragonisten worden therapeutisch gebruikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lokale bloeding;`}</Inline></li>
        <li><Inline>{`verkoudheid;`}</Inline></li>
        <li><Inline>{`inductie van mydriasis;`}</Inline></li>
        <li><Inline>{`verlenging van de werking van lokale anesthetica.`}</Inline></li>
      </ul>
    </div>
  )
}

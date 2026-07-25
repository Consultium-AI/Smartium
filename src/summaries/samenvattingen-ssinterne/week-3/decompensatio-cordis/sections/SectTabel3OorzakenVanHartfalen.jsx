import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Oorzaken van hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Oorzaak", "Voorbeelden"], ["Coronair lijden", "ischemie, myocardinfarct"], ["Hypertensie", "linkerventrikelhypertrofie, meestal behouden linkerventrikelfunctie"], ["Cardiomyopathieën", "gedilateerde, hypertrofische, restrictieve, arytmogene rechterventrikel- en noncompaction-cardiomyopathie"], ["Infiltratieve hartziekten", "sarcoïdose, haemochromatose, amyloïdose"], ["Klepaandoeningen", "mitralisklepinsufficiëntie, mitralisklepstenose, aortaklepinsufficiëntie, aortaklepstenose"], ["Ritmestoornissen", "tachycardiomyopathie, vooral bij atriumfibrilleren"], ["Toxische stoffen", "alcohol, chemotherapie, cocaïne"], ["Extracardiale oorzaken", "anemie, thyreotoxicose, vitamine B1-deficiëntie"]]} />
      <p className="leading-relaxed"><Inline>{`Bij langdurige hoge bloeddruk kan linkerventrikelhypertrofie ontstaan. Ook bij een aortaklepstenose kan dit optreden, omdat de linkerventrikel dan tegen een verhoogde weerstand moet pompen. Met het ouder worden neemt de kans op verkalking van de kleppen toe, en daarmee ook de kans op aortaklepstenose.`}</Inline></p>
    </div>
  )
}

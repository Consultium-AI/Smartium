import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Microvasculaire complicaties`}</Inline></h3>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Diabetische retinopathie`}</Inline></h3>
      <p><Inline>{`Bij diabetische retinopathie zijn vooral de ogen betrokken. Risicofactoren zijn hyperglykemie, bloeddruk, roken, dyslipidemie, diabetesduur, proteinurie en zwangerschap.`}</Inline></p>
      <p><Inline>{`De klachten blijven vaak lang uit. Veel mensen hebben lang helemaal geen klachten en merken pas in een laat stadium dat er iets aan de hand is. Bij plots intensieve insulinetherapie en tijdens zwangerschap kan verergering optreden. In een later stadium kan visusverlies ontstaan.`}</Inline></p>
      <p><Inline>{`De diagnostiek gebeurt met fundoscopie of fundusfoto’s. Fluorescentieangiografie en OCT, oftewel optical coherence tomography, worden op indicatie gebruikt, bijvoorbeeld bij macula-oedeem of non-perfusie.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Diabetische nefropathie`}</Inline></h3>
      <p><Inline>{`Bij diabetische nefropathie zijn de nieren aangedaan. Risicofactoren zijn hyperglykemie, hoge bloeddruk, leeftijd en diabetesduur, al bestaande verminderde nierfunctie door een andere oorzaak, roken en obesitas.`}</Inline></p>
      <p><Inline>{`Een belangrijk vroeg verschijnsel is microalbuminurie. Daarna volgt achteruitgang van de nierfunctie. In een laat stadium kan nierfalen ontstaan.`}</Inline></p>
      <p><Inline>{`De diagnostiek bestaat uit het meten van de urine-albumine/creatinineratio en het vervolgen van de nierfunctie.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Diabetische neuropathie`}</Inline></h3>
      <p><Inline>{`Bij neuropathie zijn er twee vormen. Ten eerste de perifere neuropathie, die vooral de extremiteiten betreft. Ten tweede autonome dysfunctie, die systemen beïnvloedt zoals de bloeddrukregulatie en de maag-darmmotiliteit.`}</Inline></p>
      <p><Inline>{`Bij perifere neuropathie ontstaat symmetrisch verlies van sensibiliteit. Eerst verdwijnen vibratie- en positiezin, later ook pijn-, tast- en temperatuurzin. Soms staat juist pijn en paresthesie op de voorgrond. Uiteindelijk kunnen wonden en standsafwijkingen ontstaan.`}</Inline></p>
      <p><Inline>{`Bij autonome neuropathie kunnen tachycardie, orthostatische hypotensie, gastroparese, diarree of obstipatie optreden.`}</Inline></p>
      <p><Inline>{`De diagnostiek van perifere neuropathie gebeurt met een microfilament en vibratieonderzoek. Autonome neuropathie wordt onder andere beoordeeld met bloeddrukmetingen, orthostatische metingen en onderzoek naar maaglediging.`}</Inline></p>
      <PBody text={`**Aandachtsvraag: waarom is neuropathie zo gevaarlijk voor de voeten?**  
**Kort antwoord:** omdat wondjes en drukplekken minder goed gevoeld worden, waardoor ze onopgemerkt blijven en tot ulcera kunnen leiden.`} />
    </div>
  )
}

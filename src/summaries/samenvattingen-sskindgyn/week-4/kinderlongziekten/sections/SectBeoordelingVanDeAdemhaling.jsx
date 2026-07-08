import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beoordeling van de ademhaling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een benauwd kind is inspectie vaak het allerbelangrijkst. De thorax moet daarbij bloot zijn, zodat je goed kunt zien hoe het kind ademt. Bij een acuut benauwd kind werk je volgens de ABCD-systematiek.`}</Inline></p>
      <PBody text={`Bij de **airway** kijk, luister en voel je of de luchtweg vrij is. Bij **breathing** beoordeel je de ademarbeid, de effectiviteit van de ademhaling en de systemische gevolgen van onvoldoende ademhaling. Onder ademarbeid vallen de ademfrequentie, intrekkingen, in- en expiratoire geluiden, gebruik van hulpademhalingsspieren, kreunen en neusvleugelen. De effectiviteit beoordeel je aan de thoraxexcursies en de kleur van het kind: roze, bleek of cyanotisch. Systemische effecten zijn onder andere hartfrequentie, kleur en bewustzijn. Verder let je op thoraxvorm, mond- of neusademhaling, de verhouding tussen in- en expirium, borst- en buikademhaling en tekenen van chronische hypoxie zoals trommelstokvingers of horlogeglasnagels. Auscultatie en percussie horen ook bij het onderzoek, maar percussie heeft meestal een beperkte rol. Het is vooral nuttig bij pleuravocht, waarbij je een gedempte percussie hoort, of bij een pneumothorax, waarbij de percussie hypersonoor is.`} />
      <SubHeading><Inline>{`Wat moet je bij inspectie van een benauwd kind allemaal beoordelen?`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Waar let je op?"], ["Algemene indruk", "alert, suf, ziek of niet-ziek"], ["Kleur", "roze, bleek of cyanotisch"], ["Ademfrequentie", "te snel of passend bij de leeftijd"], ["Ademarbeid", "intrekkingen, neusvleugelen, hulpademhalingsspieren"], ["Geluiden zonder stethoscoop", "stridor, slijmgeruis, kreunen, steunen"], ["Thoraxexcursies", "normaal, verminderd, symmetrisch of asymmetrisch"], ["Mond-/neusademhaling", "aanwezig of afwezig"], ["Borst- en buikademhaling", "normaal of afwijkend"], ["Thoraxvorm", "bijvoorbeeld pectus excavatum of carinatum"], ["Geluiden met stethoscoop", "rhonchi, crepitaties, stridor, piepen"], ["In- en expirium", "normaal of verlengd"], ["Tekenen van chronische hypoxie", "trommelstokvingers, horlogeglasnagels"]]} />
    </div>
  )
}

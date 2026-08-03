import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose bij hematurie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hematurie kan heel veel oorzaken hebben. De belangrijkste diagnoses die je in elk geval moet overwegen zijn blaaskanker, een nier- of uretertumor en een stollingsstoornis. Daarnaast zijn er nog andere mogelijke oorzaken, zoals een urineweginfectie, nierstenen, aangeboren afwijkingen, trauma, gebruik van antistolling, sport-geïnduceerde hematurie en gynaecologisch bloedverlies dat op hematurie kan lijken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tabel 1 geeft een overzicht van veelvoorkomende oorzaken.`}</Inline></p>
      <PBody text={`**Tabel 1. Oorzaken van hematurie**`} />
      <DataTable rows={[["Categorie", "Voorbeelden"], ["Nefrologisch", "Glomerulonefritiden, IgA-nefropathie, dunne basaalmembraan-nefropathie"], ["Infectieus urologisch", "Hemorragische cystitis, pyelonefritis, urethritis"], ["Maligniteit", "Blaastumor, tumor van de nier, uretertumor"], ["Trauma", "Niercontusie, ruptuur van nier/blaas/urethra, vreemd lichaam"], ["Urolithiasis", "Steen in nier, pyelum, ureter, blaas of urethra"], ["Aangeboren afwijkingen", "UPJ-stenose, polycysteuze nieren, vesico-ureterale reflux"], ["Overig", "Antistolling, vaatmalformatie, sport, stollingsstoornis, vaginaal bloedverlies"], ["Bij mannen", "Benigne prostaathyperplasie, urethrastrictuur"]]} />
      <p className="leading-relaxed"><Inline>{`Bij de anamnese helpt het om de klachten verder te ordenen. Je vraagt dan naar het beloop: is het acuut, chronisch, persisterend of juist voorbijgaand? Ook is het belangrijk om te weten of het echt om bloed in de hele urine gaat, of alleen om bloedverlies bij het afvegen. Dat laatste kan namelijk ook passen bij vaginaal of rectaal bloedverlies.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Verder vraag je naar pijn. Aanvalsgewijze hevige pijn past bijvoorbeeld bij een niersteen. Zo’n koliek gaat vaak samen met misselijkheid en bewegingsdrang en duurt meestal enkele uren. Flankpijn kan passen bij nierstenen of pyelonefritis. Mictieklachten zoals frequency en dysurie passen vaker bij een urineweginfectie, maar frequency en urgency, vooral ’s nachts, kunnen ook voorkomen bij blaaskanker.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** welke klacht doet je extra denken aan een niersteen?
**Mini-antwoord:** aanvalsgewijze heftige pijn, vaak met misselijkheid en bewegingsdrang.`} />
      <p className="leading-relaxed"><Inline>{`Ook koorts en een voorgeschiedenis van urineweginfecties zijn belangrijk. Vraag dan naar het aantal infecties, of er koorts was, en of antibiotica steeds blind of op basis van een kweek zijn gestart. Verder moet je altijd letten op risicofactoren voor maligniteit, zoals roken, blootstelling aan chemicaliën zoals aromatische amines, B-symptomen, een maligniteit in de voorgeschiedenis en een belaste familieanamnese.`}</Inline></p>
    </div>
  )
}

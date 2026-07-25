import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling van COPD is gericht op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verminderen van klachten;`}</Inline></li>
        <li><Inline>{`voorkomen en verminderen van exacerbaties;`}</Inline></li>
        <li><Inline>{`verbeteren van de algehele gezondheidstoestand;`}</Inline></li>
        <li><Inline>{`verbeteren van de inspanningstolerantie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`COPD is niet te genezen. De behandeling is dus vooral gericht op het beperken van klachten en het afremmen van achteruitgang.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijkste onderdelen van de behandeling`}</Inline></SubHeading>
      <PBody text={`De belangrijkste interventie is **stoppen met roken**. Daarbij kunnen nicotinevervangers en medicatie helpen. Verder zijn er meerdere pijlers in de behandeling:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`luchtwegverwijding;`}</Inline></li>
        <li><Inline>{`ontstekingsremming bij geselecteerde patiënten;`}</Inline></li>
        <li><Inline>{`vaccinatie tegen griep;`}</Inline></li>
        <li><Inline>{`longrevalidatie;`}</Inline></li>
        <li><Inline>{`goede voeding;`}</Inline></li>
        <li><Inline>{`behandeling van extrapulmonale verschijnselen;`}</Inline></li>
        <li><Inline>{`zuurstoftherapie bij ernstige hypoxemie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De volgorde van aanpak is logisch: eerst vroege diagnose en stadiumgerichte behandeling, daarna aandacht voor extrapulmonale verschijnselen, voeding en revalidatie.`}</Inline></p>
      <SubHeading><Inline>{`Luchtwegverwijders en ontstekingsremming`}</Inline></SubHeading>
      <PBody text={`B2-agonisten stimuleren de B2-receptoren en zorgen voor relaxatie van de gladde spiercellen. Daardoor neemt bronchospasme af.
Muscarine-antagonisten blokkeren het effect van acetylcholine op de muscarinereceptor en verminderen zo ook de bronchoconstrictie.`} />
      <PBody text={`Bij patiënten met COPD en een **FEV1 < 60%** kunnen **inhalatiecorticosteroïden** de klachten, longfunctie, kwaliteit van leven en het aantal exacerbaties verbeteren. Ze veranderen echter niet de lange-termijn achteruitgang van de FEV1 en ook niet de mortaliteit.`} />
      <SubHeading><Inline>{`Zuurstoftherapie en verdere opties`}</Inline></SubHeading>
      <PBody text={`Bij gevorderde COPD kan door verlies van alveolair oppervlak de zuurstofopname ernstig afnemen. Als de zuurstofspanning onder **8 kPa** daalt, komt een patiënt in aanmerking voor **zuurstoftherapie**, mits hij of zij gestopt is met roken. Zuurstoftherapie verbetert de overleving.`} />
      <PBody text={`Bij geselecteerde patiënten kunnen ook **longvolumereductie** of **longtransplantatie** een optie zijn.`} />
      <SubHeading><Inline>{`Longrevalidatie en voeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Longrevalidatie helpt om spierkracht en conditie te behouden en verbetert symptomen en kwaliteit van leven. Goede voeding is ook belangrijk, omdat de algemene conditie en spiermassa invloed hebben op het functioneren.`}</Inline></p>
    </div>
  )
}

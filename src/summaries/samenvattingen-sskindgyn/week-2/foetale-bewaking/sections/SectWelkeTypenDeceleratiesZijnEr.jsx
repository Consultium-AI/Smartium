import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Welke typen deceleraties zijn er?`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Typen deceleraties"], ["Vroege deceleratie", "Compressie van de foetus, beïnvloeding van baroreceptoren"], ["Late deceleratie", "Verstoring van uterusdoorbloeding en/of placentadoorbloeding"], ["Variabele deceleratie", "Beklemming van de navelstreng"]]} />
      <SubHeading><Inline>{`Vroege deceleraties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vroege deceleraties zijn uniforme, herhaaldelijke vertragingen die beginnen bij het begin van de contractie en aan het einde van de contractie terugkeren tot de basishartfrequentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ze ontstaan waarschijnlijk door vagale stimulatie, meestal door compressie van het foetale hoofd. Ze zijn niet geassocieerd met hypoxie, acidemie of slechte neonatale uitkomst.`}</Inline></p>
      <SubHeading><Inline>{`Late deceleraties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Late deceleraties zijn uniforme, herhaaldelijke vertragingen die beginnen tijdens of aan het einde van een contractie. Het dieptepunt ligt meer dan 20 seconden na de piek van de contractie, en de terugkeer naar de basishartfrequentie gebeurt pas na het einde van de contractie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Late deceleraties wijzen op foetale hypoxie en tekortschieten van cardiale compensatie. Ze passen bij uteroplacentaire insufficiëntie, bijvoorbeeld door placenta-afwijkingen of een stoornis in de uteriene doorbloeding. Dit is een sterke aanwijzing voor foetale nood.`}</Inline></p>
      <SubHeading><Inline>{`Variabele deceleraties`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Variabele deceleraties verschillen in diepte, duur en relatie tot de contractie. Vaak zijn het scherpe dalingen met snelle terugkeer naar de basishartfrequentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ze worden meestal veroorzaakt door navelstrengcompressie tijdens een contractie. Ze duiden niet altijd op foetale nood, maar langdurig aanwezige variabele deceleraties kunnen wel de foetale conditie beïnvloeden doordat de oxygenatie herhaaldelijk vermindert.`}</Inline></p>
    </div>
  )
}

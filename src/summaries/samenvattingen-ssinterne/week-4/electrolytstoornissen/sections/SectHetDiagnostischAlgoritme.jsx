import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Het diagnostisch algoritme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de diagnostiek van hyponatriëmie denk je stapsgewijs.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Denkstappen bij hyponatriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Vraag", "Mogelijke richting"], ["1", "Is het hypotoon?", "zo niet: hyperglycemie of pseudohyponatriëmie"], ["2", "Is het acuut en symptomatisch?", "dan eerst behandelen met hypertoon zout"], ["3", "Is er vasopressine-activiteit?", "urine-osmolaliteit helpt hierbij"], ["4", "Is er laag effectief arterieel bloedvolume?", "denk aan hartfalen, levercirrose, nier- of zoutverlies"], ["5", "Is er SIADH of een andere euvolemische oorzaak?", "denk aan medicatie, tumor, bijnier- of schildklierproblemen"]]} />
      <p className="leading-relaxed"><Inline>{`Als de urine-osmolaliteit laag is, meestal < 100 mOsm/kg, past dat bij situaties met weinig of geen ADH-activiteit, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`psychogene polydipsie;`}</Inline></li>
        <li><Inline>{`“tea and toast”;`}</Inline></li>
        <li><Inline>{`bierdrinkerspotomanie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Als er wél ADH-activiteit is, kijk je naar het effectief arterieel bloedvolume. Bij een laag effectief bloedvolume denk je aan hartfalen, levercirrose, niet-renaal zoutverlies of renaal zoutverlies. Bij een normaal effectief bloedvolume denk je vooral aan SIADH, secundaire bijnierinsufficiëntie en hypothyreoïdie.`}</Inline></p>
    </div>
  )
}

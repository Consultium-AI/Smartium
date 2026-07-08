import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Eerste trimester screening en invasieve diagnostiek`}</Inline></SubHeading>
      <SubHeading><Inline>{`NIPT`}</Inline></SubHeading>
      <PBody text={`De **NIPT** is de **non-invasieve prenatale test**. Sinds 1 april 2017 is deze test in Nederland beschikbaar voor vrijwel elke zwangere vrouw. Met de NIPT kunnen chromosomale afwijkingen worden opgespoord, zoals trisomie 21, 18 en 13, maar ook sommige deleties en duplicaties.`} />
      <PBody text={`De test is **niet diagnostisch**. Dat betekent dat een afwijkende uitslag nog geen definitieve diagnose geeft. Bij een afwijkende NIPT is daarom vervolgonderzoek nodig met **invasieve prenatale diagnostiek**.`} />
      <SubHeading><Inline>{`Wat meet de NIPT precies?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De NIPT onderzoekt vrije DNA-fragmenten in het bloed van de moeder. Ongeveer 7% van dat DNA is afkomstig uit de placenta; de rest is maternale oorsprong. De test onderzoekt dus niet rechtstreeks foetaal DNA. Dat is belangrijk, omdat placenta en foetus niet altijd exact hetzelfde chromosoompatroon hebben.`}</Inline></p>
      <SubHeading><Inline>{`Testkarakteristieken van NIPT en combinatietest`}</Inline></SubHeading>
      <PBody text={`**Tabel 1. Testkarakteristieken van combinatietest en NIPT**`} />
      <DataTable rows={[["Aandoening", "Test", "Sensitiviteit", "Specificiteit", "PPV", "NVW"], ["Downsyndroom", "Combinatietest (1 op 200)", "85%", "96%", "5%", ">99,9%"], ["Downsyndroom", "NIPT in laagrisicopopulatie", "96%", "99,9%", "75%", ">99,9%"], ["Edwardsyndroom", "Combinatietest (1 op 200)", "77%", "99%", "4%", ">99,9%"], ["Edwardsyndroom", "NIPT in laagrisicopopulatie", "87%", "99,9%", "24%", ">99,9%"], ["Patausyndroom", "Combinatietest (1 op 200)", "65%", "99%", "1%", ">99,9%"], ["Patausyndroom", "NIPT in laagrisicopopulatie", "78%", "99,9%", "23%", ">99,9%"]]} />
      <p className="leading-relaxed"><Inline>{`De NIPT heeft dus een hoog detectievermogen en een zeer hoge negatieve voorspellende waarde. De testprestaties zijn beter dan die van de combinatietest.`}</Inline></p>
      <SubHeading><Inline>{`Wat betekenen deze begrippen?`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Sensitiviteit**: hoe goed een test afwijkingen vindt die echt aanwezig zijn.`}</Inline></li>
        <li><Inline>{`**Specificiteit**: hoe goed een test normale zwangerschappen als normaal herkent.`}</Inline></li>
        <li><Inline>{`**Positief voorspellend vermogen (PPV)**: de kans dat een afwijkende testuitslag ook echt klopt.`}</Inline></li>
        <li><Inline>{`**Negatief voorspellend vermogen (NVW)**: de kans dat een normale testuitslag ook echt normaal is.`}</Inline></li>
      </ul>
    </div>
  )
}

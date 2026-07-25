import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Chronische myeloïde leukemie: CML`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CML is een chronische myeloproliferatieve aandoening. De ziekte verloopt meestal langzaam en wordt gekenmerkt door een toename van meer uitgerijpte myeloïde cellen.`}</Inline></p>
      <SubHeading><Inline>{`Kliniek en bloedbeeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`CML kan weinig klachten geven, maar typische klachten zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vermoeidheid`}</Inline></li>
        <li><Inline>{`malaise`}</Inline></li>
        <li><Inline>{`verminderde eetlust`}</Inline></li>
        <li><Inline>{`nachtzweten`}</Inline></li>
        <li><Inline>{`vol gevoel in de linker bovenbuik`}</Inline></li>
      </ul>
      <PBody text={`Bij lichamelijk onderzoek is vooral **splenomegalie** typisch. Soms is er hepatomegalie, en lymfekliervergroting is zeldzaam.`} />
      <p className="leading-relaxed"><Inline>{`In het bloed zie je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leukocytose`}</Inline></li>
        <li><Inline>{`linksverschuiving met jonge voorlopers van de myeloïde reeks`}</Inline></li>
        <li><Inline>{`minder dan 2% myeloblasten`}</Inline></li>
        <li><Inline>{`basofilie en eosinofilie`}</Inline></li>
        <li><Inline>{`lichte anemie`}</Inline></li>
        <li><Inline>{`trombocyten normaal of verhoogd`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Diagnose en cytogenetica`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De diagnose CML wordt zeker gesteld met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`cytogenetica`}</Inline></li>
        <li><Inline>{`FISH`}</Inline></li>
        <li><Inline>{`moleculaire diagnostiek`}</Inline></li>
      </ul>
      <PBody text={`Kenmerkend is **t(9;22)**, het Philadelphia-chromosoom, met het BCR-ABL-fusieproduct.`} />
      <SubHeading><Inline>{`Beenmerg en fase-indeling`}</Inline></SubHeading>
      <PBody text={`Beenmergonderzoek laat meestal een hypercellulair beenmerg zien met toegenomen myelopoiese en trombopoiese. Een botbiopt is belangrijk om ook de mate van **fibrose** vast te stellen, omdat beenmergfibrose een ongunstige prognostische factor is.`} />
      <p className="leading-relaxed"><Inline>{`De fase van CML wordt bepaald door het percentage blasten:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chronische fase: < 10%`}</Inline></li>
        <li><Inline>{`acceleratiefase: 10–19%`}</Inline></li>
        <li><Inline>{`blastencrise: ≥ 20%`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Prognose: Sokal-score`}</Inline></SubHeading>
      <PBody text={`Voor de prognose wordt de **Sokal-score** gebruikt. Die bestaat uit:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd`}</Inline></li>
        <li><Inline>{`miltgrootte`}</Inline></li>
        <li><Inline>{`percentage blasten in perifeer bloed`}</Inline></li>
        <li><Inline>{`aantal trombocyten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Op basis hiervan worden patiënten ingedeeld in laag, intermediair of hoog risico. De score is vooral ontwikkeld in de tijd van hydroxycarbamide en interferon, maar blijft ook nu nog prognostisch relevant.`}</Inline></p>
      <SubHeading><Inline>{`Behandeling van CML`}</Inline></SubHeading>
      <PBody text={`De behandeling van CML in de chronische fase is met een **tyrosinekinaseremmer (TKI)**. Dat is de standaardbehandeling.`} />
      <p className="leading-relaxed"><Inline>{`Belangrijke bijwerkingen van TKI’s:`}</Inline></p>
      <DataTable rows={[["Tabel 4. Tyrosinekinaseremmers en typische bijwerkingen"], ["Imatinib", "Peri-orbitaal oedeem, spierkrampen, huiduitslag, gastro-intestinale klachten"], ["Nilotinib", "Pancreatitis, huiduitslag, haarverlies, cardiovasculaire problemen, diabetes mellitus"], ["Dasatinib", "Pleuravocht, bloedingsneiging, gastro-intestinale klachten"], ["Bosutinib", "Diarree"], ["Ponatinib", "Cardiovasculaire risico’s, droge huid"]]} />
    </div>
  )
}

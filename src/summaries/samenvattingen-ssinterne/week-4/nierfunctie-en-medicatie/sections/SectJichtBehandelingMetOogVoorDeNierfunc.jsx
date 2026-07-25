import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Jicht: behandeling met oog voor de nierfunctie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kort daarna ontstaat een klassiek beeld van jicht: een zeer pijnlijke, rode en gezwollen grote teen. De pijn is hevig en past bij een acute jichtaanval.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een acute jichtaanval zijn verschillende behandelingen mogelijk. Deze zijn gericht op het remmen van de ontsteking. Pas nadat de aanval tot rust is gekomen, kan worden gestart met middelen zoals allopurinol, die het urinezuurgehalte verlagen.`}</Inline></p>
      <SubHeading><Inline>{`Behandelopties bij een acute aanval`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De eerste keus bij een acute jichtaanval zijn vaak NSAID’s, maar bij deze patiënte zijn die gecontra-indiceerd vanwege de nierfunctie. Daarom zijn andere opties nodig:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**corticosteroïden**, bijvoorbeeld prednison;`}</Inline></li>
        <li><Inline>{`**colchicine**, dat ook de gewrichtsontsteking remt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In deze situatie wordt gekozen voor colchicine, 2 keer per dag 0,5 mg. Na 3 dagen kan de behandeling worden gestopt, omdat de pijn sterk is afgenomen. Er ontstaan wel maag-darmklachten, zoals diarree.`}</Inline></p>
      <PBody text={`**Tabel 3. Jichtbehandeling en nierfunctie**`} />
      <DataTable rows={[["Middel", "Rol bij acute jichtaanval", "Opmerking"], ["NSAID’s", "eerste keus in het algemeen", "gecontra-indiceerd bij deze nierfunctie"], ["prednison", "alternatief", "ontstekingsremmend"], ["colchicine", "alternatief", "remt gewrichtsontsteking, kan diarree geven"], ["allopurinol", "niet voor de acute aanval", "pas na rust van de aanval starten"]]} />
    </div>
  )
}

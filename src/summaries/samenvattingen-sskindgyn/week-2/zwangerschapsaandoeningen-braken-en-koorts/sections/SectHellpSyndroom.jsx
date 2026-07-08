import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`HELLP-syndroom`}</Inline></SubHeading>
      <PBody text={`HELLP kan samen met pre-eclampsie voorkomen, maar ook **los daarvan** ontstaan. Het hoeft dus niet altijd gepaard te gaan met hypertensie of proteïnurie. HELLP staat voor:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Hemolyse**`}</Inline></li>
        <li><Inline>{`**Elevated Liver enzymes**`}</Inline></li>
        <li><Inline>{`**Low Platelets**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`In de praktijk denk je eraan bij een zwangere met ernstige klachten, vooral bij bovenbuikpijn, misselijkheid en een ziek gevoel.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Kenmerken van pre-eclampsie en HELLP`}</Inline></SubHeading>
      <DataTable rows={[["Aandoening", "Belangrijkste kenmerken"], ["Pre-eclampsie", "Hypertensie + proteïnurie, soms ook foetale groeirestrictie"], ["HELLP-syndroom", "Hemolyse, verhoogde leverenzymen, lage trombocyten; kan ook zonder hypertensie/proteïnurie bestaan"]]} />
    </div>
  )
}

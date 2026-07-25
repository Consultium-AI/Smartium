import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Number needed to treat en number needed to harm`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Behandeling van risicofactoren verlaagt het risico op hart- en vaatziekten, maar niet iedereen profiteert evenveel. Daarom is het belangrijk om te begrijpen wat de number needed to treat is: hoeveel mensen je moet behandelen om één nadelige gebeurtenis te voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De NNT hangt af van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het uitgangsrisico;`}</Inline></li>
        <li><Inline>{`het effect van de behandeling.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hoe hoger het risico, hoe lager de NNT meestal is.`}</Inline></p>
      <DataTable rows={[["Risicogroep", "10-jaarsrisico", "NNT"], ["Groen", "< 10%", "≥ 40"], ["Geel", "10-20%", "20-40"], ["Rood", "> 20%", "< 20"]]} />
      <p className="leading-relaxed"><Inline>{`Naast de NNT is ook de number needed to harm belangrijk. Geneesmiddelen kunnen immers ook bijwerkingen geven. Een goed voorbeeld is acetylsalicylzuur in primaire preventie: het verlaagt het aantal myocardinfarcten, maar de toename van bloedingen weegt daar niet tegen op.`}</Inline></p>
    </div>
  )
}

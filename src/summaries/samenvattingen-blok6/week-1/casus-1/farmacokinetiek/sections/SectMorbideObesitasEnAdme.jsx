import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Morbide obesitas en ADME`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Morbide obesitas komt steeds vaker voor. Bij het voorschrijven van geneesmiddelen is het belangrijk om te beseffen dat dit invloed kan hebben op de farmacokinetiek.`}</Inline></p>
      <SubHeading><Inline>{`Absorptie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij obesitas kan de opname veranderen doordat de maaglediging sneller gaat en de darmwand meer doorlaatbaar is. Er is echter nog weinig wetenschappelijk bewijs dat obesitas de absorptie sterk beïnvloedt.`}</Inline></p>
      <SubHeading><Inline>{`Distributie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij morbide obesitas veranderen bloedvolume, hartminuutvolume, vetmassa en vetvrije massa. Daardoor is het verdelingsvolume van geneesmiddelen moeilijk te voorspellen. Dit hangt niet alleen af van lipofiel of hydrofiel zijn.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij **lipofiele** geneesmiddelen kan het verdelingsvolume toe-, afnemen of gelijk blijven.`}</Inline></li>
        <li><Inline>{`Bij **hydrofiele** geneesmiddelen is het effect meestal kleiner.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kan de weefseldoorbloeding slechter zijn, waardoor geneesmiddelen minder goed in weefsel doordringen. Dat is vooral belangrijk bij antibiotica en lokale infecties. Soms is dan een hogere dosis nodig.`}</Inline></p>
      <SubHeading><Inline>{`Metabolisme`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij obesitas kan het metabolisme veranderen door leververvetting en een chronische ontstekingsreactie. Daardoor kan van sommige CYP-enzymen meer aanwezig zijn, en van andere minder. Het is niet van tevoren goed vast te stellen of een dosisaanpassing nodig is.`}</Inline></p>
      <SubHeading><Inline>{`Eliminatie`}</Inline></SubHeading>
      <PBody text={`Bij morbide obesitas is de nierfunctie vaak verhoogd door **hyperfiltratie**, waardoor de eGFR tijdelijk toeneemt. Op de lange termijn kan dit echter nierschade geven. Een verhoogde nierfunctie in het begin betekent dus niet automatisch dat geneesmiddelen die via de nieren worden uitgescheiden ook echt sneller worden geëlimineerd.`} />
    </div>
  )
}

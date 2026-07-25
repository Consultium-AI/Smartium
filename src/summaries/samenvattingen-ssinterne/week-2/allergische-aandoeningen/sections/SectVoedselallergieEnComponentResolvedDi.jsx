import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voedselallergie en component-resolved diagnostics`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij voedselallergie is het belangrijk om onderscheid te maken tussen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**sensibilisatie**: er zijn specifieke IgE-antistoffen;`}</Inline></li>
        <li><Inline>{`**klinische allergie**: er zijn ook echte klachten.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Melkallergie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met ernstige reacties na melk is eerst onderzoek naar sensibilisatie nodig, bijvoorbeeld met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`priktesten;`}</Inline></li>
        <li><Inline>{`specifiek IgE in serum.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Provocatie is niet zomaar mogelijk als de anamnese al wijst op ernstige anafylactische reacties.`}</Inline></p>
      <SubHeading><Inline>{`Soja`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Soja kan op verschillende manieren betrokken zijn bij allergie.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Gly m 4** is een PR-10-eiwit en kan kruisreageren met berkenpollen.`}</Inline></li>
        <li><Inline>{`**Gly m 5 en Gly m 6** zijn opslageiwitten en worden geassocieerd met ernstige systemische reacties.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij soja kan dus een positieve test passen bij kruisreactie met berkenpollen, maar dat betekent niet automatisch dat de reactie mild is. Vooral bij sojamelk kan Gly m 4 soms toch anafylaxie geven.`}</Inline></p>
      <SubHeading><Inline>{`Hazelnoot`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij hazelnoot zijn verschillende componenten belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Cor a 1** en **Cor a 2**: kruisreactie met pollen;`}</Inline></li>
        <li><Inline>{`**Cor a 8**: LTP;`}</Inline></li>
        <li><Inline>{`**Cor a 9, Cor a 11, Cor a 14**: voedsel-specifieke componenten.`}</Inline></li>
      </ul>
      <PBody text={`Een positieve **Cor a 1** met negatieve **Cor a 14** past bij een mildere hazelnootallergie en vaak bij kruisreactie met boompollen. De kans op ernstige reacties is dan kleiner.`} />
      <PBody text={`**Aandacht-vraagje:** Betekent een hoge specifieke-IgE-uitslag altijd een ernstige allergie?
**Mini-antwoord:** Nee. De klinische betekenis hangt af van de componenten en van de klachten in de anamnese.`} />
    </div>
  )
}

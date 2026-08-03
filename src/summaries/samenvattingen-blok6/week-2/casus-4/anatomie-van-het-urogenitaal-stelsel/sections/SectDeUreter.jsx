import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De ureter`}</Inline></SubHeading>
      <PBody text={`De **ureter** verbindt de nier met de blaas. Het is een **retroperitoneale** structuur van ongeveer **25 tot 30 cm** lang. De urine wordt door **peristaltische bewegingen** van de ureterwand naar de urineblaas vervoerd. Peristaltiek betekent dat de spierwand ritmisch samentrekt en zo de inhoud vooruitduwt.`} />
      <p className="leading-relaxed"><Inline>{`De ureter heeft een vaste ligging ten opzichte van omliggende vaten en structuren. Dat is anatomisch belangrijk.`}</Inline></p>
      <SubHeading><Inline>{`Ligging van de ureter ten opzichte van vaten en organen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 3. Ligging van de ureter", "Relatie"], ["Ten opzichte van de vas gonadalis", "Dorsaal van de vas gonadalis"], ["Ten opzichte van de a. iliaca communis", "Ventraal over de a. iliaca communis"], ["Bij de man ten opzichte van de ductus deferens", "Onder de ductus deferens, dus caudaal"], ["Bij de vrouw ten opzichte van de a. uterina", "Onder de a. uterina, dus caudaal"]]} />
      <PBody text={`Bij de vrouw ligt de ureter vaak **ventrocaudaal** ten opzichte van de uterus. Dat betekent dat de ureter meer naar voren en naar beneden ligt dan de baarmoeder.`} />
      <PBody text={`> **Aandachtsvraag:** Waarom is de ligging van de ureter zo belangrijk?
> **Mini-antwoord:** Omdat hij op meerdere plaatsen langs andere structuren loopt en daardoor anatomisch goed te herkennen is.`} />
      <SubHeading><Inline>{`Bloedvoorziening van de ureter`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat de ureter lang is, krijgt hij bloed uit meerdere aftakkingen van zuurstofrijk bloed. Deze komen van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**a. renalis**`}</Inline></li>
        <li><Inline>{`**a. gonadalis**`}</Inline></li>
        <li><Inline>{`bij de man: **a. testicularis**`}</Inline></li>
        <li><Inline>{`bij de vrouw: **a. ovarica**`}</Inline></li>
        <li><Inline>{`**a. iliaca communis**`}</Inline></li>
        <li><Inline>{`**a. iliaca interna**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De ureter wordt dus niet door één enkele arterie gevoed, maar door verschillende takken langs zijn verloop.`}</Inline></p>
    </div>
  )
}

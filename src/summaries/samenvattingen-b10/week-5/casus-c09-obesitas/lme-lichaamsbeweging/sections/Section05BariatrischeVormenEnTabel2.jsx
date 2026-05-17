import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Bariatrische chirurgie: welke vormen zijn er?`}</Inline></h3>
      <p><Inline>{`Bariatrische chirurgie is een ingrijpende behandeling. In Nederland worden verschillende ingrepen toegepast, maar de gastric sleeve en de Roux-en-Y gastric bypass (RYGB) worden het vaakst verricht. In 2024 waren dat in Nederland samen de meest gebruikte ingrepen.`}</Inline></p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Tabel 2. Belangrijkste bariatrische ingrepen`}</Inline></h3>
      <DataTable rows={[["Ingreep", "Kernkenmerk", "Belangrijk effect"], ["**Gastric sleeve (GS)**", "groot deel van de maag wordt verwijderd; de pylorus blijft intact", "vooral **restrictie**: de maaginhoud wordt kleiner, waardoor minder gegeten kan worden"], ["**Roux-en-Y gastric bypass (RYGB)**", "kleine maagpouch en omleiding van de darm", "combinatie van **restrictie**, **malabsorptie** en **hormonale/metabole effecten**"], ["**Duodenal switch**", "combineert de effecten van een gastric bypass en een gastric sleeve", "sterk effect op gewicht en opname van voedingsstoffen"], ["**Mini gastric bypass / omega-loop**", "lijkt op RYGB, maar er is slechts één darmverbinding", "andere bypass-variant met verwante werking"], ["**SADI** (single anastomosis duodenal-ileal bypass)", "de darm wordt net na de maagkringspier doorgesneden en verderop verbonden met de dunne darm; er blijft ongeveer 250–300 cm dunne darm over waar verteringssappen en voedsel samen doorheen gaan", "bypass-ingreep met duidelijke invloed op vertering en opname"]]} />
      <PBody text={`Aandachtsvraag: Wat is het grote verschil tussen gastric sleeve en RYGB?  
Kort antwoord: Bij de sleeve wordt vooral de maag kleiner gemaakt, terwijl bij de RYGB ook een deel van de darm wordt omgeleid, waardoor opname en hormoonwerking extra veranderen.`} />
    </div>
  )
}

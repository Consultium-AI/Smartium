import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beleid bij FGR: wanneer afwachten en wanneer bevallen?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het beleid hangt af van de zwangerschapsduur, de groei, en de Doppleruitslagen.`}</Inline></p>
      <SubHeading><Inline>{`Praktische handreiking`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Controle", "Beleid rond bevalling"], ["AC of EFW < p10, normale AUmb", "echo groei elke 2 weken, AUmb wekelijks", "overweeg partus vanaf 38 weken"], ["Geen groei in 3-4 weken", "intensiever beleid", "overweeg partus vanaf 34 weken"], ["AUmb PI > p95 met positieve einddiastolische flow", "echo groei elke 2 weken, AUmb wekelijks, CTG minimaal 2x per week", "overweeg partus vanaf 37 weken"], ["Afwezige of negatieve einddiastolische flow", "echo groei elke 2 weken, AUmb vaker, CTG minimaal om de dag, overweeg dagelijks", "overweeg partus na 34 weken"], ["Goede groei in 2 metingen en AC > p5", "—", "overweeg terugkeer naar standaard zorg"]]} />
      <p className="leading-relaxed"><Inline>{`Bij à terme FGR is de uitkomst van inleiden en expectatief beleid met goede bewaking vergelijkbaar. Daarom wordt de zwangerschap meestal beëindigd tussen 38 en 40 weken. Bij FGR onder de p3 wordt beëindiging rond 37 weken aangeraden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij preterme FGR, tussen 24 en 36 weken, is de keuze tussen expectatief beleid en termineren van de zwangerschap individueel. De mate van prematuriteit en het geschatte foetale gewicht zijn daarbij belangrijk. Dit is dus echt patient-tailored medicine.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Wanneer kies je vooral voor expectatief beleid?**
Bij preterme FGR, zolang de foetale bewaking goed is en de situatie stabiel blijft.`} />
    </div>
  )
}

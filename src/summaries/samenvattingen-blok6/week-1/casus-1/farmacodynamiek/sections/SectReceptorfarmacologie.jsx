import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Receptorfarmacologie`}</Inline></SubHeading>
      <PBody text={`Farmacologie is het vakgebied dat zich bezighoudt met de werking van geneesmiddelen in het menselijk lichaam. Daarbij overlapt het met andere vakgebieden, zoals fysiologie, pathologie, farmacie en chemie. Binnen de farmacologie wordt vaak onderscheid gemaakt tussen **farmacokinetiek** en **farmacodynamiek**.`} />
      <PBody text={`Farmacokinetiek gaat over wat het lichaam met een geneesmiddel doet. Dat wordt vaak samengevat met **ADME**: absorptie, distributie, metabolisme en excretie. Farmacodynamiek gaat juist over wat een geneesmiddel met het lichaam doet. Om die effecten goed te begrijpen en te kunnen meten, is kennis van receptorfarmacologie belangrijk.`} />
      <PBody text={`Geneesmiddelen kunnen op verschillende plaatsen aangrijpen, bijvoorbeeld op **receptoren, enzymen, carriers en ionkanalen**. In deze module ligt de nadruk op **receptoren**. Een receptor is een eiwit dat lichaamseigen signalen herkent en erop reageert. Ook een geneesmiddel van buiten het lichaam kan aan zo’n receptor binden. Die binding kan leiden tot **stimulatie** of tot **blokkade**.`} />
      <SubHeading><Inline>{`Verschillende receptorcategorieën`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Receptoren kunnen op verschillende manieren werken. Sommige reageren heel snel, andere veel langzamer. Dat hangt samen met het soort receptor en het soort effect dat volgt.`}</Inline></p>
      <PBody text={`**Tabel 1. Receptorcategorieën en snelheid van effect**`} />
      <DataTable rows={[["Receptorcategorie", "Werking", "Tijdschaal", "Voorbeeld"], ["Ligand-gated ion channels", "Directe opening/sluiting van ionkanaal", "Milliseconden", "Nicotinische ACh-receptor"], ["G protein-coupled receptors", "Via second messengers", "Seconden", "Muscarine ACh-receptor"], ["Kinase-linked receptors", "Via fosforylering", "Minuten tot uren", "Cytokinereceptoren"], ["Nuclear receptors", "Via genexpressie en eiwitsynthese", "Uren", "Oestrogeenreceptor"]]} />
      <PBody text={`Bij zenuwcellen vind je relatief veel **ligand-gated ionkanaalreceptoren**. Dat is logisch, omdat zenuwresponsen, bijvoorbeeld bij een reflex, snel moeten verlopen. Ionkanalen reageren snel op een stimulus. **Nucleaire receptoren** werken veel trager, omdat er eerst genexpressie en eiwitsynthese op gang moeten komen.`} />
      <PBody text={`**Aandachtsvraag:** Waarom zijn ionkanaalreceptoren handig in zenuwcellen?
**Mini-antwoord:** Omdat ze heel snel reageren en dus passen bij snelle signalen zoals reflexen.`} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Trachea: bouw en functie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De trachea, of luchtpijp, is een buis van ongeveer 10 tot 12 cm lang. Zij verbindt de larynx met de longen. Bovenaan begint de trachea ter hoogte van de onderrand van het cartilago cricoidea. Onderaan eindigt zij bij de carina, waar de luchtweg splitst in de twee hoofdbronchiën.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De trachea bestaat uit 18 tot 22 hoefijzervormige kraakbeenringen. Deze kraakbeenringen zitten aan de voor- en zijkant en zorgen ervoor dat de luchtweg open blijft en niet dichtklapt tijdens inademing. De dorsale zijde van de trachea is anders opgebouwd: daar ligt een bindweefselplaat, de paries membranaceus tracheae, met daarin de musculus trachealis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De musculus trachealis kan de diameter van de trachea verkleinen. Daardoor neemt de luchtsnelheid toe, wat vooral nuttig is bij hoesten om slijm of vreemde deeltjes weg te werken. De flexibele dorsale zijde heeft nog een tweede functie: de oesophagus, die direct achter de trachea ligt, kan tijdens het slikken uitzetten.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Waarom is de vorm van de trachea klinisch belangrijk?
**Mini-antwoord:** Omdat scherpe instrumenten bij intubatie of tracheotomie de achterwand kunnen perforeren en zo de slokdarm kunnen beschadigen.`} />
      <DataTable rows={[["Tabel 2. Kenmerken van de trachea"], ["Lengte", "10–12 cm"], ["Bovenbegrenzing", "Onderrand cartilago cricoidea"], ["Onderbegrenzing", "Carina"], ["Opbouw", "18–22 hoefijzervormige kraakbeenringen"], ["Dorsale zijde", "Paries membranaceus tracheae met musculus trachealis"], ["Belang", "Openhouden luchtweg, hoesten, bescherming oesophagus"]]} />
    </div>
  )
}

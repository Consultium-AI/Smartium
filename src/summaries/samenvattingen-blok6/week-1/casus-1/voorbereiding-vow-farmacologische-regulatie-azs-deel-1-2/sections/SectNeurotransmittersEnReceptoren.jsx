import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Neurotransmitters en receptoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In het autonome zenuwstelsel zijn vooral twee neurotransmitters belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acetylcholine (ACh)`}</Inline></li>
        <li><Inline>{`noradrenaline (NA), ook wel norepinefrine genoemd`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Acetylcholine is een belangrijke neurotransmitter in het autonome zenuwstelsel. Na afgifte uit het zenuwuiteinde verdwijnt acetylcholine uit de synaptische spleet door afbraak door het enzym acetylcholinesterase.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Acetylcholine kan binden aan twee soorten receptoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nicotine-receptoren`}</Inline></li>
        <li><Inline>{`muscarine-receptoren`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Nicotine-receptoren zijn ligand-gated ionkanalen. Dat betekent dat de receptor zelf een ionkanaal is dat opent wanneer de ligand eraan bindt. Muscarine-receptoren zijn G-eiwit-gekoppelde receptoren. Dat betekent dat ze via een G-eiwit een signaal in de cel doorgeven.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Belangrijke receptoren in het autonome zenuwstelsel`}</Inline></SubHeading>
      <DataTable rows={[["Receptor", "Type receptor", "Waar vooral belangrijk?", "Effect in het kort"], ["Nicotine-receptor", "Ligand-gated ionkanaal", "Ganglia en bijniermerg", "Activatie van het postsynaptische neuron"], ["Muscarine-receptor", "G-eiwit-gekoppelde receptor", "Eindorganen van het parasympathische systeem", "Parasympathische effecten op organen"], ["Adrenerge receptor", "Receptor voor noradrenaline/adrenaline", "Eindorganen van het sympathische systeem", "Sympathische effecten op organen"]]} />
    </div>
  )
}

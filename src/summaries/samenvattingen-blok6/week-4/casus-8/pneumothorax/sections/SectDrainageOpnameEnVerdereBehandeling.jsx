import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Drainage, opname en verdere behandeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Patiënten met een thoraxdrain worden meestal opgenomen op een longafdeling. Het luchtlek wordt gevolgd. Vaak neemt het luchtlek in enkele dagen af en stopt het vanzelf.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Soms is een operatie nodig, vooral bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`secundaire spontane pneumothorax`}</Inline></li>
        <li><Inline>{`traumatisch letsel`}</Inline></li>
        <li><Inline>{`persisterend luchtlek`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij emfyseem kan soms een bullectomie nodig zijn. De operatie gebeurt vaak via VATS: video-assisted thoracoscopic surgery. Daarnaast kan de chirurg een pleurabrasie uitvoeren of een chemische pleurodese doen om recidief te voorkomen.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Behandeling per type pneumothorax`}</Inline></SubHeading>
      <DataTable rows={[["Type pneumothorax", "Voorkeursbeleid"], ["Primair spontaan, stabiel, weinig klachten", "zuurstof en observatie"], ["Primair spontaan, stabiel", "naaldaspiratie of pigtail/Seldinger-katheter"], ["Primair spontaan, ernstig of instabiel", "snelle drainage met katheter of thoraxdrain"], ["Secundair spontaan", "meestal drainage, vaak pleurodese overwegen"], ["Traumatisch", "afhankelijk van ernst; bij instabiliteit snel draineren"], ["Iatrogeen, klein en weinig klachten", "observatie mogelijk"], ["Iatrogeen, groter of symptomatisch", "katheter/drain"]]} />
    </div>
  )
}

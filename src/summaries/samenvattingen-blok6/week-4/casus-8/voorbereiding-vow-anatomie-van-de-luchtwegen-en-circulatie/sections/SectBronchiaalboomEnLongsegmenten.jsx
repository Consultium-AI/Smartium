import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bronchiaalboom en longsegmenten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na de trachea volgt de bronchiaalboom. Deze bestaat uit de twee bronchi principales en daarna uit ongeveer 23 generaties vertakkingen, die eindigen in de alveoli. De grotere bronchiën bevatten nog kraakbeen, net als de trachea. Verder naar distaal worden de kraakbeenstructuren kleiner: eerst kraakbeenplakken, en in de bronchioli is geen kraakbeen meer aanwezig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De alveoli liggen vanaf de bronchioli respiratorii, vooral in de kleinere takken en aan de uiteinden van de vertakkingen. Daar vindt de gasuitwisseling plaats.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij verslikken komt een vreemd voorwerp meestal in de rechter bronchus principalis terecht. Dat komt doordat deze breder is en meer verticaal verloopt dan de linker bronchus principalis.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Opbouw van de bronchiaalboom"], ["Trachea", "Luchtpijp"], ["Bronchi principales", "Twee hoofdbronchiën"], ["Grotere bronchiën", "Met kraakbeenplakken"], ["Bronchioli", "Zonder kraakbeen"], ["Bronchioli respiratorii", "Begin van de zone richting alveoli"], ["Alveoli", "Plaats van gasuitwisseling"]]} />
      <p className="leading-relaxed"><Inline>{`De longkwabben worden van elkaar gescheiden door fissuren, oftewel spleten. De wanden van deze fissuren zijn bekleed met pleura visceralis, net als de buitenkant van de longen. De rechter long heeft 3 kwabben: bovenkwab, middenkwab en onderkwab. De linker long heeft 2 kwabben: bovenkwab en onderkwab. In de praktijk worden de lobus superior, medius en inferior ook wel boven-, midden- en onderkwab genoemd.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De longen kunnen verder worden onderverdeeld in longsegmenten. De rechter long heeft 10 segmenten, links meestal 9, omdat segment 7 en 8 samen één segment vormen. Segmenten worden van elkaar gescheiden door bindweefsel schotten waarin takken van de vena pulmonalis lopen, samen met lymfevaten. De bronchi segmentales liggen juist centraal in de segmenten, met daarnaast een eigen tak van de arteria pulmonalis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Deze segmentindeling is klinisch belangrijk bij het lokaliseren van infecties en tumoren, en ook bij chirurgische verwijdering van één of meerdere segmenten.`}</Inline></p>
    </div>
  )
}

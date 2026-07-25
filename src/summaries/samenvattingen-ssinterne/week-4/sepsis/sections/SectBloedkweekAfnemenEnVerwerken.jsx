import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedkweek: afnemen en verwerken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een bloedkweek moet steriel worden afgenomen. Als de huid of het dopje van het flesje onvoldoende wordt ontsmet, kunnen huidbacteriën in de kweek terechtkomen. Denk dan aan coagulase-negatieve stafylokokken, *Propionibacterium* spp., *Micrococcus* spp., *Corynebacterium* spp. en *Bacillus* spp.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Of een positieve bloedkweek echt past bij bacteriëmie of bij contaminatie, beoordeel je aan de hand van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het type bacterie`}</Inline></li>
        <li><Inline>{`of de bacterie past bij het klinisch beeld`}</Inline></li>
        <li><Inline>{`of meerdere flesjes positief zijn`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een positief bloedkweekflesje worden in het lab direct meerdere stappen gezet: een Gram-preparaat, een serum-scheiderbuis en het enten van agarkweekplaten. Daarna volgt snelle identificatie, tegenwoordig vaak met MALDI-TOF. Daardoor kan de bacterie vaak al binnen één werkdag een naam krijgen. Gevoeligheidsbepaling volgt daarna, meestal de volgende werkdag.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Verwerking van een positieve bloedkweek`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Doel"], ["Gram-preparaat", "Snelle eerste richting van de verwekker"], ["Serum-scheiderbuis", "Snelle identificatie mogelijk maken"], ["Agarkweekplaten enten", "Verdere groei en analyse"], ["MALDI-TOF", "Snelle soortidentificatie"], ["Gevoeligheidsbepaling", "Bepalen welk antibioticum werkt"]]} />
    </div>
  )
}

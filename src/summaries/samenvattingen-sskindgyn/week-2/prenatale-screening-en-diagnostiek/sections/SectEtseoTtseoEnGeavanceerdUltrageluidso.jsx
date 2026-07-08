import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ETSEO, TTSEO en geavanceerd ultrageluidsonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Foetaal ultrageluidsonderzoek is sinds de jaren zeventig sterk ontwikkeld. Door betere apparatuur, meer ervaring van echoscopisten en betere interpretatie van afwijkingen is echografie onmisbaar geworden in de verloskunde.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In Nederland zijn twee belangrijke screenende echo’s beschikbaar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de **13-weken echo (ETSEO)**;`}</Inline></li>
        <li><Inline>{`de **20-weken echo (TTSEO)**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beide vallen binnen het screeningsprogramma en daarmee onder de WBO. Ook hier geldt: goede counseling en een geïnformeerde keuze zijn essentieel.`}</Inline></p>
      <SubHeading><Inline>{`Wat is het doel van de echo’s?`}</Inline></SubHeading>
      <PBody text={`De echo’s zijn bedoeld om structurele afwijkingen op te sporen. Als er een afwijking wordt vermoed, volgt geen definitieve diagnose in de tweede lijn, maar verwijzing naar een centrum voor prenatale diagnostiek voor **geavanceerd ultrageluidsonderzoek (GUO)**.`} />
      <p className="leading-relaxed"><Inline>{`Daar werken meerdere specialisten samen, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`klinisch genetici;`}</Inline></li>
        <li><Inline>{`radiologen;`}</Inline></li>
        <li><Inline>{`kindergeneeskundige specialismen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Zo kan een diagnose worden gesteld en kunnen ouders goed worden voorgelicht over de gevolgen voor het kind.`}</Inline></p>
    </div>
  )
}

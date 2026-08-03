import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Factoren die DLCO beïnvloeden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De DLCO hangt niet alleen af van het membraan zelf, maar ook van de binding van gas aan hemoglobine en van het capillaire bloedvolume. Dat wordt samengevat in:`}</Inline></p>
      <PBody text={`**1/DL = 1/DM + 1/(θ·Vc)**`} />
      <p className="leading-relaxed"><Inline>{`Hierin is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**DM** de diffusiecapaciteit van het membraan`}</Inline></li>
        <li><Inline>{`**θ** de snelheid waarmee het gas met hemoglobine reageert`}</Inline></li>
        <li><Inline>{`**Vc** het capillaire bloedvolume`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dat betekent dat factoren die de hoeveelheid hemoglobine, de hoeveelheid capillair bloed of de testomstandigheden beïnvloeden, ook invloed hebben op de DLCO.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 5. Factoren die DLCO beïnvloeden`}</Inline></SubHeading>
      <DataTable rows={[["Factor", "Effect op DLCO", "Waarom", "Wat doe je ermee?"], ["Anemie", "Verlaagd", "Minder hemoglobine, dus minder bindingsplaatsen voor CO", "Corrigeren voor Hb"], ["Polycythemie", "Verhoogd", "Meer hemoglobine, dus meer CO-binding", "Corrigeren voor Hb"], ["Roken", "Verlaagd", "COHb bezet bindingsplaatsen", "Niet roken 12–24 uur vóór de test"], ["Inspanning", "Verhoogd", "Meer open capillairen, groter Vc", "10–15 minuten rust vóór de test"], ["Lichaamshouding", "Licht verhoogd in lig", "Liggend is Vc groter", "Steeds dezelfde houding, meestal zittend"], ["Zuurstofsuppressie", "Verlaagd", "O2 verdringt CO van hemoglobine", "O2-suppletie minimaal 10 minuten stoppen"]]} />
    </div>
  )
}

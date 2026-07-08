import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doppleronderzoek en foetale bewaking`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij verdenking op FGR kun je naast biometrie ook de hoeveelheid vruchtwater meten en Doppleronderzoek doen van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de arteria umbilicalis;`}</Inline></li>
        <li><Inline>{`de arteria cerebri media;`}</Inline></li>
        <li><Inline>{`de ductus venosus;`}</Inline></li>
        <li><Inline>{`de arteria uterina.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarnaast kun je een CTG maken en letten op foetale bewegingen.`}</Inline></p>
      <SubHeading><Inline>{`Arteria umbilicalis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij Doppler van de arteria umbilicalis kijk je naar de pulsatility index, de PI. Een afwijkende PI betekent meestal een PI boven p95, of zelfs afwezige of omgekeerde einddiastolische flow.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij zwangerschappen met verdenking op FGR is Doppler van de arteria umbilicalis belangrijk, vooral vóór 34 weken. Het is aannemelijk dat dit de perinatale sterfte verlaagt.`}</Inline></p>
      <SubHeading><Inline>{`Arteria cerebri media en brain-sparing`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De PI van de arteria cerebri media is afwijkend als deze laag is. Dat past bij brain-sparing: de foetus past zich hemodynamisch aan door meer bloed naar de hersenen te sturen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De verhouding tussen de PI van de arteria cerebri media en de arteria umbilicalis heet de cerebroplacentale ratio, CPR.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 3. Belangrijke Dopplerbegrippen`}</Inline></SubHeading>
      <DataTable rows={[["Onderzoek", "Waar let je op?", "Betekenis van afwijking"], ["Arteria umbilicalis", "PI, einddiastolische flow", "placentaire insufficiëntie"], ["Arteria cerebri media", "lage PI", "brain-sparing"], ["CPR", "verhouding ACM/AUmb", "aanwijzing voor aanpassing aan FGR"], ["Ductus venosus", "PI en A-top", "beoordeling van foetale circulatie"]]} />
      <SubHeading><Inline>{`Ductus venosus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de ductus venosus kijk je naar de PI en de A-top. De A-top hoort positief te zijn. Een afwijkende PI is boven p95 en een negatieve A-top is afwijkend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Toch wordt op basis van de ductus venosus nog geen beleid gemaakt bij FGR, omdat er nog geen goede studies zijn die verschillende bewakingsregimes met en zonder ductusvenosusmeting vergelijken.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is de arteria umbilicalis zo belangrijk?**
Omdat afwijkingen daar goed passen bij placentaire insufficiëntie en helpen om het risico op perinatale sterfte in te schatten.`} />
    </div>
  )
}

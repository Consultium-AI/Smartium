import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Casus Karel: kortademigheid, vermoeidheid en re-integratie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Karel is een 50-jarige verpleegkundige die tijdens de covid-pandemie COVID-19 doormaakt. Hij heeft geen relevante medische voorgeschiedenis, rookt niet en gebruikt geen alcohol. Na twee weken blijft hij vermoeidheidsklachten houden. De huisarts denkt aan een virale pneumonie met restverschijnselen en kiest voor afwachtend beleid.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij dit soort klachten is het belangrijk om niet alleen naar vermoeidheid zelf te kijken, maar ook naar de gevolgen voor het functioneren. Vermoeidheid kan zich uiten als:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`fysieke, mentale of emotionele uitputting;`}</Inline></li>
        <li><Inline>{`concentratieproblemen;`}</Inline></li>
        <li><Inline>{`geheugenklachten of “brain fog”;`}</Inline></li>
        <li><Inline>{`woordvindingsproblemen;`}</Inline></li>
        <li><Inline>{`duizeligheid;`}</Inline></li>
        <li><Inline>{`hoofdpijn;`}</Inline></li>
        <li><Inline>{`overgevoeligheid voor licht en geluid;`}</Inline></li>
        <li><Inline>{`kortademigheid, hartkloppingen, druk op de borst of benauwdheid;`}</Inline></li>
        <li><Inline>{`slaapproblemen;`}</Inline></li>
        <li><Inline>{`post-exertionele malaise: ziek worden na inspanning;`}</Inline></li>
        <li><Inline>{`een hoge hartslag bij opstaan, passend bij POTS.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij vermoeidheid is het altijd belangrijk om te vragen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe de vermoeidheid precies voelt;`}</Inline></li>
        <li><Inline>{`wanneer die het ergst is;`}</Inline></li>
        <li><Inline>{`of de klachten continu of wisselend aanwezig zijn;`}</Inline></li>
        <li><Inline>{`hoe snel iemand herstelt na inspanning;`}</Inline></li>
        <li><Inline>{`welke gevolgen dit heeft voor het werk;`}</Inline></li>
        <li><Inline>{`hoe de werkbelasting en het werkvermogen zich tot elkaar verhouden;`}</Inline></li>
        <li><Inline>{`of er aanpassingen mogelijk zijn op de werkvloer;`}</Inline></li>
        <li><Inline>{`hoe iemand gemotiveerd is en met de klachten omgaat.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 3. Vermoeidheid: wat moet je uitvragen?`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Voorbeelden"], ["Aard van de vermoeidheid", "Fysiek, mentaal, emotioneel"], ["Verloop", "Continu of fluctuerend, moment van de dag"], ["Herstel", "Hoe snel herstel na inspanning"], ["Werkgevolgen", "Minder belastbaar, pauzes nodig, kortere werkdagen"], ["Context", "Werkdruk, flexibiliteit, steun op de werkvloer"], ["Coping", "Omgaan met klachten, motivatie, acceptatie"]]} />
      <PBody text={`Bij Karel blijkt dat hij niet alleen op het werk, maar ook in het dagelijks leven beperkt raakt. Na drie maanden is er sprake van **Post Covid Syndroom (PCS)**. Dat past bij aanhoudende klachten na COVID-19, met vermoeidheid en cognitieve problemen.`} />
    </div>
  )
}

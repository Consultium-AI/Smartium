import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Onderzoekspunten bij de D`}</Inline></SubHeading>
      <SubHeading><Inline>{`Bewustzijn`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je beoordeelt het bewustzijn met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**GCS / EMV-score**`}</Inline></li>
        <li><Inline>{`of sneller met **AVPU**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`AVPU`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**A** = alert`}</Inline></li>
        <li><Inline>{`**V** = reageert op verbale prikkels`}</Inline></li>
        <li><Inline>{`**P** = reageert op pijnprikkel`}</Inline></li>
        <li><Inline>{`**U** = unresponsive`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Glasgow Coma Scale`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De GCS bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**E** = ogen openen`}</Inline></li>
        <li><Inline>{`**M** = motorische reactie`}</Inline></li>
        <li><Inline>{`**V** = verbale reactie`}</Inline></li>
      </ul>
      <DataTable rows={[["Onderdeel", "Score", "Betekenis"], ["E", "4", "spontaan"], ["E", "3", "op aanspreken"], ["E", "2", "op pijnprikkel"], ["E", "1", "niet openen"], ["M", "6", "opdrachten uitvoeren"], ["M", "5", "lokaliseren"], ["M", "4", "terugtrekken / normale flexie"], ["M", "3", "abnormale flexie"], ["M", "2", "strekken"], ["M", "1", "geen reactie"], ["V", "5", "georiënteerd"], ["V", "4", "verward"], ["V", "3", "losse woorden"], ["V", "2", "geluiden / kreunen"], ["V", "1", "geen reactie"]]} />
      <PBody text={`De totale score loopt van **3 tot 15**. Rapporteer de onderdelen altijd apart.`} />
      <SubHeading><Inline>{`Pupillen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Controleer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`grootte`}</Inline></li>
        <li><Inline>{`gelijke grootte`}</Inline></li>
        <li><Inline>{`vorm`}</Inline></li>
        <li><Inline>{`reactie op licht`}</Inline></li>
      </ul>
      <PBody text={`Een normale pupilreactie wordt vaak samengevat als **PEARRL**: pupils equal and round, reactive to light.`} />
      <SubHeading><Inline>{`Lateralisatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op asymmetrie in:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gelaat`}</Inline></li>
        <li><Inline>{`motoriek`}</Inline></li>
        <li><Inline>{`beweging van de extremiteiten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit kan passen bij een CVA.`}</Inline></p>
      <SubHeading><Inline>{`Glucosemeting`}</Inline></SubHeading>
      <PBody text={`Bij afwijkend bewustzijn of asymmetrie meet je direct aan het bed de glucose. Bij hypoglykemie geef je **10 gram glucose intraveneus** en controleer je daarna opnieuw.`} />
      <SubHeading><Inline>{`Tekenen van meningeale prikkeling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nekstijfheid`}</Inline></li>
        <li><Inline>{`Brudzinski-teken`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Dit kan passen bij meningitis of subarachnoïdale bloeding.`}</Inline></p>
      <SubHeading><Inline>{`Coma en intubatie`}</Inline></SubHeading>
      <PBody text={`Bij een **GCS ≤ 8** is er sprake van coma. Dan moet je altijd denken aan bedreiging van de luchtweg en is intubatie vaak te overwegen.`} />
      <SubHeading><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CT van de hersenen`}</Inline></li>
        <li><Inline>{`tox-screen`}</Inline></li>
        <li><Inline>{`eventueel andere diagnostiek afhankelijk van de situatie`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom meet je bij een verlaagd bewustzijn meteen glucose?**
Omdat hypoglykemie een snelle en behandelbare oorzaak van bewustzijnsverlies is.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

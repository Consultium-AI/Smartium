import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Kwaliteit van bewegen: hoe beweegt het kind?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het bereiken van een mijlpaal binnen de norm betekent niet automatisch dat de kwaliteit van bewegen goed is. Een kind kan bijvoorbeeld op tijd omrollen, maar dat toch op een opvallende of stijve manier doen. Daarom moet je naast kwantiteit ook de kwaliteit observeren.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij kwaliteit van bewegen kijk je naar:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hoe het kind beweegt;`}</Inline></li>
        <li><Inline>{`de steunname;`}</Inline></li>
        <li><Inline>{`de balans.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De belangrijkste kenmerken van goede kwaliteit van bewegen zijn:`}</Inline></p>
      <DataTable rows={[["Tabel 3. Kenmerken van goede motoriek"], ["Complexiteit", "De beweging bestaat uit meerdere onderdelen, zoals flexie, extensie, abductie, adductie en rotatie"], ["Variatie", "Het kind kan verschillende houdingen aannemen of op verschillende manieren in dezelfde houding komen"], ["Symmetrie", "Links en rechts kunnen dezelfde motorische taken uitvoeren"], ["Vloeiendheid", "Bewegingen gaan vanzelf en soepel in elkaar over"]]} />
      <SubHeading><Inline>{`Complexiteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Complexiteit betekent dat een beweging uit meerdere componenten bestaat. Naarmate een kind zich ontwikkelt, worden bewegingen verfijnder en preciezer. Een eenvoudige beweging wordt dan een meer gecoördineerde, samengestelde beweging.`}</Inline></p>
      <SubHeading><Inline>{`Variatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Variatie betekent dat een kind niet steeds precies hetzelfde beweegt. Het kan bijvoorbeeld op verschillende manieren zitten of op verschillende manieren naar een houding toe bewegen. Dat laat zien dat de motoriek flexibel is.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Noem drie variaties van zitten op de grond.
**Antwoord:** Bijvoorbeeld hurkzit, langzit en kleermakerszit. Ook TV-zit/W-zit, zijzit en zitten met de benen recht vooruit komen voor.`} />
      <SubHeading><Inline>{`Vloeiendheid`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vloeiendheid betekent dat bewegingen soepel in elkaar overgaan. Je ziet dan geen haperende of losse onderdelen, maar een samenhangende beweging.`}</Inline></p>
      <SubHeading><Inline>{`Symmetrie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Symmetrie betekent dat links en rechts ongeveer gelijk functioneren. In de eerste levensjaren ontwikkelt een kind zich symmetrisch. Pas rond de kleuterleeftijd ontstaat een duidelijke handvoorkeur.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een asymmetrisch beeld kan soms schijnbaar ontstaan door de situatie, bijvoorbeeld door licht, de positie van de onderzoeker of de plaats van speelgoed. Daarom moet je goed kijken voordat je een conclusie trekt.`}</Inline></p>
    </div>
  )
}

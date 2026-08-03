import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Arbowet en andere beschermende wetgeving`}</Inline></SubHeading>
      <PBody text={`De **Arbowet** is ingevoerd om gezond en veilig werken te bevorderen en zo ziekteverzuim te verminderen. Werkgevers hebben hierin duidelijke verplichtingen. Zij moeten onder andere:`} />
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`arbeidsomstandighedenbeleid ontwikkelen en uitvoeren;`}</Inline></li>
        <li><Inline>{`gevaren zoveel mogelijk bij de bron aanpakken;`}</Inline></li>
        <li><Inline>{`het werk aanpassen aan persoonlijke eigenschappen van werknemers;`}</Inline></li>
        <li><Inline>{`monotone en tempo-gebonden arbeid zo veel mogelijk voorkomen en beperken;`}</Inline></li>
        <li><Inline>{`een **RI&E** en een **Plan van Aanpak** opstellen en uitvoeren;`}</Inline></li>
        <li><Inline>{`zware ongevallen met gevaarlijke stoffen voorkomen en beperken;`}</Inline></li>
        <li><Inline>{`voorlichting en onderricht geven;`}</Inline></li>
        <li><Inline>{`arbeidsongevallen en beroepsziekten melden en registreren;`}</Inline></li>
        <li><Inline>{`gevaar voor derden voorkomen;`}</Inline></li>
        <li><Inline>{`werknemers de gelegenheid geven tot periodiek arbeidsgezondheidskundig onderzoek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Werknemers hebben ook verplichtingen. Zij moeten bijvoorbeeld arbeidsmiddelen en beschermingsmiddelen juist gebruiken en meewerken aan instructie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Naast de Arbowet zijn er andere wetten die werknemers beschermen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Arbeidstijdenwet**: beschermt tegen te lange werktijden en regelt zondag- en nachtarbeid.`}</Inline></li>
        <li><Inline>{`**Wet arbeid en zorg**: regelt onder andere vakantiedagen en verlof.`}</Inline></li>
        <li><Inline>{`**Wet verbetering Poortwachter**: gericht op het tegengaan van langdurig ziekteverzuim.`}</Inline></li>
        <li><Inline>{`**Algemene Wet Gelijke Behandeling**: beschermt tegen ongeoorloofd onderscheid.`}</Inline></li>
        <li><Inline>{`**Wet gelijke behandeling op grond van handicap of chronische ziekte**: bevordert gelijke behandeling op belangrijke terreinen, waaronder arbeid.`}</Inline></li>
        <li><Inline>{`**Wet gelijke behandeling van mannen en vrouwen**: verbiedt onderscheid op grond van geslacht.`}</Inline></li>
        <li><Inline>{`**Wet gelijke behandeling op grond van leeftijd bij de arbeid**: verbiedt onderscheid op grond van leeftijd.`}</Inline></li>
        <li><Inline>{`**Tabakswet**: regelt het recht op een rookvrije werkplek.`}</Inline></li>
      </ul>
    </div>
  )
}

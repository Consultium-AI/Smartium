import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interventies bij de A`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als er een luchtwegobstructie is, moet die zo snel mogelijk worden opgeheven. Soms is een tijdelijke maatregel voldoende, soms is een blijvende luchtwegzekerheid nodig.`}</Inline></p>
      <SubHeading><Inline>{`Manuele luchtwegmanoeuvres`}</Inline></SubHeading>
      <SubHeading><Inline>{`Head tilt-chin lift`}</Inline></SubHeading>
      <PBody text={`Deze manoeuvre gebruik je alleen als er **geen gevaar is voor letsel aan de halswervelkolom**.`} />
      <p className="leading-relaxed"><Inline>{`De kin wordt opgetild en het hoofd wordt achterover gebracht. Daardoor komen tong en epiglottis los van de achterwand van de keel en wordt de luchtweg vrijer.`}</Inline></p>
      <SubHeading><Inline>{`Jaw thrust`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze techniek gebruik je vooral bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`mogelijk halswervelletsel;`}</Inline></li>
        <li><Inline>{`situaties waarin de nek niet goed in retroflexie kan.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De onderkaak wordt naar voren bewogen, zodat de mond opent en de luchtweg vrijer wordt.`}</Inline></p>
      <SubHeading><Inline>{`Verontreiniging verwijderen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij bloed, braaksel of andere vloeibare verontreiniging moet je deze zo snel mogelijk verwijderen, bij voorkeur onder direct zicht met een spatel en lampje. Uitzuigen gebeurt met een starre zuigbuis.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vaste materialen, zoals delen van een kunstgebit, kun je onder direct zicht verwijderen met een Magill-tang.`}</Inline></p>
      <SubHeading><Inline>{`Hulpmiddelen om de luchtweg vrij te houden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een manuele manoeuvre werkt, kun je de luchtweg tijdelijk openhouden met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een **orofaryngeale luchtweg** (Mayo- of Guedel-tube)`}</Inline></li>
        <li><Inline>{`een **nasofaryngeale luchtweg**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Orofaryngeale luchtweg`}</Inline></SubHeading>
      <PBody text={`Deze gebruik je alleen bij een **comateuze patiënt**, omdat hij een braakreflex kan opwekken bij iemand die nog te wakker is. De maat bepaal je door de lengte van de tube te meten van kaakhoek tot tandenrij.`} />
      <SubHeading><Inline>{`Nasofaryngeale luchtweg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Deze wordt vaak beter verdragen en kan ook bij een niet-comateuze patiënt worden gebruikt. Je brengt hem via het meest ruime neusgat in, langs de bodem van de neus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke contra-indicaties zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedneus`}</Inline></li>
        <li><Inline>{`vermoeden van schedelbasisfractuur`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Definitieve luchtwegzekerheid`}</Inline></SubHeading>
      <PBody text={`Als de luchtweg blijvend vrij moet worden gemaakt, is **endotracheale intubatie** de meest geschikte methode. Dit mag alleen door bekwame hulpverleners worden gedaan, vaak met medicatie zoals een slaapmiddel en een verslappingsmiddel.`} />
      <PBody text={`In uiterste nood kan een **coniotomie** nodig zijn: een chirurgische opening in het cricothyroïd membraan om een luchtweg te creëren. Dit gebeurt alleen als andere middelen falen.`} />
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Wanneer kies je eerder voor jaw thrust dan voor head tilt-chin lift?**
Bij mogelijk halswervelletsel of als nekstrekking niet veilig of niet mogelijk is.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

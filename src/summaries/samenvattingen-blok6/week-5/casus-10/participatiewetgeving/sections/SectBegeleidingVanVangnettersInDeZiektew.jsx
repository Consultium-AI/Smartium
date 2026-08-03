import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Begeleiding van vangnetters in de Ziektewet`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij vangnetters verloopt de begeleiding in fasen.`}</Inline></p>
      <SubHeading><Inline>{`Eerste lijn: eerste 13 weken`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de eerste lijn stelt de verzekeringsarts vast of het verzuim en de arbeidsongeschiktheid plausibel zijn. De focus ligt op herstel voor het eigen werk, als dat binnen 13 weken haalbaar is. Daarbij wordt ondersteund door een medewerker verzuimbeheersing via digitale intake en vragenlijst.`}</Inline></p>
      <SubHeading><Inline>{`Tweede lijn: na onvoldoende herstelverwachting`}</Inline></SubHeading>
      <PBody text={`Als herstel voor eigen werk binnen 13 weken niet haalbaar lijkt, volgt overdracht naar de tweede lijn. Dan werken verzekeringsarts, re-integratiebegeleider en arbeidsdeskundige samen. De werknemer heeft daarin een actieve rol en eigen verantwoordelijkheid. Afspraken worden vastgelegd in een **plan van aanpak**.`} />
      <SubHeading><Inline>{`Eerstejaars evaluatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na 52 weken wordt opnieuw beoordeeld. In het eerste ziektewetjaar telt vooral of iemand ongeschikt is voor het eigen werk. In het tweede jaar komt daar een extra criterium bij: heeft de werknemer nog benutbare mogelijkheden voor andere passende arbeid?`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De arbeidsdeskundige beoordeelt dan of iemand met passend werk meer dan 65% van het oude loon kan verdienen. Zo ja, dan stopt de Ziektewetuitkering. Zo nee, dan loopt de uitkering door.`}</Inline></p>
      <SubHeading><Inline>{`Poortwachtertoets`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij werknemers met een werkgever wordt voorafgaand aan de WIA-beoordeling gekeken of werkgever en werknemer voldoende re-integratie-inspanningen hebben geleverd. Zijn die inspanningen onvoldoende, dan kan de werkgever een loonsanctie krijgen: extra loondoorbetaling en uitstel van de WIA-beoordeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij vangnetters zonder werkgever is er geen poortwachterstoets.`}</Inline></p>
    </div>
  )
}

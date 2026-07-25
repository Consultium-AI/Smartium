import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gezondheidsrisico’s in de zorg`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Werken in de zorg brengt specifieke risico’s met zich mee. Het contact met patiënten en lichaamsvloeistoffen geeft bijvoorbeeld risico op prikaccidenten. Medisch studenten en coassistenten hebben door hun beperkte ervaring een verhoogd risico. Daarom krijgen geneeskundestudenten al vroeg vaccinatie tegen hepatitis B aangeboden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een prikaccident moet je nauwkeurig handelen en de lokale richtlijn volgen. Er is een meldingsprocedure, waarbij incidenten digitaal worden gemeld en vervolgstappen afhangen van tijdstip en locatie. Ook is preventie belangrijk: bespreek incidenten met de leidinggevende en neem maatregelen om herhaling te voorkomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een hoogrisicoaccident met onbekende bron worden hepatitis B, hepatitis C en HIV volgens protocol benaderd. In het voorbeeld uit de module geldt: geen actie voor hepatitis B, HCV-RNA-controles op dag 0, maand 1 en maand 3, en bij HIV starten met PEP en bloedonderzoek op dag 0, maand 3 en maand 6.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kinderfarmacologie draait om maatwerk. Kinderen zijn geen kleine volwassenen: farmacokinetiek, farmacodynamiek, groei, toedienvorm en registratie verschillen sterk per leeftijd. Daardoor zijn medicatiefouten sneller gemaakt, vooral door decimale fouten, verwisseling van dag- en keerdosis, een kind dat uit de dosering groeit, overschrijding van de maximale volwassendosis en verkeerde sterktekeuze.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De belangrijkste bron voor kinderdoseringen en praktische informatie is het Kinderformularium. Daar vind je ook informatie over off-label gebruik, unlicensed middelen, hulpstoffen en geschikte toedienvormen. Veilig voorschrijven betekent: goed rekenen, de juiste bron gebruiken en bij twijfel overleggen.`}</Inline></p>
    </div>
  )
}

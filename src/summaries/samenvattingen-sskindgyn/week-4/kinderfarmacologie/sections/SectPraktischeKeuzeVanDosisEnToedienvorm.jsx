import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Praktische keuze van dosis en toedienvorm`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een kind met pijn door een middenoorontsteking kies je paracetamol in een geschikte orale vorm. De dosis wordt berekend per kilogram en daarna omgezet naar een praktisch volume. Als een kind spuugt, kan rectale toediening een alternatief zijn, maar dan moet je rekening houden met een andere dosis en frequentie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een kind van 7 kg dat bumetanide nodig heeft, kan de benodigde orale dosis te klein zijn om netjes uit een tablet te halen. Dan kan een andere toedienvorm, zoals een injectievloeistof die oraal wordt gebruikt, praktischer zijn. Soms moet je dus niet alleen naar het geneesmiddel kijken, maar ook naar de beschikbare vorm.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij omeprazol is niet elke vorm geschikt om zomaar oraal te geven. Sommige middelen zijn maagsapresistent of worden juist in de maag afgebroken. Ook innemen met voedsel of melk kan problemen geven door complexvorming, bijvoorbeeld bij levothyroxine, ciprofloxacin of digoxine.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor parenterale toediening bestaan aparte handboeken met informatie over maximale concentratie, toedieningssnelheid, bereidingswijze en onverenigbaarheden.`}</Inline></p>
    </div>
  )
}

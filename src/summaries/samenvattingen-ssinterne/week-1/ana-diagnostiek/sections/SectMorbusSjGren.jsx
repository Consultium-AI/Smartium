import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Morbus Sjögren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Morbus Sjögren past goed bij klachten van sicca, dus droogte van ogen en mond. Door ontsteking van klierweefsel, vooral traanklieren en speekselklieren, neemt de vochtproductie af. Daardoor ontstaan droge ogen, droge mond en moeite met eten van droog voedsel.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** Wat is een Schirmertest?
**Mini-antwoord:** Dat is een test waarbij de traanproductie wordt gemeten met een strookje papier in het onderste ooglid.`} />
      <p className="leading-relaxed"><Inline>{`De diagnostische criteria voor Morbus Sjögren bestaan uit zes onderdelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`sicca oraal`}</Inline></li>
        <li><Inline>{`sicca oculair`}</Inline></li>
        <li><Inline>{`afwijkende Schirmertest`}</Inline></li>
        <li><Inline>{`afwijkende speekselproductie`}</Inline></li>
        <li><Inline>{`positieve anti-SSA en/of anti-SSB antistoffen`}</Inline></li>
        <li><Inline>{`afwijkingen op lipbiopt met lymfocytenaggregaten`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij vier of meer criteria kan de diagnose worden gesteld.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Diagnostische criteria Morbus Sjögren`}</Inline></SubHeading>
      <DataTable rows={[["Criteria"], ["---"], ["Sicca oraal"], ["Sicca oculair"], ["Afwijkende Schirmertest"], ["Afwijkende speekselproductie"], ["Positieve anti-SSA en/of anti-SSB"], ["Lipbiopt met lymfocytenaggregaten"]]} />
      <p className="leading-relaxed"><Inline>{`Anti-SSA en anti-SSB geven vaak een gespikkeld patroon. Deze antistoffen zijn geassocieerd met Sjögren op jongere leeftijd, vergrote speekselklieren en neonataal lupus syndroom.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook anti-centromeer antistoffen kunnen bij Sjögren voorkomen. Die zijn echter ook belangrijk bij systemische sclerose.`}</Inline></p>
    </div>
  )
}

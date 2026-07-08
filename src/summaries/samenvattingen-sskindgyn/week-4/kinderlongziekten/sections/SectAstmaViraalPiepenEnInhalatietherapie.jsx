import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Astma, viraal piepen en inhalatietherapie`}</Inline></SubHeading>
      <PBody text={`Bij een kind met piepende ademhaling en een verlengd expirium denk je aan een obstructie van de onderste luchtwegen. Een belangrijk onderscheid is dat tussen **viraal piepen** en **astma**. In de casuïstiek past bij een kind van 12 maanden met verkoudheid, hoesten, eczeem en een positieve familieanamnese voor astma een beeld van piepen door een viraal infect. Bij auscultatie hoor je dan symmetrisch inkomend ademgeruis met een verlengd piepend expirium en geen crepitaties.`} />
      <PBody text={`De behandeling kan bestaan uit **ventolin**. Als dat goed werkt, kan voor thuisgebruik worden gestart met ventolin via een voorzetkamer.`} />
      <SubHeading><Inline>{`Inhalatietherapie: welke vormen zijn er?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn drie grote toedieningsvormen voor inhalatiemedicatie:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Dosisaerosol**, met of zonder voorzetkamer, al dan niet ademgestuurd.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een dosisaerosol met voorzetkamer kan in principe op alle leeftijden worden gebruikt. Bij kinderen jonger dan 4 jaar is een mondneusmasker nodig; er is dan geen coöperatie nodig, alleen rustig ademhalen. Bij oudere kinderen heeft een mondstuk de voorkeur. Ademgestuurde dosisaerosolen geven een puf af bij inademing en worden zonder voorzetkamer gebruikt; die zijn geschikt vanaf ongeveer 7–8 jaar.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Poederinhalatoren**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Deze zijn geschikt vanaf ongeveer 8 jaar, mits het kind niet ernstig benauwd is. Er is een voldoende krachtige inspiratoire flow nodig om het medicament uit het poeder vrij te maken. Daarom zijn ze minder geschikt voor jongere of niet-coöperatieve kinderen.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Vernevelaars**.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hierbij wordt een vloeistof verneveld tot kleine druppeltjes. Dit kost meer tijd, meestal 5–10 minuten, en de apparaten moeten goed worden schoongemaakt. Ze zijn meestal niet de eerste keus, maar sommige medicijnen kunnen alleen op deze manier worden gegeven.`}</Inline></p>
      <SubHeading><Inline>{`Welke toedieningsvormen zijn altijd mogelijk?`}</Inline></SubHeading>
      <DataTable rows={[["Toedieningsvorm", "Altijd mogelijk?"], ["Dosisaerosol met voorzetkamer", "ja"], ["Vernevelaar", "ja"], ["Poederinhalator", "nee"], ["Diskus", "nee"]]} />
      <p className="leading-relaxed"><Inline>{`Een dosisaerosol met voorzetkamer en een vernevelaar zijn dus altijd mogelijk. Meestal heeft de dosisaerosol met voorzetkamer de voorkeur.`}</Inline></p>
    </div>
  )
}

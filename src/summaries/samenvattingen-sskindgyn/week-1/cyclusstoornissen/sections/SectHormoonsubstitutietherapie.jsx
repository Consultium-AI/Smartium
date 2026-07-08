import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hormoonsubstitutietherapie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hormoonsubstitutietherapie is geïndiceerd om twee belangrijke redenen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Klachtenvermindering**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij hypo-oestrogenisme kunnen opvliegers, nachtzweten en vaginale of urethrale atrofie optreden. HST vermindert deze klachten.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Bescherming van botten**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Oestrogeendeficiëntie is de sterkste enkelvoudige risicofactor voor osteoporose. Bij amenorroe is er gemiddeld een reductie van 15% in botmineraaldichtheid. Bij vrouwen met WHO3-amenorroe wordt in 50% een pathologische botmineraaldichtheid gevonden. Bij oestrogeendeficiëntie vóór het 45e levensjaar wordt geadviseerd de botmineraaldichtheid te meten en HST voor te schrijven ter preventie van verdere osteoporose.`}</Inline></p>
      <SubHeading><Inline>{`Belangrijk bij HST`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als een patiënte een uterus in situ heeft, mag je niet alleen oestrogenen geven. Dan ontstaat een constante stimulatie van het endometrium, met meer kans op hyperplasie, atypie en maligniteit. Daarom moet bij oestrogeensuppletie altijd ook een progestativum worden toegevoegd. Dat kan cyclisch of continu, afhankelijk van het preparaat.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`HST is géén anticonceptie. Als een kleine kans op zwangerschap niet gewenst is, kan ook de anticonceptiepil worden voorgeschreven.`}</Inline></p>
    </div>
  )
}

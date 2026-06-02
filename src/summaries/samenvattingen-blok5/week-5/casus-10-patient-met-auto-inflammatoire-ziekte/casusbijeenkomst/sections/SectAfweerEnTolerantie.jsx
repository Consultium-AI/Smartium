import { Inline, DataTable, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Auto-immuniteit, auto-inflammatie en immuundeficiëntie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Een belangrijk basisidee is het onderscheid tussen drie typen ontregeling van het immuunsysteem.`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Begrip', 'Kern', 'Betrokken afweer'],
          ['---', '---', '---'],
          ['Immuundeficiëntie', 'te weinig reactie', 'aangeboren en/of verworven afweer'],
          ['Auto-inflammatoire ziekte', 'te veel reactie', 'aangeboren afweer'],
          ['Auto-immuunziekte', 'te veel reactie', 'verworven afweer'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Bij **immuundeficiënties** is er dus een onderreactie van het immuunsysteem. Bij **auto-inflammatoire ziekten** is er juist een overreactie van de **aangeboren afweer**. Bij **auto-immuunziekten** gaat het om een overreactie van de **verworven afweer**, dus vooral T- en B-cellen en autoantistoffen.`}</Inline>
      </p>
      <PBody
        text={`**Aandachtsvraag:** Waarom is SLE een auto-immuunziekte en geen auto-inflammatoire ziekte?
**Mini-antwoord:** Omdat bij SLE specifieke **autoantistoffen** aanwezig zijn, zoals ANA, anti-dsDNA en antifosfolipidenantistoffen.`}
      />

      <SubHeading level={2}>T-celselectie in de thymus</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`T-lymfocyten worden in de thymus “gecontroleerd” voordat ze de periferie in gaan. Dat gebeurt via **positieve** en **negatieve selectie**.`}</Inline>
      </p>
      <SubHeading>Positieve selectie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Positieve selectie vindt plaats in de **cortex** van de thymus. Hier wordt gekeken of de T-celreceptor (TCR) een **zwakke interactie** kan aangaan met **MHC-moleculen**. Alleen thymocyten die een bruikbare, maar niet te sterke interactie hebben, overleven. Geen interactie of juist een te sterke interactie leidt tot apoptose.`}</Inline>
      </p>
      <SubHeading>Negatieve selectie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Negatieve selectie vindt vooral plaats in de **medulla** van de thymus. Daar worden autoantigenen gepresenteerd door **medullaire epitheelcellen** en **dendritische cellen** in MHC-moleculen. Als de TCR het autoantigeen herkent, gaat de thymocyt in apoptose. Zo worden sterk autoreactieve T-cellen verwijderd.`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Proces', 'Plaats', 'Wat wordt getest?', 'Uitkomst bij juiste interactie'],
          ['---', '---', '---', '---'],
          ['Positieve selectie', 'cortex', 'TCR met MHC', 'overleving'],
          ['Negatieve selectie', 'medulla', 'TCR met autoantigeen in MHC', 'apoptose bij herkenning'],
        ]}
      />
      <PBody
        text={`**Aandachtsvraag:** Waarom is het beenmerg hier het buitenbeentje?
**Mini-antwoord:** Omdat de vroege voorlopers van T-cellen wel uit het beenmerg komen, maar de selectie zelf gebeurt in de thymus.`}
      />

      <SubHeading level={2}>Perifere tolerantie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Niet alle autoreactieve lymfocyten worden in de thymus verwijderd. Daarom zijn er in de periferie extra mechanismen die auto-immuniteit moeten voorkomen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`De drie belangrijkste zijn:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-3 m-0">
        <li>
          <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 mb-1">
            <Inline>{`Anergie`}</Inline>
          </p>
          <p className="m-0">
            <Inline>{`Een lymfocyt bindt wel aan een autoantigeen, maar zonder costimulatie. Daardoor wordt de cel functioneel “uitgezet” en reageert later ook niet meer goed.`}</Inline>
          </p>
        </li>
        <li>
          <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 mb-1">
            <Inline>{`Actieve suppressie`}</Inline>
          </p>
          <p className="m-0">
            <Inline>{`**Regulatoire T-cellen** remmen autoreactieve T-cellen actief af.`}</Inline>
          </p>
        </li>
        <li>
          <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 mb-1">
            <Inline>{`Immune privileged sites`}</Inline>
          </p>
          <p className="m-0">
            <Inline>{`Sommige autoantigenen zitten op plekken waar lymfocyten moeilijk bij kunnen, zoals de hersenen, het oog en de geslachtsorganen.`}</Inline>
          </p>
        </li>
      </ol>

      <SubHeading level={2}>Hoe tolerantie kan worden doorbroken</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Onder bepaalde omstandigheden kunnen autoreactieve reacties toch ontstaan. De bijeenkomst noemt vier mechanismen:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li><Inline>{`**Moleculaire mimicry**: een vreemd antigeen lijkt op een auto-antigeen`}</Inline></li>
        <li><Inline>{`**Polyclonale activatie**: activatie van veel lymfocyten via andere receptoren dan TCR of BCR`}</Inline></li>
        <li><Inline>{`**Activatie door superantigenen**: stimulatie via niet-variabele delen van TCR of BCR`}</Inline></li>
        <li><Inline>{`**Bystander-activatie**: activatie door cytokinen in de buurt van ontsteking of vrijkomend antigeen`}</Inline></li>
        <li><Inline>{`**Vorming van neoantigenen**: nieuwe antigenen ontstaan, bijvoorbeeld door koppeling van kleine moleculen aan eiwitten`}</Inline></li>
      </ul>

      <SubHeading level={2}>Natuurlijke en pathogene autoantistoffen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Er wordt onderscheid gemaakt tussen **natuurlijke autoantistoffen** en **pathogene autoantistoffen**.`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Kenmerk', 'Natuurlijke autoantistoffen', 'Pathogene autoantistoffen'],
          ['---', '---', '---'],
          ['Isotype', 'IgM', 'IgG'],
          ['Affiniteit', 'laag', 'hoog'],
          ['Ontstaan', 'zonder somatische hypermutatie', 'met somatische hypermutatie'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Natuurlijke autoantistoffen zijn dus meestal **IgM** en hebben een **lage affiniteit**. Pathogene autoantistoffen zijn meestal **IgG** en hebben een **hoge affiniteit**.`}</Inline>
      </p>
    </div>
  )
}

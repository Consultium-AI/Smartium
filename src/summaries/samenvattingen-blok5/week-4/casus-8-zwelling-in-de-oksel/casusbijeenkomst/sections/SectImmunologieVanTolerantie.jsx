import { Inline, DataTable, PBody, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}>Onderreactie, overreactie en welk deel van de afweer?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Er werd onderscheid gemaakt tussen drie groepen ziektebeelden:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Groep', 'Kernprobleem', 'Betrokken afweer'],
          ['---', '---', '---'],
          ['Immuundeficiënties', 'onderreactie', 'aangeboren en/of verworven afweer'],
          ['Auto-inflammatoire ziekten', 'overreactie', 'aangeboren afweer'],
          ['Auto-immuunziekten', 'overreactie', 'verworven afweer'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Immuundeficiënties betekenen dus dat het afweersysteem te weinig reageert. Auto-inflammatoire ziekten zijn juist een overreactie van de aangeboren afweer. Auto-immuunziekten zijn een overreactie van de verworven afweer, dus vooral van T- en B-lymfocyten.`}</Inline>
      </p>
      <PBody
        text={`**Aandacht-vraagje:** Waarom is dit onderscheid belangrijk?
**Mini-antwoord:** Omdat het helpt om ziektebeelden logisch te plaatsen: een infectiegevoelig beeld past eerder bij onderreactie, terwijl auto-immuunziekten juist ontstaan door een te sterke, verkeerd gerichte afweerreactie.`}
      />

      <SubHeading level={2}>T-celselectie in de thymus</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`T-lymfocyten worden in de thymus geselecteerd zodat alleen bruikbare en niet-gevaarlijke T-cellen overblijven.`}</Inline>
      </p>
      <SubHeading>Positieve selectie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Positieve selectie vindt plaats in de **cortex** van de thymus. Hierbij is er interactie tussen de **T-celreceptor (TCR)** en **MHC-moleculen**.`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Zwakke interactie**: de thymocyt wordt positief geselecteerd en mag verder rijpen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Geen interactie of juist sterke interactie**: de thymocyt gaat in apoptose.`}</Inline>
        </li>
      </ul>
      <SubHeading>Negatieve selectie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Negatieve selectie vindt vooral plaats in de **medulla** van de thymus. Daar worden **auto-antigene peptiden** gepresenteerd door MHC-moleculen van medullaire epitheelcellen en dendritische cellen.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Als de TCR het autoantigeen herkent, volgt **apoptose** van de thymocyt.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Kort gezegd: positieve selectie zorgt ervoor dat T-cellen MHC kunnen herkennen, negatieve selectie zorgt ervoor dat sterk autoreactieve T-cellen worden verwijderd.`}</Inline>
      </p>

      <SubHeading level={2}>Perifere tolerantie</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Niet elke autoreactieve lymfocyt wordt in de thymus al verwijderd. Daarom bestaan er in de periferie extra remmechanismen:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-3 m-0">
        <li>
          <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 mb-1">
            <Inline>{`Anergie`}</Inline>
          </p>
          <p className="m-0">
            <Inline>{`Een lymfocyt bindt wel aan antigeen, maar zonder costimulatie. Daardoor wordt de cel functioneel “uitgezet” en reageert later ook niet meer goed.`}</Inline>
          </p>
        </li>
        <li>
          <p className="font-semibold text-slate-900 dark:text-slate-100 m-0 mb-1">
            <Inline>{`Actieve suppressie`}</Inline>
          </p>
          <p className="m-0">
            <Inline>{`Regulatoire T-lymfocyten remmen autoreactieve T-cellen actief.`}</Inline>
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
      <PBody
        text={`**Aandacht-vraagje:** Wat gebeurt er als een T-cel wel antigeen ziet, maar geen costimulatie krijgt?
**Mini-antwoord:** Dan ontstaat anergie: de cel wordt niet goed geactiveerd en reageert later ook niet meer normaal.`}
      />

      <SubHeading level={2}>Hoe kan tolerantie toch doorbroken worden?</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Onder bepaalde omstandigheden kunnen autoreactieve reacties alsnog ontstaan. Genoemd werden:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2 m-0">
        <li>
          <Inline>{`**Moleculaire mimicry**: een vreemd antigeen lijkt op een auto-antigeen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Polykolonale activatie**: activatie van meerdere lymfocyten via andere receptoren dan TCR of BCR.`}</Inline>
        </li>
        <li>
          <Inline>{`**Activatie door superantigenen**: brede activatie via niet-variabele delen van TCR of BCR.`}</Inline>
        </li>
        <li>
          <Inline>{`**Bystander-activatie**: activatie door cytokinen in de buurt van ontsteking of vrijkomend antigeen.`}</Inline>
        </li>
        <li>
          <Inline>{`**Neoantigenen**: nieuwe antigenen ontstaan, bijvoorbeeld door koppeling van kleine moleculen aan eiwitten.`}</Inline>
        </li>
      </ul>

      <SubHeading level={2}>Natuurlijke en pathogene autoantistoffen</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Er werd onderscheid gemaakt tussen natuurlijke autoantistoffen en pathogene autoantistoffen.`}</Inline>
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
        <Inline>{`Natuurlijke autoantistoffen zijn dus aanwezig bij ieder individu en hebben meestal een lage affiniteit. Pathogene autoantistoffen zijn sterker gericht en schadelijker.`}</Inline>
      </p>
    </div>
  )
}

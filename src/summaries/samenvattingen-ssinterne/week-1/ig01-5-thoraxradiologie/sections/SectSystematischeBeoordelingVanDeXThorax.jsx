import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Systematische beoordeling van de X-thorax`}</Inline></SubHeading>
      <PBody text={`Een thoraxfoto beoordeel je altijd volgens een vaste volgorde. De precieze volgorde mag verschillen, maar je moet wel **steeds dezelfde systematiek** gebruiken. Dat voorkomt dat je onderdelen overslaat.`} />
      <p className="leading-relaxed"><Inline>{`Een handige systematiek is:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Lijnen, tubes en corpora aliena**`}</Inline></li>
        <li><Inline>{`**Diafragma en bovenbuik**`}</Inline></li>
        <li><Inline>{`**Hart, mediastinum en hili**`}</Inline></li>
        <li><Inline>{`**Longen en pleura**`}</Inline></li>
        <li><Inline>{`**Skelet en weke delen**`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`1. Lijnen, tubes en corpora aliena`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Eerst kijk je of er lijnen, tubes of andere vreemde voorwerpen aanwezig zijn. Als die er zijn, beoordeel je de ligging. Een centrale lijn hoort bijvoorbeeld niet in een zijtak van de v. axillaris te eindigen, maar op de juiste centrale positie.`}</Inline></p>
      <SubHeading><Inline>{`2. Diafragma en bovenbuik`}</Inline></SubHeading>
      <PBody text={`Daarna beoordeel je de stand en contour van het diafragma. Let ook op de afgrenzing en op **vrij lucht onder het diafragma**. Bedenk dat de longen op de PA-opname verder naar caudaal doorlopen dan het punt waar de diafragmakoepels zichtbaar zijn.`} />
      <SubHeading><Inline>{`3. Hart, mediastinum en hili`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hier let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`focale of diffuse verbreding`}</Inline></li>
        <li><Inline>{`positie van trachea en carina`}</Inline></li>
        <li><Inline>{`de hili`}</Inline></li>
        <li><Inline>{`de grootte van het hart`}</Inline></li>
      </ul>
      <PBody text={`De **CTR** is de verhouding tussen de dwarse diameter van het hart en de dwarse diameter van de thorax op de PA-opname. Een **CTR < 50%** is normaal.`} />
      <SubHeading><Inline>{`Tabel 2. Hartgrootte en CTR`}</Inline></SubHeading>
      <DataTable rows={[["Begrip", "Betekenis"], ["CTR", "Hartbreedte / thoraxbreedte op PA-opname"], ["Normaal", "< 50%"]]} />
      <SubHeading><Inline>{`4. Longen en pleura`}</Inline></SubHeading>
      <PBody text={`Beoordeel de longen op **focale of diffuse afwijkingen**. Die kunnen zowel een **verhoogde densiteit** als een **verlaagde densiteit** hebben. Kijk ook naar de vaten en luchtwegen. De pleura is normaal gesproken niet zichtbaar; alleen bij verdikking of verplaatsing wordt die duidelijk. Bij een **pneumothorax** kan de pleura verplaatst zichtbaar zijn.`} />
      <SubHeading><Inline>{`5. Skelet en weke delen`}</Inline></SubHeading>
      <PBody text={`Tot slot kijk je naar de botten en de weke delen, zoals de **mammae**, **tepels** en eventuele **huidplooien**.`} />
    </div>
  )
}

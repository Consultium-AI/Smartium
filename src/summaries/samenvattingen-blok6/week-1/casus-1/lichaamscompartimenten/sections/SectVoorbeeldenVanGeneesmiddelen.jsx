import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voorbeelden van geneesmiddelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De volgende middelen laten goed zien hoe dit werkt:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Heparine** heeft een heel klein Vd. Dat komt doordat het sterk hydrofiel is en bovendien grotendeels bindt aan albumine in het bloed en aan endotheelcellen van bloedvaten.`}</Inline></li>
        <li><Inline>{`**Fenobarbital** en **fenytoïne** hebben een middelmatige verdeling. Ze zijn niet extreem hydrofiel en ook niet extreem lipofiel, waardoor een groot deel in de weefselvloeistof terug te vinden is.`}</Inline></li>
        <li><Inline>{`**Diazepam** en **digoxine** hebben een groot Vd. Ze zijn behoorlijk lipofiel of binden sterk aan weefsels, of beide. Daardoor verdwijnen ze sterk uit de bloedbaan.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 2. Voorbeelden van distributievolume`}</Inline></SubHeading>
      <DataTable rows={[["Geneesmiddel", "Vd (L/kg)", "Interpretatie"], ["Heparine", "0,06", "Zeer klein Vd, vooral in bloed"], ["Fenobarbital", "0,55", "Matige verdeling"], ["Fenytoïne", "0,63", "Matige verdeling"], ["Diazepam", "2,4", "Groot Vd"], ["Digoxine", "7", "Zeer groot Vd"]]} />
      <PBody text={`**Aandacht-vraagje:** Wat zegt een groot Vd eigenlijk?
**Mini-antwoord:** Dat een geneesmiddel veel uit het plasma verdwijnt en zich in weefsels of vet ophoopt.`} />
    </div>
  )
}

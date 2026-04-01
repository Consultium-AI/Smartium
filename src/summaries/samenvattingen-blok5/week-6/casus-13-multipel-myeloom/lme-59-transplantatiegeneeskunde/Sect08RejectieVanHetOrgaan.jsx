export default function Sect08RejectieVanHetOrgaan() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Rejectie van het orgaan</h2>
      <p>Er worden drie vormen van afstoting onderscheiden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hyperacute afstoting</li>
        <li>Acute afstoting</li>
        <li>Chronische afstoting</li>
      </ul>
      <p>
        Hyperacute afstoting ontstaat binnen enkele uren. Dit gebeurt wanneer er al antistoffen tegen donor-MHC of
        donor-bloedgroepen aanwezig zijn. De afstoting is dus humoraal en berust op vooraf gevormde allo-antistoffen. Bij
        niertransplantatie wordt een kruisproef gedaan, waarbij gekeken wordt of er antistoffen aanwezig zijn tegen
        MHC-moleculen van de geselecteerde donor. Als de kruisproef een reactie laat zien, wordt de transplantatie
        afgebroken. Daardoor komt hyperacute afstoting bij nier-, long- en harttransplantatie praktisch niet meer voor.
        Bij levertransplantatie zijn er geen tijdsdruk en geen kruisproef vooraf. ABO-incompatibele transplantaties
        kunnen wel, maar alleen met uitgebreide immunologische voorbereiding; hyperacute rejectie zie je daarbij niet.
      </p>
      <p>
        Acute afstoting treedt op binnen weken tot maanden na transplantatie, meestal in de eerste 3-6 maanden. Dit kan
        cellulair zijn, humoraal, of beide. Er spelen circulerende antistoffen, specifieke T-lymfocyten en directe
        herkenning van vreemd MHC klasse I en II een rol. Het is dus een adaptieve allo-immuunrespons tegen donor-MHC.
      </p>
      <p>
        Chronische afstoting ontstaat maanden tot soms jaren later. Deze kan worden veroorzaakt door allo-immuunreacties,
        maar ook door niet-immunologische oorzaken zoals hypertensie, hyperlipidemie, geneesmiddeltoxiciteit, virale
        infecties, late ischemie-/reperfusieschade en terugkeer van de oorspronkelijke ziekte. Een belangrijk kenmerk,
        vooral bij niertransplantatie, is vaatschade door ongebreidelde groei van vasculaire gladde spiercellen, waardoor
        een bloedvat langzaam afgesloten raakt.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht-vragetje</strong>
        </p>
        <p>
          Waarom is een negatieve kruisproef zo belangrijk?{'  '}
          Omdat daarmee vooraf aanwezige antistoffen tegen donor-HLA of donor-bloedgroep worden uitgesloten.
        </p>
      </div>
    </div>
  )
}

export default function Sect08FamiliaireMediterraneKoorts() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Familiaire Mediterrane Koorts</h2>
      <p>
        Familaire Mediterrane Koorts, vaak afgekort als FMF, komt vooral voor bij mensen afkomstig uit landen rond de
        Middellandse Zee. Bij FMF is er een mutatie in het MEFV-gen. Daardoor wordt een van de inflammasomen continu
        geactiveerd.
      </p>
      <p>
        Het betreffende eiwit heet pyrine. Daarom wordt dit ook het pyrine-inflammasoom genoemd. Door deze constante
        activatie worden vooral IL-1β en IL-18 in verhoogde mate geproduceerd.
      </p>
      <p>Typische klinische verschijnselen van FMF zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>koorts;</li>
        <li>serositis;</li>
        <li>amyloïdose.</li>
      </ul>
      <p>
        Serositis betekent ontsteking van sereuze vliezen, zoals pleura, peritoneum of pericard. Amyloïdose betekent dat
        abnormaal eiwit neerslaat in weefsels.
      </p>
      <p>Waarom heeft een patiënt met FMF niet iedere dag even veel ontsteking?</p>
      <p>
        Dat komt doordat de genetische mutatie wel voortdurend aanwezig is, maar er in de cel eerst ook pro-IL-1β moet
        worden gemaakt. Dat gebeurt pas wanneer de cel geactiveerd wordt door DAMPs. DAMPs zijn{" "}
        <em>danger-associated molecular patterns</em>: signalen van celstress of celschade.
      </p>
      <p>
        Niet elke DAMP-activatie leidt meteen tot een heftige ontstekingsreactie, omdat niet altijd al het pro-IL-1β wordt
        omgezet in het sterk pro-inflammatoire IL-1β. Bij een inflammasomopathie gebeurt die omzetting echter veel
        makkelijker en continu, omdat het inflammasoom voortdurend actief is.
      </p>
      <p>
        Aandacht: waarom werkt colchicine bij FMF goed?</p>
      <p className="mt-2">
        <span className="font-semibold">Kort antwoord:</span>{' '}colchicine grijpt in op het
        pyrine-inflammasoom. Het verhoogt de activiteit van RhoA en stimuleert PKN1/2, waardoor het inflammasoom geremd
        wordt.
      </p>
    </div>
  )
}

export default function Sect06CompetitieRemmingInductie() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Competitie tussen geneesmiddelen</h2>
        <p>
          Als twee of meer geneesmiddelen door hetzelfde CYP-enzym worden gemetaboliseerd en tegelijk aanwezig zijn in het lichaam, kunnen ze concurreren om datzelfde enzym. Omdat CYP-enzymen een beperkte capaciteit hebben, kan de afbraak van één of meerdere stoffen vertragen. Dat kan klinische gevolgen hebben.
        </p>
        <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
          <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
            Aandachtsvraag: waarom is competitie tussen geneesmiddelen belangrijk?  Omdat meerdere stoffen hetzelfde CYP-enzym kunnen gebruiken, waardoor de afbraak van één stof trager kan verlopen.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Remming en inductie</h2>
        <p>
          Remming van een CYP-enzym zorgt ervoor dat een substraat langzamer wordt afgebroken. Daardoor kan de concentratie in het bloed stijgen.
        </p>
        <p>
          Inductie zorgt ervoor dat een substraat sneller wordt afgebroken. Daardoor kan de werkzaamheid afnemen.
        </p>
        <p>
          Een bekend voorbeeld is roken. Roken induceert CYP1A2. Daardoor wordt clozapine sneller omgezet in inactieve metabolieten. Als een patiënt plots stopt met roken, valt die inductie weg en stijgt de clozapinespiegel. Het risico op toxiciteit neemt dan toe. Nicotinepleisters heffen deze inductie niet op, omdat de inductie vooral wordt veroorzaakt door de verbrandingsproducten van sigarettenrook en niet door nicotine zelf.
        </p>
      </div>
    </div>
  )
}

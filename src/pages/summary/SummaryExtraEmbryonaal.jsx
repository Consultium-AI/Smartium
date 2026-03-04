import SummaryLayout from '../../components/SummaryLayout'
import { Target, Layers, Droplets, Baby, Dna, Activity, Stethoscope, ArrowRight } from 'lucide-react'

export const ExtraEmbryonaalSummary = () => {
  const tableOfContents = [
    { id: 'innesteling', title: 'Innesteling', icon: Target },
    { id: 'holtes-vliezen', title: 'Holtes en vliezen', icon: Layers },
    { id: 'dooierzak', title: 'Dooierzak', icon: Droplets },
    { id: 'amnion', title: 'Amnion en vruchtwater', icon: Baby },
    { id: 'tweelingen', title: 'Eeneiige tweelingen', icon: Dna },
    { id: 'placenta', title: 'Placenta', icon: Activity },
    { id: 'barriere', title: 'Bloed-placenta barriere', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Het embryo en de extra embryonale structuren"
      description="Innesteling, vliezen, holtes, navelstreng en placenta-ontwikkeling."
      caseLabel="Casus 1: Van embryo naar baby"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=extraembryonaal"
    >
      {/* Section 1 */}
      <section id="innesteling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Innesteling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De innesteling begint nadat de bevruchte eicel via de eileider naar de baarmoeder is getransporteerd. Voordat de blastocyst kan innestelen moet deze uit de <strong>zona pellucida</strong> "uitkomen" zodat direct contact met het endometrium mogelijk wordt.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Extra-uteriene zwangerschap
            </h4>
            <p className="text-rose-700 m-0">
              Als transport verstoord is, kan de blastocyst zich op de verkeerde plek vastzetten (meestal in de <strong>eileider</strong>). Dit is klinisch belangrijk omdat bloeding en ruptuur levensbedreigend kunnen zijn.
            </p>
          </div>
          
          <p>
            Na hechting aan het endometrium begint de <strong>trofoblast</strong> met invasie. De trofoblast differentieert in:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Cytotrofoblast</h4>
              <p className="text-primary-700">Binnenste laag, cellen behouden hun grenzen.</p>
            </div>
            <div className="p-5 bg-accent-50 rounded-xl border border-accent-200">
              <h4 className="font-bold text-accent-800 mb-2">Syncytiotrofoblast</h4>
              <p className="text-accent-700">Buitenste laag, <strong>dringt het endometrium binnen</strong> en maakt de weg vrij door weefsel af te breken.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2 */}
      <section id="holtes-vliezen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Extra embryonale holtes en vliezen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Tijdens en na de innesteling ontstaan de eerste extra embryonale structuren:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Amnionholte</h4>
              <p className="text-slate-500 text-sm mt-1">Omhult het embryo direct, groeit later uit tot de grote vruchtwaterholte.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Dooierzak</h4>
              <p className="text-slate-500 text-sm mt-1">Met endoderm beklede holte, aanvankelijk relatief groot en duidelijk.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Chorionholte (extra-embryonaal coeloom)</h4>
              <p className="text-slate-500 text-sm mt-1">Hierdoor komt het embryo "vrij" te liggen aan een verbindingssteel (later deel van navelstreng).</p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Chorion</h4>
            <p className="text-slate-600 m-0">
              Bestaat uit trofoblast met onderliggend extra-embryonaal mesoderm en vormt de <strong>buitenste begrenzing</strong> van de zwangerschapsstructuren aan de foetale kant.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3 */}
      <section id="dooierzak" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Droplets className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dooierzak
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De dooierzak is bij de mens <strong>geen voedingsreserve</strong> zoals bij vogels, maar heeft wel esssentele functies:
          </p>
          
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
              <span><strong>Uitwisseling van stoffen</strong> voordat de placenta volledig functioneel is</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
              <span><strong>Vroege bloedvorming</strong> en ontwikkeling van vitelliene bloedvaten</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
              <span><strong>Endodermale bijdrage</strong> aan de aanleg van de darmbuis</span>
            </li>
          </ul>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Meckel divertikel
            </h4>
            <p className="text-rose-700 m-0">
              Normaal verdwijnt de verbinding tussen darm en dooierzak. Als een restant blijft bestaan kan dat leiden tot een <strong>Meckel divertikel</strong>.
            </p>
          </div>
          
          <p>
            Op vroege echo's is de dooierzak vaak herkenbaar als een <strong>klein ringvormig structuurtje</strong> in de vruchtzak - een nuttige aanwijzing voor een intra-uteriene zwangerschap.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4 */}
      <section id="amnion" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Baby className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Amnion en vruchtwater
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De amnionholte en het amnionvlies nemen sterk toe in omvang. Het amnion sluit uiteindelijk aan tegen het chorion, waardoor de <strong>chorionholte verdwijnt</strong> en er een grote vruchtwaterholte overblijft.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-3">Vruchtwater productie en resorptie</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-teal-700 mb-2">Productie:</p>
                <ul className="space-y-1 text-teal-600">
                  <li>- Maternale transsudatie (vroeg)</li>
                  <li>- Foetale urineproductie (later)</li>
                  <li>- Longvloeistof</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-teal-700 mb-2">Resorptie:</p>
                <ul className="space-y-1 text-teal-600">
                  <li>- Foetaal slikken</li>
                  <li>- Via membranen</li>
                </ul>
              </div>
            </div>
          </div>
          
          <p>
            <strong>Functies van vruchtwater:</strong>
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
              <span>Mechanische bescherming</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
              <span>Ruimte voor beweging (belangrijk voor spier- en skeletontwikkeling)</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
              <span>Voorkomt verklevingen</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-teal-500 mt-1 shrink-0" />
              <span>Stabiele omgeving</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5 */}
      <section id="tweelingen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Eeneiige tweelingen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij eeneiige tweelingen bepaalt het <strong>tijdstip van splitsing</strong> welke vliezen en placenta's worden gedeeld:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 text-sm">Vroege splitsing</h4>
              <p className="text-emerald-600 text-sm mt-1"><strong>Dichoriaal diamniotisch</strong> - Twee placenta's, twee amnionholtes (zoals bij twee-eiig).</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 text-sm">Latere splitsing (meest voorkomend)</h4>
              <p className="text-amber-600 text-sm mt-1"><strong>Monochoriaal diamniotisch</strong> - Een placenta, twee amnionholtes.</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 text-sm">Nog latere splitsing (zeldzaam)</h4>
              <p className="text-rose-600 text-sm mt-1"><strong>Monochoriaal monoamniotisch</strong> - Een placenta, een amnionholte. Risico op verstrengeling navelstrengen.</p>
            </div>
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-300">
              <h4 className="font-bold text-slate-800 text-sm">Zeer late splitsing (uiterst zeldzaam)</h4>
              <p className="text-slate-600 text-sm mt-1"><strong>Conjoined/Siamese tweeling</strong> - Onvolledige deling.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6 */}
      <section id="placenta" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            De placenta
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De placenta vormt het centrale <strong>uitwisselingsorgaan</strong> tussen moeder en foetus. Aan het einde van de zwangerschap is dit een schijfvormig orgaan met een diameter van ongeveer <strong>20 cm</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Foetale kant</h4>
              <p className="text-blue-700 text-sm">
                Vaten vertakken vanuit de navelstreng door het chorion in de <strong>chorionvilli</strong>.
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Maternale kant</h4>
              <p className="text-rose-700 text-sm">
                Bloed wordt aangevoerd via <strong>spiraalarterieen</strong> naar de intervillieuze ruimte.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-indigo-400">
            <h4 className="font-bold text-slate-800 mb-2">Intervillieuze ruimte</h4>
            <p className="text-slate-600 m-0">
              Hier stroomt maternale bloed langs de villi <strong>zonder directe menging</strong> met foetaal bloed. De ruimte bevat ~150 ml bloed dat meerdere keren per minuut wordt ververst (honderden ml/min).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7 */}
      <section id="barriere" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Bloed-placenta barriere
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De uitwisseling gebeurt over de <strong>bloed-placenta barriere</strong>. In een vroeg stadium bestaat deze uit meerdere lagen:
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1.5 bg-primary-200 text-primary-800 rounded-full font-medium">Syncytiotrofoblast</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="px-3 py-1.5 bg-accent-200 text-accent-800 rounded-full font-medium">Cytotrofoblast</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="px-3 py-1.5 bg-emerald-200 text-emerald-800 rounded-full font-medium">Bindweefsel villus</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="px-3 py-1.5 bg-amber-200 text-amber-800 rounded-full font-medium">Foetaal endotheel</span>
            </div>
          </div>
          
          <p>
            Naarmate de placenta rijpt wordt de <strong>diffusieafstand kleiner</strong>: de cytotrofoblastlaag neemt af en foetale capillairen liggen dichter bij de buitenlaag (tot enkele micrometers).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Passeren gemakkelijk</h4>
              <ul className="space-y-1 text-emerald-700 text-sm">
                <li>- O2, CO2 (gassen)</li>
                <li>- Water, elektrolyten</li>
                <li>- Voedingsstoffen</li>
                <li>- IgG (passieve immuniteit)</li>
                <li>- Alcohol, sommige medicijnen</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Worden tegengehouden</h4>
              <ul className="space-y-1 text-amber-700 text-sm">
                <li>- Meeste micro-organismen</li>
                <li>- Grote moleculen</li>
                <li>- Erytrocyten</li>
              </ul>
              <p className="text-amber-600 text-xs mt-2">(Sommige virussen kunnen wel passeren)</p>
            </div>
          </div>
          
          <p>
            In omgekeerde richting gaan foetale afvalstoffen (ureum, urinezuur, creatinine, bilirubine) terug naar de moederlijke circulatie voor verwerking.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

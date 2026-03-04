import { BookOpen, BarChart3, Stethoscope, Target, Shield, ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../components/SummaryLayout'

const HuidmanifestatiesPneumococcenMeningococcenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'epidemiologie', title: 'Epidemiologische risicofactoren', icon: BarChart3 },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Stethoscope },
    { id: 'petechien', title: 'Herkenning van petechiën', icon: Target },
    { id: 'behandeling', title: 'Behandeling en vaccinatie', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Huidmanifestaties infectieziekten – bacteriën Pneumococcen en meningococcen"
      description="Epidemiologie, klinische presentatie, petechiën en vaccinatie bij Streptococcus pneumoniae en Neisseria meningitidis."
      caseLabel="Casus 7: Huidmanifestaties"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=huidmanifestaties-pneumococcen-meningococcen"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Streptococcus pneumoniae</strong> (pneumokok) en <strong>Neisseria meningitidis</strong> (meningokok) zijn twee van de meest dodelijke bacteriën in de reguliere Nederlandse geneeskundige zorg. Beide kunnen als commensalen in de nasofarynx voorkomen zonder ziekte te veroorzaken. Soms kan een virulente stam in de bloedbaan terechtkomen en meningitis veroorzaken.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Een pneumokokken- of meningokokkeninfectie identificeren op basis van de klinische presentatie en epidemiologische gegevens</li>
              <li>Het werkingsmechanisme van vaccins tegen deze bacteriën globaal uitleggen</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Tentamen: risicopatiënten, type vaccins, belangrijkste infectieuze oorzaken van petechiën. Petechiën zijn een belangrijke diagnostische aanwijzing voor meningokokkeninfectie.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Epidemiologische risicofactoren */}
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epidemiologische risicofactoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Invasieve pneumokokkenziekte</h4>
          <p>
            In Nederland wordt surveillance uitgevoerd door het Nederlands Referentielaboratorium voor Bacteriële Meningitis (NRLBM), een samenwerking tussen AMC en RIVM. De <strong>65+ groep</strong> heeft de hoogste incidentie van invasieve pneumokokkenziekte. Verklaringen: verminderde weerstand door veroudering, verminderde barrièrefunctie van slijmvliezen, verminderde functie van alveolaire macrofagen bij ouderen, roken, en mogelijke secundaire infecties door respiratoire virale infecties (influenza, SARS-CoV-2). Vaccinatie (7-valent in 2006, 10-valent in 2011) heeft de incidentie bij kinderen (&lt;5 jaar) sterk doen dalen.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Neisseria meningitidis</h4>
          <p>
            Hoogste meldingspercentages: <strong>zuigelingen</strong>, gevolgd door jonge kinderen en adolescenten; ook significant bij 65+. Mannen hebben vaker meldingen dan vrouwen. Zuigelingen: nog niet gevaccineerd, immatuur immuunsysteem. <strong>Pneumokokken</strong> is geassocieerd met meer diverse infecties (inclusief longontsteking, otitis media) dan meningokokken; veel infecties worden niet gemeld.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Serogroep</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Trend</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">B</td><td className="border border-slate-200 pl-3 py-2">Historisch dominant; nog steeds vaakst in Nederland (niet in RVP)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">C</td><td className="border border-slate-200 pl-3 py-2">Piek rond 2000–2002; daarna sterk gedaald door vaccinatie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">W</td><td className="border border-slate-200 pl-3 py-2">Toename vanaf 2014</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Y</td><td className="border border-slate-200 pl-3 py-2">Lage incidentie</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Klinische presentatie */}
      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>S. pneumoniae</strong> is de belangrijkste oorzaak van respiratoire infecties en bacteriële meningitis. <strong>N. meningitidis</strong> is een belangrijke oorzaak van meningitis bij jongeren. Vaccinatieprogramma&apos;s hebben infecties door H. influenzae, N. meningitidis en S. pneumoniae sterk doen dalen.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Bacteriële meningitis (Nederland 2014)</h4>
          <p>
            S. pneumoniae: ~50%; N. meningitidis: ~14%; H. influenzae: ~6%; S. agalactiae: ~7%; L. monocytogenes: ~6%; overige: S. aureus, E. coli, enz.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Etiologische aanwijzingen (Tabel 9.3 Hoepelman)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Factor</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verwekkers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Zuigelingen</td><td className="border border-slate-200 pl-3 py-2">N. meningitidis, S. pneumoniae, H. influenzae type B, enterovirussen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Ouderen</td><td className="border border-slate-200 pl-3 py-2">S. pneumoniae, N. meningitidis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Asplenie</td><td className="border border-slate-200 pl-3 py-2">S. pneumoniae, H. influenzae type B, N. meningitidis, S. aureus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Complementdeficiëntie, SLE</td><td className="border border-slate-200 pl-3 py-2">N. meningitidis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Hypogammaglobulinemie</td><td className="border border-slate-200 pl-3 py-2">S. pneumoniae, H. influenzae type B, N. meningitidis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Niet-gevaccineerd</td><td className="border border-slate-200 pl-3 py-2">Belangrijk risicofactor voor meningokokken en pneumokokken</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Asplenie en gekapselde bacteriën</h4>
            <p className="text-amber-700 text-sm m-0">
              De milt is belangrijk voor het opruimen van gekapselde bacteriën. Bij afwezige of slecht werkende milt: minder fagocytose, minder antilichaamproductie tegen polysachariden, verminderde opsonisatie, verlies van marginale zone macrofagen, minder complementactivatie. Patiënten zonder milt worden geadviseerd zich te laten vaccineren. Belangrijke gekapselde bacteriën: S. pneumoniae, N. meningitidis, H. influenzae type B, S. agalactiae, S. pyogenes.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Pneumonie en longontsteking</h4>
          <p>
            S. pneumoniae is een prevalente oorzaak van acute, community-acquired pneumonie in alle leeftijdsgroepen. NB: S. pneumoniae-dragerschap komt frequent voor; alle leeftijdsgroepen zijn at risk voor een complicatie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Pneumokokken vs. meningokokken – symptomen</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aandoening</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Pneumokokken</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Meningokokken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Otitis media</td><td className="border border-slate-200 pl-3 py-2">Oorpijn, koorts, gehoorverlies; meestal mild</td><td className="border border-slate-200 pl-3 py-2">Zeer zeldzaam</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Sinusitis</td><td className="border border-slate-200 pl-3 py-2">Verstopte neus, purulente uitvloed, gezichtspijn, koorts</td><td className="border border-slate-200 pl-3 py-2">Zeer zeldzaam</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Meningitis</td><td className="border border-slate-200 pl-3 py-2">Koorts, hoofdpijn, nekstijfheid, fotofobie; zeer hoog sterfterisico</td><td className="border border-slate-200 pl-3 py-2">Idem + <strong>petechiën</strong></td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Sepsis en meningitis zijn zeer vergelijkbaar: sepsis door bacteriëmie gaat hand in hand met bacteriën die de bloed-hersenbarrière passeren. Meningitisklachten zijn vaak een combinatie van sepsisbeeld en neurologische prikkeling.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Herkenning van petechiën */}
      <section id="petechien" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Herkenning van petechiën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Petechiën zijn een belangrijke aanwijzing op een infectie met meningokokken.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Definitie</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Petechiën:</strong> kleine, niet-wegdrukbare puntbloedingen (0,5–1 mm)</li>
            <li><strong>Purpura/ecchymosen:</strong> grotere bloedingen in de huid</li>
            <li><strong>Glaasjestest:</strong> petechiën vervagen niet bij druk</li>
          </ul>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Belangrijk</h4>
            <p className="text-rose-700 text-sm m-0">
              <strong>Hoge koorts + petechiën → denk aan meningokokkensepsis of -meningitis.</strong> Dit is levensbedreigend → direct verwijzen naar het ziekenhuis! Bij koorts en petechiën altijd eerst meningokokken uitsluiten.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Andere oorzaken van petechiën</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Infectieus:</strong> N. meningitidis, bacteriële endocarditis, Rocky Mountain spotted fever; dengue, Ebola, CMV, H1N1; parasitaire infecties</li>
            <li><strong>Mechanisch:</strong> trauma, hoesten, braken, persen, tourniquet, zonverbranding</li>
            <li><strong>Niet-infectieus:</strong> vitamine C/K-tekort, leukemie, trombocytopenie, aplastische anemie, stollingsstoornissen, lupus, Henoch-Schönlein purpura, Ehlers-Danlos syndrome</li>
          </ul>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Klinische kernpunten</h4>
          <p>
            De huid is slechts één onderdeel van het totale klinische beeld. Bij een acuut zieke patiënt met petechiën vallen vaak eerst andere alarmsymptomen op: hoge koorts, sufheid, nekstijfheid, hyperventilatie, fotofobie, lage bloeddruk. <strong>Snel handelen is belangrijker dan zoeken naar petechiën.</strong> Beoordeel altijd de algehele toestand. Petechiën/purpura hebben veel mogelijke oorzaken → denk breed. <strong>Verwijs kinderen met petechiën of purpura altijd direct naar de SEH.</strong>
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Behandeling en vaccinatie */}
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling en vaccinatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Behandeling invasieve infecties</h4>
          <p>
            Patiënten zijn vaak ernstig ziek: <strong>ABCDE-methodiek</strong> – eerst vitale functies stabiliseren en monitoren (ademhaling, circulatie, bewustzijn, temperatuur, metabole status), pas daarna verdere diagnostiek en behandeling. Cruciaal: binnen het eerste uur intraveneus breedspectrum antibioticum starten (verwekker vaak nog niet bekend). Regime hangt af van locatie, indicatie, allergie en resistentie; elk ziekenhuis heeft een eigen antibioticaboekje.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Sterilisatietijd liquor</h4>
          <p>
            Meningokokkenmeningitis: binnen 2 uur; pneumokokkenmeningitis: 4–24 uur; streptokokkenmeningitis: enkele dagen. Neurologische restverschijnselen komen minder vaak voor na meningokokkenmeningitis dan na pneumokokken- of streptokokkenmeningitis.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Dexamethason</h4>
          <p>
            Corticosteroïden remmen de ontstekingsreactie in de liquor en daarmee de beschadiging van zenuwweefsel. Gelijktijdige toediening gedurende de eerste vier dagen vermindert sterfte en morbiditeit, vooral bij pneumokokkenmeningitis. De eerste dosis dexamethason dient bij voorkeur voorafgaand aan of gelijktijdig met de eerste dosis antibiotica te worden gegeven. Bij meningitis en septische shock: potentiële voordeel van dexamethason weegt op tegen potentieel nadeel. Potentieel nadeel: remming van het aangeboren immuunsysteem (macrofagen, neutrofielen).
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Gekapselde bacteriën en vaccins</h4>
          <p>
            Voorbeelden van gekapselde bacteriën waartegen vaccinaties worden gegeven: <strong>Pneumokokken, Haemophilus influenzae type b, Meningokokken</strong>. Het primaire doel van vaccins tegen gekapselde bacteriën: het induceren van specifieke antilichamen gericht tegen polysachariden van het bacteriële kapsel. Antilichamen binden aan de oppervlakte van de bacteriën en markeren deze voor vernietiging (opsonisatie); complementfactoren (C3b) kunnen ook als opsoninen fungeren; complementactivatie leidt tot MAC en lysis.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Type vaccins</h4>
          <p>
            Voor meningokokken en pneumokokken: <strong>polysachariden gekoppeld aan een eiwit</strong> (conjugaatvaccins). Polysachariden zijn T-cel-onafhankelijke antigenen; conjugaatvaccins koppelen polysachariden aan een eiwitdrager (bijv. tetanus- of difterietoxoïde, CRM197), wat een sterkere immuunrespons genereert, vooral bij jonge kinderen.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Rijksvaccinatieprogramma</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Vaccin</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Schema</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Pneumokokken (Pneu)</td><td className="border border-slate-200 pl-3 py-2">Conjugaatvaccin (PCV10) bij 3, 5, 12 maanden</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Meningokokken (MenACWY)</td><td className="border border-slate-200 pl-3 py-2">14 maanden en 14 jaar</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Volwassenen (≥60 jaar): polysaccharidevaccin (Pneumovax®, 23 types) – breed maar kortdurend, geen geheugen. Conjugaatvaccins (PCV13, PCV20) geven sterkere, langdurigere immuniteit door T-cel-afhankelijke respons. Meningococcus B zit niet in het RVP; infecties met MenB komen nog relatief vaak voor in Nederland.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Pathogenen:</strong> S. pneumoniae en N. meningitidis – twee meest dodelijke bacteriën in reguliere zorg; 65+ hoogste incidentie pneumokokken; zuigelingen/adolescenten hoogste incidentie meningokokken.</li>
            <li><strong>Risicofactoren:</strong> Asplenie, complementdeficiëntie, hypogammaglobulinemie, niet-gevaccineerd. Milt belangrijk voor opruimen gekapselde bacteriën.</li>
            <li><strong>Kliniek:</strong> S. pneumoniae: belangrijkste oorzaak pneumonie en meningitis (50%). N. meningitidis: meningitis bij jongeren; petechiën bij meningitis.</li>
            <li><strong>Petechiën:</strong> Kleine niet-wegdrukbare puntbloedingen (glaasjestest). Koorts + petechiën → meningokokken uitsluiten; direct verwijzen. Kinderen met petechiën/purpura altijd direct naar SEH.</li>
            <li><strong>Behandeling:</strong> ABCDE; binnen 1 uur IV breedspectrum; dexamethason bij pneumokokkenmeningitis. Conjugaatvaccins (polysacharide + eiwit) voor pneumokokken en MenACWY.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default HuidmanifestatiesPneumococcenMeningococcenSummary

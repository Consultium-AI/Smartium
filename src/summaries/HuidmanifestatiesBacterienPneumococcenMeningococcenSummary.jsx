import { BookOpen, BarChart3, Stethoscope, Target, Syringe, ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../components/SummaryLayout'

const HuidmanifestatiesBacterienPneumococcenMeningococcenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'epidemiologie', title: 'Epidemiologische risicofactoren', icon: BarChart3 },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Stethoscope },
    { id: 'petechien', title: 'Herkennen van petechiën', icon: Target },
    { id: 'vaccins', title: 'Vaccins en behandeling', icon: Syringe },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Huidmanifestaties infectieziekten – bacteriën Pneumococcen en meningococcen"
      description="Epidemiologie, klinische presentatie, vaccinatiemechanismen en herkenning van petechiën bij pneumokokken- en meningokokkeninfecties."
      caseLabel="Casus 7: Huidmanifestaties"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=pneumococcen-meningococcen"
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
            <strong>Streptococcus pneumoniae</strong> (pneumokok) en <strong>Neisseria meningitidis</strong> (meningokok) behoren tot de twee meest dodelijke bacteriën in de reguliere Nederlandse geneeskundige zorg. Beide kunnen deel uitmaken van de nasofarynxflora zonder directe klinische consequenties, maar virulente stammen kunnen invasieve ziekte veroorzaken.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Een pneumokokken- of meningokokkeninfectie identificeren op basis van klinische presentatie en epidemiologische gegevens</li>
              <li>Het werkingsmechanisme van vaccins tegen deze bacteriën globaal uitleggen</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Tentamenvragen: risicopatiënten, type vaccins, belangrijkste infectieuze oorzaken van petechiën.
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
            Surveillance in Nederland: sentinel-laboratoriumsurveillancesysteem door het Nederlands Referentielaboratorium voor Bacteriële Meningitis (NRLBM), samenwerking AMC en RIVM. De <strong>65+</strong> leeftijdsgroep heeft de hoogste incidentie. Verklaring: verminderde weerstand door veroudering, verminderde barrièrefunctie en aangeboren afweer, verminderde functie van alveolaire macrofagen, roken, secundaire infecties (influenza, SARS-CoV-2). Na invoering van het 7-valente (2006) en 10-valente (2011) vaccin daalde de incidentie bij kinderen &lt;5 jaar sterk.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">N. meningitidis</h4>
          <p>
            Hoogste meldingspercentages bij <strong>zuigelingen</strong>, gevolgd door jonge kinderen en adolescenten; ook significant bij 65+. Vaker bij mannen dan vrouwen (reden niet volkomen duidelijk). Serogroep C daalde sterk na vaccinatie; serogroep W is in recente jaren toegenomen. Zuigelingen: hoog risico door nog niet gevaccineerd en immatuur immuunsysteem.
          </p>
          
          <p>
            <strong>Pneumokokken</strong> is geassocieerd met veel diverse infecties (o.a. pneumonie, otitis media); een groot aantal wordt niet gemeld. De totale ziektelast door pneumokokken is daardoor hoger dan door meningokokken.
          </p>
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
            Meningokokken en pneumokokken zijn vaak commensalen in neus en keel; virulente stammen kunnen via bacteriëmie de bloed-hersenbarrière passeren en meningitis veroorzaken. <strong>S. pneumoniae</strong> is de belangrijkste verwekker van luchtweginfecties en bacteriële meningitis; <strong>N. meningitidis</strong> is een belangrijke oorzaak van meningitis bij jongeren. Vaccinatieprogramma&apos;s hebben infecties door H. influenzae, N. meningitidis en S. pneumoniae sterk doen dalen.
          </p>
          
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
                <tr><td className="border border-slate-200 pl-3 py-2">Sinusitis</td><td className="border border-slate-200 pl-3 py-2">Verstopte neus, purulente uitvloed, gezichtspijn, koorts; meestal mild</td><td className="border border-slate-200 pl-3 py-2">Zeer zeldzaam</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Meningitis</td><td className="border border-slate-200 pl-3 py-2">Koorts, hoofdpijn, stijve nek, fotofobie; zeer hoog sterfterisico</td><td className="border border-slate-200 pl-3 py-2">Idem + <strong>petechiën</strong></td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Sepsis en meningitis hebben zeer vergelijkbare klachten; sepsis door bacteriëmie gaat vaak samen met passage van bacteriën door de bloed-hersenbarrière. Meningitis zonder sepsis komt ook voor; dan staan neurologische klachten meer op de voorgrond.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Risicofactoren (Tabel 9.3 Hoepelman)</h4>
          <p>
            <strong>Asplenie:</strong> verhoogd infectierisico door gekapselde bacteriën. De milt is belangrijk voor opruimen van gekapselde bacteriën; bij afwezige of slecht werkende milt: minder fagocytose, minder antilichaamproductie (polysacharide-antigenen), verminderde opsonisatie, verlies marginale zone macrofagen, minder complementactivatie. <strong>Belangrijke gekapselde bacteriën:</strong> S. pneumoniae, N. meningitidis, H. influenzae type B, S. agalactiae, S. pyogenes. Patiënten zonder milt worden geadviseerd te vaccineren.
          </p>
          
          <p>
            Andere factoren: complementdeficiëntie/SLE, hypogammaglobulinemie, niet-gevaccineerd, leeftijd (zuigelingen, ouderen), seizoen (winter: meningokokken).
          </p>
          
          <p>
            <strong>S. pneumoniae</strong> is een prevalente oorzaak van acute community-acquired pneumonie in alle leeftijdsgroepen. Dragerschap komt frequent voor; alle leeftijdsgroepen zijn at risk voor complicaties.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Herkennen van petechiën */}
      <section id="petechien" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Herkennen van petechiën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Petechiën</strong> = kleine, niet-wegdrukbare puntbloedingen (0,5–1 mm). <strong>Purpura/ecchymosen</strong> = grotere bloedingen. Glasproef: petechiën vervagen niet bij druk.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Belangrijk</h4>
            <p className="text-rose-700 text-sm m-0">
              Hoge koorts + petechiën → denk aan meningokokkensepsis of -meningitis. Levensbedreigend → direct verwijzen naar het ziekenhuis. Bij koorts en petechiën altijd eerst meningokokken uitsluiten.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Oorzaken van petechiën</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Mechanisch:</strong> trauma, hoesten/braken/persen, tourniquet, zonverbranding</li>
            <li><strong>Niet-infectieus:</strong> vitamine C/K-tekort, leukemie, trombocytopenie, stollingsstoornissen, Henoch-Schönlein purpura, vasculitis</li>
            <li><strong>Infectieus:</strong> <strong>Neisseria meningitidis</strong>, bacteriële endocarditis, Rocky Mountain spotted fever, dengue, CMV, enterovirus</li>
          </ul>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Klinische kernpunten</h4>
          <p>
            De huid is slechts één onderdeel van het totale klinische beeld. Bij een acuut zieke patiënt met petechiën (meningitis/sepsis) vallen vaak eerst andere alarmsymptomen op: hoge koorts, sufheid, nekstijfheid, hyperventilatie, fotofobie, lage bloeddruk. <strong>Snel handelen is belangrijker dan zoeken naar petechiën.</strong> Beoordeel altijd de algehele toestand. Verwijs kinderen met petechiën of purpura altijd direct naar de SEH.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Vaccins en behandeling */}
      <section id="vaccins" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vaccins en behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Gekapselde bacteriën en vaccins</h4>
          <p>
            Voorbeelden van gekapselde bacteriën waartegen vaccinaties worden gegeven: <strong>Pneumokokken, Haemophilus influenzae type b, Meningokokken</strong>.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Werkingsmechanisme vaccins</h4>
          <p>
            Primair doel: <strong>induceren van specifieke antilichamen gericht tegen polysachariden van het bacteriële kapsel</strong>. Antilichamen markeren bacteriën voor vernietiging door het immuunsysteem (<strong>opsonisatie</strong>). Complement (C3b) kan ook als opsonine binden. Complementactivatie → MAC → bacteriële lysis. C3a en C5a zijn anafylatoxinen; IL-6 stimuleert CRP-productie; TNF-α en IL-6 veroorzaken koorts.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Type vaccins</h4>
          <p>
            <strong>Polysacharidevaccins</strong> en <strong>geconjugeerde vaccins</strong> (polysachariden gekoppeld aan eiwitdrager, bijv. tetanus-/difterietoxoïde of CRM197). Polysachariden zijn T-cel-onafhankelijke antigenen; geconjugeerde vaccins genereren een sterkere immuunrespons, vooral bij jonge kinderen, door T-celactivatie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Rijksvaccinatieprogramma</h4>
          <p>
            <strong>Pneumokokken:</strong> kinderen krijgen geconjugeerd vaccin (PCV10) via RVP; volwassenen ≥60 jaar krijgen polysacharidevaccin (Pneumovax®, 23 typen) – breed maar kortdurend, geen geheugenvorming. <strong>Meningokokken:</strong> MenACWY op 14 maanden en 14 jaar. Meningokok B zit niet in het vaccin → komt vaker voor in Nederland.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Behandeling invasieve infecties</h4>
          <p>
            ABCDE-methodiek: eerst vitale functies stabiliseren. Binnen het eerste uur breedspectrum IV-antibioticum starten. Antibioticakeuze volgens lokaal antibioticaboekje. Sterilisatie subarachnoïdale ruimte: meningokokken ~2 uur, pneumokokken 4–24 uur. <strong>Dexamethason</strong> vóór of gelijktijdig met eerste dosis antibiotica; remt inflammatie in CSF en zenuwweefselschade; vermindert mortaliteit en morbiditeit bij pneumokokkenmeningitis. Potentieel nadeel: remming aangeboren immuunsysteem (macrofagen, neutrofielen); bij meningitis en septische shock weegt het voordeel op tegen het nadeel.
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
            <li><strong>Pathogenen:</strong> S. pneumoniae en N. meningitidis; beide kunnen commensaal zijn; virulente stammen veroorzaken invasieve ziekte.</li>
            <li><strong>Epidemiologie:</strong> Pneumokokken: hoogste incidentie 65+; meningokokken: zuigelingen, adolescenten. Vaccinatie heeft incidentie sterk verlaagd.</li>
            <li><strong>Kliniek:</strong> Pneumokokken: otitis, sinusitis, pneumonie, meningitis. Meningokokken: meningitis (met petechiën), sepsis. Asplenie verhoogt risico op gekapselde bacteriën.</li>
            <li><strong>Petechiën:</strong> Niet-wegdrukbare puntbloedingen; koorts + petechiën → meningokokken uitsluiten; direct verwijzen.</li>
            <li><strong>Vaccins:</strong> Geconjugeerde vaccins (polysacharide + eiwit); antilichamen → opsonisatie. RVP: pneumokokken (kinderen), MenACWY (14 mnd, 14 jr).</li>
            <li><strong>Behandeling:</strong> ABCDE, breedspectrum IV-antibioticum binnen 1 uur, dexamethason bij pneumokokkenmeningitis.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default HuidmanifestatiesBacterienPneumococcenMeningococcenSummary

import SummaryLayout from '../../components/SummaryLayout'
import { Activity, Baby, Target, Layers, Stethoscope, ClipboardCheck, ArrowRight } from 'lucide-react'

export const FoetaleBeeldvormingSummary = () => {
  const tableOfContents = [
    { id: 'echografie', title: 'Echografie en Doppler', icon: Activity },
    { id: '13weken', title: 'De 13 wekenecho', icon: Baby },
    { id: 'sagittaal', title: 'Sagittale sweep', icon: Target },
    { id: 'transversaal', title: 'Transversale sweep', icon: Layers },
    { id: 'buikwanddefecten', title: 'Buikwanddefecten', icon: Stethoscope },
    { id: 'imitas', title: 'IMITAS studie', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Foetale beeldvorming en de 13 wekenecho"
      description="Vroege screening op structurele afwijkingen met echografie en Doppler."
      caseLabel="Casus 1: Van embryo naar baby"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=beeldvorming"
    >
      {/* Section 1 */}
      <section id="echografie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Echografie en Doppler
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Foetale beeldvorming in het eerste trimester richt zich op het vroeg herkennen van anatomie en mogelijke structurele afwijkingen. <strong>Echografie</strong> is hierbij de kernmethode, waarbij <strong>Doppler echografie</strong> aanvullend wordt gebruikt om de snelheid en richting van de bloedstroom te meten.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Doppler echografie</h4>
            <p className="text-primary-700">
              Meet de <strong>snelheid en richting van de bloedstroom</strong>. Hiermee kan de foetale hartfunctie worden beoordeeld en kunnen bepaalde hartafwijkingen vroeg worden opgemerkt.
            </p>
          </div>
          
          <p>
            Rond <strong>13 weken</strong> kan al een vierkamerbeeld van het hart worden gemaakt, al blijft het een klein orgaan en is interpretatie afhankelijk van beeldkwaliteit en ervaring.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Hart rond 13 weken</h4>
              <p className="text-amber-700">
                Ongeveer zo groot als een <strong>maiskorrel</strong>
              </p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Hart rond 20 weken</h4>
              <p className="text-emerald-700">
                Ongeveer zo groot als een <strong>amandel</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2 */}
      <section id="13weken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Baby className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            De 13 wekenecho
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De 13 wekenecho is bedoeld als <strong>vroege screening op structurele afwijkingen</strong>. Hierbij wordt de foetus systematisch bekeken, vaak met een <strong>sagittale sweep</strong> en daarna een <strong>transversale sweep</strong>.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-accent-400">
            <h4 className="font-bold text-slate-800 mb-2">Belangrijk</h4>
            <p className="text-slate-600 m-0">
              De 13 wekenecho is <strong>niet geschikt</strong> voor het vaststellen van chromosoomafwijkingen. Daarvoor wordt prenatale screening met de <strong>NIPT</strong> gebruikt.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3 */}
      <section id="sagittaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Sagittale sweep
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In het <strong>sagittale vlak</strong> zijn de globale contouren relatief herkenbaar:
          </p>
          
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
              <span><strong>Hoofd</strong> met neus en boven- en onderkaak</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
              <span><strong>Hersenen</strong> - nog in ontwikkeling, maar structuren rond hersenkamers kunnen zichtbaar zijn</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
              <span><strong>Hart</strong> - zichtbaar maar niet altijd gemakkelijk te onderscheiden</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-purple-500 mt-1 shrink-0" />
              <span><strong>Buikwand en rug</strong> - belangrijk voor continuiteit en ligging van structuren</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4 */}
      <section id="transversaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transversale sweep
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij het begin van de transversale sweep is een doorsnede door het hoofd vaak goed te herkennen:
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Plexus choroideus</h4>
            <p className="text-teal-700">
              In de hersenkamers zijn symmetrische, relatief echogene structuren zichtbaar: de <strong>plexus choroideus</strong>. Dit is een netwerk dat betrokken is bij de productie van hersenvocht.
            </p>
          </div>
          
          <p>
            Tijdens het verder vervolgen van de sweep komen ook andere delen voorbij:
          </p>
          
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-1">Maag en blaas</h4>
              <p className="text-slate-500 text-sm">Relatief makkelijk herkenbaar</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm mb-1">Navelstreng</h4>
              <p className="text-slate-500 text-sm">Aanhechting en integriteit buikwand</p>
            </div>
          </div>
          
          <p>
            <strong>Ledematen</strong> kunnen voorbij komen, maar armen en benen staan vaak in verschillende richtingen. Handen en voeten zijn niet altijd in een beeld te vangen - dit verklaart waarom 3D echo's soms makkelijker zijn voor dit onderdeel.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5 */}
      <section id="buikwanddefecten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Buikwanddefecten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het herkennen van de aanhechting van de navelstreng en de integriteit van de buikwand is belangrijk, omdat afwijkingen kunnen wijzen op <strong>buikwanddefecten</strong>.
          </p>
          
          <div className="space-y-3">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Omphalocele</h4>
              <p className="text-amber-700">
                Ingewanden buiten de buikholte in een <strong>uitstulping ter hoogte van de navelstreng</strong> (met bedekkende zak).
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">Gastroschisis</h4>
              <p className="text-red-700">
                Buikwand is open en <strong>darmlissen liggen in het vruchtwater</strong> zonder bedekkende zak.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Spina bifida</h4>
            <p className="text-rose-700 m-0">
              Een afwijking aan de rug kan zichtbaar worden als de wervelbogen niet goed zijn ontwikkeld, passend bij <strong>open rug (spina bifida)</strong>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6 */}
      <section id="imitas" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            IMITAS studie en overwegingen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De <strong>IMITAS studie</strong> onderzoekt of de voordelen van vroege detectie opwegen tegen de nadelen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-3">Voordelen vroege opsporing</h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Meer tijd voor aanvullende diagnostiek
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Emotionele verwerking en praktische voorbereiding
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Betere organisatie van zorg en doorverwijzing
                </li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-3">Nadelen vroege screening</h4>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Niet alle afwijkingen zijn zichtbaar rond 13 weken
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Bevindingen kunnen onduidelijk zijn of later anders blijken
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-1 shrink-0" />
                  Kan onrust en extra onderzoeken veroorzaken
                </li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-indigo-400">
            <h4 className="font-bold text-slate-800 mb-2">Bij vermoeden van afwijking</h4>
            <p className="text-slate-600 m-0">
              Bij ongeveer <strong>10 van de 1000 onderzoeken</strong> wordt een structurele afwijking vermoed. Bij vermoeden volgt verwijzing voor <strong>prenatale diagnostiek</strong> en een <strong>geavanceerd echografisch onderzoek (GUO)</strong> in een centrum voor prenatale diagnostiek.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

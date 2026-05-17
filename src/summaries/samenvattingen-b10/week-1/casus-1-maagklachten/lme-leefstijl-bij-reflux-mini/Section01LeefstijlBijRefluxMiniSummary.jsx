import { Activity, AlertTriangle, Baby, BookOpen, ClipboardList, Pill, Scale, Salad, UtensilsCrossed, Wind } from 'lucide-react';

export default function Section01LeefstijlBijRefluxMiniSummary({ standalone = false }) {
  return (
    <section id='sect-01' className={standalone ? 'scroll-mt-24' : 'scroll-mt-24'}>
      <div className='space-y-6'>
        <div className='rounded-3xl border border-primary-200 bg-primary-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <BookOpen className='mt-1 h-6 w-6 text-primary-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary-700'>LME 3</p>
              <h2 className='text-2xl font-bold text-slate-900'>Leefstijl bij reflux</h2>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>LME 3 – Leefstijl bij reflux</p>
            <p>LME 3 – Leefstijl bij reflux</p>
            <p>Refluxklachten bij volwassenen lopen uiteen van simpele, hinderlijke zuurbranden tot klachten die passen bij een onderliggende medische oorzaak. Daarom is het belangrijk om niet alleen naar de klacht zelf te kijken, maar ook naar de context: leefstijl, gewicht, voeding, stress en andere aandoeningen. De eerste stap is steeds inschatten of het gaat om leefstijlgerelateerde reflux of dat er aanwijzingen zijn dat meer onderzoek of behandeling nodig is. Leefstijladviezen zijn vaak al voldoende; medicamenteuze behandeling komt daarna pas in beeld als klachten blijven bestaan.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Activity className='mt-1 h-6 w-6 text-teal-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-teal-700'>BRAVO-factoren</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Bij reflux spelen de BRAVO-factoren een belangrijke rol: bewegen, roken, alcohol &amp; drugs, voeding en ontspanning. In de eerste casus zijn vooral weinig beweging, alcoholgebruik, ongezonde voeding en onvoldoende ontspanning relevant. Dat maakt het aannemelijk dat leefstijl een grote rol speelt bij de refluxklachten.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Scale className='mt-1 h-6 w-6 text-amber-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-amber-700'>Overgewicht</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Overgewicht is eveneens een belangrijke factor. Bij een lengte van 1,80 m en een gewicht van 95,2 kg is de BMI 29,4 kg/m². Een gezond BMI ligt tussen 18 en 25 kg/m². Een hogere buikomvang verhoogt de druk in de buik en daarmee op de maag, waardoor maaginhoud makkelijker terugstroomt naar de slokdarm. Vooral een volle maag, vetrijke voeding en eten dat lang in de maag blijft, kunnen klachten verergeren. Bij reflux en overgewicht is gewichtsverlies daarom een belangrijk onderdeel van de behandeling. In de casus wordt een doel van ongeveer 10 kg afvallen als haalbaar en zinvol genoemd, terwijl het totale verschil richting een gezond gewicht groter is.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <UtensilsCrossed className='mt-1 h-6 w-6 text-slate-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-700'>Voeding</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Voeding bij reflux draait om gezond en gevarieerd eten volgens de Schijf van Vijf. Niet alleen de hoeveelheid, maar ook de kwaliteit van de voeding is belangrijk. In de casus eet de student vaak buiten de deur, kookt niet zelf en gebruikt regelmatig snackbars. Dat past minder goed bij een voedingspatroon dat refluxklachten helpt verminderen. Ook ogenschijnlijk gezonde keuzes zijn niet altijd passend: een Caesar salade kan bijvoorbeeld veel zout bevatten, en snackbarmaaltijden passen vaak niet bij een gezond eetpatroon. Algemene adviezen zijn: voldoende groenten en fruit, passende porties, minder vetrijke en sterk bewerkte producten, en een eetpatroon dat niet te zwaar op de maag ligt.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Pill className='mt-1 h-6 w-6 text-violet-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-violet-700'>Supplementen</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Extra multivitamines of mineralen zijn meestal niet nodig als iemand gezond eet volgens de Schijf van Vijf. In die situatie zijn supplementen doorgaans overbodig. Sterk hoog gedoseerde supplementen kunnen zelfs risico geven op overdosering en toxische effecten.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Baby className='mt-1 h-6 w-6 text-rose-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-rose-700'>Zwangerschap</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Reflux kan ook ontstaan of verergeren door situaties waarin de druk in de buik toeneemt, zoals zwangerschap. In het begin van de zwangerschap speelt progesteron een rol: de spierspanning van glad spierweefsel neemt af, waardoor de onderste slokdarmsfincter minder goed sluit, de maag langzamer leegt en obstipatie kan optreden. Later in de zwangerschap zorgt de toenemende buikdruk ervoor dat maaginhoud gemakkelijker terug omhoog komt. Reflux hangt dus niet alleen samen met voeding of gewicht, maar ook met lichamelijke omstandigheden.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Wind className='mt-1 h-6 w-6 text-slate-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-slate-700'>Gastroparese</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Een andere belangrijke oorzaak van refluxachtige klachten is gastroparese, oftewel vertraagde maagontlediging. De maag werkt dan trager, waardoor voedsel langer in de maag blijft. Dit kan klachten geven zoals misselijkheid, braken, een vol gevoel in de maag, pijn bij eten of drinken en refluxklachten of zuurbranden. Bij ontregelde diabetes kan gastroparese verergeren. Andersom kan een verstoorde glucosehuishouding leiden tot vertraagde maaglediging en refluxoesofagitis.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <ClipboardList className='mt-1 h-6 w-6 text-amber-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-amber-700'>De tweede casus</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>In de tweede casus passen de klachten bij een combinatie van factoren, maar de metabole ontregeling door stress en onvoldoende medicatie-inname wordt als belangrijke oorzaak gezien. De hoge bloedsuiker, dorst en misselijkheid passen hierbij goed.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-rose-200 bg-rose-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <AlertTriangle className='mt-1 h-6 w-6 text-rose-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-rose-700'>Ernst inschatten</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Bij een ontregelde diabetes is het belangrijk om de ernst in te schatten, omdat dit bepaalt hoe snel actie nodig is. In de casus van de 56-jarige patiënte is de bloedsuiker zeer hoog en braakt zij sinds die ochtend; dat valt in de categorie ernstig.</p>
            <p>Als het braken langer dan 4 uur aanhoudt, wordt dit zeer ernstig. Dat onderscheid is belangrijk voor de urgentie van verdere behandeling.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <ClipboardList className='mt-1 h-6 w-6 text-teal-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-teal-700'>Praktische aanpak bij de tweede casus</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>De praktische aanpak bij de tweede casus begint met het regelen van de diabetes. De bloedsuiker moet weer onder controle komen. Daarna moet de gastroparese worden aangepakt met dieetadviezen en zo nodig medicatie die de maaglediging stimuleert, zoals prokinetica. De diëtist kan helpen om de voeding aan te passen op een manier die haalbaar is voor de patiënt. Ook psychische belasting speelt een rol: stress, angst of een traumatische ervaring kunnen herstel bemoeilijken. Als iemand openstaat voor begeleiding, kan psychologische ondersteuning helpen. Daarnaast blijven de BRAVO-factoren belangrijk: voldoende bewegen, niet roken, alcohol beperken, gezond eten en goed ontspannen.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-violet-200 bg-violet-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <Salad className='mt-1 h-6 w-6 text-violet-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-violet-700'>Praktische voedingstips</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Praktische voedingstips bij gastroparese zijn onder andere: frequente kleine maaltijden, magere of halfvolle producten zoals 20-30+ kaas en magere yoghurt, rustig wandelen na het eten, zachtgekookte groente en fruit, en eiwitbronnen zoals kip, tofu en vis. Te vermijden of af te raden zijn: koffie, alcohol, koolzuurhoudende dranken, pittige kruiden, even gaan liggen na het eten, veel water drinken tijdens de maaltijd, skinny jeans dragen en patat of snacks eten. Ook grof volkorenbrood of volkorenmuesli passen in deze context minder goed.</p>
          </div>
        </div>

        <div className='rounded-3xl border border-primary-200 bg-primary-50 p-6 shadow-sm'>
          <div className='flex items-start gap-3'>
            <BookOpen className='mt-1 h-6 w-6 text-primary-700' />
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-primary-700'>Samengevat</p>
            </div>
          </div>
          <div className='mt-4 space-y-3 text-base leading-7 text-slate-700'>
            <p>Samengevat: refluxklachten kunnen een leefstijlcomponent hebben, maar ook passen bij een onderliggende aandoening. In de eerste casus zijn vooral bewegen, alcohol, voeding, overgewicht en ontspanning belangrijk. Gezonde voeding volgens de Schijf van Vijf, gewichtsverlies en stressvermindering zijn dan de kern van het advies; supplementen zijn meestal niet nodig. In de tweede casus wijst de combinatie van hoge bloedsuiker, braken, dorst en klachten bij eten en drinken op ontregelde diabetes met gastroparese en refluxklachten. Dan zijn regulatie van de diabetes, dieetadvies, zo nodig prokinetica en begeleiding door een diëtist belangrijk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Sect05AanvullendOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullend onderzoek</h2>
      <p>
        Drie zaken zijn cruciaal: urineonderzoek, basaal bloedonderzoek en echografie. De volgorde mag je bespreken, maar het zijn alle drie vaste onderdelen van de beoordeling.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Urineonderzoek</h3>
        <p>
          Urineonderzoek begint met de urinedipstick. In de setting van acute nierschade let je vooral op hematurie en proteïnurie. Daarnaast kun je de samenstelling van de urine analyseren, vooral water en natrium. Daarmee leer je iets over de mogelijkheid van de nier om te reageren op ADH (antidiuretisch hormoon) en over RAAS-activatie.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Bloedonderzoek</h3>
        <p className="mb-3">
          Het basale bloedonderzoek bestaat uit een volledig bloedbeeld, elektrolyten, leverwaarden en CK (creatinekinase). Vergeet daarbij fosfaat, magnesium en het zuur-base-evenwicht niet. Dit zijn de basale laboratoriumgegevens die je eerste indruk van de ernst en richting van de nierschade geven.
        </p>
        <p>
          Als deze eerste onderzoeken geen diagnose opleveren, kom je toe aan meer specialistisch onderzoek, zoals ANCA-serologie, ANA (auto-antilichamen), complementfactoren, paraproteïnen (afwijkende eiwitten) of zelfs een nierbiopt (weefselonderzoek van de nier). Op dat moment is het verstandig om een internist-nefroloog in te schakelen.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Echografie</h3>
        <p className="mb-3">
          Echografie is de makkelijkste manier om pyelumdilatatie op te sporen, dus verwijding van het nierbekken. Het is een onderzoek dat je als arts, zeker op de SEH, vaak zelf kunt doen. Als je een radioloog nodig hebt, hangt het van de waarschijnlijkheid van een postrenale oorzaak en de urgentie af of de echo direct of de volgende dag moet gebeuren.
        </p>
        <p className="mb-3">
          Een echo geeft ook informatie over de grootte en het aspect van de nieren. Kleine nieren, ongeveer &lt; 9 cm, met weinig schors wijzen altijd op chronische schade, al kan er nog een acute component bovenop zitten. Daarnaast kun je iets zeggen over de vullingsstatus, bijvoorbeeld via de vena cava en longechografie, en over vrij vocht in het abdomen.
        </p>
        <p>
          Belangrijk is ook dat een acute afsluiting van een ureter niet meteen pyelumdilatatie geeft; daar zijn uren tot 1 à 2 dagen voor nodig. Omgekeerd kan een chronisch gedilateerd pyelum niet altijd meer volledig terugveren, een beetje zoals een uitgerekt elastiek.
        </p>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Welke drie aanvullende onderzoeken zijn cruciaal?  Antwoord: Urineonderzoek, basaal bloedonderzoek en echografie.
        </p>
      </div>
    </div>
  )
}

export default function Sect05HoogRisicoZorg() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoog risico: toepassingen met invloed op zorg en veiligheid</h2>
      <p>
        AI-systemen vallen in de categorie hoog risico als ze invloed hebben op medische besluitvorming, patiëntveiligheid of toegang tot zorg. In de zorg zijn dat bijvoorbeeld systemen voor diagnostische beslissingsondersteuning, automatische triage, automatische interpretatie van onderzoeken of systemen die behandelkeuzes ondersteunen.
      </p>
      <p>Voor hoog-risico-systemen gelden strenge eisen. De AI moet onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>veilig zijn;</li>
        <li>voldoende nauwkeurig zijn;</li>
        <li>robuust zijn;</li>
        <li>cyberveilig zijn;</li>
        <li>transparant zijn;</li>
        <li>traceerbaar zijn;</li>
        <li>onder menselijk toezicht blijven.</li>
      </ul>
      <p>
        Hier spelen ook enkele belangrijke artikelen een rol. Artikel 15 gaat over veiligheid, nauwkeurigheid, robuustheid en cyberveiligheid. Artikel 13 gaat over transparantie: de werking van het systeem moet voldoende duidelijk zijn zodat gebruikers de output goed kunnen interpreteren en passend kunnen gebruiken. Artikel 10 hangt samen met het voorkomen van discriminatie.
      </p>
      <p>
        Een AI-systeem hoeft volgens deze stof niet milieuvriendelijk te zijn; dat wordt wel genoemd als onderwerp, maar het is geen verplichting in de AI Act.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Wat betekent “hoog risico” in de praktijk?  Mini-antwoord: Dat de AI invloed kan hebben op zorgbeslissingen, patiëntveiligheid of toegang tot zorg, en daarom extra streng gereguleerd wordt.
        </p>
      </div>
    </div>
  )
}

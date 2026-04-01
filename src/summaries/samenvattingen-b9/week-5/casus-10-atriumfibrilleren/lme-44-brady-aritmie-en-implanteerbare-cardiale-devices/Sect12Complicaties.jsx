export default function Sect12Complicaties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Complicaties en {'risico\u2019s'} van device-therapie
      </h2>
      <p>
        Het plaatsen van een pacemaker, ICD of CRT is relatief veilig, maar niet zonder {'risico\u2019s'}. Complicaties kunnen direct na implantatie optreden of pas later.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Acute complicaties</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Pneumothorax</span>: de top van de long wordt geraakt tijdens het zoeken naar een ader. Klachten zijn plotselinge kortademigheid en pijn bij de ademhaling. Diagnose: X-thorax.
        </li>
        <li>
          <span className="font-semibold">Lead dislocatie</span>: de draad ligt nog niet vast en schiet los. Gevolg: pacing faalt of het apparaat “ziet” het ritme niet goed meer.
        </li>
        <li>
          <span className="font-semibold">Pocket hematoom</span>: nabloeding in het zakje onder de huid, vooral bij antistolling.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Late complicaties</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Pocketinfectie</span>: roodheid, warmte, zwelling, pijn en soms koorts. Beleid: direct verwijzen; antibiotica alleen is niet genoeg, vaak moet het hele systeem verwijderd worden om endocarditis te voorkomen.
        </li>
        <li>
          <span className="font-semibold">Erosie</span>: de huid boven het apparaat wordt dunner en het metaal komt door de huid heen.
        </li>
        <li>
          <span className="font-semibold">Draadbreuk</span>: bijvoorbeeld door langdurige beweging tussen sleutelbeen en rib.
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Functionele problemen</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">Pacemakersyndroom</span>: vooral bij VVI-pacemakers, door AV-dissynchronie. De boezems knijpen tegen dichte kleppen in, wat klachten geeft van kloppingen in de hals, duizeligheid en moeheid.
        </li>
        <li>
          <span className="font-semibold">Inadequate shock</span> of pacing failure: het apparaat werkt niet optimaal of grijpt verkeerd in.
        </li>
      </ul>
    </div>
  )
}

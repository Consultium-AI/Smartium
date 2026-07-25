import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anafylaxie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Anafylaxie is een acute, potentieel levensbedreigende allergische reactie. Het kan zich ontwikkelen binnen minuten tot uren.`}</Inline></p>
      <SubHeading><Inline>{`Definitie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Anafylaxie kan worden vastgesteld bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acute betrokkenheid van huid of slijmvliezen, samen met respiratoire klachten of hypotensie;`}</Inline></li>
        <li><Inline>{`of bij acute klachten na blootstelling aan een waarschijnlijk allergeen, met betrokkenheid van huid/slijmvliezen, ademhaling, bloeddruk of persisterende gastro-intestinale klachten;`}</Inline></li>
        <li><Inline>{`of bij een lage bloeddruk na blootstelling aan een bekend allergeen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij volwassenen geldt: systolische bloeddruk < 90 mmHg of > 30% daling ten opzichte van de uitgangswaarde.`}</Inline></p>
      <SubHeading><Inline>{`Klinische presentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Anafylaxie kan zich uiten met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gegeneraliseerde jeuk;`}</Inline></li>
        <li><Inline>{`roodheid;`}</Inline></li>
        <li><Inline>{`urticaria;`}</Inline></li>
        <li><Inline>{`angio-oedeem;`}</Inline></li>
        <li><Inline>{`rhinoconjunctivitis;`}</Inline></li>
        <li><Inline>{`braken;`}</Inline></li>
        <li><Inline>{`diarree;`}</Inline></li>
        <li><Inline>{`buikpijn;`}</Inline></li>
        <li><Inline>{`heesheid;`}</Inline></li>
        <li><Inline>{`stridor;`}</Inline></li>
        <li><Inline>{`piepende ademhaling;`}</Inline></li>
        <li><Inline>{`collaps;`}</Inline></li>
        <li><Inline>{`hypotensie.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraagje:** Moet urticaria altijd aanwezig zijn bij anafylaxie?
**Mini-antwoord:** Nee, dat hoeft niet. Ook zonder urticaria kan er sprake zijn van anafylaxie.`} />
      <SubHeading><Inline>{`Ernst na insectensteek`}</Inline></SubHeading>
      <PBody text={`Na een insectensteek kan een **fors lokale reactie** optreden met oedeem, erytheem en jeuk, meestal met een diameter groter dan 10 cm en een piek na 24–48 uur.`} />
      <PBody text={`De **schaal van Müller** wordt gebruikt om de ernst van systemische reacties te beschrijven:`} />
      <PBody text={`**Tabel 4. Schaal van Müller**`} />
      <DataTable rows={[["Graad", "Klachten"], ["I", "Gegeneraliseerde jeuk, urticaria en/of erytheem"], ["II", "Graad I plus gegeneraliseerd oedeem, misselijkheid, braken, licht gevoel in het hoofd, drukkend gevoel op de borst, buikpijn, diarree"], ["III", "Graad I of II plus stridor, dysfagie, heesheid, onduidelijke spraak, dyspneu"], ["IV", "Cyanose, hypotensie, collaps, incontinentie, bewusteloosheid, ernstige ritmestoornissen"]]} />
      <SubHeading><Inline>{`Behandeling van anafylaxie`}</Inline></SubHeading>
      <PBody text={`De eerste keus is altijd **epinefrine intramusculair** in de laterale zijde van het bovenbeen. Dat moet snel worden gegeven.`} />
      <p className="leading-relaxed"><Inline>{`Daarna kunnen ook andere middelen worden toegediend, zoals:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`antihistaminica;`}</Inline></li>
        <li><Inline>{`corticosteroïden;`}</Inline></li>
        <li><Inline>{`zuurstof;`}</Inline></li>
        <li><Inline>{`salbutamol bij bronchospasme.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met astma is verneveling met salbutamol extra belangrijk.`}</Inline></p>
    </div>
  )
}

export default function Sect11BijwerkingenCheckpointEnWeerstand() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bijwerkingen van checkpointremming</h2>
      <p>
        De bijwerkingen ontstaan doordat de normale rem van het immuunsysteem verdwijnt. Daardoor kunnen
        auto-immuunachtige ontstekingen optreden. Vroege bijwerkingen zijn bijvoorbeeld:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>dermatitis,</li>
        <li>colitis,</li>
        <li>hepatitis,</li>
        <li>hypofysitis.</li>
      </ul>
      <p>Later kunnen ook ontstaan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>diabetes type 1,</li>
        <li>myositis,</li>
        <li>myocarditis,</li>
        <li>vasculitis,</li>
        <li>Sjögren-syndroom,</li>
        <li>pemfigus.</li>
      </ul>
      <p>
        Behandeling met anti-CTLA-4 geeft meer en ernstigere bijwerkingen dan PD-1- of PD-L1-blokkade, omdat ook
        T-regulatoire cellen worden uitgeschakeld.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Weerstand tegen checkpointtherapie</h3>
      <p>Checkpointremming werkt niet altijd. Mogelijke oorzaken van resistentie zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>onvoldoende infiltratie van cytotoxische T-lymfocyten in de tumor;</li>
        <li>activatie van andere immuunsuppressieve processen in de tumormicro-omgeving;</li>
        <li>ontbreken van tumor-geassocieerde antigenen;</li>
        <li>het onvermogen van geïnfiltreerde T-cellen om goed geactiveerd te worden.</li>
      </ul>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Aandachtspunt: waarom werken checkpointremmers zo goed bij kanker?
          </strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Antwoord:</strong> omdat ze de rem van geactiveerde
          T-cellen weghalen, zodat deze tumorcellen weer kunnen herkennen en vernietigen.
        </p>
      </div>
    </div>
  )
}

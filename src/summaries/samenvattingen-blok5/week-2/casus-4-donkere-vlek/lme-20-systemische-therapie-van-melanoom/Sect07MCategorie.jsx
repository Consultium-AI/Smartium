export default function Sect07MCategorie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">M-categorie</h2>
      <p>De M-categorie gaat over afstandsmetastasen.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>M0: geen afstandsmetastasen</li>
        <li>M1a: metastasen naar huid, weke delen, spier en/of niet-regionale lymfeklieren</li>
        <li>M1b: metastasen naar de long</li>
        <li>M1c: metastasen naar andere viscerale organen buiten het centrale zenuwstelsel</li>
        <li>M1d: metastasen naar het centrale zenuwstelsel</li>
      </ul>
      <p>Bij de M-categorie wordt ook de LDH-waarde genoemd. LDH staat voor lactaatdehydrogenase.</p>
      <p>Een handig ezelsbruggetje voor de indeling is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>stadium 0: in situ</li>
        <li>stadium I en II: lokaal melanoom</li>
        <li>stadium III: regionale lymfeklieren of regionale uitzaaiingen</li>
        <li>stadium IV: afstandsmetastasen</li>
      </ul>
      <p>
        Een voorbeeld uit de kliniek: een dikke, geulcereerde primaire tumor zonder aantoonbare lymfekliermetastasen past
        bij T4b N0 en valt daarmee in stadium IIC.
      </p>
      <p className="text-slate-800 dark:text-slate-200 border-l-4 border-primary-400 pl-4 py-2 bg-primary-50/80 dark:bg-primary-500/10 rounded-r-lg">
        Aandachtsvraag: waarom is LDH in de M-indeling genoemd?{'  '}
        Mini-antwoord: omdat LDH samen met de plaats van de uitzaaiingen helpt bij de verdere indeling van metastatische
        ziekte.
      </p>
    </div>
  )
}

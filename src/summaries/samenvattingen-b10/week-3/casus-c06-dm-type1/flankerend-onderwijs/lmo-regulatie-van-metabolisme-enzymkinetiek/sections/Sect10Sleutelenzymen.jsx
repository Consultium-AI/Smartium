export default function Sect10Sleutelenzymen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Sleutelenzymen</h2>
      <p>
        Niet alle reacties in het metabolisme worden op dezelfde manier gestuurd. Sommige enzymen zijn extra belangrijk: dat zijn de <strong className="text-slate-900 dark:text-slate-100">sleutelenzymen</strong>. Een sleutelenzym katalyseert een reactie die maar één kant op kan verlopen en is bij voorkeur een <strong className="text-slate-900 dark:text-slate-100">snelheidsbepalende stap</strong> in een metabool pad.
      </p>
      <p>Voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Glycolyse</strong>: glucokinase, fosfofructokinase-1, pyruvaatdehydrogenase
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Gluconeogenese</strong>: pyruvaatcarboxylase, PEPCK, fructose-1,6-bisfosfatase, glucose-6-fosfatase
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Glycogenese</strong>: glycogeen synthase
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Glycogenolyse</strong>: glycogeen fosforylase
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Vetzuursynthese</strong>: acetyl-CoA carboxylase
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Vetzuuroxidatie</strong>: CPT I
        </li>
      </ul>
      <p>
        Omdat de overige reacties in deze paden vaak reversibel zijn, zorgt regulatie van het sleutelenzym automatisch voor een goede doorstroming van het hele pad in de juiste richting. De massawerking van de vervolgstappen helpt dan mee.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Voorbeelden van regulatie van sleutelenzymen</h3>
      <p>
        Fosfofructokinase is het sleutelenzym van de glycolyse. Als de cel een energietekort heeft, zou de reactie zonder extra regulatie alleen door massawerking worden gestuurd. Dan zou de glycolyse niet goed worden aangepast aan de energiebehoefte. Daarom wordt fosfofructokinase geactiveerd door AMP via <strong className="text-slate-900 dark:text-slate-100">allostere regulatie</strong>. Citraat remt het enzym juist in het cytosol. Dat is handig, omdat citraat een signaal is dat er voldoende bouwstoffen en energie aanwezig zijn, bijvoorbeeld in verband met vetzuursynthese.
      </p>
      <p>
        Bij de afbraak van alcohol in de lever is veel NADH nodig als cofactor. Dat kan leiden tot een verhoogde lactaatconcentratie in het bloed en tot hypoglykemie, doordat bepaalde metabole routes anders gaan verlopen. De kern hierbij is dat de regulatie van enzymen en metabole paden sterk samenhangt met de beschikbare cofactoren en de energiestatus van de cel.
      </p>
    </div>
  )
}

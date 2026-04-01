export default function Sect10UvbTherapie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">UVA en UVB als behandeling bij huidziekten</h2>
      <p>
        UV-straling wordt niet alleen gezien als schadelijk, maar ook therapeutisch gebruikt. Lichttherapie wordt al
        decennialang toegepast bij huidziekten zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>psoriasis;</li>
        <li>atopisch eczeem;</li>
        <li>pruritus;</li>
        <li>cutaan T-cellymfoom, vooral mycosis fungoides.</li>
      </ul>
      <p>
        Therapie met UV wordt vaak gestart als lokale corticosteroïden onvoldoende werken, bij uitgebreide huidafwijkingen
        of als systemische therapie niet mogelijk of niet gewenst is, bijvoorbeeld tijdens zwangerschap of lactatie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">UVB-therapie</h3>
      <p>
        UVB-therapie gebruikt kunstmatige UVB-straling. Het belangrijkste chromofoor voor UVB is nucleair DNA. UVB wordt
        door nucleotiden geabsorbeerd en vormt dan pyrimidinedimeren. Deze DNA-schade remt de DNA-synthese. Dat is precies
        het therapeutische principe bij psoriasis: de versnelde celdeling in psoriatische epidermale cellen wordt
        afgeremd.
      </p>
      <p>UVB activeert ook p53, wat leidt tot:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>celcyclusarrestatie;</li>
        <li>DNA-reparatie;</li>
        <li>apoptose bij ernstige schade.</li>
      </ul>
      <p>
        Zo helpt UVB-therapie bij psoriasis door de overproductie van huidcellen te verminderen. Daarnaast beïnvloedt UVB
        cytokinen zoals IL-6 en IL-1 en prostaglandinen zoals PGE2. Daardoor ontstaan zowel immunosuppressieve als
        ontstekingsmodulerende effecten.
      </p>
      <p>
        <span className="font-semibold">Wat is de klinische betekenis hiervan?</span>
        {`  `}UVB-therapie is effectief, maar de dosering moet zorgvuldig worden gecontroleerd. Te veel UVB kan p53
        muteren, wat op lange termijn het risico op huidkanker verhoogt.
      </p>
    </div>
  )
}

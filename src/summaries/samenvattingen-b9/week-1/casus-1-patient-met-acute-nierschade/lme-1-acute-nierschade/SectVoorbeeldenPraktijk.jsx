export default function SectVoorbeeldenPraktijk() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Voorbeelden uit de praktijk</h2>
      <p>
        De volgende ziektebeelden en situaties passen goed bij de drie categorieën. Belangrijk is dat sommige beelden contextafhankelijk zijn: dezelfde stof kan in een andere situatie in een andere categorie vallen.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Voorbeelden van oorzaken per categorie</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Prerenaal</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Renaal</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Postrenaal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-slate-900/40 divide-x divide-slate-200 dark:divide-slate-600">
              <td className="px-4 py-3 align-top">
                Diarree door Clostridium-bacterie; braken; bloedingsshock; diuretica tijdens een hittegolf; hypotensie; hartfalen; levercirrose; acute hoge tacrolimusspiegel; NSAID-gebruik; nierarteriestenose
              </td>
              <td className="px-4 py-3 align-top">
                Pre-eclampsie; multiple myeloom; chronisch tacrolimusgebruik; rabdomyolyse; Hanta-virusinfectie; trombotische micro-angiopathie (TMA); IgA-nefropathie; chemotherapie met cisplatinum
              </td>
              <td className="px-4 py-3 align-top">
                Endometriose; prostaathypertrofie; phimosis; afgeknikte blaaskatheter; retroperitoneale fibrose; neurogene blaas; blaasbloeding met stolselvorming
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een paar voorbeelden verdienen nog extra aandacht. Tacrolimus laat mooi zien dat de context telt: een acute hoge spiegel geeft vooral vasoconstrictie van de afferente glomerulaire vaten en past daarom prerenaal. Bij chronisch gebruik geeft tacrolimus juist tubulo-interstitiële schade en arteriolaire hyalinisatie, en dan past het onder renale nierschade.
      </p>
      <p>
        Hanta-virusinfectie, multiple myeloom en rabdomyolyse geven klassiek tubulaire schade. Cisplatinum is ook direct tubulotoxisch. Bij endometriose kan de obstructie overal in de urinewegen optreden. Vaak verloopt dat langzaam, maar het kan ook tot een acute afsluiting van een ureter leiden. Een blaasbloeding kan zo’n stolsel vormen dat de urethra blokkeert.
      </p>
    </div>
  )
}

export default function Sect02VanDnaNaarEiwit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Van DNA naar eiwit</h2>
      <p>
        Farmacogenetica draait om de vraag hoe genetische verschillen invloed hebben op de werking en afbraak van geneesmiddelen. Om dat goed te begrijpen, is het handig om eerst het ontstaan van een eiwit uit DNA stap voor stap te volgen.
      </p>
      <p>
        Bij het maken van een eiwit wordt eerst DNA omgezet in mRNA. Dat proces heet transcriptie. Daarna verlaat het mRNA de celkern en gaat het naar het cytoplasma, waar het door ribosomen wordt afgelezen. Dat tweede proces heet translatie. Het resultaat is een keten van aminozuren, een polypeptide. Zo’n polypeptide vouwt zich vervolgens tot een functioneel eiwit.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: wat is transcriptie?  Transcriptie is de omzetting van DNA naar mRNA.
        </p>
      </div>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Van DNA naar eiwit</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat gebeurt er?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijke termen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Transcriptie</td>
                <td className="px-4 py-3 align-top">RNA-polymerase maakt een kopie van een deel van het DNA in de vorm van mRNA</td>
                <td className="px-4 py-3 align-top">DNA → mRNA</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Transport</td>
                <td className="px-4 py-3 align-top">mRNA verlaat de celkern en gaat naar het cytoplasma</td>
                <td className="px-4 py-3 align-top">mRNA</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Translatie</td>
                <td className="px-4 py-3 align-top">Ribosomen lezen het mRNA af en maken een aminozuurketen</td>
                <td className="px-4 py-3 align-top">polypeptide</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Vouwen</td>
                <td className="px-4 py-3 align-top">De polypeptideketen vouwt zich tot een eiwit</td>
                <td className="px-4 py-3 align-top">functioneel eiwit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij RNA gelden andere basenparen dan bij DNA. In DNA paart adenine (A) met thymine (T) en guanine (G) met cytosine (C). In RNA paart adenine (A) met uracil (U) en guanine (G) met cytosine (C).
      </p>
    </div>
  )
}

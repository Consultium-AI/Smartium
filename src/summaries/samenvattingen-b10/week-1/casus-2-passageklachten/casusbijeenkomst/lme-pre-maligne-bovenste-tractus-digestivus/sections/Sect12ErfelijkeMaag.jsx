export default function Sect12ErfelijkeMaag() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Erfelijke vormen van maagkanker
      </h2>
      <p>
        Een belangrijk erfelijk syndroom is het Hereditaire Diffuse Gastric Cancer-syndroom, HDGC. Dit geeft aanleg voor het diffuse type maagcarcinoom op jonge leeftijd en voor lobulaire borstkanker. Het wordt meestal veroorzaakt door een kiembaanmutatie in CDH1; in zeldzame gevallen in CTNNA1.
      </p>
      <p>Andere erfelijke syndromen die met maagkanker geassocieerd zijn:</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 6. Belangrijke erfelijke syndromen bij maagkanker
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Syndroom
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Betrokken gen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Erfelijk diffuus maagkanker (HDGC)</td>
                <td className="px-4 py-3 align-top">CDH1 / CTNNA1</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Lynch-syndroom</td>
                <td className="px-4 py-3 align-top">{'MLH1, MSH2/EPCAM, MSH6, PMS2'}</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Familiaire Adenomateuze Polyposis (FAP)</td>
                <td className="px-4 py-3 align-top">APC</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Juveniele Polyposis syndroom (JPS)</td>
                <td className="px-4 py-3 align-top">SMAD4</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Peutz-Jeghers syndroom (PJS)</td>
                <td className="px-4 py-3 align-top">STK11</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Li-Fraumeni-syndroom</td>
                <td className="px-4 py-3 align-top">TP53</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij HDGC is het advies vaak een profylactische totale gastrectomie, maar endoscopische surveillance kan in geselecteerde
        patiënten helpen om chirurgie uit te stellen tot een optimaal moment.
      </p>
      <p>
        Bij Lynch-syndroom is er een verhoogd risico op darm- en baarmoederkanker en ook een milde verhoging van het risico op
        andere tumoren zoals maagkanker. Een Nederlandse studie liet een lifetime risico op maagkanker zien van 8% voor mannen en
        5,3% voor vrouwen met MLH1- of MSH2-mutaties; routine surveillance wordt daarom niet standaard geadviseerd.
      </p>
      <p>
        Bij FAP zorgt een APC-mutatie voor vele adenomen en een verhoogd risico op colon- en duodenumcarcinoom. In de maag
        kunnen fundic gland polypen en adenomen voorkomen, die beide tot maagkanker kunnen leiden.
      </p>
    </div>
  )
}

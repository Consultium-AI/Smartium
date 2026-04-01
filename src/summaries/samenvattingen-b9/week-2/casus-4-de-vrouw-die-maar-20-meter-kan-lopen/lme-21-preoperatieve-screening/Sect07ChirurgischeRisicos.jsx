export default function Sect07ChirurgischeRisicos() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Chirurgische risico’s</h2>
      <p>
        De chirurg bespreekt op de polikliniek de risico’s die direct met de operatie samenhangen. Denk aan wondinfecties, zenuwletsel en bloedverlies. De anesthesioloog beoordeelt of de patiënt deze risico’s aankan en of er nog optimalisatie mogelijk is.
      </p>
      <p>
        Bij mogelijk bloedverlies wordt het preoperatieve Hb bepaald. Er wordt ook nagegaan of er sprake is van een (vermoeden op) stollingsstoornis. Daarnaast is belangrijk of de patiënt een bloedtransfusie zou kunnen of mogen krijgen. Soms zijn er bezwaren, zoals bij Jehovah’s getuigen, of speelt een geplande orgaantransplantatie mee. Als transfurie mogelijk is, is ook de bloedgroep relevant.
      </p>
      <p>
        Soms is de algehele conditie van de patiënt zo slecht dat een andere operatietechniek wordt overwogen, bijvoorbeeld open in plaats van laparoscopisch of juist andersom. In sommige situaties kan zelfs na screening van een operatie worden afgezien.
      </p>
      <p>
        De operatie zelf kan de hemodynamiek beïnvloeden. Dat betekent dat bloeddruk, hartslag en doorbloeding veranderen. Ook anesthesie kan hier invloed op hebben: narcosemiddelen kunnen de bloeddruk verlagen, chirurgische stress kan de hartslag verhogen en een laparoscopische ingreep kan de bloedtoevoer naar het hart verminderen. Gezonde patiënten verdragen deze stress meestal goed, maar bij patiënten met een al bestaand cardiaal probleem is dat lastiger.
      </p>
      <p>
        Om dit risico beter in kaart te brengen, is een indeling gemaakt op basis van het cardiale risico van verschillende ingrepen. Daarbij worden operaties ingedeeld in laag-, intermediair- en hoog-risico-ingrepen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden van chirurgisch cardiaal risico</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600 w-[28%]">Risicogroep</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden van ingrepen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Laag risico</td>
                <td className="px-4 py-3 align-top">
                  Onder andere borstchirurgie, tandheelkunde, schildklierchirurgie, oogchirurgie, kleine gynaecologische ingrepen, kleine orthopedische ingrepen, oppervlakkige chirurgie, kleine urologische ingrepen
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Intermediair risico</td>
                <td className="px-4 py-3 align-top">
                  Onder andere bepaalde carotisingrepen, endovasculaire carotisingrepen, hoofd-halschirurgie, intraperitoneale ingrepen zoals splenectomie, hiatale hernia of cholecystectomie, grotere orthopedische of neurologische ingrepen, perifere angioplastiek, niertransplantatie, grote urologische of gynaecologische chirurgie
                </td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">
                  Onder andere aortachirurgie en andere grote vaatchirurgie, pancreas- en leverchirurgie, oesofagectomie, open revascularisatie van een onderbeen, pneumonectomie, transplantaties en herstel van geperforeerde darm
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

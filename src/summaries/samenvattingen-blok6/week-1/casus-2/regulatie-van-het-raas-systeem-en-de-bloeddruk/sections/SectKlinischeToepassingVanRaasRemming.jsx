import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing van RAAS-remming`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`RAAS-remmers worden gebruikt bij patiënten met hypertensie en hartfalen. In de kliniek is het belangrijk om te begrijpen dat deze middelen de bloeddruk verlagen door het systeem dat normaal juist bloeddruk en volume verhoogt, af te remmen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een patiënt met hypertensie en diabetes kan bijvoorbeeld een ACE-remmer worden gestart om de bloeddruk beter te reguleren. Daarbij moet je vooral het kalium vervolgen, omdat RAAS-remming invloed heeft op de kaliumhuishouding.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 4. Belangrijke klinische aandachtspunten`}</Inline></SubHeading>
      <DataTable rows={[["Situatie", "Belangrijk punt"], ["Start van RAAS-remming", "Kalium controleren"], ["Uitdroging", "RAAS wordt geactiveerd"], ["Hartfalen", "RAAS kan pathologisch actief zijn"], ["Kriebelhoest door ACE-remmer", "Vervangen door AT2-remmer"], ["Licht achteruitgaande nierfunctie na start", "Medicatie kan worden gecontinueerd"]]} />
    </div>
  )
}

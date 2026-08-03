import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`β2-adrenoceptor: ontspanning en stofwisseling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Stimulatie van de β2-adrenoceptor geeft vooral:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vaatverwijding;`}</Inline></li>
        <li><Inline>{`afname van de perifere weerstand;`}</Inline></li>
        <li><Inline>{`verslapping van de bronchi;`}</Inline></li>
        <li><Inline>{`verslapping van de baarmoeder;`}</Inline></li>
        <li><Inline>{`toename van glycogenolyse in spieren en lever;`}</Inline></li>
        <li><Inline>{`toename van glucagonafgifte.`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 4. Effecten van β2-adrenoceptoragonisten`}</Inline></SubHeading>
      <DataTable rows={[["Orgaan/systeem", "Effect"], ["Bloedvaten", "Vasodilatatie"], ["Perifere weerstand", "Afname"], ["Bronchi", "Verslapping"], ["Baarmoeder", "Verslapping"], ["Spieren en lever", "Toename glycogenolyse"], ["Pancreas/stoffenwisseling", "Toename glucagonafgifte"]]} />
    </div>
  )
}

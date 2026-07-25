import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische toepassing: profylaxe bij MRSA`}</Inline></SubHeading>
      <PBody text={`Een belangrijk klinisch voorbeeld is de patiënt met een bekende **MRSA-dragerschap** die een operatie ondergaat, bijvoorbeeld een totale heupprothese. Dan wil je profylaxe geven tegen **S. aureus**, maar ook zeker tegen **MRSA**.`} />
      <PBody text={`De juiste keuze is dan **vancomycine**. Cefazoline en penicillines zijn hiervoor niet geschikt, omdat MRSA daar niet gevoelig voor is. Gentamicine is ook geen goed middel tegen *S. aureus* als monotherapie. Wel wordt gentamicine soms in combinatie gebruikt bij ernstige *S. aureus*-infecties, bijvoorbeeld voor synergie, maar niet alleen.`} />
    </div>
  )
}

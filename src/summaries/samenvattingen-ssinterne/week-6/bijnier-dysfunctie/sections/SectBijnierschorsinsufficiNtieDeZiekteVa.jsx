import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bijnierschorsinsufficiëntie: de ziekte van Addison`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een andere patiënte zijn er klachten van misselijkheid, braken, moeheid, gewichtsverlies en een gebruinde huid. De bloeddruk is laag. Laboratoriumonderzoek laat een laag of normaal cortisol zien, een sterk verhoogd ACTH, een onvoldoende stijging van cortisol na Synacthen, laag aldosteron en hoog renine. Ook zijn anti-bijnierantistoffen positief.`}</Inline></p>
      <PBody text={`Dit past bij **de ziekte van Addison**, veroorzaakt door **auto-immuun adrenalitis**.`} />
      <SubHeading><Inline>{`Primaire, secundaire en tertiaire insufficiëntie`}</Inline></SubHeading>
      <DataTable rows={[["Type insufficiëntie", "Plaats van probleem", "ACTH", "Aldosteron"], ["Primair", "Bijnier", "Hoog", "Laag"], ["Secundair", "Hypofyse", "Laag of normaal", "Meestal normaal"], ["Tertiair", "Hypothalamus", "Laag of normaal", "Meestal normaal"]]} />
      <p className="leading-relaxed"><Inline>{`Bij primaire bijnierschorsinsufficiëntie valt de negatieve feedback weg, waardoor ACTH stijgt. Door het voorloperpeptide POMC ontstaat ook meer alfa-MSH, wat zorgt voor pigmentatie van huid en littekens. Alleen bij primaire insufficiëntie is er ook een tekort aan aldosteron. Bij secundaire en tertiaire insufficiëntie blijft de aldosteronproductie meestal behouden via het RAAS.`}</Inline></p>
    </div>
  )
}

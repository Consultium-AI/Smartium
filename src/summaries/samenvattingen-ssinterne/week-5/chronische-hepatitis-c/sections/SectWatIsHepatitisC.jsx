import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is hepatitis C?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hepatitis C is een virale infectieziekte die de lever aantast. Het belangrijkste om te onthouden is dat hepatitis C, als het onbehandeld blijft, een ernstige en uiteindelijk dodelijke ziekte kan worden. In de vroege fase geeft de infectie al nadelige gevolgen voor de gezondheid, met oversterfte door cardiovasculaire ziekte en/of diabetes mellitus. In de late fase ontstaan vooral levercirrose en hepatocellulair carcinoom.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het bijzondere aan hepatitis C is dat er tegenwoordig zeer effectieve geneesmiddelen bestaan. Die zijn bijna 100% effectief. Daardoor is hepatitis C een behandelbare infectieziekte geworden. Juist daarom is het belangrijk om de ziekte vroeg te herkennen en patiënten tijdig op te sporen en te behandelen.`}</Inline></p>
    </div>
  )
}

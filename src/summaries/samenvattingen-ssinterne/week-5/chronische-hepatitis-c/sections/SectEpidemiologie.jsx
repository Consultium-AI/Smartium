import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Epidemiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Wereldwijd zijn er ongeveer 150 miljoen patiënten met hepatitis C. Dat laat zien dat het een groot gezondheidsprobleem is. De verspreiding is niet overal gelijk; in sommige gebieden is de prevalentie hoog, in andere laag of onbekend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In Nederland is de situatie bijzonder: ondanks de beschikbaarheid van effectieve therapie neemt de sterfte nog steeds toe. Dat lijkt vooral te komen doordat er nog veel patiënten zijn met een verborgen hepatitis C-infectie die nog niet zijn opgespoord en behandeld.`}</Inline></p>
    </div>
  )
}

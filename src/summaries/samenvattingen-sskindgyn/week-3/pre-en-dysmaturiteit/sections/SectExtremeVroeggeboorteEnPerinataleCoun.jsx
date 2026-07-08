import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Extreme vroeggeboorte en perinatale counseling`}</Inline></SubHeading>
      <PBody text={`Bij dreigende extreme vroeggeboorte kunnen ouders vanaf **23 weken en 5 dagen** worden verwezen naar een perinatologisch centrum voor **perinatale counseling**. Dan wordt besproken of men behandeling wil starten en wat de risico’s en het te verwachten beloop zijn.`} />
      <PBody text={`Een belangrijk onderdeel van deze voorbereiding is **longrijping** met corticosteroïden. De longen zijn namelijk het enige orgaan dat onder invloed van steroïden versneld kan rijpen. Er wordt dan tweemaal **Celestone intramusculair** gegeven, met 24 uur ertussen. De werking is ongeveer **48 uur na de eerste gift optimaal**. Als ouders op 23 weken en 5 dagen kiezen voor steroïden, is de foetus dus rond 24 weken optimaal voorbereid.`} />
      <PBody text={`Bij extreem laag foetaal gewicht zijn er geen strikte grenzen voor het wel of niet starten van behandeling, maar in de praktijk spelen de **technische grenzen van behandelbaarheid** wel mee.`} />
    </div>
  )
}

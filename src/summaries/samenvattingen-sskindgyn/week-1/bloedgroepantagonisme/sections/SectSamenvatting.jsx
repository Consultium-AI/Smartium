import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hyperbilirubinemie bij de pasgeborene kan fysiologisch zijn, maar ook pathologisch en dan vaak al binnen 24 uur ontstaan. Een belangrijke oorzaak is bloedgroepantagonisme, waarbij maternale IgG-antistoffen via de placenta de erytrocyten van de foetus of neonaat afbreken. Dat kan leiden tot HZFN met anemie, icterus, hepatosplenomegalie, erytroblastosis foetalis en in ernstige gevallen kernicterus.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De diagnostiek bestaat uit onder andere bloedgroepbepaling, DAT, bilirubinebepalingen, antistofonderzoek bij de moeder en zo nodig een eluaat. Voor preventie is er in Nederland PSIE en het cEK-beleid. Bij transfusie van zwangeren en neonaten moet je het juiste bloedproduct kiezen, en bij wisseltransfusie zijn extra laboratoriumwaarden nodig. Tot slot zijn bij jonge kinderen vooral febriele niet-hemolytische reacties, allergische reacties en volume overload belangrijke transfusiereacties.`}</Inline></p>
    </div>
  )
}

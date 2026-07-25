import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hemofilie is een X-gebonden erfelijke bloedingsziekte met tekort aan factor VIII of IX. De ziekte geeft vooral gewrichtsbloedingen, spierbloedingen en nabloedingen na ingrepen. De ernst hangt af van de resterende factoractiviteit. De diagnose stel je met anamnese, familiegeschiedenis en laboratoriumonderzoek, vooral aPTT, factor VIII, factor IX en vaak ook VWF. Behandeling bestaat uit factorvervanging, DDAVP bij milde hemofilie A, tranexaminezuur bij slijmvliesbloedingen en profylaxe om gewrichtsschade te voorkomen. Bij operaties moet je stollingsfactoren zorgvuldig doseren op basis van de gewenste spiegel en de ernst van de ingreep.`}</Inline></p>
    </div>
  )
}

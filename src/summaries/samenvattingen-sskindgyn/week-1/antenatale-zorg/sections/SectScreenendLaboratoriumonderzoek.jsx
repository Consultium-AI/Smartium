import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Screenend laboratoriumonderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de eerste controle wordt altijd screenend laboratoriumonderzoek verricht. Er is een verschil tussen eerstelijns en tweede-/derdelijns onderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Screenend laboratoriumonderzoek`}</Inline></SubHeading>
      <DataTable rows={[["Eerstelijn", "Tweede- en derdelijn"], ["Bloedgroep", "Bloedgroep"], ["Rhesusfactor", "Rhesusfactor"], ["Irregulaire antistoffen", "Irregulaire antistoffen"], ["Hb", "Hb"], ["Glucose", "Trombocyten"], ["HBsAg", "Leverfunctie"], ["HIV", "Nierfunctie"], ["Lues", "Glucose"], ["", "HBsAg"], ["", "HIV"], ["", "Lues"], ["", "Urine: albumine"]]} />
      <p className="leading-relaxed"><Inline>{`De betekenis van deze bepalingen is belangrijk:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bloedgroep: relevant voor eventuele transfusie`}</Inline></li>
        <li><Inline>{`rhesusfactor en irregulaire antistoffen: belangrijk voor transfusie en voor risico op rhesusziekte bij foetus en pasgeborene`}</Inline></li>
        <li><Inline>{`Hb: screening op anemie`}</Inline></li>
        <li><Inline>{`trombocyten, lever- en nierfunctie: referentiewaarden als de zwangerschap later gecompliceerd verloopt, bijvoorbeeld bij hypertensie, pre-eclampsie of HELLP`}</Inline></li>
        <li><Inline>{`glucose: om pre-existente diabetes aan te tonen of uit te sluiten`}</Inline></li>
        <li><Inline>{`HBsAg: relevant voor hepatitis B en beleid rond overdracht en vaccinatie van het kind`}</Inline></li>
        <li><Inline>{`HIV: belangrijk voor behandeling met antiretrovirale therapie om transmissie te verminderen`}</Inline></li>
        <li><Inline>{`lues: belangrijk omdat foetale besmetting kan leiden tot vroeggeboorte en afwijkingen`}</Inline></li>
        <li><Inline>{`urine-albumine: referentiewaarde bij latere hypertensie of pre-eclampsie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij de patiënte uit de casus wordt ook HbA1c bepaald.`}</Inline></p>
    </div>
  )
}

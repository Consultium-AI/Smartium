import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Bariatrische chirurgie`}</Inline>
      </h3>
      <p>
        <Inline>{`Bariatrische chirurgie is één van de meest effectieve behandelingen voor diabetes type 2 als het doel remissie is. De operatie werkt niet alleen via gewichtsverlies, maar ook via meerdere metabole veranderingen. Daardoor kan het een krachtige behandeling zijn, zeker bij patiënten met ernstig overgewicht.`}</Inline>
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Wanneer komt bariatrie in beeld?`}</Inline>
      </h4>
      <p>
        <Inline>{`Bij een **BMI van ≥ 40 kg/m²**, of **≥ 35 kg/m² met comorbiditeit**, komt bariatrische chirurgie in aanmerking. Er zijn wel duidelijke voorwaarden:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`begeleiding door een **diëtist** vóór en na de ingreep;`}</Inline>
        </li>
        <li>
          <Inline>{`ondersteuning door een **psycholoog**;`}</Inline>
        </li>
        <li>
          <Inline>{`en **levenslange follow-up**.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`Ook speelt de medicatie rondom de ingreep een belangrijke rol. Door de snelle verbetering van de insulinegevoeligheid direct na de operatie moet glucoseverlagende medicatie vaak snel worden aangepast. Er is vooral risico op **hypoglykemie**, zeker bij gebruik van insuline of sulfonylureumderivaten. Insuline kan soms direct worden gestopt, vooral bij patiënten die minder dan 30 eenheden per dag gebruiken, maar dat gebeurt onder nauwe medische begeleiding en met frequente glucosecontroles.`}</Inline>
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Waarom werkt bariatrie?`}</Inline>
      </h4>
      <p>
        <Inline>{`Bariatrische chirurgie beïnvloedt meerdere systemen tegelijk:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`er is een **versterkt incretine-effect** met toename van GLP-1 en PYY;`}</Inline>
        </li>
        <li>
          <Inline>{`de **insulinegevoeligheid** verbetert;`}</Inline>
        </li>
        <li>
          <Inline>{`de **glucoseproductie door de lever** neemt af;`}</Inline>
        </li>
        <li>
          <Inline>{`de **eetlust** daalt;`}</Inline>
        </li>
        <li>
          <Inline>{`glucose-opname en opslag verbeteren;`}</Inline>
        </li>
        <li>
          <Inline>{`en er zijn effecten op onder meer ontsteking, obstructief slaapapneu en gonadale functie.`}</Inline>
        </li>
      </ul>
      <p>
        <Inline>{`Hierdoor kunnen glucosewaarden snel verbeteren, soms al binnen dagen na de operatie.`}</Inline>
      </p>
      <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        <Inline>{`Remissie na bariatrie is niet altijd blijvend`}</Inline>
      </h4>
      <p>
        <Inline>{`Hoewel bariatrische chirurgie vaak aanvankelijk tot remissie leidt, kan dat percentage in de jaren erna afnemen. In de stof wordt bijvoorbeeld genoemd dat remissie na 2 jaar hoger is dan na 10 of 15 jaar. Dat laat zien dat ook na een succesvolle operatie **relapse** mogelijk is.`}</Inline>
      </p>
    </div>
  )
}

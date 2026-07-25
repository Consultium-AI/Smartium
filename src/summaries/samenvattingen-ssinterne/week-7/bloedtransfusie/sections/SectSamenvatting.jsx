import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bloedtransfusie is een belangrijke, soms levensreddende behandeling, maar vraagt altijd om zorgvuldige afweging en goede voorbereiding. Bij massaal bloedverlies zijn erytrocyten, plasma en trombocyten nodig, en moet je alert zijn op de Lethal Triade van onderkoeling, acidose en coagulopathie. Voor veilige transfusie zijn bloedgroepbepaling, antistofscreening en passende laboratoriumcontrole essentieel.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het ABO-systeem en de Rhesusfactor zijn het belangrijkst bij erytrocytentransfusie. Irregulaire antistoffen kunnen later alsnog hemolyse veroorzaken, waardoor Type & Screen, kruisproef en geldigheidsduur van bepalingen belangrijk zijn. Ook bij trombocyten en plasma moet je rekening houden met compatibiliteit. Daarnaast spelen informed consent, keuze van het juiste bloedproduct en kennis van transfusiereacties een grote rol in de klinische praktijk.`}</Inline></p>
    </div>
  )
}

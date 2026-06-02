import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Klinische samenvatting van de casus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De casus laat zien hoe je bij een jonge vrouw met een palpabele borstknobbel en familiale belasting systematisch moet denken. Eerst is beeldvorming nodig, waarbij mammografie de primaire diagnostiek is, maar waarbij je rekening moet houden met dicht borstweefsel. Echografie en soms MRI kunnen aanvullend nodig zijn. Daarna volgt histologisch weefselonderzoek, omdat dat meer informatie geeft dan cytologie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als borstkanker wordt vastgesteld, zijn ER, PR en HER2 belangrijke biomarkers voor de verdere behandeling. In deze casus gaat het om een invasief ductaal mammacarcinoom met ER-negativiteit, PR-negativiteit en sterke HER2-positiviteit. De behandeling is curatief bedoeld en bestaat uit een combinatie van chirurgie, systeemtherapie en radiotherapie, waarbij de volgorde en keuze afhangen van tumorstadium, biomarkers en operatieve mogelijkheden.`}</Inline></p>
    </div>
  )
}

import { Inline, DataTable, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De casus laat zien dat je bij een kind met een buikmassa altijd breed moet denken. De leeftijd van het kind en de combinatie van klachten zijn heel belangrijk.`}</Inline>
      </p>

      <SubHeading level={2}>Zwellingen van renale origine</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij nierafwijkingen horen verschillende typische aanknopingspunten:`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Aandoening', 'Typische aanknopingspunten', 'Leeftijd van presenteren', 'Laboratorium'],
          ['---', '---', '---', '---'],
          [
            'Hydronefrose',
            'recidiverende urineweginfecties, hematurie, 20-wekenecho',
            'meestal eerste levensjaar',
            'urinesediment, creatinine',
          ],
          [
            'Multicysteuze nier(en)',
            '20-wekenecho, zelden recidiverende urineweginfecties',
            'meestal eerste levensjaar',
            'urinesediment, creatinine',
          ],
          [
            'Wilmstumor (nefroblastoom)',
            'hematurie, hypertensie, flank-/buikpijn, malaise, koorts, nachtzweten',
            'meestal 6 maanden tot 7 jaar',
            'urinesediment, creatinine',
          ],
          ['Congenitaal mesoblastisch nefroom', 'vooral leeftijdsgebonden', 'vaak < 6 maanden', '-'],
          ['Niercelcarcinoom', 'vooral leeftijdsgebonden', 'meestal vanaf adolescentie', '-'],
          ['Clear-cell sarcoom', 'vooral leeftijdsgebonden', 'vaak < 4 jaar', '-'],
          ['Rhabdoïde niertumor', 'vooral leeftijdsgebonden', 'vaak < 1 jaar', '-'],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Bij een Wilms-tumor zijn hematurie en hypertensie dus typische signalen. De leeftijd helpt ook sterk mee.`}</Inline>
      </p>

      <SubHeading level={2}>Zwellingen van neurale origine</SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`De belangrijkste neurale tumor in deze casus is neuroblastoom.`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Aandoening', 'Typische aanknopingspunten', 'Leeftijd van presenteren', 'Laboratorium'],
          ['---', '---', '---', '---'],
          [
            'Neuroblastoom',
            'malaise, buik- en botpijn, raccoon eyes, opsoclonus-myoclonussyndroom',
            'meestal < 4 jaar',
            'urine-HVA/VMA',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Neuroblastoom hoeft niet altijd gepaard te gaan met opsoclonus-myoclonussyndroom; dat kan wel, maar hoeft niet. De combinatie van jonge leeftijd, buikzwelling, malaise en raccoon eyes maakt deze diagnose juist verdacht.`}</Inline>
      </p>

      <SubHeading level={2}>Zwellingen van hepatobiliaire origine</SubHeading>
      <DataTable
        rows={[
          ['Aandoening', 'Typische aanknopingspunten', 'Leeftijd van presenteren', 'Laboratorium'],
          ['---', '---', '---', '---'],
          [
            'Benigne vasculaire tumoren, zoals hemangiomen',
            'hemangiomen van de huid',
            'vaak < 6 maanden',
            '-',
          ],
          [
            'Hepatoblastoom',
            'bolle buik',
            'meestal 1–3 jaar, maar kan tot in de adolescentie',
            'AFP',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Hepatoblastoom is dus een levertumor bij jonge kinderen, vaak met een bolle buik en een verhoogd AFP.`}</Inline>
      </p>

      <SubHeading level={2}>Zwellingen van gastro-intestinale origine</SubHeading>
      <DataTable
        rows={[
          ['Aandoening', 'Typische aanknopingspunten', 'Leeftijd van presenteren', 'Laboratorium'],
          ['---', '---', '---', '---'],
          [
            'Fecale impactie',
            'uitblijvende harde ontlasting, overloopdiarree, scybala',
            'gehele kinderleeftijd',
            '-',
          ],
          [
            'Bezoar',
            'bolle buik, braken',
            'trichobezoar: adolescentie; lactobezoar: vooral prematuren',
            '-',
          ],
          [
            'Gastro-intestinale duplicatiecyste',
            'atypische buikklachten, zelden rectaal bloedverlies',
            'gehele kinderleeftijd',
            '-',
          ],
          [
            'Invaginatie',
            'intermitterende buikpijn, bessengelei-ontlasting',
            'meestal 6 maanden tot 3 jaar',
            '-',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Fecale impactie is veel voorkomend en geeft meestal geen afwijkende groeicurve. Invaginatie past juist minder goed bij deze casus als de klachten niet typisch zijn.`}</Inline>
      </p>

      <SubHeading level={2}>Zwellingen van hematologische/lymfatische origine</SubHeading>
      <DataTable
        rows={[
          ['Aandoening', 'Typische aanknopingspunten', 'Leeftijd van presenteren', 'Laboratorium'],
          ['---', '---', '---', '---'],
          [
            '(Non-)Hodgkinlymfoom',
            'malaise, nachtzweten, recidiverende infecties/koorts, botpijn, bloedingsneiging, palpabele klieren, hepatosplenomegalie',
            'meestal > 5 jaar',
            'volledig bloedbeeld met differentiatie, LDH, urinezuur, kalium, fosfaat',
          ],
          [
            'Leukemie',
            'vergelijkbaar met lymfoom',
            'gehele kinderleeftijd',
            'volledig bloedbeeld met differentiatie, LDH, urinezuur, kalium, fosfaat',
          ],
        ]}
      />
      <p className="leading-relaxed m-0">
        <Inline>{`Bij leukemie hoort een buikzwelling minder goed. Lymfoom kan wel een buikmassa geven, zeker bij non-Hodgkinlymfoom.`}</Inline>
      </p>
    </div>
  )
}

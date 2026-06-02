import { Inline, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De differentiaaldiagnose van een buikmassa bij een kind is breed. De belangrijkste diagnoses die in deze casus naar voren komen, zijn hieronder samengevat.`}</Inline>
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100 m-0">
        <Inline>{`Tabel 1. Belangrijke differentiaaldiagnose bij een kind met buikmassa`}</Inline>
      </p>
      <DataTable
        rows={[
          ['Diagnose', 'Kenmerken', 'Opmerking'],
          ['---', '---', '---'],
          [
            'Wilms-tumor',
            'Niertumor bij kinderen, vaak pijnloze buikmassa',
            'Klassieke kindertumor van de nier',
          ],
          [
            'Neuroblastoom',
            'Tumor uit sympathisch zenuwstelsel, vaak uit bijnier of paravertebraal',
            'Kan al gemetastaseerd zijn',
          ],
          [
            'Hepatomegalie / levermassa',
            'Vergrote lever door verschillende oorzaken',
            'Massa in rechterbovenbuik',
          ],
          [
            'Hydronefrose / nierafwijking',
            'Vergrote nier door urineafvloedstoornis',
            'Kan buikzwelling geven',
          ],
          [
            'Obstipatie / fecesmassa',
            'Opgezette buik door ontlasting',
            'Vaak andere anamnese',
          ],
          [
            'Lymfoom',
            'Maligne lymfatische aandoening',
            'Kan buikorganen infiltreren',
          ],
          [
            'Abces / ontstekingsmassa',
            'Koorts, pijn, ziek zijn',
            'Infectieuze oorzaak mogelijk',
          ],
        ]}
      />
    </div>
  )
}

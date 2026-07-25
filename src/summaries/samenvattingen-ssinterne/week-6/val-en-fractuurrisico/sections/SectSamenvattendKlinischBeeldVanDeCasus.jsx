import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend klinisch beeld van de casus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de casuspatiënt spelen meerdere factoren mee. Er is sprake van een valincident met waarschijnlijk kortdurend bewustzijnsverlies, vermoedelijk door orthostase of sinus caroticus-overgevoeligheid. Daarnaast zijn er meerdere risicofactoren voor vallen en osteoporose, zoals polyfarmacie, reumatoïde artritis, pijn, visusproblemen, neuropathie, sarcopenie, lage BMI en mogelijk ADL-beperkingen. De aanpak bestaat uit een brede valanalyse, medicatiebeoordeling, leefstijladviezen en een analyse van het fractuurrisico met DXA, VFA, laboratoriumonderzoek en zo nodig behandeling.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Differentiaaldiagnose van buikpijn bij een jonge vrouw`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij buikpijn denk je aan gynaecologische en niet-gynaecologische oorzaken. De waarschijnlijkheid hangt af van de klachten, de cyclus, de zwangerschapstest en het lichamelijk onderzoek.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 2. Differentiaaldiagnose buikpijn bij een vrouw`}</Inline></SubHeading>
      <DataTable rows={[["Gynaecologisch waarschijnlijk", "Gynaecologisch minder waarschijnlijk", "Niet-gynaecologisch waarschijnlijk", "Niet-gynaecologisch minder waarschijnlijk"], ["EUG", "Torsio ovaria", "Urineweginfectie", "Maligniteit overig"], ["PID / TOA", "Uterus myomatosus", "Appendicitis", "Hernia inguinalis"], ["Ovariumcyste", "Endometriose", "Cholelithiasis", "Aneurysma aortae"], ["", "Maligniteit gynaecologisch", "Obstipatie", "Ulcus pepticum"]]} />
      <p className="leading-relaxed"><Inline>{`Bij een vrouw in de fertiele leeftijd hoort een EUG altijd in de differentiaaldiagnose. Ook appendicitis, urineweginfectie, torsio ovariae en PID kunnen passen bij acute buikpijn.`}</Inline></p>
    </div>
  )
}

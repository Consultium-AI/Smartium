import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Aanvullend onderzoek`}</Inline></SubHeading>
      <PBody text={`Bij koorts met verdenking op infectie doe je meestal **bloedkweek** bij temperatuur boven 38,5°C en/of koude rillingen, **urinekweek**, **leukocyten en CRP**, en zo nodig **serologie** voor de meest waarschijnlijke verwekkers, zoals varicella zoster, cytomegalovirus, parvovirus B19 en toxoplasmose.`} />
    </div>
  )
}

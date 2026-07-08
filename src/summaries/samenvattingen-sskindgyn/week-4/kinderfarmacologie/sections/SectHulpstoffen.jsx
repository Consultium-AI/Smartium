import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hulpstoffen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sommige hulpstoffen zijn ongeschikt voor jonge kinderen. Benzylalcohol is een belangrijk voorbeeld. Jonge kinderen kunnen dit conserveermiddel niet goed afbreken, waardoor benzoëzuur zich ophoopt. Dat kan leiden tot metabole acidose, vasodilatatie, paralyse, epileptische aanvallen en ademhalingsdepressie. Ook gluten en propyleenglycol kunnen relevant zijn.`}</Inline></p>
    </div>
  )
}

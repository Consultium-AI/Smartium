import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Afterload`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Afterload is de weerstand die de ventrikel moet overwinnen om bloed uit te pompen. Voor de linkerventrikel wordt die vooral bepaald door aortadruk en perifere vaatweerstand.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je uitleggen hoe transport in de tubulus plaatsvindt van natrium, kalium, glucose, eiwit en water. Ook kun je beschrijven welke rol de nier speelt in de zuur-base-regulatie en hoe dit samenhangt met de longen.`}</Inline></p>
    </div>
  )
}

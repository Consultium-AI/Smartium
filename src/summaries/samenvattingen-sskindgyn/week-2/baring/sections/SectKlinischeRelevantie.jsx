import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische relevantie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De baring is meestal een normaal fysiologisch proces, maar kan ook verstoord raken. Daarom is het belangrijk om de voortgang goed te volgen, de foetale conditie te bewaken en tijdig in te grijpen bij onvoldoende progressie. Oxytocine kan helpen bij zwakke weeën, terwijl een sectio caesarea nodig kan zijn als de oorzaak elders ligt, bijvoorbeeld in het bekken of de uterus.`}</Inline></p>
    </div>
  )
}

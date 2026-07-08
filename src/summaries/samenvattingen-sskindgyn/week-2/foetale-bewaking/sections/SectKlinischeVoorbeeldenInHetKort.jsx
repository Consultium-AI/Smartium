import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinische voorbeelden in het kort`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een CTG bij een gemelli-graviditeit kan voor beide kinderen normaal zijn, ook als er nog geen regelmatige weeënactiviteit is. Dan is de foetale conditie van beide kinderen goed.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een CTG met saltatoir patroon, repetitieve gecompliceerde deceleraties en verlies van variabiliteit kan passen bij foetale nood. Als er weeënstimulatie met oxytocine loopt, kan het stoppen daarvan helpen om de weeënfrequentie te verlagen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens de uitdrijvingsfase kan een CTG een ander patroon laten zien door het persen. Dan zie je vaak een patroon van hoge drukpieken in de uterusregistratie. Als de basishartfrequentie terugkeert naar normaal maar er gecompliceerde deceleraties en verlies van variabiliteit zijn, moet beëindiging van de baring serieus worden overwogen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een langdurige bradycardie met hypertonie van de uterus kan aanleiding zijn om een tocolyticum te geven en zo nodig de baring te beëindigen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een acute bradycardie die niet herstelt en met verlies van variabiliteit, denk je aan ernstige acute foetale nood. In een situatie met een eerdere sectio kan dat bijvoorbeeld passen bij een uterusruptuur; ook abruptio placentae is dan een mogelijkheid. Dan is een spoedsectio aangewezen.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hypertensief spoedgeval`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een hypertensief spoedgeval is een ernstige bloeddrukstijging met acute schade aan bijvoorbeeld hersenen, hart, nieren, grote vaten of ogen. Voorbeelden zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`herseninfarct of hersenbloeding;`}</Inline></li>
        <li><Inline>{`myocardinfarct;`}</Inline></li>
        <li><Inline>{`acute nierinsufficiëntie;`}</Inline></li>
        <li><Inline>{`acuut hartfalen met longoedeem;`}</Inline></li>
        <li><Inline>{`aortadissectie;`}</Inline></li>
        <li><Inline>{`hypertensieve encefalopathie;`}</Inline></li>
        <li><Inline>{`ernstige retinopathie;`}</Inline></li>
        <li><Inline>{`ernstige pre-eclampsie of eclampsie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De bloeddruk moet dan snel, maar gecontroleerd worden verlaagd. In de meeste gevallen mag de bloeddruk niet te snel te veel dalen, omdat de cerebrale autoregulatie verstoord is. De hersenen zijn dan gewend geraakt aan een hogere druk, waardoor een plotselinge daling tot hypoperfusie kan leiden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij een hypertensief spoedgeval wordt intraveneuze behandeling gebruikt, zodat de bloeddruk nauwkeurig kan worden getitreerd. Labetalol is vaak eerste keus. Bij een intracerebrale bloeding kan bijvoorbeeld worden gestreefd naar een systolische bloeddruk onder 180 mmHg en een MAP onder 130 mmHg.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij sommige situaties gelden andere doelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij aortadissectie moet de bloeddruk juist zeer snel laag worden;`}</Inline></li>
        <li><Inline>{`bij ernstige pre-eclampsie gelden weer andere streefwaarden.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aanvullend onderzoek kan bestaan uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ECG;`}</Inline></li>
        <li><Inline>{`CT van de hersenen;`}</Inline></li>
        <li><Inline>{`funduscopie door de oogarts.`}</Inline></li>
      </ul>
    </div>
  )
}

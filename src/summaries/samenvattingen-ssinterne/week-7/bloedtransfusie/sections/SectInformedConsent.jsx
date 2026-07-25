import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Informed consent`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een transfusie hoort informed consent. De patiënt moet op begrijpelijke wijze worden geïnformeerd over:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de indicatie;`}</Inline></li>
        <li><Inline>{`de voor- en nadelen;`}</Inline></li>
        <li><Inline>{`de risico’s;`}</Inline></li>
        <li><Inline>{`mogelijke alternatieven.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Schriftelijke of digitale informatie kan daarbij helpen. Het verkregen consent moet worden vastgelegd in het EPD.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als de patiënt tijdelijk wilsonbekwaam is, wordt informed consent verkregen van de wettelijk vertegenwoordiger. Als informed consent niet mogelijk is en uitstel van transfusie ernstige schade zou geven, mag je in het kader van goed hulpverlenerschap toch transfunderen. Dat geldt dus bij een spoedindicatie. Ook dat moet worden vastgelegd in het EPD.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Als een patiënt bloedproducten weigert, moet ook duidelijk worden vastgelegd welke producten wel of niet gewenst zijn.`}</Inline></p>
    </div>
  )
}

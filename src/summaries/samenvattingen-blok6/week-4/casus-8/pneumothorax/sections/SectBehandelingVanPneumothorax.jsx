import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De behandeling hangt af van:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ernst van de klachten`}</Inline></li>
        <li><Inline>{`de hemodynamische stabiliteit`}</Inline></li>
        <li><Inline>{`de oorzaak van de pneumothorax`}</Inline></li>
        <li><Inline>{`de wens van de patiënt`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Primair spontane pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een hemodynamisch stabiele patiënt met een primaire spontane pneumothorax en zonder duidelijke benauwdheid kan conservatieve behandeling met zuurstof worden overwogen. De patiënt wordt dan enkele uren geobserveerd en er wordt een controle-X-thorax gemaakt. Als de pneumothorax niet groter wordt en de klachten verbeteren, is verdere interventie vaak niet nodig.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een andere optie is naaldaspiratie. Als dat lukt en de pneumothorax duidelijk kleiner wordt, kan de patiënt vaak naar huis met poliklinische follow-up. Als aspiratie niet voldoende helpt, volgt meestal een pigtailkatheter of een katheter volgens de Seldinger-techniek. Er is geen duidelijk groot verschil tussen deze technieken; samen beslissen met de patiënt is belangrijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij matige of ernstige dyspneu, of bij hemodynamische instabiliteit, moet snel worden gedraineerd met een pigtailkatheter, een Seldinger-katheter of een thoraxdrain.`}</Inline></p>
      <SubHeading><Inline>{`Secundair spontane pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een secundair spontane pneumothorax herstelt bijna nooit vanzelf. Daarom is interventie meestal nodig, meestal met een pigtailkatheter, een Seldinger-katheter of een thoraxdrain. Om de kans op recidief te verkleinen wordt vaak pleurodese geadviseerd.`}</Inline></p>
      <SubHeading><Inline>{`Pneumothorax door trauma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een traumatische pneumothorax is er geen standaardbehandeling die altijd geldt. Als de patiënt instabiel is door een spanningspneumothorax of veel benauwdheid heeft, moet zo snel mogelijk een katheter worden geplaatst. Bij ernstig letsel, zoals een steekwond of meerdere ribfracturen, kan thoraxchirurgie nodig zijn.`}</Inline></p>
      <SubHeading><Inline>{`Iatrogene pneumothorax`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een pneumothorax na een medische ingreep hangt de behandeling af van de situatie. Is de pneumothorax klein, is er geen benauwdheid en is er geen bekende longziekte zoals emfyseem, dan kan afwachten met controle-X-thorax na enkele uren voldoende zijn. Als de pneumothorax groter wordt of klachten geeft, is een katheter nodig.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voordelen voor de arts`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zorg op afstand heeft niet alleen voordelen voor de patiënt, maar ook voor de arts. Als thuismetingen en vragenlijsten inzicht geven in de situatie van de patiënt, kan een consult beter worden voorbereid. Dan is vooraf al duidelijk of er problemen zijn, zoals een te hoge bloeddruk, diarree of problemen met seksualiteit.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ook bij een acute hulpvraag kan zorg op afstand helpen. Stel dat een patiënt belt met koorts, misselijkheid en braken. Als die patiënt thuis metingen kan doen en doorgeven, kan de arts beter inschatten of iemand naar de SEH of polikliniek moet komen, of juist thuis behandeld kan worden. Zo kan de werkdruk in het ziekenhuis afnemen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij chronische controle is dit ook nuttig. Als de waarden goed zijn, kan worden afgesproken dat er geen contact nodig is. Alleen als het nodig is, volgt een fysiek consult. Daarmee voorkom je onnodige afspraken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dat is extra relevant omdat het aantal niertransplantatiepatiënten sterk is toegenomen, van ongeveer 6000 naar ongeveer 12000, en de verwachting is dat deze groei doorzet. Tegelijkertijd is er al een tekort aan artsen en andere zorgverleners. Efficiënter werken is dus geen luxe, maar noodzaak.`}</Inline></p>
    </div>
  )
}

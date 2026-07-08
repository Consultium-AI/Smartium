import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Stap 1: signalen in kaart brengen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een vermoeden ga je verder onderzoeken, verzamel je aanwijzingen en maak je aantekeningen in het dossier. Een zorgvuldige anamnese is hierbij heel belangrijk. Je probeert het gebeuren als het ware als een film voor je te zien.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Vraag jezelf concreet af:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welk letsel is er?`}</Inline></li>
        <li><Inline>{`hoe en wanneer is het ontstaan?`}</Inline></li>
        <li><Inline>{`wie was erbij?`}</Inline></li>
        <li><Inline>{`hoe reageerden het kind en de verzorgers?`}</Inline></li>
        <li><Inline>{`klopt het verhaal?`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Beschrijf en teken zo goed mogelijk wat je ziet. Trek nog geen harde conclusies, maar formuleer je zorgen en benoem discrepanties tussen anamnese en onderzoek. Leg het verhaal van ouders of verzorgers gedetailleerd vast, zodat een collega het later kan controleren of bevestigen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Belangrijke aanwijzingen bij het eerste contact zijn bijvoorbeeld:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vertraging in het zoeken van medische hulp;`}</Inline></li>
        <li><Inline>{`een inconsistent verhaal;`}</Inline></li>
        <li><Inline>{`een anamnese die niet past bij de laesies;`}</Inline></li>
        <li><Inline>{`opvallend gedrag van ouders, zoals verwijtend of vijandig;`}</Inline></li>
        <li><Inline>{`een afstandelijke interactie tussen ouder en kind;`}</Inline></li>
        <li><Inline>{`uitspraken van het kind, liefst in een afzonderlijke anamnese als dat mogelijk is;`}</Inline></li>
        <li><Inline>{`herhaalde ‘ongelukjes’;`}</Inline></li>
        <li><Inline>{`medical shopping.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Let op: als beide ouders het ouderlijk gezag hebben, moet je hen om toestemming vragen voordat je het kind behandelt of onderzoekt.`}</Inline></p>
    </div>
  )
}

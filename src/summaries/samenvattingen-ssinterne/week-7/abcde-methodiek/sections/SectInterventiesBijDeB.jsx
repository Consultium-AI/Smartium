import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Interventies bij de B`}</Inline></SubHeading>
      <SubHeading><Inline>{`Houding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Kortademige patiënten hebben vaak baat bij een zittende of halfzittende houding.`}</Inline></p>
      <SubHeading><Inline>{`Zuurstoftoediening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De keuze van het hulpmiddel hangt af van de ernst van de situatie.`}</Inline></p>
      <DataTable rows={[["Hulpmiddel", "Flow", "Kenmerk"], ["Neusbril", "max. 5 L/min", "variabele FiO₂, vaak voldoende bij mildere problemen"], ["Venturimasker", "8–12 L/min", "instelbare zuurstoftoediening"], ["Non-rebreathing masker", "15 L/min", "hoge zuurstoftoediening, vaak start bij acute ziekte"]]} />
      <SubHeading><Inline>{`Streefwaarden`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`Bij een acuut zieke patiënt zonder shock: saturatie **94–98%**`}</Inline></li>
        <li><Inline>{`Bij ernstig COPD, als bekend: normale saturatie van de patiënt nastreven`}</Inline></li>
        <li><Inline>{`Als dat niet bekend is: **88–92%**`}</Inline></li>
        <li><Inline>{`Bij risico op hypercapnische respiratoire insufficiëntie, zoals bij COPD, morbide obesitas, thoraxwandafwijkingen of neuromusculaire aandoeningen: tijdelijk **88–92%** totdat de pCO₂ bekend is`}</Inline></li>
      </ul>
      <PBody text={`Bij shock start je met **15 liter zuurstof via een non-rebreathing masker** en streef je naar een zo hoog mogelijke PaO₂.`} />
      <SubHeading><Inline>{`Overige interventies`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**Verneveling** met salbutamol of ipratropium voor bronchodilatatie`}</Inline></li>
        <li><Inline>{`**Beademing** via masker, larynxmasker of tube als dat nodig is`}</Inline></li>
        <li><Inline>{`**Thoraxdrainage** bij bijvoorbeeld een spanningspneumothorax`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Zuurstofgebruik`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Niet alleen zuurstof geven is belangrijk; je moet ook onnodig zuurstofverbruik verminderen. Rillen, stress en pijn kunnen het zuurstofverbruik sterk verhogen. Daarom moet je ook zorgen voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`warmte`}</Inline></li>
        <li><Inline>{`pijnbestrijding`}</Inline></li>
        <li><Inline>{`rust`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Aanvullend onderzoek bij de B`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`arterieel of veneus bloedgas`}</Inline></li>
        <li><Inline>{`X-thorax`}</Inline></li>
        <li><Inline>{`eventueel CT of echografie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een arterieel bloedgas is vooral belangrijk als je twijfelt aan de betrouwbaarheid van de saturatiemeting of bij verdenking op CO-vergiftiging.`}</Inline></p>
      <SubHeading><Inline>{`Aandacht-vraag`}</Inline></SubHeading>
      <PBody text={`**Waarom is een normale saturatie niet altijd genoeg om te zeggen dat de ventilatie goed is?**
Omdat saturatie vooral iets zegt over oxygenatie, niet direct over de ventilatie of de ademarbeid.`} />
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}

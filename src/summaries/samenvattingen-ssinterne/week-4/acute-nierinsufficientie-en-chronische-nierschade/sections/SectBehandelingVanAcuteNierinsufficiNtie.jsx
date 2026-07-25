import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Behandeling van acute nierinsufficiëntie`}</Inline></SubHeading>
      <PBody text={`Acute nierinsufficiëntie is vaak een noodgeval. Snel handelen is nodig om herstel mogelijk te maken en complicaties zoals overvulling of ernstige elektrolytstoornissen te voorkomen. De aanpak verloopt volgens het **ABCDE-principe**.`} />
      <SubHeading><Inline>{`A: Airway / acute bedreiging herkennen`}</Inline></SubHeading>
      <PBody text={`Hier moet je denken aan een snel behandelbare oorzaak, zoals een **glomerulonefritis**, en in het bijzonder een **anti-GBM-glomerulonefritis**. Deze vraagt directe diagnostiek met anti-GBM-titers en snelle behandeling met plasmaferese, anders ontstaat onherstelbare nierschade.`} />
      <SubHeading><Inline>{`B: Breathing / medicatie en ademhaling`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Controleer de medicatie. Vraag je af:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`welke medicatie de nierinsufficiëntie kan hebben veroorzaakt of in stand houdt;`}</Inline></li>
        <li><Inline>{`of medicatie moet worden aangepast aan de sterk verminderde GFR.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Voorbeelden zijn digoxine, diverse antibiotica en LMWH.`}</Inline></p>
      <SubHeading><Inline>{`A en B in de praktijk: wanneer dialyse?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Er zijn een aantal acute dialyse-indicaties:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`overvulling die niet reageert op diuretica;`}</Inline></li>
        <li><Inline>{`ernstige elektrolytstoornissen, vooral hyperkaliëmie met ECG-afwijkingen;`}</Inline></li>
        <li><Inline>{`ernstige acidose die niet corrigeerbaar is;`}</Inline></li>
        <li><Inline>{`ernstige intoxicaties met dialyseerbare stoffen;`}</Inline></li>
        <li><Inline>{`uremische, bloederige pericarditis.`}</Inline></li>
      </ul>
      <PBody text={`**Aandacht-vraag:** Wanneer moet je direct de nefroloog inschakelen?
**Mini-antwoord:** Zodra er een dialyse-indicatie ontstaat, of als er een situatie is waarin snelle nierfunctievervangende therapie nodig kan zijn.`} />
      <SubHeading><Inline>{`E: Extra zorg en follow-up`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zorg voor goede nazorg en monitoring via nefroloog of internist. Let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`vitale parameters;`}</Inline></li>
        <li><Inline>{`urineproductie;`}</Inline></li>
        <li><Inline>{`bloedonderzoek, inclusief elektrolyten.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij terminaal nierfalen kan nierfunctievervangende therapie nodig zijn, zoals dialyse of niertransplantatie.`}</Inline></p>
    </div>
  )
}

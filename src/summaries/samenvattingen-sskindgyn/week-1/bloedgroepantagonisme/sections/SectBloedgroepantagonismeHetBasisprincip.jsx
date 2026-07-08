import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bloedgroepantagonisme: het basisprincipe`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een bloedgroepantagonisme past een bloedgroepantigeen van moeder en kind niet goed bij elkaar. De moeder kan antistoffen maken tegen een antigeen op de rode bloedcellen van de foetus of neonaat. Als die antistoffen via de placenta bij het kind komen, kunnen ze de rode bloedcellen afbreken.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Dit gebeurt vooral wanneer foetale erytrocyten in de moederlijke circulatie terechtkomen. Dat heet foetomaternale transfusie. Dit gebeurt vooral in het laatste trimester en bij de bevalling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De antistoffen die hierbij belangrijk zijn, zijn van het IgG-type, omdat IgG de placenta kan passeren. IgM doet dat niet.`}</Inline></p>
      <SubHeading><Inline>{`HZFN: hemolytische ziekte van foetus of neonaat`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Als antistoffen leiden tot versnelde afbraak van rode bloedcellen, spreek je van hemolytische ziekte van de foetus of neonaat (HZFN). Dat kan op twee momenten spelen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bij de foetus, als het antigeen al foetaal tot expressie komt;`}</Inline></li>
        <li><Inline>{`bij de neonaat, als het antigeen pas na de geboorte tot expressie komt.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Sommige antigenen komen al foetaal tot expressie, zoals Kell vanaf ongeveer 12-18 weken. Andere, zoals de AB-antigenen, komen pas na de geboorte tot expressie.`}</Inline></p>
      <SubHeading><Inline>{`Klinische kenmerken van HZFN`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De belangrijkste kenmerken zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`anemie;`}</Inline></li>
        <li><Inline>{`erytroblastosis foetalis;`}</Inline></li>
        <li><Inline>{`hepatosplenomegalie;`}</Inline></li>
        <li><Inline>{`icterus;`}</Inline></li>
        <li><Inline>{`trombocytopenie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij ernstige anemie kan hydrops foetalis ontstaan: het kind krijgt dan oedeem door hartfalen als gevolg van de anemie. Door de sterke aanmaak van rode bloedcellen zie je ook jonge erytrocyten in het bloed. De afbraak van hemoglobine geeft veel ongeconjugeerd bilirubine, en dat kan leiden tot kernicterus.`}</Inline></p>
      <PBody text={`**Aandachtsvraag:** wat is kernicterus?
**Mini-antwoord:** beschadiging van de grote hersenkernen door te veel ongeconjugeerd bilirubine, met risico op ernstige neurologische schade en doofheid.`} />
    </div>
  )
}

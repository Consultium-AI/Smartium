import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Motorische ontwikkeling in het eerste levensjaar`}</Inline></SubHeading>
      <SubHeading><Inline>{`0 tot 3 maanden: de eerste basis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de eerste drie maanden neemt de fysiologische flexie langzaam af. Het kind kan zich geleidelijk meer oprichten en het lichaamszwaartepunt verschuift naar beneden. In buikligging ontstaat een beginnende onderarmsteun.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In rugligging ligt het kind in het begin met gebogen armen en benen dicht bij het lichaam. Het hoofd kan nog niet goed in het midden worden gehouden. Rond 2 tot 3 maanden lukt dat wel steeds beter. Er ontstaat ook contact tussen arm en hand, hand en mond, en voet en voet.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In zit kan een kind in de eerste maand het hoofd kortdurend oprichten. Rond drie maanden kan het het hoofd beter in balans houden, maar zelfstandig zitten lukt nog niet; het valt dan voorover.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In stand kan het kind al wel kortdurend gewicht dragen in gesteunde stand. Er is dan nog geen slipping through.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De handfunctie is in deze fase nog primitief. Een pasgeborene heeft een positieve grijpreflex en houdt de handen meestal tot vuisten gebald. In de eerste drie maanden gaan de handen geleidelijk meer open.`}</Inline></p>
      <SubHeading><Inline>{`Rollen, symmetrie en hoofdbalans in het eerste kwartaal`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een kind in de eerste drie maanden kan nog niet rollen. Dat past bij de normale ontwikkeling in deze fase.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De motoriek is in deze periode meestal symmetrisch: links en rechts doen ongeveer hetzelfde. Soms is er nog een lichte asymmetrische tonische nekreflex, de ATNR. Daarbij zie je dat bij draaien van het hoofd strekking optreedt aan de aangezichtszijde en buiging van de extremiteiten aan de achterhoofdzijde. Dat mag in het eerste kwartaal soms nog zichtbaar zijn, maar niet overheersend.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hoofdbalans is in deze fase nog niet volledig aanwezig. Het kind kan het hoofd wel in de middellijn fixeren, maar nog niet goed in balans houden bij verstoring van de romp.`}</Inline></p>
    </div>
  )
}

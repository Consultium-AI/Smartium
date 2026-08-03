import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`De vier medicamenteuze pijlers bij HFrEF`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij HFrEF zijn vier medicatiegroepen essentieel. Ze zijn allemaal bewezen effectief in het verlagen van sterfte en morbiditeit. Je kunt ze zien als vier pijlers van de behandeling. In principe zijn ze alle vier nodig, tenzij er een contra-indicatie is.`}</Inline></p>
      <SubHeading><Inline>{`Tabel 1. De vier pijlers bij HFrEF`}</Inline></SubHeading>
      <DataTable rows={[["Pijler", "Hoofdeffect"], ["RAAS-remming", "Afterload omlaag, remodelling afremmen"], ["β-blokkers", "Hartfrequentie omlaag, zuurstofverbruik omlaag, ritmestoornissen minder"], ["MRA", "Effect van aldosteron remmen, minder fibrose en betere vochtbalans"], ["SGLT2-remmers", "Symptomen en ziekenhuisopnames verminderen, ook nierbeschermend"]]} />
      <SubHeading><Inline>{`RAAS-remmers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`RAAS-remmers grijpen in op het renine-angiotensine-aldosteronsysteem, dat bij hartfalen overactief is. Normaal zorgt dit systeem voor vasoconstrictie en zout- en waterretentie. Bij langdurige activatie draagt het bij aan hypertrofie, fibrose en verslechtering van de hartfunctie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Door dit systeem te remmen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`daalt de afterload;`}</Inline></li>
        <li><Inline>{`verbetert de cardiac output;`}</Inline></li>
        <li><Inline>{`vermindert remodelling van het myocard;`}</Inline></li>
        <li><Inline>{`nemen sterfte en morbiditeit af.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Binnen deze groep zijn er drie subgroepen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ACE-remmers, zoals enalapril, lisinopril en ramipril;`}</Inline></li>
        <li><Inline>{`ARB’s, zoals candesartan, valsartan en losartan;`}</Inline></li>
        <li><Inline>{`ARNI, namelijk sacubitril/valsartan.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Sacubitril/valsartan is krachtiger dan ACE-remmers, maar mag pas gestart worden na een washout van 36 uur na stoppen van een ACE-remmer. Dat is nodig vanwege het risico op angio-oedeem.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij het starten van RAAS-remmers controleer je bloeddruk, nierfunctie en kalium. Dat doe je na enkele dagen opnieuw, en daarna bij verdere opbouw.`}</Inline></p>
      <SubHeading><Inline>{`β-blokkers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij HFrEF is het sympathisch zenuwstelsel langdurig overactief. Dat leidt tot een hogere hartfrequentie, meer zuurstofverbruik, meer kans op aritmieën en snellere remodelling. β-blokkers remmen dit proces.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Ze zorgen voor:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlaging van de hartfrequentie;`}</Inline></li>
        <li><Inline>{`vermindering van zuurstofbehoefte;`}</Inline></li>
        <li><Inline>{`bescherming tegen ritmestoornissen;`}</Inline></li>
        <li><Inline>{`verbetering van de linkerventrikelfunctie op lange termijn;`}</Inline></li>
        <li><Inline>{`verlenging van de overleving en minder heropnames.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Alleen bepaalde β-blokkers zijn bewezen effectief bij HFrEF: bisoprolol, metoprolol succinaat en carvedilol. Ze worden laag gestart en langzaam opgehoogd.`}</Inline></p>
      <PBody text={`**Aandacht-vraagje:** Waarom start je een β-blokker niet tijdens een acute gedecompenseerde fase?
**Mini-antwoord:** Omdat β-blokkers de contractiliteit remmen en een instabiele patiënt daardoor verder kunnen verslechteren.`} />
      <SubHeading><Inline>{`MRA’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`MRA’s blokkeren de werking van aldosteron. Aldosteron zorgt bij hartfalen voor zout- en waterretentie, kaliumverlies en fibrose in myocard en vaatwand. Door dit te remmen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`daalt de preload;`}</Inline></li>
        <li><Inline>{`stijgt het kaliumgehalte;`}</Inline></li>
        <li><Inline>{`neemt fibrose en remodelling af;`}</Inline></li>
        <li><Inline>{`wordt de nierfunctie beschermd;`}</Inline></li>
        <li><Inline>{`dalen sterfte en ziekenhuisopnames.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De gebruikte middelen zijn spironolacton en eplerenon. Spironolacton kan bij langdurig gebruik gynaecomastie geven.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Voor de start controleer je kalium en nierfunctie. Start alleen als kalium niet te hoog is en de nierfunctie voldoende is. Daarna hercontroleer je opnieuw snel.`}</Inline></p>
      <SubHeading><Inline>{`SGLT2-remmers`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`SGLT2-remmers blokkeren de natrium-glucose-cotransporter 2 in de proximale tubulus van de nier. Daardoor worden meer natrium en glucose uitgescheiden. De precieze werking bij hartfalen is niet volledig uitgewerkt, maar de klinische effecten zijn duidelijk.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij HFrEF:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verminderen ze vochtretentie op milde wijze;`}</Inline></li>
        <li><Inline>{`verlagen ze preload en afterload;`}</Inline></li>
        <li><Inline>{`verbeteren ze nierfunctie en metabole balans;`}</Inline></li>
        <li><Inline>{`verminderen ze klachten en ziekenhuisopnames;`}</Inline></li>
        <li><Inline>{`verlagen ze sterfte, ook zonder diabetes.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De middelen zijn dapagliflozine en empagliflozine. Er is geen titratie nodig. Je start ze niet bij een te lage eGFR.`}</Inline></p>
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Empirische behandeling met antibiotica`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij empirische antibiotische behandeling moet je steeds drie dingen combineren. Eerst denk je na over welke bacterie het meest waarschijnlijk is. Daarna bepaal je voor welke antibiotica die bacterie gevoelig is. Ten slotte houd je rekening met gastheer-specifieke factoren.`}</Inline></p>
      <SubHeading><Inline>{`Hoe toon je snel een verwekker aan?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Snelheid is belangrijk bij ernstige infecties. Technieken die snel een verwekker kunnen aantonen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`gramkleuring;`}</Inline></li>
        <li><Inline>{`antigen-detectie met een immunologische methode;`}</Inline></li>
        <li><Inline>{`moleculaire technieken, zoals PCR;`}</Inline></li>
        <li><Inline>{`bacteriële kweek.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De gramkleuring is eenvoudig en goedkoop en kan gebruikt worden op normaal steriele lichaamsvochten, zoals liquor, pleuravocht, gewrichtsvocht, peritoneaal vocht en urine. Op basis van de vorm en Gram-reactie kun je bacteriën grof indelen in gram-positieve of gram-negatieve kokken of staven. Als je niets ziet, betekent dat niet automatisch dat er geen bacteriën zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`PCR kan snel zijn, maar in de praktijk duurt het soms langer door transport naar een referentielaboratorium of doordat de test niet direct uitgevoerd kan worden. Voor het bepalen van gevoeligheid is meestal kweek nodig, al zijn er uitzonderingen.`}</Inline></p>
      <SubHeading><Inline>{`Bacteriële statistiek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat je vaak nog niet precies weet welke bacterie de infectie veroorzaakt, gebruik je bacteriële statistiek: je denkt na over de meest waarschijnlijke verwekkers in een bepaalde klinische context. Bij een jong kind met acute otitis media zijn dat meestal:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`*Haemophilus influenzae*`}</Inline></li>
        <li><Inline>{`*Streptococcus pneumoniae*`}</Inline></li>
        <li><Inline>{`*Moraxella catarrhalis*`}</Inline></li>
        <li><Inline>{`groep A-streptokokken (*Streptococcus pyogenes*)`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Gevoeligheid voor amoxicilline`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Amoxicilline werkt nog vrijwel altijd tegen groep A-streptokokken. Tegen *Staphylococcus aureus* werkt het meestal niet meer, omdat deze bacterie beta-lactamase kan maken. Amoxicilline met clavulaanzuur werkt vaak nog wel tegen gewone *S. aureus*, maar niet tegen MRSA. MRSA heeft namelijk een veranderd PBP, het eiwit waarop beta-lactam-antibiotica normaal aangrijpen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij *Haemophilus influenzae* is de gevoeligheid voor amoxicilline moeilijker te voorspellen, omdat resistente stammen zich verspreiden. Sommige bacteriën zijn ook van nature resistent tegen bepaalde antibiotica; de meeste gram-negatieve bacteriën zijn bijvoorbeeld resistent tegen clindamycine.`}</Inline></p>
      <SubHeading><Inline>{`Gastheer-specifieke factoren`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij het kiezen van een antibioticum moet je ook rekening houden met factoren van de patiënt zelf.`}</Inline></p>
      <DataTable rows={[["Tabel 3. Belangrijke gastheerfactoren"], ["Eerdere bijwerkingen", "Voorkom herhaling van een middel waar iemand slecht op reageerde"], ["Leeftijd", "Pasgeborenen, prematuren en ouderen hebben vaak aangepaste doseringen nodig"], ["Genetische/metabole afwijkingen", "Bijvoorbeeld G6PD-deficiëntie of gevoeligheid voor QT-verlenging"], ["Zwangerschap en borstvoeding", "Niet elk antibioticum is veilig; vraag zo nodig expertadvies"], ["Nier- en leverfunctie", "Dosering aanpassen of middel vermijden bij orgaanfunctiestoornissen"], ["Plaats van infectie", "Niet elk antibioticum bereikt elke plek even goed"]]} />
      <p className="leading-relaxed"><Inline>{`Bij pasgeborenen en prematuren zijn nier- en leverfunctie nog onrijp. Daarom zijn doseringen anders. Sulfonamiden zoals cotrimoxazol kunnen vrij bilirubine verhogen en zo kernicterus geven bij pasgeborenen. Tetracyclines zoals doxycycline kunnen verkleuring en hypoplasie van tanden veroorzaken en worden daarom onder de leeftijd van 8 jaar vermeden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij G6PD-deficiëntie kan blootstelling aan bepaalde middelen, zoals dapsone, primaquine en nitrofurantoïne, ernstige hemolyse veroorzaken. Sommige antibiotica en antischimmelmiddelen kunnen het QTc-interval verlengen, wat gevaarlijk kan zijn bij mensen met aanleg voor ritmestoornissen of bij polyfarmacie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Tijdens zwangerschap en borstvoeding moet je extra voorzichtig zijn. Penicillines en cefalosporines zijn voorbeelden van antibiotica die veilig gebruikt kunnen worden tijdens de zwangerschap. Bij borstvoeding komen veel antibiotica in lage concentraties in de moedermelk terecht, maar zelfs die kunnen voor jonge kinderen relevant zijn.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij nier- of leverfunctiestoornissen moet je soms de dosis aanpassen. Middelen die via lever of gal worden uitgescheiden hoeven niet per se aangepast te worden bij nierfalen, maar ze bereiken dan soms de urinewegen onvoldoende voor behandeling van een urineweginfectie.`}</Inline></p>
      <SubHeading><Inline>{`Plaats van de infectie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De plaats van de infectie bepaalt mede welk antibioticum geschikt is. Sommige middelen komen slecht door de bloed-hersenbarrière, zoals aminoglycosiden. Nieuwe fluoroquinolonen dringen juist goed door in bot. Abcessen moeten vaak gedraineerd worden, omdat antibiotica er moeilijk in doordringen. Aminoglycosiden worden bovendien geïnactiveerd door pus. Ook in hematomen kunnen sommige antibiotica minder goed werken doordat ze aan hemoglobine binden.`}</Inline></p>
      <SubHeading><Inline>{`Richtlijnen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Omdat er veel factoren meespelen, zijn antibioticarichtlijnen belangrijk. In het Erasmus MC worden in eerste instantie de SWAB-richtlijnen gebruikt, en voor kinderen zijn er speciale SWAB-richtlijnen via het Sophia kinderziekenhuis. Richtlijnen helpen bij de keuze, maar vervangen het klinisch denken niet.`}</Inline></p>
      <SubHeading><Inline>{`Voorbeeld: empirische behandeling van ernstige sepsis`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij een ernstig ziek kind met sepsis en onbekende verwekker wordt ceftriaxon gekozen. Dit is een derde generatie cefalosporine en dus een breed-spectrum beta-lactam antibioticum. In Nederland is er weinig resistentie tegen de meest waarschijnlijke verwekkers in dit scenario: meningokok, pneumokok en *H. influenzae*. Voor sepsis is de dosering 50–100 mg/kg/dag in één dosis. Als meningitis niet uitgesloten kan worden en het om een ernstige sepsis gaat, kies je 100 mg/kg/dag.`}</Inline></p>
    </div>
  )
}

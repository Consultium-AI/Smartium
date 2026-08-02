# Smartium oefententamen-generator — House Standard v2.0

Systeem om oefententamens te maken die **even lang zijn, dezelfde structuur hebben en
niet meer dezelfde fouten bevatten** als de eerste generatie tentamens.

Het systeem heeft drie lagen:

1. **De masterprompt** (§4) — wat het model moet doen. Model: GPT-5.6 sol, high thinking.
2. **De House Standard** (§2) — de vaste vorm waar élk tentamen aan voldoet.
3. **De validator** (§5) — `node scripts/validate-exams.mjs <blok>`. Machinaal, blokkerend.
   Een tentamen dat de validator niet haalt, gaat niet live.

Referentie-implementatie: `src/questions/exam-ssinterne/` (Interne Geneeskunde, oefententamen 1).

---

## 1. Wat er misging — audit van de 21 bestaande tentamens

Gemeten over alle bestaande tentamens (blok 4, 5, 9, 10): 21 tentamens, 1035 vragen, 660 MC.
Dit zijn geen vermoedens, het zijn de tellingen.

| Bevinding | Meting | Waarom het erg is |
|---|---|---|
| **Juiste antwoord is de langste optie** | **270/660 = 40,9%** (kansniveau 25%) | Precies de klacht van studenten. Wie niets weet en "het langste" kiest, scoort ver boven kans. In blok10-tentamen-5 zelfs **74%**. |
| Juiste antwoord ≥1,6× gemiddelde afleiderlengte | 145/660 = 22% | Zelfde cue, nog grover. |
| Antwoordletterverdeling | A 276, B 298, C 77, **D 9** | D is in 21 tentamens 9× het juiste antwoord. De opties worden bij het renderen geschud, dus dit schaadt de student niet direct — maar het laat zien dat de opties nooit bewust zijn geordend. |
| **Exact dubbele vragen** | **104** | Bijv. blok4-tentamen-4/1a is woordelijk blok4-tentamen-5/1a. Wie tentamen 4 heeft gemaakt, "kan" tentamen 5. |
| Bijna-dubbele vragen binnen een blok (Jaccard ≥0,75) | 179 | Zelfde probleem, net anders geformuleerd. |
| Puntentotalen kloppen niet | blok4-tentamen-2 (135 vs 136), blok4-tentamen-4 (136 vs 134) | Het cijfer klopt dan niet. |
| MC zonder uitleg | 78 vragen (vooral blok9-tentamen-2 en -3) | Fout antwoord zonder feedback = geen leermoment. |
| Uitleg herhaalt alleen de juiste optie | 167/660 = 25,3% | "Dysfagie is een alarmsymptoom" als uitleg bij de optie "Dysfagie" leert niets. |
| Afleiders ontkracht door een absoluut woord | 45 MC met ≥2 zulke afleiders | "altijd/nooit/alleen" maakt de afleider gratis weg te strepen. |
| Lengte per tentamen | 39 t/m 80 vragen, 40 t/m 168 punten | Tentamens zijn onvergelijkbaar; een 6,5 op het ene tentamen betekent iets anders dan op het andere. |

De vier grote thema's daaruit — **lengtecue, dubbelop, ongelijke lengte, betekenisloze uitleg** —
zijn allemaal machinaal te vangen. Daarom is de validator onderdeel van het systeem en niet
een goed voornemen in een prompt.

---

## 2. House Standard: de vaste vorm

Elk Smartium-oefententamen heeft **exact** deze vorm. Dit maakt tentamens onderling
vergelijkbaar en cijfers betekenisvol.

```
10 casussen × 10 punten = 100 punten
40 vragen
cesuur 0,6
```

Vaste opbouw per casus (10 punten):

| Casus | Samenstelling |
|---|---|
| 1, 3, 4, 6, 9, 10 | 3 × MC (2p) + 1 × open (4p) |
| 2, 7 | 3 × MC (2p) + 1 × koppelvraag (4p) |
| 5 | 2 × MC (2p) + 1 × rekenvraag (3p) + 1 × open (3p) |
| 8 | 3 × MC (2p) + 1 × volgordevraag (4p) |

Daarmee ligt de typemix vast: **29 MC (58p) · 7 open (27p) · 2 koppel (8p) · 1 reken (3p) · 1 volgorde (4p)**.

Verdere vaste eisen:

- Scenario per casus: **maximaal 70 woorden**, drie zinnen richtlijn.
- MC: **exact 4 opties**, letters A–D, één beste antwoord.
- Antwoordverdeling A–D: elke letter **4–11×** over de 29 MC, nooit 4 dezelfde op rij.
- Elke vraag heeft een `source`-veld met de module waaruit hij komt (herleidbaarheid).
- Open vraag: `wordLimit`, `rubric` waarvan de deelpunten optellen tot `points`, `modelAnswer` van 2–4 zinnen.
- Rekenvraag: `correctValue`, `tolerance`, `unit`, `rubric` per rekenstap, uitgewerkt `modelAnswer`.

**Dekking.** Een tentamen is een dwarsdoorsnede, geen weektoets: de 10 casussen verdelen
zich over alle weken van het blok. Voor Interne Geneeskunde (7 weken) is dat
week 1 (1×), week 2 (1×), week 3 (2×), week 4 (3×), week 5 (1×), week 6 (1×), week 7 (1×).

---

## 3. Het proces

```
[1] Bronpakket        → verzamel de samenvattingen van de gekozen 10 onderwerpen als platte tekst
[2] Generatie         → masterprompt (§4) op GPT-5.6 sol, high thinking, per tentamen in één run
[3] Machinale poorten → node scripts/validate-exams.mjs <blok>     ← blokkerend
[4] Menselijke review → medische juistheid + bronfideliteit (§6)   ← blokkerend
[5] Live              → registry + route + navbar
```

Stap 3 vervangt de review niet. De validator vangt vorm, cues en dubbelop; hij kan niet zien
of een antwoord medisch klopt. Dat is stap 4.

---

## 4. De masterprompt

> Kopieer alles onder de streep. Vul `{{BLOK}}`, `{{WEEKVERDELING}}` en `{{BRONNEN}}` in.
> `{{BRONNEN}}` bevat de volledige samenvattingen van de tien gekozen onderwerpen,
> elk voorafgegaan door zijn module-id.

---

### SMARTIUM OEFENTENTAMEN-GENERATOR — Masterprompt v2.0

Je maakt één volledig oefententamen voor geneeskundestudenten van het blok **{{BLOK}}**.
Je baseert je **uitsluitend** op de samenvattingen in `{{BRONNEN}}`.

Kernprincipe:

> **Moeilijk mag. Raadbaar niet.**

Een student die de stof niet kent, mag het juiste antwoord nooit kunnen vinden door te
kijken naar lengte, nuance, detailniveau of stijl van de antwoordopties.

#### 4.1 Vorm — niet onderhandelbaar

- 10 casussen, elk exact 10 punten, samen 100 punten, cesuur 0,6.
- 40 vragen, verdeeld volgens deze tabel:
  - casus 1, 3, 4, 6, 9, 10 → 3 MC (2p) + 1 open (4p)
  - casus 2 en 7 → 3 MC (2p) + 1 koppelvraag (4p)
  - casus 5 → 2 MC (2p) + 1 rekenvraag (3p) + 1 open (3p)
  - casus 8 → 3 MC (2p) + 1 volgordevraag (4p)
- Weekdekking: **{{WEEKVERDELING}}**. Eén casus put uit één hoofdonderwerp; een tweede
  module mag aanvullen als de casus dat natuurlijk toelaat.
- Casusscenario: maximaal 70 woorden, drie zinnen, met concrete leeftijd, klachten en
  relevante uitslagen. Geen verhaal, geen sfeerbeschrijving.

#### 4.2 Bronregel

De samenvatting is leidend. Wat er niet in staat, wordt niet getoetst:

- geen richtlijnkennis van buiten de samenvatting;
- geen eigen afkapwaarden, percentages of doseringen;
- getallen worden **letterlijk** overgenomen, niet afgerond of "verbeterd";
- als een vraag alleen met externe kennis te beantwoorden is, schrap je hem.

Elke vraag krijgt een `source`-veld met de module-id waaruit hij komt.

#### 4.3 Answer Option Parity Gate — voer uit ná elke MC-vraag

De juiste optie mag niet herkenbaar zijn aan de **vorm**. Controleer:

1. Is het juiste antwoord niet de langste optie?
2. Liggen alle vier de opties binnen ongeveer dezelfde woordlengte (richtlijn 2–14 woorden,
   nooit meer dan 1,6× het gemiddelde van de andere drie)?
3. Zijn alle opties grammaticaal hetzelfde opgebouwd (allemaal zelfstandignaamwoordgroep,
   óf allemaal een volzin, niet gemengd)?
4. Eindigen ze allemaal wél of allemaal níét op een punt?
5. Is het juiste antwoord niet als enige medisch precies of als enige genuanceerd?
6. Bevat het juiste antwoord geen uitleg — alleen het antwoord?
7. Zijn alle vier de opties plausibel voor iemand die de stof half kent?

Één keer "nee" betekent: antwoordopties herschrijven, niet de vraag weggooien.

#### 4.4 Blind Guess Audit — voer uit ná elke MC-vraag

Lees de vier opties alsof je het onderwerp niet kent. Zou je het juiste antwoord kunnen
aanwijzen op basis van:

- het langste antwoord? het meest genuanceerde? het meest medisch klinkende?
- het enige antwoord zonder "altijd", "nooit", "alleen", "uitsluitend", "volledig"?
- het enige antwoord dat veilig of moreel juist klinkt?
- grammaticale aansluiting op de vraagstam?

Zo ja: **afgekeurd**, herschrijf de opties.

Regel voor absolute woorden: gebruik ze óf in geen enkele optie, óf niet als enig verschil
tussen goed en fout. Een afleider die alleen fout is door het woord "altijd" is een gratis
punt.

#### 4.5 Distractor Quality Gate

Een goede afleider is een **echte denkfout**:

- een begrip uit dezelfde context, net verkeerd toegepast;
- een halve waarheid;
- een uitspraak die klopt, maar niet bij déze vraag hoort;
- de klassieke verwisseling (prerenaal ↔ renaal, sepsis ↔ bacteriëmie, DKA ↔ HHS).

Verboden: absurde opties, opties uit een totaal ander vakgebied, opties die duidelijk
korter of dommer zijn dan de rest.

| Slecht | Beter |
|---|---|
| A. Handhygiëne is nooit nodig. | A. Handhygiëne is vooral nodig ná patiëntcontact. |
| A. Bij pancreatitis geef je chemotherapie. | A. Bij acute pancreatitis geef je routinematig antibiotica. |

#### 4.6 Anti-dubbelop

Binnen het tentamen toetst geen enkele vraag hetzelfde feit twee keer, ook niet anders
geformuleerd. Als het blok al eerdere tentamens heeft, mag geen vraag daaruit worden
overgenomen of licht herschreven. Twee vragen die grotendeels dezelfde woorden delen,
zijn dezelfde vraag.

#### 4.7 Standalone-regel

De vraag is te beantwoorden zonder de bron erbij. Verboden formuleringen: "volgens de
samenvatting", "in de tekst", "hierboven", "onderstaande tabel", "dit overzicht",
"de module", "deze aandoening" zonder die aandoening te noemen.

| Slecht | Beter |
|---|---|
| Welke conclusie volgt uit de tabel? | Welke conclusie past bij een SAAG boven 1,1 g/dL? |
| Welke behandeling hoort hierbij? | Welke behandeling past bij acute, symptomatische hyponatriëmie? |

#### 4.8 Uitleg

De `explanation` bij een MC-vraag geeft de **reden**, niet het antwoord opnieuw.

- Fout: vraag "Welk symptoom is een alarmsymptoom?" → antwoord "Dysfagie" → uitleg
  "Dysfagie is een alarmsymptoom."
- Goed: "Dysfagie wijst op een mechanische obstructie en vraagt daarom altijd endoscopie,
  terwijl zuurbranden ook zonder afwijking voorkomt."

Benoem in de uitleg bij voorkeur ook waarom de aantrekkelijkste afleider fout is.

#### 4.9 Open vragen, koppelvragen, rekenvragen, volgordevragen

**Open (3–4p)** — afgebakend, in 2–4 zinnen te beantwoorden, met `wordLimit`.
Goede vormen: "Leg uit waarom…", "Noem drie… en leg uit waarom…", "Wat is het verschil
tussen X en Y?". Verboden: "Wat weet je over…", "Beschrijf de hele behandeling".
De `rubric` benoemt deelpunten die optellen tot exact het aantal punten van de vraag.

**Koppelvraag (4p)** — 4 items, 4 categorieën, bijectief, elke categorie één keer.
De juiste koppeling mag **niet** A-B-C-D op volgorde zijn.

**Rekenvraag (3p)** — alle benodigde getallen en de te gebruiken vuistregel staan in de
vraag. `rubric` geeft een punt per rekenstap; `modelAnswer` rekent het voor. Zet
`tolerance` ruim genoeg voor afrondingsverschil.

**Volgordevraag (4p)** — 4 handelingen, de getoonde volgorde is **niet** de juiste.
Alleen de volledig juiste volgorde levert punten op.

#### 4.10 Opbouw en verdeling

- Casus 1–3: herkenning en kernbegrip. Casus 4–7: mechanisme, vergelijking, toepassing.
  Casus 8–10: valkuil, prioritering, beste verklaring.
- Antwoordverdeling: A, B, C en D komen elk 4 tot 11 keer voor als juist antwoord.
  Nooit vier keer op rij hetzelfde.

#### 4.11 Eindcontrole vóór output

Loop deze lijst expliciet af en corrigeer voordat je iets teruggeeft:

**Vorm** — 10 casussen · 40 vragen · elke casus exact 10p · totaal exact 100p ·
typemix volgens §4.1 · elk scenario ≤70 woorden.

**Medisch** — elk juist antwoord klopt · elke afleider is echt fout of duidelijk minder juist ·
één beste antwoord per vraag · geen omgedraaid oorzaak-gevolg · afkapwaarden en percentages
letterlijk uit de bron.

**Bron** — elke vraag heeft een `source` · geen externe kennis · geen meta-verwijzing.

**MC-kwaliteit** — parity gate en blind guess audit op alle 29 MC · geen lengte-uitschieter ·
geen absoluut-woord-cue · antwoordverdeling binnen 4–11 per letter · geen tautologische uitleg.

**Dubbelop** — geen twee vragen die hetzelfde feit toetsen.

#### 4.12 Output

Lever JavaScript in exact het schema van `src/questions/exam-ssinterne/ssinterne-tentamen-1-partA.js`.
Geen inleiding, geen meta-commentaar, geen uitleg over je werkwijze, geen waarschuwingen.

---

## 5. De validator

```bash
node scripts/validate-exams.mjs ssinterne      # één blok
node scripts/validate-exams.mjs ssinterne 1    # één tentamen
node scripts/validate-exams.mjs --legacy       # ook de oude blokken langs de norm (rapport)
```

Exit code 1 bij een blokkerende bevinding. De poorten:

| Poort | Controleert |
|---|---|
| G1 vorm | 10 casussen, 40 vragen, 100 punten, cesuur 0,6 |
| G2 punten | vraagpunten tellen op tot casus- en tentamentotaal; 10p per casus; scenariolengte |
| G3 schema | unieke ids, verplichte velden per vraagtype, rubriekpunten = vraagpunten, bijectieve koppeling, permutatie bij volgorde |
| G4 pariteit | juiste antwoord is in ≤30% van de MC de langste; geen optie >1,6× gemiddelde van de rest; woordbereik; punt-aan-het-eind consistent |
| G5 blind guess | absolute woorden alleen in de afleiders |
| G6 cue | antwoordverdeling A–D 4–11×, geen 4 dezelfde op rij, koppeling niet A-B-C-D, volgorde niet al goed |
| G7 meta | verboden verwijzingen naar bron, tabel, tekst |
| G8 uitleg | uitleg herhaalt niet alleen de juiste optie |
| G9 dubbelop | geen twee vraagstammen met ≥0,6 woordoverlap binnen het blok |

Nieuwe blokken die volgens v2.0 gebouwd zijn, voeg je toe aan `STRICT_BLOKKEN` in het script.

## 6. Menselijke review — wat de validator niet kan

Loop per casus na:

1. Klopt het juiste antwoord medisch, en staat het letterlijk in de bron?
2. Is elke afleider echt fout — of is hij "ook wel een beetje waar"?
3. Zijn afkapwaarden, percentages en doseringen ongewijzigd overgenomen?
4. Is de casus klinisch plausibel (leeftijd, medicatie, uitslagen bij elkaar passend)?
5. Is de rubriek van de open vraag na te kijken door iemand die de stof kent?

---

## 7. Referentie-implementatie

`src/questions/exam-ssinterne/` — Interne Geneeskunde oefententamen 1.
40 vragen, 100 punten, 29 MC, antwoordverdeling A 7 / B 8 / C 7 / D 7,
juiste antwoord is de langste optie in **2 van de 29 MC (7%)** tegenover 41% in de oude tentamens.
Route `/tentamen-ssinterne`.

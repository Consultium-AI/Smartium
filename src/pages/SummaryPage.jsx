import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import {
  FileText, Home, BookOpen, Clock, ChevronDown, ChevronRight,
  GraduationCap, Calendar, Stethoscope, ClipboardCheck, Shield
} from 'lucide-react'
import { useState } from 'react'
import { Header, BackButton, Footer } from './summary/SummaryShared'
import { EmbryogeneseSummary } from './summary/SummaryEmbryogenese'
import { FoetaleBeeldvormingSummary } from './summary/SummaryFoetaleBeeldvorming'
import { ExtraEmbryonaalSummary } from './summary/SummaryExtraEmbryonaal'
import { ExtremiteitenSummary } from './summary/SummaryExtremiteiten'
import {
  AangeborenImmuniteitHerkenningSummary,
  IntroductieBacteriologieSummary,
  IntroductieImmunologieSummary,
  IntroductieMycologieSummary,
  IntroductieParasitologieSummary,
  IntroductieVirologieSummary,
  VoorbereidingVOWMicrobiologieSummary,
} from './summary/SummaryBlok4Week1'
import {
  AangeborenImmuniteitResponsSummary,
  AntibioticaLeerlijnSummary,
  IntroductieAntimicrobieleTherapieSummary,
  UrineweginfectiesSummary,
  InfectiepreventieSummary,
  IntroductieLuchtweginfectiesSummary,
  MicroscopischeAnatomieLuchtwegenSummary,
  PathofysiologieViraleLuchtweginfectiesSummary,
  VervolgIntroductieVirologie2Summary,
  ViraleDiagnostiekSummary,
} from './summary/SummaryBlok4Week2'
import {
  CytokinenSummary,
  InfectieuzeOorzakenKoortsSummary,
  NietInfectieuzeOorzakenKoortsSummary,
  OntstekingsmediatorenSummary,
  WatIsKoortsSummary,
  SpecifiekeVerwekkersLagereLuchtweginfectiesSummary,
  TherapieLagereLuchtweginfectiesSummary,
  HomingMigratieRecirculatieSummary,
  InfectieuzeLymfadenopathieSummary,
  IntroductieVerworvenImmuniteitSummary,
  SecundaireLymfoideOrganenSummary,
} from './summary/SummaryBlok4Week3'
import {
  AntiviraleTherapieSummary,
  DeGroteDrieMalariaSummary,
  DuurzameHivZorgSummary,
  ImmunologischeConsequentiesHivSummary,
} from './summary/SummaryBlok4Week4'
import TuberculoseBijMigrantenSummary from '../summaries/TuberculoseBijMigrantenSummary'
import TuberculoseInleidingSummary from '../summaries/TuberculoseInleidingSummary'
import Lme5SchimmelinfectiesSummary from '../summaries/lme5-schimmelinfecties/Lme5SchimmelinfectiesSummary'
import Lme6VoorbereidingVowMiltSummary from '../summaries/lme6-voorbereiding-vow-milt/Lme6VoorbereidingVowMiltSummary'
import Lme1ParasitaireVerwekkersSummary from '../summaries/lme1-parasitaire-verwekkers-gastro-enteritis/Lme1ParasitaireVerwekkersSummary'
import Lme2ViraleVerwekkersSummary from '../summaries/lme2-virale-verwekkers-gastro-enteritis/Lme2ViraleVerwekkersSummary'
import Lme3WelkAntibioticumKiesIkSummary from '../summaries/lme3-welk-antibioticum-kies-ik/Lme3WelkAntibioticumKiesIkSummary'
import Casus10Lme1DwangEnDrangSummary from '../summaries/casus10-lme1-dwang-en-drang-historisch-perspectief/Casus10Lme1DwangEnDrangSummary'
import Casus10Lme2ImmunomodulatieSummary from '../summaries/casus10-lme2-immunomodulatie/Casus10Lme2ImmunomodulatieSummary'
import Casus10Lme3RechtvaardigingSummary from '../summaries/casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas/Casus10Lme3RechtvaardigingSummary'
import Casus10Lme4WiskundeVaccinatieSummary from '../summaries/casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie/Casus10Lme4WiskundeVaccinatieSummary'
import Casus11Lme1LeefstijlSummary from '../summaries/casus11-lme1-leefstijl-en-immuunsysteem/Casus11Lme1LeefstijlSummary'
import * as Casus12LME1Summaries from '../summaries/casus12-lme1-antibioticaresistentie-en-therapie'
import Casus12Lme2SepsisSummary from '../summaries/casus12-lme2-sepsis/Casus12Lme2SepsisSummary'
import Casus12Lme3PatientMedicatieveiligheidSummary from '../summaries/casus12-lme3-patient-en-medicatieveiligheid/Casus12Lme3PatientMedicatieveiligheidSummary'
import Casus12Lme4ZorggerelateerdeInfectiesSummary from '../summaries/casus12-lme4-zorggerelateerde-infecties/Casus12Lme4ZorggerelateerdeInfectiesSummary'
import Casus13Lme1AntibioticaIntroductieSummary from '../summaries/casus13-lme1-antibiotica-introductie/Casus13Lme1AntibioticaIntroductieSummary'
import Casus13Lme2AntibioticaResistentieSummary from '../summaries/casus13-lme2-antibiotica-resistentie/Casus13Lme2AntibioticaResistentieSummary'

// Main Summary Page Component
const SummaryPage = () => {
  const [searchParams] = useSearchParams()
  const lme = searchParams.get('lme') || 'index'
  const [expandedBlok, setExpandedBlok] = useState(null)

  const courseStructure = {
    blok3: {
      name: "Blok 3: Groei en Ontwikkeling II",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 1: Van embryo naar baby",
              lmes: [
                { id: "embryogenese", name: "Embryogenese Bouwplan", available: true },
                { id: "beeldvorming", name: "Foetale beeldvorming en de 13 wekenecho", available: true },
                { id: "extraembryonaal", name: "Het embryo en de extra embryonale structuren", available: true }
              ]
            },
            {
              name: "Casus 2: Spina bifida",
              lmes: [
                { id: "extremiteiten", name: "Ontwikkeling extremiteiten en gewrichtsleer", available: true }
              ]
            }
          ]
        }
      ]
    },
    blok4: {
      name: "Blok 4: Microbiologie en Immunologie",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 1: Algemene introductie",
              lmes: [
                { id: "aangeboren-immuniteit-herkenning", name: "Aangeboren immuniteit - herkenning", available: true },
                { id: "introductie-bacteriologie", name: "Introductie bacteriologie", available: true },
                { id: "introductie-immunologie", name: "Introductie en overzicht immunologie", available: true },
                { id: "introductie-mycologie", name: "Introductie mycologie", available: true },
                { id: "introductie-parasitologie", name: "Introductie parasitologie", available: true },
                { id: "introductie-virologie", name: "Introductie virologie – deel 1", available: true },
                { id: "voorbereiding-vow-microbiologie", name: "Voorbereiding VOW Microbiologie", available: true }
              ]
            },
            {
              name: "Casus 2: Vrouw met Urineweginfectie",
              lmes: [
                { id: "aangeboren-immuniteit-respons", name: "Aangeboren immuniteit – respons", available: true },
                { id: "antibiotica-leerlijn", name: "Antibiotica leerlijn", available: true },
                { id: "introductie-antimicrobiele-therapie", name: "Introductie antimicrobiële therapie", available: true },
                { id: "urineweginfecties", name: "Urineweginfecties", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 2",
          cases: [
            {
              name: "Casus 3: Kind met RS-virus",
              lmes: [
                { id: "infectiepreventie", name: "Infectiepreventie", available: true },
                { id: "introductie-luchtweginfecties", name: "Introductie luchtweginfecties", available: true },
                { id: "microscopische-anatomie-luchtwegen", name: "Microscopische anatomie luchtwegen", available: true },
                { id: "pathofysiologie-virale-luchtweginfecties", name: "Pathofysiologie virale luchtweginfecties", available: true },
                { id: "vervolg-introductie-virologie-2", name: "Vervolg introductie virologie 2", available: true },
                { id: "virale-diagnostiek", name: "Virale diagnostiek", available: true }
              ]
            },
            {
              name: "Casus 4: Kind met koorts",
              lmes: [
                { id: "cytokinen", name: "Cytokinen", available: true },
                { id: "infectieuze-oorzaken-koorts", name: "Infectieuze oorzaken van koorts bij kinderen", available: true },
                { id: "niet-infectieuze-oorzaken-koorts", name: "Niet-infectieuze oorzaken van koorts bij kinderen", available: true },
                { id: "ontstekingsmediatoren", name: "Ontstekingsmediatoren", available: true },
                { id: "wat-is-koorts", name: "Wat is koorts", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 3",
          cases: [
            {
              name: "Casus 5: Onderste luchtweginfectie",
              lmes: [
                { id: "specifieke-verwekkers-lagere-luchtweginfecties", name: "Specifieke verwekkers lagere luchtweginfecties", available: true },
                { id: "therapie-lagere-luchtweginfecties", name: "Therapie lagere luchtweginfecties", available: true }
              ]
            },
            {
              name: "Casus 6: Lymfeklier",
              lmes: [
                { id: "homing-migratie-recirculatie", name: "Homing, migratie en recirculatie", available: true },
                { id: "infectieuze-lymfadenopathie", name: "Infectieuze lymfadenopathie – tweede lijn", available: true },
                { id: "introductie-verworven-immuniteit", name: "Introductie verworven immuniteit", available: true },
                { id: "secundaire-lymfoide-organen", name: "Secundaire lymfoïde organen", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 4",
          cases: [
            {
              name: "Casus 8: HIV",
              lmes: [
                { id: "antivirale-therapie", name: "Antivirale therapie", available: true },
                { id: "de-grote-drie-malaria", name: "De grote drie Malaria", available: true },
                { id: "duurzame-hiv-zorg", name: "Duurzame hiv zorg in sub-Sahara-Afrika", available: true },
                { id: "immunologische-consequenties-hiv", name: "Immunologische consequenties hiv", available: true },
                { id: "tuberculose-bij-migranten", name: "Tuberculose bij migranten", available: true },
                { id: "tuberculose-inleiding", name: "Tuberculose – een inleiding", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 5",
          cases: [
            {
              name: "Casus 7",
              lmes: [
                { id: "lme5-schimmelinfecties", name: "Schimmelinfecties van de huid, nagels en haren", available: true },
                { id: "lme6-voorbereiding-vow-milt", name: "Voorbereiding VOW Milt", available: true }
              ]
            },
            {
              name: "Casus 9",
              lmes: [
                { id: "lme1-parasitaire-verwekkers-gastro-enteritis", name: "Parasitaire verwekkers van gastro-enteritis", available: true },
                { id: "lme2-virale-verwekkers-gastro-enteritis", name: "Virale verwekkers van gastro-enteritis", available: true },
                { id: "lme3-welk-antibioticum-kies-ik", name: "Welk antibioticum kies ik", available: true }
              ]
            },
            {
              name: "Casus 10: Vaccinatie",
              lmes: [
                { id: "casus10-lme1-dwang-en-drang-historisch-perspectief", name: "Dwang en drang in historisch perspectief", available: true },
                { id: "casus10-lme2-immunomodulatie", name: "Immunomodulatie", available: true },
                { id: "casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas", name: "Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren", available: true },
                { id: "casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie", name: "Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 6",
          cases: [
            {
              name: "Casus 11: Primaire immuundeficiënties",
              lmes: [
                { id: "casus11-lme1-leefstijl-en-immuunsysteem", name: "Leefstijl en immuunsysteem", available: true }
              ]
            },
            {
              name: "Casus 12: Lijninfecties & resistenties",
              lmes: [
                { id: "casus12-lme1-antibioticaresistentie-en-therapie", name: "Antibioticaresistentie en therapie", available: true },
                { id: "casus12-lme2-sepsis", name: "Sepsis", available: true },
                { id: "casus12-lme3-patient-en-medicatieveiligheid", name: "Patient- en medicatieveiligheid", available: true },
                { id: "casus12-lme4-zorggerelateerde-infecties", name: "Zorggerelateerde infecties", available: true }
              ]
            }
          ]
        },
        {
          name: "Week 7",
          cases: [
            {
              name: "Casus 13: Een piloot met koorts",
              lmes: [
                { id: "casus13-lme1-antibiotica-introductie", name: "Antibiotica Introductie", available: true },
                { id: "casus13-lme2-antibiotica-resistentie", name: "Antibiotica Resistentie", available: true }
              ]
            }
          ]
        }
      ]
    }
  }

  const getImageIdsForLme = (baseId, imageCount) =>
    Array.from({ length: imageCount }, (_, i) => ({
      id: `${baseId}-image${String(i + 1).padStart(2, '0')}`,
      name: `Afbeelding ${i + 1}`
    }))

  // Render specific LME content
  if (lme === 'embryogenese') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <EmbryogeneseSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'beeldvorming') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <FoetaleBeeldvormingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'extraembryonaal') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <ExtraEmbryonaalSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'extremiteiten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <ExtremiteitenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'aangeboren-immuniteit-herkenning') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <AangeborenImmuniteitHerkenningSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-bacteriologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieBacteriologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-immunologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieImmunologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-mycologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieMycologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-parasitologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieParasitologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-virologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieVirologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'voorbereiding-vow-microbiologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <VoorbereidingVOWMicrobiologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'aangeboren-immuniteit-respons') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <AangeborenImmuniteitResponsSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'antibiotica-leerlijn') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <AntibioticaLeerlijnSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-antimicrobiele-therapie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieAntimicrobieleTherapieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'urineweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <UrineweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'infectiepreventie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <InfectiepreventieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-luchtweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieLuchtweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'microscopische-anatomie-luchtwegen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <MicroscopischeAnatomieLuchtwegenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'pathofysiologie-virale-luchtweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <PathofysiologieViraleLuchtweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'vervolg-introductie-virologie-2') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <VervolgIntroductieVirologie2Summary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'virale-diagnostiek') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <ViraleDiagnostiekSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'cytokinen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <CytokinenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'infectieuze-oorzaken-koorts') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <InfectieuzeOorzakenKoortsSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'niet-infectieuze-oorzaken-koorts') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <NietInfectieuzeOorzakenKoortsSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'ontstekingsmediatoren') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <OntstekingsmediatorenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'wat-is-koorts') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <WatIsKoortsSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'specifieke-verwekkers-lagere-luchtweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <SpecifiekeVerwekkersLagereLuchtweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'therapie-lagere-luchtweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <TherapieLagereLuchtweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'homing-migratie-recirculatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <HomingMigratieRecirculatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'infectieuze-lymfadenopathie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <InfectieuzeLymfadenopathieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'introductie-verworven-immuniteit') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <IntroductieVerworvenImmuniteitSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'secundaire-lymfoide-organen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <SecundaireLymfoideOrganenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'antivirale-therapie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <AntiviraleTherapieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'de-grote-drie-malaria') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <DeGroteDrieMalariaSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'duurzame-hiv-zorg') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <DuurzameHivZorgSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'immunologische-consequenties-hiv') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <ImmunologischeConsequentiesHivSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'tuberculose-bij-migranten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <TuberculoseBijMigrantenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'tuberculose-inleiding') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <TuberculoseInleidingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'lme5-schimmelinfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme5SchimmelinfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'lme6-voorbereiding-vow-milt') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme6VoorbereidingVowMiltSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'lme1-parasitaire-verwekkers-gastro-enteritis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme1ParasitaireVerwekkersSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'lme2-virale-verwekkers-gastro-enteritis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme2ViraleVerwekkersSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'lme3-welk-antibioticum-kies-ik') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme3WelkAntibioticumKiesIkSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus10-lme1-dwang-en-drang-historisch-perspectief') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10Lme1DwangEnDrangSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus10-lme2-immunomodulatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10Lme2ImmunomodulatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10Lme3RechtvaardigingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10Lme4WiskundeVaccinatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus11-lme1-leefstijl-en-immuunsysteem') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus11Lme1LeefstijlSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus12-lme3-patient-en-medicatieveiligheid') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12Lme3PatientMedicatieveiligheidSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus12-lme4-zorggerelateerde-infecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12Lme4ZorggerelateerdeInfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus13-lme1-antibiotica-introductie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus13Lme1AntibioticaIntroductieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus13-lme2-antibiotica-resistentie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus13Lme2AntibioticaResistentieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus12-lme2-sepsis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12Lme2SepsisSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'casus12-lme1-antibioticaresistentie-en-therapie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12Lme1AntibioticaresistentieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  // Default: show index/navigation
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
      <Header />

      <main className="container-custom py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-1 text-center tracking-tight">
            Samenvattingen
          </h1>
          <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Kies je blok en week — elke LME opent de volledige samenvatting.
          </p>

          <div className="space-y-4">
          <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5">
            <button
              type="button"
              onClick={() => setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-500/30 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {courseStructure.blok3.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">1 week · 2 casussen · 4 LME's</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok3' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                >
                  <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                    {courseStructure.blok3.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-primary-500/20 dark:ring-primary-400/30" />
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                            <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                          </div>
                        </div>

                        {week.cases.map((casus, casusIndex) => (
                          <div key={casusIndex} className="mb-5 last:mb-0">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                              </div>
                              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                            </div>

                            <div className="ml-0 sm:ml-2 space-y-2">
                              {casus.lmes.map((lmeItem, lmeIndex) => (
                                <Link
                                  key={lmeIndex}
                                  to={`/summary?lme=${lmeItem.id}`}
                                  className="group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                    bg-white dark:bg-slate-800/60
                                    border-slate-200/90 dark:border-slate-600/90
                                    hover:border-emerald-400/70 dark:hover:border-emerald-500/45
                                    hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                      <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                        {lmeItem.name}
                                      </span>
                                      <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                          <Clock className="w-3 h-3 shrink-0 opacity-80" />
                                          ~15 min
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <Link to="/oefenvragen" className="block ml-0 sm:ml-2 mt-4">
                          <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                            bg-accent-50 dark:bg-accent-500/10
                            border-accent-200/90 dark:border-accent-500/25
                            hover:border-accent-400 dark:hover:border-accent-400/40
                            hover:shadow-md dark:hover:shadow-accent-950/20">
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="p-2 rounded-lg bg-accent-200/90 dark:bg-accent-500/20 shrink-0">
                                <ClipboardCheck className="w-4 h-4 text-accent-800 dark:text-accent-300" />
                              </div>
                              <div className="min-w-0">
                                <span className="font-medium text-accent-900 dark:text-accent-200 text-sm">
                                  Alle oefenvragen
                                </span>
                                <p className="text-xs text-accent-700 dark:text-accent-400/90">67 meerkeuzevragen</p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-accent-600 dark:text-accent-400 shrink-0" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5">
            <button
              type="button"
              onClick={() => setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-500/30 rounded-xl">
                  <Shield className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {courseStructure.blok4.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">7 weken · 13 casussen · 46 LME's</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok4' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                >
                  <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                    {courseStructure.blok4.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="mb-8 last:mb-0 border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-indigo-500 dark:bg-indigo-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-indigo-500/20 dark:ring-indigo-400/30" />
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800/90 dark:border dark:border-slate-700/80 rounded-lg">
                            <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                            <span className="font-medium text-slate-700 dark:text-slate-200 text-sm">{week.name}</span>
                          </div>
                        </div>

                        {week.cases.map((casus, casusIndex) => (
                          <div key={casusIndex} className="mb-5 last:mb-0">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-amber-100 dark:bg-amber-500/15 dark:ring-1 dark:ring-amber-500/25 rounded-lg">
                                <Stethoscope className="w-4 h-4 text-amber-800 dark:text-amber-400" />
                              </div>
                              <span className="font-medium text-slate-800 dark:text-slate-200 text-sm">{casus.name}</span>
                            </div>

                            <div className="ml-0 sm:ml-2 space-y-2">
                              {casus.lmes.map((lmeItem, lmeIndex) => (
                                lmeItem.type === 'image-based' ? (
                                  <div key={lmeIndex} className="space-y-2 rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/70 dark:bg-slate-800/40 p-3">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
                                      <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                      <span>{lmeItem.name} ({lmeItem.imageCount} afbeeldingen)</span>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                      {getImageIdsForLme(lmeItem.baseId, lmeItem.imageCount).map((img) => (
                                        <Link
                                          key={img.id}
                                          to={`/summary?lme=${img.id}`}
                                          className="text-center px-3 py-2.5 rounded-lg border text-sm transition-all
                                            bg-slate-50 dark:bg-slate-900/60
                                            border-slate-200 dark:border-slate-600
                                            text-slate-700 dark:text-slate-200
                                            hover:border-emerald-400 dark:hover:border-emerald-500/50
                                            hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10
                                            hover:text-emerald-900 dark:hover:text-emerald-300"
                                        >
                                          {img.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                <Link
                                  key={lmeIndex}
                                  to={`/summary?lme=${lmeItem.id}`}
                                  className="group flex items-center justify-between gap-3 p-3.5 rounded-xl border transition-all
                                    bg-white dark:bg-slate-800/60
                                    border-slate-200/90 dark:border-slate-600/90
                                    hover:border-emerald-400/70 dark:hover:border-emerald-500/45
                                    hover:shadow-md dark:hover:shadow-emerald-950/20 hover:bg-emerald-50/50 dark:hover:bg-slate-800/95"
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 dark:ring-1 dark:ring-emerald-500/20 shrink-0">
                                      <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="font-medium text-slate-800 dark:text-slate-100 text-sm leading-snug block group-hover:text-emerald-900 dark:group-hover:text-emerald-300 transition-colors">
                                        {lmeItem.name}
                                      </span>
                                      <div className="flex items-center gap-3 mt-1">
                                        <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                          <Clock className="w-3 h-3 shrink-0 opacity-80" />
                                          ~15 min
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 shrink-0 transition-colors" />
                                </Link>
                                )
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default SummaryPage

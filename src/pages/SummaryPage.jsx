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
import * as LME6Summaries from '../summaries/lme6-voorbereiding-vow-milt'
import * as LME1Summaries from '../summaries/lme1-parasitaire-verwekkers-gastro-enteritis'
import * as LME2Summaries from '../summaries/lme2-virale-verwekkers-gastro-enteritis'
import * as LME3Summaries from '../summaries/lme3-welk-antibioticum-kies-ik'
import * as Casus10LME1Summaries from '../summaries/casus10-lme1-dwang-en-drang-historisch-perspectief'
import * as Casus10LME2Summaries from '../summaries/casus10-lme2-immunomodulatie'
import * as Casus10LME3Summaries from '../summaries/casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas'
import * as Casus10LME4Summaries from '../summaries/casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie'
import * as Casus11LME1Summaries from '../summaries/casus11-lme1-leefstijl-en-immuunsysteem'
import * as Casus12LME1Summaries from '../summaries/casus12-lme1-antibioticaresistentie-en-therapie'
import * as Casus12LME2Summaries from '../summaries/casus12-lme2-sepsis'
import * as Casus12LME3Summaries from '../summaries/casus12-lme3-patient-en-medicatieveiligheid'
import * as Casus12LME4Summaries from '../summaries/casus12-lme4-zorggerelateerde-infecties'
import * as Casus13LME1Summaries from '../summaries/casus13-lme1-antibiotica-introductie'
import * as Casus13LME2Summaries from '../summaries/casus13-lme2-antibiotica-resistentie'

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
                { id: "lme6-voorbereiding-vow-milt", name: "Voorbereiding VOW Milt", type: "image-based", baseId: "lme6-voorbereiding-vow-milt", imageCount: 14 }
              ]
            },
            {
              name: "Casus 9",
              lmes: [
                { id: "lme1-parasitaire-verwekkers-gastro-enteritis", name: "Parasitaire verwekkers van gastro-enteritis", type: "image-based", baseId: "lme1-parasitaire-verwekkers-gastro-enteritis", imageCount: 11 },
                { id: "lme2-virale-verwekkers-gastro-enteritis", name: "Virale verwekkers van gastro-enteritis", type: "image-based", baseId: "lme2-virale-verwekkers-gastro-enteritis", imageCount: 24 },
                { id: "lme3-welk-antibioticum-kies-ik", name: "Welk antibioticum kies ik", type: "image-based", baseId: "lme3-welk-antibioticum-kies-ik", imageCount: 14 }
              ]
            },
            {
              name: "Casus 10: Vaccinatie",
              lmes: [
                { id: "casus10-lme1-dwang-en-drang-historisch-perspectief", name: "Dwang en drang in historisch perspectief", type: "image-based", baseId: "casus10-lme1-dwang-en-drang-historisch-perspectief", imageCount: 25 },
                { id: "casus10-lme2-immunomodulatie", name: "Immunomodulatie", type: "image-based", baseId: "casus10-lme2-immunomodulatie", imageCount: 27 },
                { id: "casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas", name: "Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren", type: "image-based", baseId: "casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas", imageCount: 35 },
                { id: "casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie", name: "Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie", type: "image-based", baseId: "casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie", imageCount: 38 }
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
                { id: "casus11-lme1-leefstijl-en-immuunsysteem", name: "Leefstijl en immuunsysteem", type: "image-based", baseId: "casus11-lme1-leefstijl-en-immuunsysteem", imageCount: 21 }
              ]
            },
            {
              name: "Casus 12: Lijninfecties & resistenties",
              lmes: [
                { id: "casus12-lme1-antibioticaresistentie-en-therapie", name: "Antibioticaresistentie en therapie", type: "image-based", baseId: "casus12-lme1-antibioticaresistentie-en-therapie", imageCount: 15 },
                { id: "casus12-lme2-sepsis", name: "Sepsis", type: "image-based", baseId: "casus12-lme2-sepsis", imageCount: 32 },
                { id: "casus12-lme3-patient-en-medicatieveiligheid", name: "Patient- en medicatieveiligheid", type: "image-based", baseId: "casus12-lme3-patient-en-medicatieveiligheid", imageCount: 35 },
                { id: "casus12-lme4-zorggerelateerde-infecties", name: "Zorggerelateerde infecties", type: "image-based", baseId: "casus12-lme4-zorggerelateerde-infecties", imageCount: 36 }
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
                { id: "casus13-lme1-antibiotica-introductie", name: "Antibiotica Introductie", type: "image-based", baseId: "casus13-lme1-antibiotica-introductie", imageCount: 24 },
                { id: "casus13-lme2-antibiotica-resistentie", name: "Antibiotica Resistentie", type: "image-based", baseId: "casus13-lme2-antibiotica-resistentie", imageCount: 18 }
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Lme5SchimmelinfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  // LME 6: Voorbereiding VOW Milt (Week 5 Casus 7)
  const lme6ComponentMap = {
    'lme6-voorbereiding-vow-milt-image01': 'Image01IntroductieSummary',
    'lme6-voorbereiding-vow-milt-image02': 'Image02MenuSummary',
    'lme6-voorbereiding-vow-milt-image03': 'Image03FunctiesDiagramSummary',
    'lme6-voorbereiding-vow-milt-image04': 'Image04FunctiesVideoSummary',
    'lme6-voorbereiding-vow-milt-image05': 'Image05StructurenMiltSummary',
    'lme6-voorbereiding-vow-milt-image06': 'Image06RodeWittePulpaSummary',
    'lme6-voorbereiding-vow-milt-image07': 'Image07RodePulpaStructurenSummary',
    'lme6-voorbereiding-vow-milt-image08': 'Image08WittePulpaStructurenSummary',
    'lme6-voorbereiding-vow-milt-image09': 'Image09PALSSummary',
    'lme6-voorbereiding-vow-milt-image10': 'Image10OpenGeslotenCirculatieSummary',
    'lme6-voorbereiding-vow-milt-image11': 'Image11OpenCirculatieBelangrijkSummary',
    'lme6-voorbereiding-vow-milt-image12': 'Image12OpenCirculatieRouteSummary',
    'lme6-voorbereiding-vow-milt-image13': 'Image13GeslotenCirculatieSummary',
    'lme6-voorbereiding-vow-milt-image14': 'Image14AfsluitingSummary',
  }
  const LME6Component = lme6ComponentMap[lme] && LME6Summaries[lme6ComponentMap[lme]]
  if (LME6Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <LME6Component />
        </main>
        <Footer />
      </div>
    )
  }

  // LME 1: Parasitaire verwekkers van gastro-enteritis (Week 5 Casus 9)
  const lme1ComponentMap = {
    'lme1-parasitaire-verwekkers-gastro-enteritis-image01': 'Image01IntroductieSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image02': 'Image02MenuSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image03': 'Image03MeestVoorkomendeParasietenSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image04': 'Image04Kennisclip1Summary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image05': 'Image05ProtozoaKenmerkenSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image06': 'Image06EntamoebaLevenscyclusSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image07': 'Image07Kennisclip2Summary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image08': 'Image08VermenigvuldigingSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image09': 'Image09DiagnostiekVraagSummary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image10': 'Image10Kennisclip3Summary',
    'lme1-parasitaire-verwekkers-gastro-enteritis-image11': 'Image11DiagnostiekTechniekenSummary',
  }
  const LME1Component = lme1ComponentMap[lme] && LME1Summaries[lme1ComponentMap[lme]]
  if (LME1Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <LME1Component />
        </main>
        <Footer />
      </div>
    )
  }

  // LME 2: Virale verwekkers van gastro-enteritis (Week 5 Casus 9)
  const lme2ComponentMap = {
    'lme2-virale-verwekkers-gastro-enteritis-image01': 'Image01IntroductieSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image02': 'Image02MenuSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image03': 'Image03KindsterfteSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image04': 'Image04OorzakenSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image05': 'Image05RotavirusSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image06': 'Image06NorovirusSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image07': 'Image07AdenovirusSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image08': 'Image08AstrovirusSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image09': 'Image09EpidemiologieSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image10': 'Image10TransmissieSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image11': 'Image11PathogeneseSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image12': 'Image12CasusHematologieSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image13': 'Image13DiagnostiekSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image14': 'Image14BehandelingSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image15': 'Image15CasusEliseSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image16': 'Image16AnamneseEliseSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image17': 'Image17LichamelijkOnderzoekSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image18': 'Image18LichamelijkEliseSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image19': 'Image19DehydratieTabelSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image20': 'Image20DifferentiaaldiagnoseSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image21': 'Image21VerwekkerSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image22': 'Image22DiagnostiekBehandelingSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image23': 'Image23RotavirusvaccinSummary',
    'lme2-virale-verwekkers-gastro-enteritis-image24': 'Image24SamenvattingSummary',
  }
  const LME2Component = lme2ComponentMap[lme] && LME2Summaries[lme2ComponentMap[lme]]
  if (LME2Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <LME2Component />
        </main>
        <Footer />
      </div>
    )
  }

  // LME 3: Welk antibioticum kies ik (Week 5 Casus 9)
  const lme3ComponentMap = {
    'lme3-welk-antibioticum-kies-ik-image01': 'Image01IntroductieSummary',
    'lme3-welk-antibioticum-kies-ik-image02': 'Image02MenuSummary',
    'lme3-welk-antibioticum-kies-ik-image03': 'Image03IntroductieStofnamenSummary',
    'lme3-welk-antibioticum-kies-ik-image04': 'Image04PrincipesFocusSummary',
    'lme3-welk-antibioticum-kies-ik-image05': 'Image05EmpirieSummary',
    'lme3-welk-antibioticum-kies-ik-image06': 'Image06ToedieningswegSummary',
    'lme3-welk-antibioticum-kies-ik-image07': 'Image07GevoeligheidSummary',
    'lme3-welk-antibioticum-kies-ik-image08': 'Image08EUCASTSummary',
    'lme3-welk-antibioticum-kies-ik-image09': 'Image09FarmacokinetiekSummary',
    'lme3-welk-antibioticum-kies-ik-image10': 'Image10FarmacodynamiekSummary',
    'lme3-welk-antibioticum-kies-ik-image11': 'Image11ContraIndicatiesSummary',
    'lme3-welk-antibioticum-kies-ik-image12': 'Image12KostenSummary',
    'lme3-welk-antibioticum-kies-ik-image13': 'Image13RichtlijnenSummary',
    'lme3-welk-antibioticum-kies-ik-image14': 'Image14CombinatiesSummary',
  }
  const LME3Component = lme3ComponentMap[lme] && LME3Summaries[lme3ComponentMap[lme]]
  if (LME3Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <LME3Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 10 LME 1: Dwang en drang in historisch perspectief (Week 5 Casus 10 Vaccinatie)
  const casus10Lme1ComponentMap = {
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image01': 'Image01IntroductieSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image02': 'Image02MenuSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image03': 'Image03IntroductieGeschiedenisSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image04': 'Image04IndirectePlichtSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image05': 'Image05BijwerkingenSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image06': 'Image06PlichtOpPauzeSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image07': 'Image07NationaleVeiligheidSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image08': 'Image08QuizFactorenDalingSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image09': 'Image09WettelijkGeregeldeDrangSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image10': 'Image10NietIedereenDoetMeeSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image11': 'Image11SpanningenElspeetSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image12': 'Image12RijksvaccinatieprogrammaSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image13': 'Image13WeigeraarsSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image14': 'Image14ZwartekousenkerkSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image15': 'Image15GewetensbezwaarSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image16': 'Image16QuizReligieuzeBezwarenSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image17': 'Image17WorstelingWeigeraarsSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image18': 'Image18ReflectieCommunicatieSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image19': 'Image19WorstelingArtsenSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image20': 'Image20KlontjesPepernotenSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image21': 'Image21WorstelingSamenlevingSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image22': 'Image22EnNuCoronaSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image23': 'Image23ReflectieGrapperhausSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image24': 'Image24MaatschappelijkeControversieSummary',
    'casus10-lme1-dwang-en-drang-historisch-perspectief-image25': 'Image25SlotSummary',
  }
  const Casus10LME1Component = casus10Lme1ComponentMap[lme] && Casus10LME1Summaries[casus10Lme1ComponentMap[lme]]
  if (Casus10LME1Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10LME1Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 10 LME 2: Immunomodulatie (Week 5 Casus 10 Vaccinatie)
  const casus10Lme2ComponentMap = {
    'casus10-lme2-immunomodulatie-image01': 'Image01IntroductieSummary',
    'casus10-lme2-immunomodulatie-image02': 'Image02MenuSummary',
    'casus10-lme2-immunomodulatie-image03': 'Image03PrincipesImmuunsuppressieSummary',
    'casus10-lme2-immunomodulatie-image04': 'Image04ImmunosuppressivaSummary',
    'casus10-lme2-immunomodulatie-image05': 'Image05CorticosteroidenSummary',
    'casus10-lme2-immunomodulatie-image06': 'Image06SynthetischeGlucocorticoïdenSummary',
    'casus10-lme2-immunomodulatie-image07': 'Image07QuizCorticosteroidenSummary',
    'casus10-lme2-immunomodulatie-image08': 'Image08BijwerkingenOverzichtSummary',
    'casus10-lme2-immunomodulatie-image09': 'Image09PrednisonEnAlternatievenSummary',
    'casus10-lme2-immunomodulatie-image10': 'Image10CalcineurineRemmersSummary',
    'casus10-lme2-immunomodulatie-image11': 'Image11QuizCalcineurineSummary',
    'casus10-lme2-immunomodulatie-image12': 'Image12AntiTNFAlphaSummary',
    'casus10-lme2-immunomodulatie-image13': 'Image13AntiTNFStructurenSummary',
    'casus10-lme2-immunomodulatie-image14': 'Image14BiologicalsOverzichtSummary',
    'casus10-lme2-immunomodulatie-image15': 'Image15WerkingVaccinsSummary',
    'casus10-lme2-immunomodulatie-image16': 'Image16PassieveImmunisatieSummary',
    'casus10-lme2-immunomodulatie-image17': 'Image17QuizRabiesSummary',
    'casus10-lme2-immunomodulatie-image18': 'Image18ImmunostimulantiaSummary',
    'casus10-lme2-immunomodulatie-image19': 'Image19VaccinTypenSummary',
    'casus10-lme2-immunomodulatie-image20': 'Image20ActieveImmunisatieSummary',
    'casus10-lme2-immunomodulatie-image21': 'Image21AdjuvantenSummary',
    'casus10-lme2-immunomodulatie-image22': 'Image22SlotSummary',
    'casus10-lme2-immunomodulatie-image23': 'Image23AntimetabolietenSummary',
    'casus10-lme2-immunomodulatie-image24': 'Image24AntigenPresentatieSummary',
    'casus10-lme2-immunomodulatie-image25': 'Image25ImmunologischGeheugenSummary',
    'casus10-lme2-immunomodulatie-image26': 'Image26EindeSummary',
    'casus10-lme2-immunomodulatie-image27': 'Image27SlotSummary',
  }
  const Casus10LME2Component = casus10Lme2ComponentMap[lme] && Casus10LME2Summaries[casus10Lme2ComponentMap[lme]]
  if (Casus10LME2Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10LME2Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 10 LME 3: Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren (Week 5 Casus 10 Vaccinatie)
  const casus10Lme3ComponentMap = {
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image01': 'Image01IntroductieSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image02': 'Image02MenuSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image03': 'Image03DwangEnDrangSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image04': 'Image04EthischeRechtvaardigingSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image05': 'Image05AutonomiePaternalismeSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image06': 'Image06KindEnOudersSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image07': 'Image07GroepsimmuniteitSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image08': 'Image08CasusSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image09': 'Image09RolArtsSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image10': 'Image10ProportioneelSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image11': 'Image11SubsidiariteitSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image12': 'Image12UtilismeSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image13': 'Image13DeontologieSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image14': 'Image14VertrouwenSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image15': 'Image15ReflectieSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image16': 'Image16KwetsbarenSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image17': 'Image17QuizSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image18': 'Image18ToegangsbewijsSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image19': 'Image19SlotSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image20': 'Image20InformatieVoorlichtingSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image21': 'Image21BezwarenOudersSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image22': 'Image22MedischeContraIndicatiesSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image23': 'Image23MaatschappelijkDebatSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image24': 'Image24WetgevingSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image25': 'Image25KinderrechtenSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image26': 'Image26RisicocommunicatieSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image27': 'Image27AlternatievenSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image28': 'Image28GezamenlijkeBesluitvormingSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image29': 'Image29EmpathieSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image30': 'Image30GrenzenSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image31': 'Image31VerantwoordelijkheidSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image32': 'Image32SlotSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image33': 'Image33SlotSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image34': 'Image34SlotSummary',
    'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image35': 'Image35SlotSummary',
  }
  const Casus10LME3Component = casus10Lme3ComponentMap[lme] && Casus10LME3Summaries[casus10Lme3ComponentMap[lme]]
  if (Casus10LME3Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10LME3Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 10 LME 4: Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie (Week 5 Casus 10 Vaccinatie)
  const casus10Lme4ComponentMap = {
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image01': 'Image01IntroductieSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image02': 'Image02InleidingSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image03': 'Image03MenuSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image04': 'Image04WiskundigeModellenSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image05': 'Image05TransmissieSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image06': 'Image06QuizDirecteTransmissieSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image07': 'Image07RVPFeedbackSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image08': 'Image08BasisreproductiegetalSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image09': 'Image09DefinitieR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image10': 'Image10TransmissieboomR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image11': 'Image11SchattenR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image12': 'Image12EnkeleWaardenR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image13': 'Image13SIRModelSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image14': 'Image14SIRKermackSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image15': 'Image15SIRVergelijkingenSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image16': 'Image16SIRTrendsSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image17': 'Image17SimplificatiesSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image18': 'Image18ModelVariantenSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image19': 'Image19FormuleR0IntroSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image20': 'Image20AfleidenR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image21': 'Image21MaatregelenR0Summary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image22': 'Image22ContactmatrixSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image23': 'Image23EffectiefRSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image24': 'Image24DefinitieReSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image25': 'Image25EersteGolfSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image26': 'Image26BerekenenRSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image27': 'Image27KritischeVaccinatiegraadSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image28': 'Image28RisicosLageVaccinatiegraadSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image29': 'Image29SlotSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image30': 'Image30SlotSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image31': 'Image31ImperfectVaccinSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image32': 'Image32RisicosMazelenSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image33': 'Image33RisicosCRSSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image34': 'Image34SlotSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image35': 'Image35HPVIntroSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image36': 'Image36HPVModelSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image37': 'Image37SlotSummary',
    'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image38': 'Image38SlotSummary',
  }
  const Casus10LME4Component = casus10Lme4ComponentMap[lme] && Casus10LME4Summaries[casus10Lme4ComponentMap[lme]]
  if (Casus10LME4Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus10LME4Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 11 LME 1: Leefstijl en immuunsysteem (Week 6 Casus 11 Primaire immuundeficiënties)
  const casus11Lme1ComponentMap = {
    'casus11-lme1-leefstijl-en-immuunsysteem-image01': 'Image01IntroductieSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image02': 'Image02MenuSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image03': 'Image03ExposoomSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image04': 'Image04ExposoomCategorieenSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image05': 'Image05ExposoomOntstekingSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image06': 'Image06LeefstijlfactorenSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image07': 'Image07LeefstijlInvloedSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image08': 'Image08InflammagingSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image09': 'Image09ImmunosenescenceSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image10': 'Image10TrainedImmunitySummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image11': 'Image11VoedingIntroSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image12': 'Image12WestersDieetSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image13': 'Image13MicronutriëntenSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image14': 'Image14IjzergebrekSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image15': 'Image15DIIIntroSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image16': 'Image16DIIVoedingsmiddelenSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image17': 'Image17BewegingSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image18': 'Image18SlaapSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image19': 'Image19StressSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image20': 'Image20CTRAMeditatieSummary',
    'casus11-lme1-leefstijl-en-immuunsysteem-image21': 'Image21AfsluitingSummary',
  }
  const Casus11LME1Component = casus11Lme1ComponentMap[lme] && Casus11LME1Summaries[casus11Lme1ComponentMap[lme]]
  if (Casus11LME1Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus11LME1Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 12 LME 3: Voorbereiding Patient- en medicatieveiligheid (Week 6 Casus 12 Lijninfecties & resistenties)
  const casus12Lme3ComponentMap = {
    'casus12-lme3-patient-en-medicatieveiligheid-image01': 'Image01IntroductieSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image02': 'Image02MenuSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image03': 'Image03SafetyISafetyIISummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image04': 'Image04StappenMedicatieprocesSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image05': 'Image05FoutenMedicatieprocesSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image06': 'Image06DefinitiesSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image07': 'Image07StudiesSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image08': 'Image08MeldenSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image09': 'Image09ToedienfoutSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image10': 'Image10SecondVictimAnalyserenSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image11': 'Image11PrismaSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image12': 'Image12PrismaBijnaFoutSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image13': 'Image13PrismaCategoriserenSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image14': 'Image14OplossingenOrganisatiefalenSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image15': 'Image15PRISummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image16': 'Image16SwissCheeseSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image17': 'Image17SecondVictimIntroSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image18': 'Image18PriDefinitieSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image19': 'Image19SafetyIIBrilSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image20': 'Image20FramWaiWadSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image21': 'Image21FramTheorieSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image22': 'Image22FramOpbouwSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image23': 'Image23FramVoorbeeldSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image24': 'Image24FramCasusSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image25': 'Image25FramPraktijkSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image26': 'Image26QuizSafetyISummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image27': 'Image27QuizSafetyIISummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image28': 'Image28QuizFramSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image29': 'Image29QuizPrismaSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image30': 'Image30QuizFysiekeBarriereSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image31': 'Image31QuizSysteemgerichtSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image32': 'Image32QuizSwissCheeseSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image33': 'Image33QuizSecondVictimSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image34': 'Image34QuizPrismaBijnaSummary',
    'casus12-lme3-patient-en-medicatieveiligheid-image35': 'Image35QuizFramVariatieSummary',
  }
  const Casus12LME3Component = casus12Lme3ComponentMap[lme] && Casus12LME3Summaries[casus12Lme3ComponentMap[lme]]
  if (Casus12LME3Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12LME3Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 12 LME 4: Zorggerelateerde infecties (Week 6 Casus 12 Lijninfecties & resistenties)
  const casus12Lme4ComponentMap = {
    'casus12-lme4-zorggerelateerde-infecties-image01': 'Image01IntroductieSummary',
    'casus12-lme4-zorggerelateerde-infecties-image02': 'Image02MenuSummary',
    'casus12-lme4-zorggerelateerde-infecties-image03': 'Image03WatZijnZorggerelateerdeSummary',
    'casus12-lme4-zorggerelateerde-infecties-image04': 'Image04DefinitieEnMeestVoorkomendSummary',
    'casus12-lme4-zorggerelateerde-infecties-image05': 'Image05VolgordeMeestVoorkomendSummary',
    'casus12-lme4-zorggerelateerde-infecties-image06': 'Image06PostoperatieveWondinfectiesIntroSummary',
    'casus12-lme4-zorggerelateerde-infecties-image07': 'Image07POWIClassificatieSummary',
    'casus12-lme4-zorggerelateerde-infecties-image08': 'Image08SAureusDragerschapSummary',
    'casus12-lme4-zorggerelateerde-infecties-image09': 'Image09PreventieveMaatregelenIntroSummary',
    'casus12-lme4-zorggerelateerde-infecties-image10': 'Image10PreventieveMaatregelenLijstSummary',
    'casus12-lme4-zorggerelateerde-infecties-image11': 'Image11PreoperatiefScherenSummary',
    'casus12-lme4-zorggerelateerde-infecties-image12': 'Image12AntibiotischeProfylaxeSummary',
    'casus12-lme4-zorggerelateerde-infecties-image13': 'Image13SurveillanceSummary',
    'casus12-lme4-zorggerelateerde-infecties-image14': 'Image14UrineweginfectiesIntroSummary',
    'casus12-lme4-zorggerelateerde-infecties-image15': 'Image15UWIEcoliSummary',
    'casus12-lme4-zorggerelateerde-infecties-image16': 'Image16BronVanDeInfectieIntroSummary',
    'casus12-lme4-zorggerelateerde-infecties-image17': 'Image17EndogeenExogeenSummary',
    'casus12-lme4-zorggerelateerde-infecties-image18': 'Image18TerminologieIntroSummary',
    'casus12-lme4-zorggerelateerde-infecties-image19': 'Image19HospitalAcquiredSummary',
    'casus12-lme4-zorggerelateerde-infecties-image20': 'Image20PrimaireSecundaireSepsisSummary',
  }
  const Casus12LME4Component = casus12Lme4ComponentMap[lme] && Casus12LME4Summaries[casus12Lme4ComponentMap[lme]]
  if (Casus12LME4Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12LME4Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 13 LME 1: Antibiotica Introductie (Week 7 Casus 13 Een piloot met koorts)
  const casus13Lme1ComponentMap = {
    'casus13-lme1-antibiotica-introductie-image01': 'Image01IntroductieSummary',
    'casus13-lme1-antibiotica-introductie-image02': 'Image02MenuSummary',
    'casus13-lme1-antibiotica-introductie-image03': 'Image03AchtergrondIntroSummary',
    'casus13-lme1-antibiotica-introductie-image04': 'Image04GeschiedenisFlemingSummary',
    'casus13-lme1-antibiotica-introductie-image05': 'Image05DiscoveryVoidSummary',
    'casus13-lme1-antibiotica-introductie-image06': 'Image06CategorieenAntibioticaSummary',
    'casus13-lme1-antibiotica-introductie-image07': 'Image07BasiskennisIntroSummary',
    'casus13-lme1-antibiotica-introductie-image08': 'Image08NaslagwerkSummary',
    'casus13-lme1-antibiotica-introductie-image09': 'Image09CelwandsyntheseremmersIntroSummary',
    'casus13-lme1-antibiotica-introductie-image10': 'Image10BetalactamantibioticaSummary',
    'casus13-lme1-antibiotica-introductie-image11': 'Image11PenicillinesOnderverdelingSummary',
    'casus13-lme1-antibiotica-introductie-image12': 'Image12PenicillineVsAmoxicillineSummary',
    'casus13-lme1-antibiotica-introductie-image13': 'Image13AmoxicillineVsAugmentinSummary',
    'casus13-lme1-antibiotica-introductie-image14': 'Image14CeftriaxonMeropenemSummary',
    'casus13-lme1-antibiotica-introductie-image15': 'Image15NucleinezursyntheseremmersSummary',
    'casus13-lme1-antibiotica-introductie-image16': 'Image16BijwerkingenNucleinezurSummary',
    'casus13-lme1-antibiotica-introductie-image17': 'Image17FoliumzuurmetabolismeSummary',
    'casus13-lme1-antibiotica-introductie-image18': 'Image18UWINitrofurantoineSummary',
    'casus13-lme1-antibiotica-introductie-image19': 'Image19UWINierinsufficientieSummary',
    'casus13-lme1-antibiotica-introductie-image20': 'Image20EiwitsyntheseremmersSummary',
    'casus13-lme1-antibiotica-introductie-image21': 'Image21SpectrumEiwitsyntheseremmersSummary',
    'casus13-lme1-antibiotica-introductie-image22': 'Image22IndicatieEiwitsyntheseremmersSummary',
    'casus13-lme1-antibiotica-introductie-image23': 'Image23DoxycyclineSummary',
    'casus13-lme1-antibiotica-introductie-image24': 'Image24TestJeKennisSpectrumSummary',
  }
  const Casus13LME1Component = casus13Lme1ComponentMap[lme] && Casus13LME1Summaries[casus13Lme1ComponentMap[lme]]
  if (Casus13LME1Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus13LME1Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 13 LME 2: Antibiotica Resistentie (Week 7 Casus 13 Een piloot met koorts)
  const casus13Lme2ComponentMap = {
    'casus13-lme2-antibiotica-resistentie-image01': 'Image01MenuSummary',
    'casus13-lme2-antibiotica-resistentie-image02': 'Image02IntroductieSummary',
    'casus13-lme2-antibiotica-resistentie-image03': 'Image03NaslagwerkSummary',
    'casus13-lme2-antibiotica-resistentie-image04': 'Image04OntstaanResistentieSummary',
    'casus13-lme2-antibiotica-resistentie-image05': 'Image05DierhouderijSummary',
    'casus13-lme2-antibiotica-resistentie-image06': 'Image06ResistentePopulatieSummary',
    'casus13-lme2-antibiotica-resistentie-image07': 'Image07ResistentiemechanismenIntroSummary',
    'casus13-lme2-antibiotica-resistentie-image08': 'Image08NatuurlijkVsVerkregenSummary',
    'casus13-lme2-antibiotica-resistentie-image09': 'Image09InactivatieSummary',
    'casus13-lme2-antibiotica-resistentie-image10': 'Image10AmpCCarbapenemaseSummary',
    'casus13-lme2-antibiotica-resistentie-image11': 'Image11InfluxVerminderenSummary',
    'casus13-lme2-antibiotica-resistentie-image12': 'Image12VancomycineSaureusSummary',
    'casus13-lme2-antibiotica-resistentie-image13': 'Image13EffluxSummary',
    'casus13-lme2-antibiotica-resistentie-image14': 'Image14AangrijpingspuntSummary',
    'casus13-lme2-antibiotica-resistentie-image15': 'Image15BetalactamaseOrdeningSummary',
    'casus13-lme2-antibiotica-resistentie-image16': 'Image16TestEcoliSummary',
    'casus13-lme2-antibiotica-resistentie-image17': 'Image17TestProteusSummary',
    'casus13-lme2-antibiotica-resistentie-image18': 'Image18ConclusieSummary',
  }
  const Casus13LME2Component = casus13Lme2ComponentMap[lme] && Casus13LME2Summaries[casus13Lme2ComponentMap[lme]]
  if (Casus13LME2Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus13LME2Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 12 LME 2: Sepsis (Week 6 Casus 12 Lijninfecties & resistenties)
  const casus12Lme2ComponentMap = {
    'casus12-lme2-sepsis-image01': 'Image01IntroductieSummary',
    'casus12-lme2-sepsis-image02': 'Image02MenuSummary',
    'casus12-lme2-sepsis-image03': 'Image03MaatschappelijkeImpactSummary',
    'casus12-lme2-sepsis-image04': 'Image04Definities2016Summary',
    'casus12-lme2-sepsis-image05': 'Image05DefinitieSepsisSummary',
    'casus12-lme2-sepsis-image06': 'Image06TermenSummary',
    'casus12-lme2-sepsis-image07': 'Image07OorzakenSummary',
    'casus12-lme2-sepsis-image08': 'Image08GramSummary',
    'casus12-lme2-sepsis-image09': 'Image09InfectiefocusSummary',
    'casus12-lme2-sepsis-image10': 'Image10FocuscontroleSummary',
    'casus12-lme2-sepsis-image11': 'Image11EmpirischeAntibioticaSummary',
    'casus12-lme2-sepsis-image12': 'Image12DiagnostiekSummary',
    'casus12-lme2-sepsis-image13': 'Image13DuurBehandelingSummary',
    'casus12-lme2-sepsis-image14': 'Image14ScreeningSummary',
    'casus12-lme2-sepsis-image15': 'Image15CasusVraag1Summary',
    'casus12-lme2-sepsis-image16': 'Image16CasusVraag2Summary',
    'casus12-lme2-sepsis-image17': 'Image17CasusVraag3Summary',
    'casus12-lme2-sepsis-image18': 'Image18CasusVraag4Summary',
    'casus12-lme2-sepsis-image19': 'Image19CasusVraag5Summary',
    'casus12-lme2-sepsis-image20': 'Image20EpidemiologieSummary',
    'casus12-lme2-sepsis-image21': 'Image21DefinitiesSummary',
    'casus12-lme2-sepsis-image22': 'Image22FocusSummary',
    'casus12-lme2-sepsis-image23': 'Image23BehandelingSummary',
  }
  const Casus12LME2Component = casus12Lme2ComponentMap[lme] && Casus12LME2Summaries[casus12Lme2ComponentMap[lme]]
  if (Casus12LME2Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12LME2Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Casus 12 LME 1: Antibioticaresistentie en therapie (Week 6 Casus 12 Lijninfecties & resistenties)
  const casus12Lme1ComponentMap = {
    'casus12-lme1-antibioticaresistentie-en-therapie-image01': 'Image01IntroductieSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image02': 'Image02MenuSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image03': 'Image03IntrinsiekeVerworvenSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image04': 'Image04NatuurlijkeResistentieSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image05': 'Image05CelwandSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image06': 'Image06BetalactamSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image07': 'Image07WildtypeSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image08': 'Image08ResistentiemechanismenSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image09': 'Image09BetalactamResistentieSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image10': 'Image10SAureusSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image11': 'Image11MRSASummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image12': 'Image12VoorkomenMRSASummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image13': 'Image13BRMOSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image14': 'Image14GevarenSummary',
    'casus12-lme1-antibioticaresistentie-en-therapie-image15': 'Image15SamenvattingSummary',
  }
  const Casus12LME1Component = casus12Lme1ComponentMap[lme] && Casus12LME1Summaries[casus12Lme1ComponentMap[lme]]
  if (Casus12LME1Component) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Casus12LME1Component />
        </main>
        <Footer />
      </div>
    )
  }

  // Default: show index/navigation
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="container-custom py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Samenvattingen</h1>

          <div className="space-y-3">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900">
                    {courseStructure.blok3.name}
                  </h2>
                  <p className="text-sm text-slate-500">1 week · 2 casussen · 4 LME's</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok3' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    {courseStructure.blok3.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-primary-500 border-4 border-white shadow-sm" />
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                            <Calendar className="w-4 h-4 text-slate-600" />
                            <span className="font-medium text-slate-700 text-sm">{week.name}</span>
                          </div>
                        </div>

                        {week.cases.map((casus, casusIndex) => (
                          <div key={casusIndex} className="mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-amber-100 rounded-lg">
                                <Stethoscope className="w-4 h-4 text-amber-700" />
                              </div>
                              <span className="font-medium text-slate-800 text-sm">{casus.name}</span>
                            </div>

                            <div className="ml-9 space-y-2">
                              {casus.lmes.map((lmeItem, lmeIndex) => (
                                <Link
                                  key={lmeIndex}
                                  to={`/summary?lme=${lmeItem.id}`}
                                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-emerald-200">
                                      <BookOpen className="w-4 h-4 text-emerald-700" />
                                    </div>
                                    <div>
                                      <span className="font-medium text-emerald-800 text-sm">
                                        LME: {lmeItem.name}
                                      </span>
                                      <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-xs text-emerald-600 flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          ~15 min
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <Link to="/oefenvragen" className="block ml-9">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border border-accent-200 hover:border-accent-300 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-accent-200">
                                <ClipboardCheck className="w-4 h-4 text-accent-700" />
                              </div>
                              <div>
                                <span className="font-medium text-accent-800 text-sm">
                                  Alle oefenvragen
                                </span>
                                <p className="text-xs text-accent-600">67 meerkeuzevragen</p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-accent-500" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <button
              onClick={() => setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900">
                    {courseStructure.blok4.name}
                  </h2>
                  <p className="text-sm text-slate-500">7 weken · 13 casussen · 46 LME's</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok4' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    {courseStructure.blok4.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                            <Calendar className="w-4 h-4 text-slate-600" />
                            <span className="font-medium text-slate-700 text-sm">{week.name}</span>
                          </div>
                        </div>

                        {week.cases.map((casus, casusIndex) => (
                          <div key={casusIndex} className="mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-amber-100 rounded-lg">
                                <Stethoscope className="w-4 h-4 text-amber-700" />
                              </div>
                              <span className="font-medium text-slate-800 text-sm">{casus.name}</span>
                            </div>

                            <div className="ml-9 space-y-2">
                              {casus.lmes.map((lmeItem, lmeIndex) => (
                                lmeItem.type === 'image-based' ? (
                                  <div key={lmeIndex} className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700 py-2">
                                      <BookOpen className="w-4 h-4 text-emerald-600" />
                                      {lmeItem.name} ({lmeItem.imageCount} afbeeldingen)
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                      {getImageIdsForLme(lmeItem.baseId, lmeItem.imageCount).map((img) => (
                                        <Link
                                          key={img.id}
                                          to={`/summary?lme=${img.id}`}
                                          className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-sm text-slate-700 hover:text-emerald-800 transition-colors"
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
                                    className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors"
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className="p-1.5 rounded-lg bg-emerald-200">
                                        <BookOpen className="w-4 h-4 text-emerald-700" />
                                      </div>
                                      <div>
                                        <span className="font-medium text-emerald-800 text-sm">
                                          LME: {lmeItem.name}
                                        </span>
                                        <div className="flex items-center gap-3 mt-0.5">
                                          <span className="text-xs text-emerald-600 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            ~15 min
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-emerald-500" />
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

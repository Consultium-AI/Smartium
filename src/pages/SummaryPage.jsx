import { motion, AnimatePresence } from 'framer-motion'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import {
  FileText, Home, BookOpen, Clock, ChevronDown, ChevronRight,
  GraduationCap, Calendar, Stethoscope, ClipboardCheck, Shield, Droplets, Layers, Lock, CheckCircle2, FlaskConical
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { formatSummaryBlokSubtitle } from '../utils/blokRollupStats'
import { useAccess } from '../hooks/useAccess'
import { isFreePlanBlockedLme } from '../utils/freePlanAccess'
import { useAuth } from '../context/AuthContext'
import { useReward } from '../context/RewardContext'
import { COIN_REWARDS } from '../lib/rewardSystem'
import { getProgressUserId, loadSummarySeenMap, markSummarySeen } from '../utils/accountProgressStorage'
import BlokWeekoverzichtPanel from '../components/BlokWeekoverzichtPanel'
import SummaryCourseModuleLink from '../components/SummaryCourseModuleLink'
import { splitCasusModules } from '../utils/courseModuleKind'
import { FLANKEREND_MODULE_IDS_BY_CASE } from '../data/flankerendModuleIdsByCase'
import { Header, Footer, SummaryLayout } from './summary/SummaryShared'
import { lmeMap } from '../data/lmeIndex'
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
import Casus12Lme1AntibioticaresistentieSummary from '../summaries/casus12-lme1-antibioticaresistentie-en-therapie/Casus12Lme1AntibioticaresistentieSummary'
import Casus12Lme2SepsisSummary from '../summaries/casus12-lme2-sepsis/Casus12Lme2SepsisSummary'
import Casus12Lme3PatientMedicatieveiligheidSummary from '../summaries/casus12-lme3-patient-en-medicatieveiligheid/Casus12Lme3PatientMedicatieveiligheidSummary'
import Casus12Lme4ZorggerelateerdeInfectiesSummary from '../summaries/casus12-lme4-zorggerelateerde-infecties/Casus12Lme4ZorggerelateerdeInfectiesSummary'
import Casus13Lme1AntibioticaIntroductieSummary from '../summaries/casus13-lme1-antibiotica-introductie/Casus13Lme1AntibioticaIntroductieSummary'
import Casus13Lme2AntibioticaResistentieSummary from '../summaries/casus13-lme2-antibiotica-resistentie/Casus13Lme2AntibioticaResistentieSummary'
import { BLOK5_CASUSBIJEENKOMST_SUMMARIES } from '../summaries/blok5CasusbijeenkomstRegistry.js'
import Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary from '../summaries/samenvattingen-blok5/week-1/casus-1-de-huid-als-succesvolle-barriere/lme-1-de-huidbarriere-van-jong-tot-oud/Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary'
import Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary from '../summaries/samenvattingen-blok5/week-1/casus-1-de-huid-als-succesvolle-barriere/lme-2-externe-verstorende-factoren-op-de-huidbarriere/Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary'
import Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary from '../summaries/samenvattingen-blok5/week-1/casus-1-de-huid-als-succesvolle-barriere/lme-3-hoe-werkt-een-geneesmiddel-via-de-huid/Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary'
import Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary from '../summaries/samenvattingen-blok5/week-1/casus-1-de-huid-als-succesvolle-barriere/lme-4-huidtypen-met-invloed-van-uva-en-uvb/Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary'
import Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary from '../summaries/samenvattingen-blok5/week-1/casus-1-de-huid-als-succesvolle-barriere/lme-5-microbioom-en-immunologie-van-de-huid/Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary'
import Blok5Week1Casus2VoedingEnInhalatieallergieSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lme-6-voeding-en-inhalatieallergie/Blok5Week1Casus2VoedingEnInhalatieallergieSummary'
import Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lme-7-nadelige-reacties-van-medicatie/Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary'
import Blok5Week1Casus2LmoEczeemSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lmo-eczeem/Blok5Week1Casus2LmoEczeemSummary'
import Blok5Week2Casus3AangeborenStollingsstoornissenSummary from '../summaries/samenvattingen-blok5/week-2/casus-3-paarse-vlek/lme-10-aangeboren-stollingsstoornissen/Blok5Week2Casus3AangeborenStollingsstoornissenSummary'
import Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary from '../summaries/samenvattingen-blok5/week-2/casus-3-paarse-vlek/lme-11-begripsbepaling-dermatologische-uitingen/Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary'
import Blok5Week2Casus3HemostaseBasisSummary from '../summaries/samenvattingen-blok5/week-2/casus-3-paarse-vlek/lme-12-hemostase-basis/Blok5Week2Casus3HemostaseBasisSummary'
import Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary from '../summaries/samenvattingen-blok5/week-2/casus-3-paarse-vlek/lmv-vasculitis-of-vasculopathie-samenvatting/Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary'
import Blok5Week2Casus3VasculitisKleinMiddelGrootSummary from '../summaries/samenvattingen-blok5/week-2/casus-3-paarse-vlek/lme-13-vasculitis-klein-middel-groot/Blok5Week2Casus3VasculitisKleinMiddelGrootSummary'
import Blok5Week2Casus4ChronischeOntstekingSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-14-chronische-ontsteking/Blok5Week2Casus4ChronischeOntstekingSummary'
import Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-15-goedaardige-en-kwaadaardige-huidafwijkingen/Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary'
import Blok5Week2Casus4ImmuuntherapieVanKankerSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-16-immuuntherapie-van-kanker/Blok5Week2Casus4ImmuuntherapieVanKankerSummary'
import Blok5Week2Casus4MelanoomGelokaliseerdSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-17-melanoom-gelokaliseerd/Blok5Week2Casus4MelanoomGelokaliseerdSummary'
import Blok5Week2Casus4MriEnPetScanBenignemaligneSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-18-mri-en-pet-scan-benignemaligne/Blok5Week2Casus4MriEnPetScanBenignemaligneSummary'
import Blok5Week2Casus4SentinelNodeSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-19-sentinel-node/Blok5Week2Casus4SentinelNodeSummary'
import Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary from '../summaries/samenvattingen-blok5/week-2/casus-4-donkere-vlek/lme-20-systemische-therapie-van-melanoom/Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary'
import Blok5Week1Casus2ProvokeSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lme-8-provoke/Blok5Week1Casus2ProvokeSummary'
import Blok5Week1Casus2PsoriasisSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lme-9-psoriasis/Blok5Week1Casus2PsoriasisSummary'
import Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lmv-anafylaxie-type-i-allergie-samenvatting/Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary'
import Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lmv-centrale-vs-perifere-tolerantie-samenvatting/Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary'
import Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/lmv-contact-allergie-en-allergologisch-onderzoek-samenvatting/Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary'
import Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary from '../summaries/samenvattingen-blok5/week-1/casus-2-de-veranderde-barriere/stm-pathogenese-type-iv-allergie-samenvatting/Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary'
import Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lmo-verdachte-huidafwijkingen-samenvatting/Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary'
import Blok5Week3Casus5LmoZorgmijdingSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lmo-zorgmijding-samenvatting/Blok5Week3Casus5LmoZorgmijdingSummary'
import Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lme-21-huidtumoren-basaalcel-en-plaveiselcelcarcinoom/Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary'
import Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lme-22-huidtumoren-benigne-en-premaligne/Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary'
import Blok5Week3Casus5LeefstijlEnKankerSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lme-23-leefstijl-en-kanker/Blok5Week3Casus5LeefstijlEnKankerSummary'
import Blok5Week3Casus5MilieuEnGezondheidSummary from '../summaries/samenvattingen-blok5/week-3/casus-5-de-verdachte-huid/lme-24-milieu-en-gezondheid/Blok5Week3Casus5MilieuEnGezondheidSummary'
import Blok5Week3Casus6BehandelingVanMammacarcinoomSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-25-behandeling-van-mammacarcinoom/Blok5Week3Casus6BehandelingVanMammacarcinoomSummary'
import Blok5Week3Casus6FamiliairMammacarcinoomSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-26-familiair-mammacarcinoom/Blok5Week3Casus6FamiliairMammacarcinoomSummary'
import Blok5Week3Casus6HetSlechtnieuwsgesprekSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-27-het-slechtnieuwsgesprek/Blok5Week3Casus6HetSlechtnieuwsgesprekSummary'
import Blok5Week3Casus6MammapathologieSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-28-mammapathologie/Blok5Week3Casus6MammapathologieSummary'
import Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-29-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom/Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary'
import Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary from '../summaries/samenvattingen-blok5/week-3/casus-6-knobbel-in-de-borst/lme-30-radiologische-diagnostiek-mammacarcinoom/Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary'
import Blok5Week4Casus7FlebologischeAandoeningenSummary from '../summaries/samenvattingen-blok5/week-4/casus-7-zwelling-van-de-lies-en-of-een-dik-been/lme-31-flebologische-aandoeningen/Blok5Week4Casus7FlebologischeAandoeningenSummary'
import Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary from '../summaries/samenvattingen-blok5/week-5/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lme-47-alarmsymptomen-op-de-kinderleeftijd/Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary'
import Blok5Week5Casus11IntroductieKinderoncologieSummary from '../summaries/samenvattingen-blok5/week-5/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lme-48-introductie-kinderoncologie/Blok5Week5Casus11IntroductieKinderoncologieSummary'
import Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary from '../summaries/samenvattingen-blok5/week-5/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lme-49-kinderoncologie-begrijp-de-hallmarks/Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary'
import Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary from '../summaries/samenvattingen-blok5/week-5/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lme-50-over-leven-na-kanker-op-kinderleeftijd/Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary'
import Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary from '../summaries/samenvattingen-blok5/week-5/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lme-51-typen-kinderoncologie-bij-kinderen/Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary'
import Blok5Week5Casus11LmoImportziektenSamenvattingSummary from '../summaries/samenvattingen-blok5/week-6/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lmo-importziekten-samenvatting/Blok5Week5Casus11LmoImportziektenSamenvattingSummary'
import Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologieSamenvattingSummary from '../summaries/samenvattingen-blok5/week-6/casus-11-kind-met-algehele-malaise-koorts-en-zwelling-in-de-buik/lmo-infecties-binnen-de-kinderoncologie-samenvatting/Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologieSamenvattingSummary'
import Blok5Week6Casus12GaswisselingHbO2Co2CoSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-52-gaswisseling-hb-o2-co2-co/Blok5Week6Casus12GaswisselingHbO2Co2CoSummary'
import Blok5Week6Casus12NvicAcuteVergiftigingSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-53-nvic-acute-vergiftiging/Blok5Week6Casus12NvicAcuteVergiftigingSummary'
import Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-54-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties/Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary'
import Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-55-botopbouw-botafbraak-en-pathologische-breuken/Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary'
import Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-56-celtherapie-als-behandeling-voor-maligniteiten/Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary'
import Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-57-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie/Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary'
import Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-58-m-proteine-diagnostiek-eiwit-als-tumormarker/Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary'
import Blok5Week6Casus13TransplantatiegeneeskundeSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-59-transplantatiegeneeskunde/Blok5Week6Casus13TransplantatiegeneeskundeSummary'
import Blok5Week7Casus14DermatoloogInJeBroekzakSummary from '../summaries/samenvattingen-blok5/week-7/casus-14-ai-in-de-zorg/lme-60-dermatoloog-in-je-broekzak/Blok5Week7Casus14DermatoloogInJeBroekzakSummary'
import Blok5Week7Casus14LmoEthiekVanDermaAppsSamenvattingSummary from '../summaries/samenvattingen-blok5/week-7/casus-14-ai-in-de-zorg/lmo-ethiek-van-derma-apps-samenvatting/Blok5Week7Casus14LmoEthiekVanDermaAppsSamenvattingSummary'
import Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkSamenvattingSummary from '../summaries/samenvattingen-blok5/week-7/casus-14-ai-in-de-zorg/lmo-implementatie-in-de-dermatologische-praktijk-samenvatting/Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkSamenvattingSummary'
import Blok5Week7Casus14LmoWatIsAiSamenvattingSummary from '../summaries/samenvattingen-blok5/week-7/casus-14-ai-in-de-zorg/lmo-wat-is-ai-samenvatting/Blok5Week7Casus14LmoWatIsAiSamenvattingSummary'
import Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-61-remmen-versus-stimuleren-van-het-afweersysteem/Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary'
import Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-62-risico-op-iatrogene-schade-na-orgaantransplantatie/Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary'
import Blok5Week8Casus15ScyllaEnCharybdisSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-63-scylla-en-charybdis/Blok5Week8Casus15ScyllaEnCharybdisSummary'
import Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lmo-voorbereiding-vow-palliatieve-zorg/Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgSummary'
import Blok5Week4Casus7LymfadenopathieSummary from '../summaries/samenvattingen-blok5/week-4/casus-7-zwelling-van-de-lies-en-of-een-dik-been/lme-32-lymfadenopathie/Blok5Week4Casus7LymfadenopathieSummary'
import Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary from '../summaries/samenvattingen-blok5/week-4/casus-7-zwelling-van-de-lies-en-of-een-dik-been/lme-33-trombose-verhoogde-stollingsneiging/Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary'
import Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary from '../summaries/samenvattingen-blok5/week-4/casus-7-zwelling-van-de-lies-en-of-een-dik-been/lmo-differentiaal-diagnostische-aanpak-zwelling-been/Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary'
import Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary from '../summaries/samenvattingen-blok5/week-4/casus-7-zwelling-van-de-lies-en-of-een-dik-been/lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten/Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary'
import Blok5Week4Casus8ErysipelasEnCellulitisSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-34-erysipelas-en-cellulitis/Blok5Week4Casus8ErysipelasEnCellulitisSummary'
import Blok5Week4Casus8HydradenitisSuppurativaSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-35-hydradenitis-suppurativa/Blok5Week4Casus8HydradenitisSuppurativaSummary'
import Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-36-introductiemodule-planetary-health/Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary'
import Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-37-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24/Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary'
import Blok5Week4Casus8LymfeklierdissectieSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-38-lymfeklierdissectie/Blok5Week4Casus8LymfeklierdissectieSummary'
import Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-39-necrotiserende-wekedeleninfectie/Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary'
import Blok5Week4Casus8RadiotherapieInDePraktijkSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-40-radiotherapie-in-de-praktijk/Blok5Week4Casus8RadiotherapieInDePraktijkSummary'
import Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lmv-verworven-stollingsstoornissen-samenvatting/Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary'
import Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-41-volksgezondheidsindicatoren-dalys/Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary'
import Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-42-bouw-en-functie-van-de-thymus/Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary'
import Blok5Week5Casus9LmoPositieveEnNegatieveSelectieSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lmo-positieve-en-negatieve-selectie/Blok5Week5Casus9LmoPositieveEnNegatieveSelectieSummary'
import Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen/Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenSummary'
import Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatieSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lmv-introductie-auto-immuniteit-versus-auto-inflammatie-samenvatting/Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatieSummary'
import Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapieSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie/Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapieSummary'
import Blok5Week5Casus9LmvPatientMetSleSamenvattingSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lmv-patient-met-sle-samenvatting/Blok5Week5Casus9LmvPatientMetSleSamenvattingSummary'
import Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-43-endocriene-auto-immuunziekten/Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary'
import Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-44-pathogenese-auto-immuunziekten/Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary'
import Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary from '../summaries/samenvattingen-blok5/week-5/casus-10-patient-met-auto-inflammatoire-ziekte/lme-45-principes-en-klinische-aspecten-van-auto-inflammatie/Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary'
import Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary from '../summaries/samenvattingen-blok5/week-5/casus-10-patient-met-auto-inflammatoire-ziekte/lme-46-spectrum-auto-inflammatie-en-auto-immuniteit/Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary'
import Blok9Week1Casus1AcuteNierschadeSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-1-acute-nierschade/Blok9Week1Casus1AcuteNierschadeSummary'
import ConfigMiniSummary from '../components/ConfigMiniSummary'
import { getBlok9MiniConfig } from '../summaries/mini-samenvattingen-b9/blok9MiniConfigs'
import { getBlok5MiniConfig } from '../summaries/mini-samenvattingen-blok5/blok5MiniConfigs'
import { VariantSwitchProvider } from '../components/SummaryLayout'
import Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-2-tubulaire-en-erfelijke-nierziekten/Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary'
import Blok9Week1Casus1GlomerulaireNierziektenSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-3-glomerulaire-nierziekten/Blok9Week1Casus1GlomerulaireNierziektenSummary'
import Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-4-glomerulaire-en-tubulaire-nierziekten/Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenSummary'
import Blok9Week1Casus1AcuteNierschadeVerdiepingSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-5-acute-nierschade-verdieping/Blok9Week1Casus1AcuteNierschadeVerdiepingSummary'
import Blok9Week1Casus2ChronischeNierschadeSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-6-chronische-nierschade/Blok9Week1Casus2ChronischeNierschadeSummary'
import Blok9Week1Casus2NiertransplantatieSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-7-niertransplantatie/Blok9Week1Casus2NiertransplantatieSummary'
import Blok9Week1Casus2DialyseSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-8-dialyse/Blok9Week1Casus2DialyseSummary'
import Blok9Week1Casus2VerdiepingChronischeNierschadeSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-9-verdieping-chronische-nierschade/Blok9Week1Casus2VerdiepingChronischeNierschadeSummary'
import Blok9Week1Casus2NierfunctievervangendeTherapieSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-10-nierfunctievervangende-therapie/Blok9Week1Casus2NierfunctievervangendeTherapieSummary'
import Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary from '../summaries/samenvattingen-b9/week-1/casus-2-patient-met-chronische-nierschade/lme-11-ethiek-van-orgaantransplantatie/Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary'
import Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary from '../summaries/samenvattingen-b9/week-2/casus-3-patient-met-ernstig-verstoorde-elektrolyten/lme-12-klinische-stoornissen-water-en-volume-balans/Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary'
import Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary from '../summaries/samenvattingen-b9/week-2/casus-3-patient-met-ernstig-verstoorde-elektrolyten/lme-13-klinische-stoornissen-kaliumbalans/Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary'
import Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary from '../summaries/samenvattingen-b9/week-2/casus-3-patient-met-ernstig-verstoorde-elektrolyten/lme-14-klinische-stoornissen-zuur-basebalans/Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary'
import Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary from '../summaries/samenvattingen-b9/week-2/casus-3-patient-met-ernstig-verstoorde-elektrolyten/lme-15-verdieping-stoornissen-kalium-en-zuur-base-evenwicht/Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary'
import Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary from '../summaries/samenvattingen-b9/week-2/casus-3-patient-met-ernstig-verstoorde-elektrolyten/lme-16-verdieping-stoornissen-water-en-volumebalans/Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary'
import Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-17-perifeer-arterieel-vaatlijden/Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary'
import Blok9Week2Casus4DiabetischeVoetSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-18-diabetische-voet/Blok9Week2Casus4DiabetischeVoetSummary'
import Blok9Week2Casus4DilaterendVaatlijdenSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-19-dilaterend-vaatlijden/Blok9Week2Casus4DilaterendVaatlijdenSummary'
import Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-20-mdr-juridische-aspecten-rond-medische-tools/Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary'
import Blok9Week2Casus4PreoperatieveScreeningSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-21-preoperatieve-screening/Blok9Week2Casus4PreoperatieveScreeningSummary'
import Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary from '../summaries/samenvattingen-b9/week-2/casus-4-de-vrouw-die-maar-20-meter-kan-lopen/lme-22-ct-scans-beoordelen-vow-toegepaste-anatomie/Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary'
import Blok9Week3Casus5HypertensieSummary from '../summaries/samenvattingen-b9/week-3/casus-5-patient-met-hypertensie/lme-23-hypertensie/Blok9Week3Casus5HypertensieSummary'
import Blok9Week3Casus5SecundaireHypertensieSummary from '../summaries/samenvattingen-b9/week-3/casus-5-patient-met-hypertensie/lme-24-secundaire-hypertensie/Blok9Week3Casus5SecundaireHypertensieSummary'
import Blok9Week3Casus5HypertensiefSpoedgevalSummary from '../summaries/samenvattingen-b9/week-3/casus-5-patient-met-hypertensie/lme-25-hypertensief-spoedgeval/Blok9Week3Casus5HypertensiefSpoedgevalSummary'
import Blok9Week3Casus5FarmacogeneticaSummary from '../summaries/samenvattingen-b9/week-3/casus-5-patient-met-hypertensie/lme-26-farmacogenetica/Blok9Week3Casus5FarmacogeneticaSummary'
import Blok9Week3Casus5AiActSummary from '../summaries/samenvattingen-b9/week-3/casus-5-patient-met-hypertensie/lme-27-ai-act/Blok9Week3Casus5AiActSummary'
import Blok9Week3Casus6CvrmSummary from '../summaries/samenvattingen-b9/week-3/casus-6-volwassene-met-pijn-op-de-borst/lme-28-cvrm/Blok9Week3Casus6CvrmSummary'
import Blok9Week4Casus7PneumonieEpidemiologieSummary from '../summaries/samenvattingen-b9/week-4/casus-7-patient-met-een-pneumonie/lme-29-epidemiologie-verschillende-verwekkers-en-behandeling-van-de-pneumonie/Blok9Week4Casus7PneumonieEpidemiologieSummary'
import Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary from '../summaries/samenvattingen-b9/week-4/casus-7-patient-met-een-pneumonie/lme-30-pathofysiologie-kliniek-en-diagnostiek-van-de-pneumonie/Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary'
import Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary from '../summaries/samenvattingen-b9/week-4/casus-7-patient-met-een-pneumonie/lme-31-klinisch-redeneren-bij-respiratoire-insufficiëntie/Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary'
import Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary from '../summaries/samenvattingen-b9/week-4/casus-7-patient-met-een-pneumonie/lme-32-symptomatische-behandeling-van-respiratoire-insufficientie/Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary'
import Blok9Week4Casus8ToxidromenSummary from '../summaries/samenvattingen-b9/week-4/casus-8-een-leuk-feestje/lme-33-toxidromen/Blok9Week4Casus8ToxidromenSummary'
import Blok9Week4Casus8ShockSummary from '../summaries/samenvattingen-b9/week-4/casus-8-een-leuk-feestje/lme-34-shock/Blok9Week4Casus8ShockSummary'
import Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary from '../summaries/samenvattingen-b9/week-4/casus-8-een-leuk-feestje/lme-35-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen/Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary'
import Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary from '../summaries/samenvattingen-b9/week-4/casus-8-een-leuk-feestje/lme-36-passende-zorg-op-de-intensive-care/Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary'
import Blok9Week4Casus8LineareRegressielijnSummary from '../summaries/samenvattingen-b9/week-4/casus-8-een-leuk-feestje/lme-37-lineare-regressielijn/Blok9Week4Casus8LineareRegressielijnSummary'
import Blok9Week5Casus9LongkankerSummary from '../summaries/samenvattingen-b9/week-5/casus-9-longkanker-wat-nu/lme-38-longkanker/Blok9Week5Casus9LongkankerSummary'
import Blok9Week5Casus9PleuravochtSummary from '../summaries/samenvattingen-b9/week-5/casus-9-longkanker-wat-nu/lme-39-pleuravocht/Blok9Week5Casus9PleuravochtSummary'
import Blok9Week5Casus9VoorbereidingCtEnPetCtSummary from '../summaries/samenvattingen-b9/week-5/casus-9-longkanker-wat-nu/lme-40-voorbereiding-ct-en-pet-ct/Blok9Week5Casus9VoorbereidingCtEnPetCtSummary'
import Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary from '../summaries/samenvattingen-b9/week-5/casus-9-longkanker-wat-nu/lme-41-voorbereiding-pathologie-longkanker/Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary'
import Blok9Week5Casus10BasisAnalyseEcgSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-42-basis-analyse-ecg/Blok9Week5Casus10BasisAnalyseEcgSummary'
import Blok9Week5Casus10AtriumfibrillerenSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-43-atriumfibrilleren/Blok9Week5Casus10AtriumfibrillerenSummary'
import Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-44-brady-aritmie-en-implanteerbare-cardiale-devices/Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary'
import Blok9Week5Casus10TachyaritmieSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-45-tachyaritmie/Blok9Week5Casus10TachyaritmieSummary'
import Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-46-leefstijl-als-therapie-voor-atriumfibrilleren/Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary'
import Blok9Week5Casus10SyncopeSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-47-syncope/Blok9Week5Casus10SyncopeSummary'
import Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-48-elektrofysiologisch-onderzoek-en-ablaties/Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary'
import Blok9Week5Casus10RitmestoornissenBijKinderenSummary from '../summaries/samenvattingen-b9/week-5/casus-10-atriumfibrilleren/lme-49-ritmestoornissen-bij-kinderen/Blok9Week5Casus10RitmestoornissenBijKinderenSummary'
import Blok10Week1Casus1MaagklachtenLmeEndoscopieBasisEnBloedingenSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/casusbijeenkomst/lme-endoscopie-basis-en-bloedingen/Blok10Week1Casus1MaagklachtenLmeEndoscopieBasisEnBloedingenSummary'
import Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/lme-fysiologie-van-maagzuur/Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurSummary'
import Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurMiniSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/lme-fysiologie-van-maagzuur-mini/Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurMiniSummary'
import Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/lme-leefstijl-bij-reflux/Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxSummary'
import Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/lme-logistische-regressie-analyse/Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseSummary'
import Blok10Week1Casus1MaagklachtenRefluxBijKinderenSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/casusbijeenkomst/lme-reflux-bij-kinderen/Blok10Week1Casus1MaagklachtenRefluxBijKinderenSummary'
import Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/casusbijeenkomst/lmo-kumar-clark-pathofysiologie-h-pylori/Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriSummary'
import Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacterieSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/casusbijeenkomst/lmv-h-pylori-zorgkosten-vanuit-een-bacterie/Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacterieSummary'
import Blok10Week1Casus1MaagklachtenLmvPpiSummary from '../summaries/samenvattingen-b10/week-1/casus-1-maagklachten/casusbijeenkomst/lmv-ppi/Blok10Week1Casus1MaagklachtenLmvPpiSummary'
import Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusSummary from '../summaries/samenvattingen-b10/week-1/casus-2-passageklachten/casusbijeenkomst/lme-pre-maligne-bovenste-tractus-digestivus/Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusSummary'
import Blok10Week1Casus2PassageklachtenLmeChemoradiatieSummary from '../summaries/samenvattingen-b10/week-1/casus-2-passageklachten/casusbijeenkomst/lme-chemoradiatie/Blok10Week1Casus2PassageklachtenLmeChemoradiatieSummary'
import Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenSummary from '../summaries/samenvattingen-b10/week-1/casus-2-passageklachten/casusbijeenkomst/lme-kindergerelateerde-ziekten/Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenSummary'
import Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusSummary from '../summaries/samenvattingen-b10/week-1/casus-2-passageklachten/casusbijeenkomst/lme-motiliteit-van-de-bovenste-tractus-digestivus/Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusSummary'
import Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusSummary from '../summaries/samenvattingen-b10/week-1/casus-2-passageklachten/casusbijeenkomst/lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus/Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusSummary'
import Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-acute-buik-en-acute-buikpijn/Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnSummary'
import Blok10Week2CasusC03RectaalBloedverliesFlankerendOnderwijsLmoZelfstudieDifferentiaalDiagnoseVanAcuteBuikpijnSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/flankerend-onderwijs/lmo-zelfstudie-differentiaal-diagnose-van-acute-buikpijn/Blok10Week2CasusC03RectaalBloedverliesFlankerendOnderwijsLmoZelfstudieDifferentiaalDiagnoseVanAcuteBuikpijnSummary'
import Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-bevolkingsonderzoek-darmkanker/Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerSummary'
import Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-colorectaalcarcinoom/Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomSummary'
import Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-endoscopische-resectietechnieken/Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenSummary'
import Blok10Week2CasusC03RectaalBloedverliesErfelijkeDarmkankerSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-erfelijke-darmkanker/Blok10Week2CasusC03RectaalBloedverliesErfelijkeDarmkankerSummary'
import Blok10Week2CasusC03RectaalBloedverliesRectaalBloedverliesSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lme-rectaal-bloedverlies/Blok10Week2CasusC03RectaalBloedverliesRectaalBloedverliesSummary'
import Blok10Week2CasusC03RectaalBloedverliesLmoBasisOncologischeChirurgieColoncarcinoomSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/lmo-basis-oncologische-chirurgie-coloncarcinoom/Blok10Week2CasusC03RectaalBloedverliesLmoBasisOncologischeChirurgieColoncarcinoomSummary'
import Blok10Week2CasusC03RectaalBloedverliesLmvPrehabilitatieVoorEenOperatieSummary from '../summaries/samenvattingen-b10/week-2/casus-c03-rectaal-bloedverlies/casus-bijeenkomst/lmv-prehabilitatie-voor-een-operatie/Blok10Week2CasusC03RectaalBloedverliesLmvPrehabilitatieVoorEenOperatieSummary'
import Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lme-aanhoudende-buikklachten/Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenSummary'
import Blok10Week2CasusC04DiarreeMalabsorptieSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lme-malabsorptie/Blok10Week2CasusC04DiarreeMalabsorptieSummary'
import Blok10Week2CasusC04DiarreeMorbusCrohnSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lme-morbus-crohn/Blok10Week2CasusC04DiarreeMorbusCrohnSummary'
import Blok10Week2CasusC04DiarreeVerteringEnOpnameSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lme-vertering-en-opname/Blok10Week2CasusC04DiarreeVerteringEnOpnameSummary'
import Blok10Week2CasusC04DiarreeMicroscopischeAnatomieVanMaagTotAnusSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lme-microscopische-anatomie-van-maag-tot-anus/Blok10Week2CasusC04DiarreeMicroscopischeAnatomieVanMaagTotAnusSummary'
import Blok10Week2CasusC04DiarreeLmoRomeIvCBowelDisordersSummary from '../summaries/samenvattingen-b10/week-2/casus-c04-diarree/lmo-rome-iv-c-bowel-disorders/Blok10Week2CasusC04DiarreeLmoRomeIvCBowelDisordersSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmePancreasfysiologieSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-pancreasfysiologie/Blok10Week3CasusC05ChronischePancreatitisLmePancreasfysiologieSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmeAcuteEnChronischePancreatitisSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-acute-en-chronische-pancreatitis/Blok10Week3CasusC05ChronischePancreatitisLmeAcuteEnChronischePancreatitisSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmeAdvancedEndoscopieEusErcpSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-advanced-endoscopie-eus-ercp/Blok10Week3CasusC05ChronischePancreatitisLmeAdvancedEndoscopieEusErcpSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmeDieetPancreatitisPancreasenzymenSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-dieet-pancreatitis-pancreasenzymen/Blok10Week3CasusC05ChronischePancreatitisLmeDieetPancreatitisPancreasenzymenSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmePancreascarcinoomSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-pancreascarcinoom/Blok10Week3CasusC05ChronischePancreatitisLmePancreascarcinoomSummary'
import Blok10Week3CasusC05ChronischePancreatitisLmeMicroscopischeAnatomiePancreasSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/lme-microscopische-anatomie-pancreas/Blok10Week3CasusC05ChronischePancreatitisLmeMicroscopischeAnatomiePancreasSummary'
import Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoEvaluatiePatientMetBuikpijnSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/flankerend-onderwijs/lmo-evaluatie-patient-met-buikpijn/Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoEvaluatiePatientMetBuikpijnSummary'
import Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoGestuurdeZelfstudieOverzichtsartikelSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/flankerend-onderwijs/lmo-gestuurde-zelfstudie-overzichtsartikel/Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoGestuurdeZelfstudieOverzichtsartikelSummary'
import Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoPitchPatientMetChronischePancreatitisSummary from '../summaries/samenvattingen-b10/week-3/casus-c05-chronische-pancreatitis/flankerend-onderwijs/lmo-pitch-patient-met-chronische-pancreatitis/Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoPitchPatientMetChronischePancreatitisSummary'
import Blok10Week3CasusC06DmType1LmeSymptomenPathofysiologieDiagnostiekDm1Summary from '../summaries/samenvattingen-b10/week-3/casus-c06-dm-type1/lme-symptomen-pathofysiologie-diagnostiek-dm1/Blok10Week3CasusC06DmType1LmeSymptomenPathofysiologieDiagnostiekDm1Summary'
import Blok10Week3CasusC06DmType1LmeAcuteOntregelingenDm1Summary from '../summaries/samenvattingen-b10/week-3/casus-c06-dm-type1/lme-acute-ontregelingen-dm1/Blok10Week3CasusC06DmType1LmeAcuteOntregelingenDm1Summary'
import Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoEndocrieneRegulatieKhVetEnEiwitstofwisselingSummary from '../summaries/samenvattingen-b10/week-3/casus-c06-dm-type1/flankerend-onderwijs/lmo-endocriene-regulatie-kh-vet-en-eiwitstofwisseling/Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoEndocrieneRegulatieKhVetEnEiwitstofwisselingSummary'
import Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoExogeneInsulinesSummary from '../summaries/samenvattingen-b10/week-3/casus-c06-dm-type1/flankerend-onderwijs/lmo-exogene-insulines/Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoExogeneInsulinesSummary'
import Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoRegulatieVanMetabolismeEnzymkinetiekSummary from '../summaries/samenvattingen-b10/week-3/casus-c06-dm-type1/flankerend-onderwijs/lmo-regulatie-van-metabolisme-enzymkinetiek/Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoRegulatieVanMetabolismeEnzymkinetiekSummary'
import Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/lme-vetvertering-enterohepatische-cyclus/Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusSummary'
import Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/lme-de-lever-als-fabriek/Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekSummary'
import Blok10Week4CasusC07LeververvettingLmeSldEnMasldSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/lme-sld-en-masld/Blok10Week4CasusC07LeververvettingLmeSldEnMasldSummary'
import Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/lme-autoimmuun-gemedieerde-leverziekten/Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenSummary'
import Blok10Week4CasusC07LeververvettingLmeAbcdeViraleHepatitisSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/lme-abcde-virale-hepatitis/Blok10Week4CasusC07LeververvettingLmeAbcdeViraleHepatitisSummary'
import Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoConsultEenBredeBlik2VoorbereidingKlv229SourceDocument from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/flankerend-onderwijs/lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29/Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoConsultEenBredeBlik2VoorbereidingKlv229SourceDocument'
import Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoLiteratuurOverLeverfibroseSummary from '../summaries/samenvattingen-b10/week-4/casus-c07-leververvetting/flankerend-onderwijs/lmo-literatuur-over-leverfibrose/Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoLiteratuurOverLeverfibroseSummary'
import Blok10Week4CasusC08LevercirroseLmeEndoscopieBasisEnBloedingenSummary from '../summaries/samenvattingen-b10/week-4/casus-c08-levercirrose/lme-endoscopie-basis-en-bloedingen/Blok10Week4CasusC08LevercirroseLmeEndoscopieBasisEnBloedingenSummary'
import Blok10Week4CasusC08LevercirroseLmeLevercirroseEnComplicatiesSummary from '../summaries/samenvattingen-b10/week-4/casus-c08-levercirrose/lme-levercirrose-en-complicaties/Blok10Week4CasusC08LevercirroseLmeLevercirroseEnComplicatiesSummary'
import Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvHccSummary from '../summaries/samenvattingen-b10/week-4/casus-c08-levercirrose/flankerend-onderwijs/lmv-hcc/Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvHccSummary'
import Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvLevertransplantatieSummary from '../summaries/samenvattingen-b10/week-4/casus-c08-levercirrose/flankerend-onderwijs/lmv-levertransplantatie/Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvLevertransplantatieSummary'
import Blok10Week5CasusC09ObesitasLmeChirurgischeObesitasbehandelingenSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/lme-chirurgische-obesitasbehandelingen/Blok10Week5CasusC09ObesitasLmeChirurgischeObesitasbehandelingenSummary'
import Blok10Week5CasusC09ObesitasLmeElkeArtsBehandeltObesitasSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/lme-elke-arts-behandelt-obesitas/Blok10Week5CasusC09ObesitasLmeElkeArtsBehandeltObesitasSummary'
import Blok10Week5CasusC09ObesitasLmeLichaamsbewegingSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/lme-lichaamsbeweging/Blok10Week5CasusC09ObesitasLmeLichaamsbewegingSummary'
import Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoMedicamenteuzeObesitasbehandelingenSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/flankerend-onderwijs/lmo-medicamenteuze-obesitasbehandelingen/Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoMedicamenteuzeObesitasbehandelingenSummary'
import Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNietMedicamenteuzeObesitasbehandelingenSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/flankerend-onderwijs/lmo-niet-medicamenteuze-obesitasbehandelingen/Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNietMedicamenteuzeObesitasbehandelingenSummary'
import Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNutritionalAssessmentSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/flankerend-onderwijs/lmo-nutritional-assessment/Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNutritionalAssessmentSummary'
import Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmvLevenMetObesitasSummary from '../summaries/samenvattingen-b10/week-5/casus-c09-obesitas/flankerend-onderwijs/lmv-leven-met-obesitas/Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmvLevenMetObesitasSummary'
import Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Summary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/lme-symptomen-pathofysiologie-diagnostiek-dm2/Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Summary'
import Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesSummary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/lme-langetermijn-complicaties-diabetes/Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesSummary'
import Blok10Week5CasusC10DmType2LmeLeefstijlVoedingPreventieDm2Summary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/lme-leefstijl-voeding-preventie-dm2/Blok10Week5CasusC10DmType2LmeLeefstijlVoedingPreventieDm2Summary'
import Blok10Week5CasusC10DmType2LmeLipidenLipoproteinenMetaboleDysregulatieSummary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/lme-lipiden-lipoproteinen-metabole-dysregulatie/Blok10Week5CasusC10DmType2LmeLipidenLipoproteinenMetaboleDysregulatieSummary'
import Blok10Week5CasusC10DmType2LmeRemissieVanDiabetesSummary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/lme-remissie-van-diabetes/Blok10Week5CasusC10DmType2LmeRemissieVanDiabetesSummary'
import Blok10Week5CasusC10DmType2FlankerendOnderwijsLmoMedicamenteuzeBehandelingVanDiabetesType2Summary from '../summaries/samenvattingen-b10/week-5/casus-c10-dm-type2/flankerend-onderwijs/lmo-medicamenteuze-behandeling-van-diabetes-type-2/Blok10Week5CasusC10DmType2FlankerendOnderwijsLmoMedicamenteuzeBehandelingVanDiabetesType2Summary'

// Main Summary Page Component
const VALID_BLOK_KEYS = ['blok3', 'blok4', 'blok5', 'blok9', 'blok10']
const SUMMARY_COMPLETION_MS = 3 * 60 * 1000

const SummaryPage = ({ forcedBlok = null }) => {
  const [searchParams] = useSearchParams()
  const lme = searchParams.get('lme') || 'index'
  const { user, loading: authLoading } = useAuth()
  const { awardCoins } = useReward()
  const progressUserId = getProgressUserId(user, authLoading)
  const hasAccountProgress = Boolean(user?.uid) && progressUserId !== null && progressUserId !== 'guest'
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = hasAccess && plan !== 'free'
  const showPremiumLocks = !accessLoading && !hasPaidAccess
  const isBlockedDirectLme = lme !== 'index' && showPremiumLocks && isFreePlanBlockedLme(lme)
  const blokParam = searchParams.get('blok')
  const forcedBlokKey = VALID_BLOK_KEYS.includes(forcedBlok) ? forcedBlok : null
  const urlBlokKey = VALID_BLOK_KEYS.includes(blokParam) ? blokParam : null
  const selectedOverviewBlok = forcedBlokKey || urlBlokKey
  const [activeLme, setActiveLme] = useState(lme)
  useEffect(() => { setActiveLme(lme) }, [lme])

  const handleVariantSwitch = (newLmeId) => {
    setActiveLme(newLmeId)
    window.history.replaceState(null, '', `/summary?lme=${encodeURIComponent(newLmeId)}`)
  }

  const [seenMap, setSeenMap] = useState({})
  const [expandedBlok, setExpandedBlok] = useState(() => {
    if (selectedOverviewBlok) return selectedOverviewBlok
    return null
  })

  useEffect(() => {
    if (selectedOverviewBlok) {
      setExpandedBlok(selectedOverviewBlok)
      requestAnimationFrame(() => {
        const el = document.getElementById(`section-${selectedOverviewBlok}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [selectedOverviewBlok])

  useEffect(() => {
    if (progressUserId == null) return
    setSeenMap(loadSummarySeenMap(progressUserId))
  }, [progressUserId])

  useEffect(() => {
    if (progressUserId == null || !lme || lme === 'index' || isBlockedDirectLme) return

    const currentMap = loadSummarySeenMap(progressUserId)
    if (currentMap[lme]) return

    const timer = window.setTimeout(() => {
      const mapBefore = loadSummarySeenMap(progressUserId)
      const isFirstRead = !mapBefore[lme]
      markSummarySeen(progressUserId, lme)
      setSeenMap(loadSummarySeenMap(progressUserId))
      if (isFirstRead) {
        awardCoins(COIN_REWARDS.FIRST_SUMMARY_READ, 'Samenvatting gelezen')
      }
    }, SUMMARY_COMPLETION_MS)

    return () => window.clearTimeout(timer)
  }, [progressUserId, lme, isBlockedDirectLme, awardCoins])

  useEffect(() => {
    const onCloudSynced = (e) => {
      const uid = e?.detail?.uid
      if (!progressUserId || uid !== progressUserId) return
      setSeenMap(loadSummarySeenMap(progressUserId))
    }
    window.addEventListener('smartium-cloud-synced', onCloudSynced)
    return () => window.removeEventListener('smartium-cloud-synced', onCloudSynced)
  }, [progressUserId])

  if (isBlockedDirectLme) {
    return <Navigate to="/summary" replace />
  }
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
      name: "Blok 4: Afweer en Aanpak van Infecties",
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
    },
    blok5: {
      name: "Blok 5: Bedreigingen van Binnen & Buiten",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 1: De huid als succesvolle barrière",
              lmes: [
                {
                  id: "blok5-week1-casus1-casusbijeenkomst",
                  name: "De huid als succesvolle barrière",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb",
                  name: "Huidtypen met invloed van UVA en UVB",
                  available: true,
                },
                {
                  id: "blok5-week1-casus1-microbioom-en-immunologie-van-de-huid",
                  name: "Microbioom en immunologie van de huid",
                  available: true,
                },
                {
                  id: "blok5-week1-casus1-externe-verstorende-factoren-op-de-huidbarriere",
                  name: "Externe verstorende factoren op de huidbarrière",
                  available: true,
                },
                {
                  id: "blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid",
                  name: "Hoe werkt een geneesmiddel via de huid",
                  available: true,
                },
                {
                  id: "blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud",
                  name: "De huidbarrière van jong tot oud",
                  available: true,
                },
              ],
            },
            {
              name: "Casus 2: De veranderde barrière",
              lmes: [
                {
                  id: "blok5-week1-casus2-casusbijeenkomst",
                  name: "De veranderde barrière",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week1-casus2-lmo-eczeem",
                  name: "Eczeem",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek",
                  name: "Contactallergie en allergologisch onderzoek",
                  available: true,
                  moduleKind: "lmv",
                },
                {
                  id: "blok5-week1-casus2-psoriasis",
                  name: "Psoriasis",
                  available: true,
                },
                {
                  id: "blok5-week1-casus2-voeding-en-inhalatieallergie",
                  name: "Voeding en inhalatieallergie",
                  available: true,
                },
                {
                  id: "blok5-week1-casus2-nadelige-reacties-van-medicatie",
                  name: "Nadelige reacties van medicatie (Adverse Drug Reactions)",
                  available: true,
                },
                {
                  id: "blok5-week1-casus2-provoke",
                  name: "PROVOKE",
                  available: true,
                },
                {
                  id: "blok5-week1-casus2-lmv-anafylaxie-type-i-allergie",
                  name: "Anafylaxie, type I allergie",
                  available: true,
                  moduleKind: "lmv",
                },
                {
                  id: "blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie",
                  name: "Centrale vs perifere tolerantie",
                  available: true,
                  moduleKind: "lmv",
                },
                {
                  id: "blok5-week1-casus2-stm-pathogenese-type-iv-allergie",
                  name: "Pathogenese type IV allergie",
                  available: true,
                  moduleKind: "stm",
                },
              ],
            },
          ],
        },
        {
          name: "Week 2",
          cases: [
            {
              name: "Casus 3: Paarse vlek",
              lmes: [
                {
                  id: "blok5-week2-casus3-casusbijeenkomst",
                  name: "Paarse vlek",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week2-casus3-begripsbepaling-dermatologische-uitingen",
                  name: "Begripsbepaling dermatologische uitingen",
                  available: true,
                },
                {
                  id: "blok5-week2-casus3-hemostase-basis",
                  name: "Hemostase basis",
                  available: true,
                },
                {
                  id: "blok5-week2-casus3-aangeboren-stollingsstoornissen",
                  name: "Aangeboren stollingsstoornissen",
                  available: true,
                },
                {
                  id: "blok5-week2-casus3-vasculitis-klein-middel-groot",
                  name: "Vasculitis - klein, middel, groot",
                  available: true,
                },
                {
                  id: "blok5-week2-casus3-lmv-vasculitis-of-vasculopathie",
                  name: "Vasculitis of vasculopathie",
                  available: true,
                  moduleKind: "lmv",
                },
              ],
            },
            {
              name: "Casus 4: Donkere vlek",
              lmes: [
                {
                  id: "blok5-week2-casus4-casusbijeenkomst",
                  name: "Donkere vlek",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen",
                  name: "Goedaardige en kwaadaardige huidafwijkingen",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-melanoom-gelokaliseerd",
                  name: "Melanoom gelokaliseerd",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-sentinel-node",
                  name: "Sentinel node",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-immuuntherapie-van-kanker",
                  name: "Immuuntherapie van kanker",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-systemische-therapie-van-melanoom",
                  name: "Systemische therapie van melanoom",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-chronische-ontsteking",
                  name: "Chronische ontsteking",
                  available: true,
                },
                {
                  id: "blok5-week2-casus4-mri-en-pet-scan-benignemaligne",
                  name: "MRI en PET-scan benignemaligne",
                  available: true,
                },
              ],
            },
          ],
        },
        {
          name: "Week 3",
          cases: [
            {
              name: "Casus 5: De verdachte huid",
              lmes: [
                {
                  id: "blok5-week3-casus5-lmo-verdachte-huidafwijkingen",
                  name: "Verdachte huidafwijkingen",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week3-casus5-huidtumoren-benigne-en-premaligne",
                  name: "Huidtumoren benigne en premaligne",
                  available: true,
                },
                {
                  id: "blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom",
                  name: "Huidtumoren basaalcel- en plaveiselcelcarcinoom",
                  available: true,
                },
                {
                  id: "blok5-week3-casus5-lmo-zorgmijding",
                  name: "Zorgmijding",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week3-casus5-milieu-en-gezondheid",
                  name: "Milieu en gezondheid",
                  available: true,
                },
                {
                  id: "blok5-week3-casus5-leefstijl-en-kanker",
                  name: "Leefstijl en kanker",
                  available: true,
                },
              ],
            },
            {
              name: "Casus 6: Knobbel in de borst",
              lmes: [
                {
                  id: "blok5-week3-casus6-casusbijeenkomst",
                  name: "Knobbel in de borst",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week3-casus6-radiologische-diagnostiek-mammacarcinoom",
                  name: "Radiologische diagnostiek mammacarcinoom",
                  available: true,
                },
                {
                  id: "blok5-week3-casus6-mammapathologie",
                  name: "Mammapathologie",
                  available: true,
                },
                {
                  id: "blok5-week3-casus6-behandeling-van-mammacarcinoom",
                  name: "Behandeling van mammacarcinoom",
                  available: true,
                },
                {
                  id: "blok5-week3-casus6-het-slechtnieuwsgesprek",
                  name: "Het slechtnieuwsgesprek",
                  available: true,
                },
                {
                  id: "blok5-week3-casus6-familiair-mammacarcinoom",
                  name: "Familiair mammacarcinoom",
                  available: true,
                },
                {
                  id: "blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom",
                  name: "Overdiagnose bij bevolkingsonderzoek mammacarcinoom",
                  available: true,
                },
              ],
            },
          ],
        },
        {
          name: "Week 4",
          cases: [
            {
              name: "Casus 7: Zwelling van de lies en of een dik been",
              lmes: [
                {
                  id: "blok5-week4-casus7-casusbijeenkomst",
                  name: "Zwelling van de lies en/of een dik been",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week4-casus7-flebologische-aandoeningen",
                  name: "Flebologische aandoeningen",
                  available: true,
                },
                {
                  id: "blok5-week4-casus7-trombose-verhoogde-stollingsneiging",
                  name: "Trombose verhoogde stollingsneiging",
                  available: true,
                },
                {
                  id: "blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been",
                  name: "Differentiaal diagnostische aanpak van zwelling in het been",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week4-casus7-lymfadenopathie",
                  name: "Lymfadenopathie",
                  available: true,
                },
                {
                  id: "blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten",
                  name: "Voorbereiding VOW: Hoeveel mag een levensjaar kosten?",
                  available: true,
                  moduleKind: "lmo",
                },
              ],
            },
            {
              name: "Casus 8: Zwelling in de oksel",
              lmes: [
                {
                  id: "blok5-week4-casus8-casusbijeenkomst",
                  name: "Zwelling in de oksel",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week4-casus8-lymfeklierdissectie",
                  name: "Lymfeklierdissectie",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-erysipelas-en-cellulitis",
                  name: "Erysipelas en cellulitis",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-necrotiserende-wekedeleninfectie",
                  name: "Necrotiserende wekedeleninfectie",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-radiotherapie-in-de-praktijk",
                  name: "Radiotherapie in de praktijk",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-hydradenitis-suppurativa",
                  name: "Hidradenitis suppurativa",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24",
                  name: "Lichamelijk onderzoek Knie (voorbereiding KLV 1.24)",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-volksgezondheidsindicatoren-dalys",
                  name: "Volksgezondheidsindicatoren DALY’s",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-introductiemodule-planetary-health",
                  name: "Introductiemodule Planetary health",
                  available: true,
                },
                {
                  id: "blok5-week4-casus8-lmv-verworven-stollingsstoornissen",
                  name: "Verworven stollingsstoornissen",
                  available: true,
                  moduleKind: "lmv",
                },
              ],
            },
          ],
        },
        {
          name: "Week 5",
          cases: [
            {
              name: "Casus 9: Patiënt met auto-immuunziekte",
              lmes: [
                {
                  id: "blok5-week5-casus9-casusbijeenkomst",
                  name: "Patiënt met auto-immuunziekte",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week5-casus9-pathogenese-auto-immuunziekten",
                  name: "Pathogenese auto-immuunziekten",
                  available: true,
                },
                {
                  id: "blok5-week5-casus9-endocriene-auto-immuunziekten",
                  name: "Endocriene auto-immuunziekten",
                  available: true,
                },
                {
                  id: "blok5-week5-casus9-bouw-en-functie-van-de-thymus",
                  name: "Bouw en functie van de thymus",
                  available: true,
                },
                {
                  id: "blok5-week5-casus9-lmo-positieve-en-negatieve-selectie",
                  name: "Positieve en negatieve selectie",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen",
                  name: "Klinische presentatie en immuunmechanismen",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie",
                  name: "Introductie auto-immuniteit versus auto-inflammatie",
                  available: true,
                  moduleKind: "lmv",
                },
                {
                  id: "blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie",
                  name: "Auto-immuniteit als bijwerking bij immunotherapie",
                  available: true,
                  moduleKind: "lmv",
                },
                {
                  id: "blok5-week5-casus9-lmv-patient-met-sle-samenvatting",
                  name: "Patiënt met SLE",
                  available: true,
                  moduleKind: "lmv",
                },
              ],
            },
            {
              name: "Casus 10: Patiënt met auto-inflammatoire ziekte",
              lmes: [
                {
                  id: "blok5-week5-casus10-casusbijeenkomst",
                  name: "Patiënt met auto-inflammatoire ziekte",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie",
                  name: "Principes en klinische aspecten van auto-inflammatie",
                  available: true,
                },
                {
                  id: "blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit",
                  name: "Spectrum auto-inflammatie en auto-immuniteit",
                  available: true,
                },
              ],
            },
          ],
        },
        {
          name: "Week 6",
          cases: [
            {
              name: "Casus 11: Kind met algehele malaise, koorts en zwelling in de buik",
              lmes: [
                {
                  id: "blok5-week6-casus11-casusbijeenkomst",
                  name: "Kind met algehele malaise, koorts en zwelling in de buik",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week5-casus11-introductie-kinderoncologie",
                  name: "Introductie kinderoncologie",
                  available: true,
                },
                {
                  id: "blok5-week5-casus11-typen-kinderoncologie-bij-kinderen",
                  name: "Typen kinderoncologie bij kinderen",
                  available: true,
                },
                {
                  id: "blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks",
                  name: "Kinderoncologie - begrijp de hallmarks",
                  available: true,
                },
                {
                  id: "blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd",
                  name: "Alarmsymptomen op de kinderleeftijd",
                  available: true,
                },
                {
                  id: "blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd",
                  name: "Over leven na kanker op kinderleeftijd",
                  available: true,
                },
                {
                  id: "blok5-week5-casus11-lmo-importziekten",
                  name: "Importziekten",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie",
                  name: "Infecties binnen de kinderoncologie",
                  available: true,
                  moduleKind: "lmo",
                },
              ],
            },
            {
              name: "Casus 12: Verwarde patiënt met griepachtige klachten",
              lmes: [
                {
                  id: "blok5-week6-casus12-casusbijeenkomst",
                  name: "Verwarde patiënt met griepachtige klachten",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week6-casus12-gaswisseling-hb-o2-co2-co",
                  name: "Gaswisseling Hb, O2, CO2, CO",
                  available: true,
                },
                {
                  id: "blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties",
                  name: "Slechte woningen lucht & luchtverontreiniging  bovenste luchtweginfecties",
                  available: true,
                },
                {
                  id: "blok5-week6-casus12-nvic-acute-vergiftiging",
                  name: "NVIC acute vergiftiging",
                  available: true,
                },
              ],
            },
          ],
        },
        {
          name: "Week 7",
          cases: [
            {
              name: "Casus 13: Multipel myeloom",
              lmes: [
                {
                  id: "blok5-week6-casus13-casusbijeenkomst",
                  name: "Multipel myeloom",
                  available: true,
                  moduleKind: "casusbijeenkomst",
                },

                {
                  id: "blok5-week6-casus13-botopbouw-botafbraak-en-pathologische-breuken",
                  name: "Botopbouw, botafbraak en pathologische breuken",
                  available: true,
                },
                {
                  id: "blok5-week6-casus13-m-proteine-diagnostiek-eiwit-als-tumormarker",
                  name: "M-proteine diagnostiek, eiwit als tumormarker",
                  available: true,
                },
                {
                  id: "blok5-week6-casus13-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie",
                  name: "Het MM als voorbeeld voor targeted therapy in de hemato-oncologie",
                  available: true,
                },
                {
                  id: "blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten",
                  name: "Celtherapie als behandeling voor maligniteiten",
                  available: true,
                },
                {
                  id: "blok5-week6-casus13-transplantatiegeneeskunde",
                  name: "Transplantatiegeneeskunde",
                  available: true,
                },
              ],
            },
            {
              name: "Casus 14: AI in de zorg",
              lmes: [
                {
                  id: "blok5-week7-casus14-lmo-wat-is-ai",
                  name: "Wat is AI?",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week7-casus14-dermatoloog-in-je-broekzak",
                  name: "Dermatoloog in je broekzak",
                  available: true,
                },
                {
                  id: "blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk",
                  name: "Implementatie in de dermatologische praktijk",
                  available: true,
                  moduleKind: "lmo",
                },
                {
                  id: "blok5-week7-casus14-lmo-ethiek-van-derma-apps",
                  name: "Ethiek van derma-apps",
                  available: true,
                  moduleKind: "lmo",
                },
              ],
            },
          ],
        },
        {
          name: "Week 8",
          cases: [
            {
              name: "Casus 15: Kiezen tussen twee kwaden",
              lmes: [
                {
                  id: "blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie",
                  name: "Risico op iatrogene schade na orgaantransplantatie",
                  available: true,
                },
                {
                  id: "blok5-week8-casus15-scylla-en-charybdis",
                  name: "Scylla en Charybdis",
                  available: true,
                },
                {
                  id: "blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem",
                  name: "Remmen versus stimuleren van het afweersysteem",
                  available: true,
                },
                {
                  id: "blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg",
                  name: "Voorbereiding VOW palliatieve zorg",
                  available: true,
                  moduleKind: "lmo",
                },
              ],
            },
          ],
        },
      ],
    },
    blok9: {
      name: "Blok 9: Homeostase II",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 1: Patiënt met acute nierschade",
              lmes: [
                { id: "blok9-week1-casus1-acute-nierschade", name: "Acute nierschade", available: true },
                { id: "blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten", name: "Tubulaire en erfelijke nierziekten", available: true },
                { id: "blok9-week1-casus1-glomerulaire-nierziekten", name: "Glomerulaire nierziekten", available: true },
                { id: "blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten", name: "Glomerulaire en tubulaire nierziekten", available: true },
                { id: "blok9-week1-casus1-acute-nierschade-verdieping", name: "Acute nierschade - verdieping", available: true },
              ],
            },
            {
              name: "Casus 2: Patiënt met chronische nierschade",
              lmes: [
                { id: "blok9-week1-casus2-chronische-nierschade", name: "Chronische nierschade", available: true },
                { id: "blok9-week1-casus2-niertransplantatie", name: "Niertransplantatie", available: true },
                { id: "blok9-week1-casus2-dialyse", name: "Dialyse", available: true },
                { id: "blok9-week1-casus2-chronische-nierschade-verdieping", name: "Chronische nierschade - verdieping", available: true },
                { id: "blok9-week1-casus2-nierfunctievervangende-therapie", name: "Nierfunctievervangende therapie", available: true },
                { id: "blok9-week1-casus2-ethiek-van-orgaantransplantatie", name: "Ethiek van orgaantransplantatie", available: true },
              ],
            },
          ],
        },
        {
          name: "Week 2",
          cases: [
            {
              name: "Casus 3: Patiënt met ernstig verstoorde elektrolyten",
              lmes: [
                { id: "blok9-week2-casus3-klinische-stoornissen-water-en-volume-balans", name: "Klinische stoornissen van de water- en volume balans", available: true },
                { id: "blok9-week2-casus3-klinische-stoornissen-kaliumbalans", name: "Klinische stoornissen van de kaliumbalans", available: true },
                { id: "blok9-week2-casus3-klinische-stoornissen-zuur-basebalans", name: "Klinische stoornissen van de zuur-basebalans", available: true },
                { id: "blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping", name: "Stoornissen kalium en zuur-base evenwicht - verdieping", available: true },
                { id: "blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping", name: "Stoornissen van de water- en volumebalans - verdieping", available: true },
              ],
            },
            {
              name: "Casus 4: De vrouw die maar 20 meter kan lopen",
              lmes: [
                { id: "blok9-week2-casus4-perifeer-arterieel-vaatlijden", name: "Perifeer arterieel vaatlijden", available: true },
                { id: "blok9-week2-casus4-diabetische-voet", name: "Diabetische voet", available: true },
                { id: "blok9-week2-casus4-dilaterend-vaatlijden", name: "Dilaterend vaatlijden", available: true },
                { id: "blok9-week2-casus4-mdr-juridische-aspecten-medische-tools", name: "MDR juridische aspecten rond medische tools", available: true },
                { id: "blok9-week2-casus4-preoperatieve-screening", name: "Preoperatieve screening", available: true },
                { id: "blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie", name: "CT-scans beoordelen VOW Toegepaste Anatomie", available: true },
              ],
            },
          ],
        },
        {
          name: "Week 3",
          cases: [
            {
              name: "Casus 5: Patiënt met hypertensie",
              lmes: [
                { id: "blok9-week3-casus5-hypertensie", name: "Hypertensie", available: true },
                { id: "blok9-week3-casus5-secundaire-hypertensie", name: "Secundaire hypertensie", available: true },
                { id: "blok9-week3-casus5-hypertensief-spoedgeval", name: "Hypertensief spoedgeval", available: true },
                { id: "blok9-week3-casus5-farmacogenetica", name: "Farmacogenetica", available: true },
                { id: "blok9-week3-casus5-ai-act", name: "AI Act", available: true },
              ],
            },
            {
              name: "Casus 6: Volwassene met pijn op de borst",
              lmes: [{ id: "blok9-week3-casus6-cvrm", name: "CVRM", available: true }],
            },
          ],
        },
        {
          name: "Week 4",
          cases: [
            {
              name: "Casus 7: Patiënt met een pneumonie",
              lmes: [
                {
                  id: "blok9-week4-casus7-pneumonie-epidemiologie-verwekkers-behandeling",
                  name: "Epidemiologie, verschillende verwekkers en behandeling van de pneumonie",
                  available: true,
                },
                {
                  id: "blok9-week4-casus7-pathofysiologie-kliniek-diagnostiek-pneumonie",
                  name: "Pathofysiologie, kliniek, en diagnostiek van de pneumonie",
                  available: true,
                },
                {
                  id: "blok9-week4-casus7-klinisch-redeneren-respiratoire-insufficiëntie",
                  name: "Klinisch redeneren bij respiratoire insufficiëntie",
                  available: true,
                },
                {
                  id: "blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie",
                  name: "Symptomatische behandeling van respiratoire insufficientie",
                  available: true,
                },
              ],
            },
            {
              name: "Casus 8: Een leuk feestje",
              lmes: [
                { id: "blok9-week4-casus8-toxidromen", name: "Toxidromen", available: true },
                { id: "blok9-week4-casus8-shock", name: "Shock", available: true },
                {
                  id: "blok9-week4-casus8-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen",
                  name: "Herkennen gedecompenseerde circulatie en alarmsymptomen",
                  available: true,
                },
                {
                  id: "blok9-week4-casus8-passende-zorg-op-de-intensive-care",
                  name: "Passende zorg op de intensive care",
                  available: true,
                },
                { id: "blok9-week4-casus8-lineare-regressielijn", name: "Lineare regressielijn", available: true },
              ],
            },
          ],
        },
        {
          name: "Week 5",
          cases: [
            {
              name: "Casus 9: Longkanker, wat nu",
              lmes: [
                { id: "blok9-week5-casus9-longkanker", name: "Longkanker", available: true },
                { id: "blok9-week5-casus9-pleuravocht", name: "Pleuravocht", available: true },
                {
                  id: "blok9-week5-casus9-voorbereiding-ct-en-pet-ct",
                  name: "Voorbereiding CT en PET-CT",
                  available: true,
                },
                {
                  id: "blok9-week5-casus9-voorbereiding-pathologie-longkanker",
                  name: "Voorbereiding pathologie longkanker",
                  available: true,
                },
              ],
            },
            {
              name: "Casus 10: Atriumfibrilleren",
              lmes: [
                { id: "blok9-week5-casus10-basis-analyse-ecg", name: "Basis analyse ECG", available: true },
                { id: "blok9-week5-casus10-atriumfibrilleren", name: "Atriumfibrilleren", available: true },
                {
                  id: "blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices",
                  name: "Brady aritmie en implanteerbare cardiale devices",
                  available: true,
                },
                { id: "blok9-week5-casus10-tachyaritmie", name: "Tachyaritmie", available: true },
                {
                  id: "blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren",
                  name: "Leefstijl als therapie voor atriumfibrilleren",
                  available: true,
                },
                { id: "blok9-week5-casus10-syncope", name: "Syncope", available: true },
                {
                  id: "blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties",
                  name: "Elektrofysiologisch onderzoek en ablaties",
                  available: true,
                },
                {
                  id: "blok9-week5-casus10-ritmestoornissen-bij-kinderen",
                  name: "Ritmestoornissen bij kinderen",
                  available: true,
                },
              ],
            },
          ],
        },
      ],
    },
    blok10: {
      name: 'Blok 10: Maag-Darm-Lever ',
      weeks: [
        {
          name: 'Week 1',
          cases: [
            {
              name: 'Casus 1: Maagklachten',
              lmes: [
                {
                  id: 'blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen',
                  name: 'Endoscopie basis en bloedingen',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur',
                  name: 'Fysiologie van maagzuur',
                  available: true,
                  moduleKind: 'lme',
                  progressLmeIds: [
                    'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur',
                    'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur-mini',
                  ],
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-leefstijl-bij-reflux',
                  name: 'Leefstijl bij reflux',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-logistische-regressie-analyse',
                  name: 'Logistische regressie analyse',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-reflux-bij-kinderen',
                  name: 'Reflux bij kinderen',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori',
                  name: 'Pathofysiologie Helicobacter pylori',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-lmv-h-pylori-zorgkosten-vanuit-een-bacterie',
                  name: 'H. pylori, de zorgkosten die ontstaan vanuit een bacterie',
                  available: true,
                  moduleKind: 'lmv',
                },
                {
                  id: 'blok10-week1-casus1-maagklachten-lmv-ppi',
                  name: 'Omeprazol en protonpompremmers',
                  available: true,
                  moduleKind: 'lmv',
                },
              ],
            },
            {
              name: 'Casus 2: Passageklachten',
              lmes: [
                {
                  id: 'blok10-week1-casus2-passageklachten-lme-pre-maligne-bovenste-tractus-digestivus',
                  name: '(Pre)maligne bovenste tractus digestivus',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus2-passageklachten-lme-chemoradiatie',
                  name: 'Chemoradiatie',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus2-passageklachten-lme-kindergerelateerde-ziekten',
                  name: 'Kindergerelateerde ziekten',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus2-passageklachten-lme-motiliteit-van-de-bovenste-tractus-digestivus',
                  name: 'Motiliteit van de bovenste tractus digestivus',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week1-casus2-passageklachten-lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus',
                  name: 'Chirurgische behandeling van aandoeningen aan de bovenste tractus digestivus',
                  available: true,
                  moduleKind: 'lmv',
                },
              ],
            },
          ],
        },
        {
          name: 'Week 2',
          cases: [
            {
              name: 'Casus C03: Rectaal bloedverlies',
              lmes: [
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-acute-buik-en-acute-buikpijn',
                  name: 'Acute buik en acute buikpijn',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-zelfstudie-differentiaal-diagnose-van-acute-buikpijn',
                  name: 'Zelfstudie differentiaal diagnose van acute buikpijn',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-bevolkingsonderzoek-darmkanker',
                  name: 'Bevolkingsonderzoek darmkanker',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-colorectaalcarcinoom',
                  name: 'Colorectaal carcinoom',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-endoscopische-resectietechnieken',
                  name: 'Endoscopische resectietechnieken',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-erfelijke-darmkanker',
                  name: 'Erfelijke darmkanker',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-rectaal-bloedverlies',
                  name: 'Rectaal bloedverlies',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-basis-oncologische-chirurgie-coloncarcinoom',
                  name: 'Basis oncologische chirurgie (coloncarcinoom)',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week2-casus-c03-rectaal-bloedverlies-lmv-prehabilitatie-voor-een-operatie',
                  name: 'Prehabilitatie voor een operatie',
                  available: true,
                  moduleKind: 'lmv',
                },
              ],
            },
            {
              name: 'Casus C04: Diarree',
              lmes: [
                {
                  id: 'blok10-week2-casus-c04-diarree-aanhoudende-buikklachten',
                  name: 'Aanhoudende buikklachten',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c04-diarree-malabsorptie',
                  name: 'Malabsorptie',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c04-diarree-morbus-crohn',
                  name: 'Morbus Crohn',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c04-diarree-vertering-en-opname',
                  name: 'Vertering en opname',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week2-casus-c04-diarree-microscopische-anatomie-van-maag-tot-anus',
                  name: 'Microscopische anatomie van maag tot anus',
                  available: true,
                  moduleKind: 'lme',
                },
              ],
            },
          ],
        },
        {
          name: 'Week 3',
          cases: [
            {
              name: 'Casus C05: Chronische pancreatitis',
              lmes: [
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-pancreasfysiologie',
                  name: 'Pancreasfysiologie',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-acute-en-chronische-pancreatitis',
                  name: 'Acute en chronische pancreatitis',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-advanced-endoscopie-eus-ercp',
                  name: 'Advanced endoscopie (EUS en ERCP)',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-dieet-pancreatitis-pancreasenzymen',
                  name: 'Dieet, pancreatitis en pancreasenzymen',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-pancreascarcinoom',
                  name: 'Pancreascarcinoom',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-microscopische-anatomie-pancreas',
                  name: 'Microscopische anatomie van de pancreas',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-evaluatie-patient-met-buikpijn',
                  name: 'Evaluatie patiënt met buikpijn',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-gestuurde-zelfstudie-overzichtsartikel',
                  name: 'Gestuurde zelfstudie – overzichtsartikel',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-pitch-patient-met-chronische-pancreatitis',
                  name: 'Pitch patiënt met chronische pancreatitis',
                  available: true,
                  moduleKind: 'lmo',
                },
              ],
            },
            {
              name: 'Casus C06: DM type 1',
              lmes: [
                {
                  id: 'blok10-week3-casus-c06-dm-type1-symptomen-pathofysiologie-diagnostiek-dm1',
                  name: 'Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 1',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c06-dm-type1-acute-ontregelingen-dm1',
                  name: 'Acute ontregelingen bij diabetes mellitus type 1',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week3-casus-c06-dm-type1-lmo-endocriene-regulatie-kh-vet-en-eiwitstofwisseling',
                  name: 'Endocriene regulatie KH-, vet- en eiwitstofwisseling',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week3-casus-c06-dm-type1-lmo-exogene-insulines',
                  name: 'Exogene insulines',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week3-casus-c06-dm-type1-lmo-regulatie-van-metabolisme-enzymkinetiek',
                  name: 'Regulatie van metabolisme enzymkinetiek',
                  available: true,
                  moduleKind: 'lmo',
                },
              ],
            },
          ],
        },
        {
          name: 'Week 4',
          cases: [
            {
              name: 'Casus C07: Leververvetting',
              lmes: [
                {
                  id: 'blok10-week4-casus-c07-leververvetting-vetvertering-enterohepatische-cyclus',
                  name: 'Vetvertering en entero-hepatische cyclus',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-de-lever-als-fabriek',
                  name: 'De lever als fabriek',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-sld-en-masld',
                  name: 'SLD en MASLD',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-autoimmuun-gemedieerde-leverziekten',
                  name: 'Auto-immuun gemedieerde leverziekten',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-abcde-virale-hepatitis',
                  name: 'ABCDE virale hepatitis',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29',
                  name: 'Consult Een brede blik 2 (voorbereiding KLV 2.29)',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week4-casus-c07-leververvetting-lmo-literatuur-over-leverfibrose',
                  name: 'Literatuur over leverfibrose',
                  available: true,
                  moduleKind: 'lmo',
                },
              ],
            },
            {
              name: 'Casus C08: Levercirrose',
              lmes: [
                {
                  id: 'blok10-week4-casus-c08-levercirrose-endoscopie-basis-en-bloedingen',
                  name: 'Endoscopie basis en bloedingen',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c08-levercirrose-levercirrose-en-complicaties',
                  name: 'Levercirrose en complicaties',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week4-casus-c08-levercirrose-lmv-hcc',
                  name: 'HCC',
                  available: true,
                  moduleKind: 'lmv',
                },
                {
                  id: 'blok10-week4-casus-c08-levercirrose-lmv-levertransplantatie',
                  name: 'Levertransplantatie',
                  available: true,
                  moduleKind: 'lmv',
                },
              ],
            },
          ],
        },
        {
          name: 'Week 5',
          cases: [
            {
              name: 'Casus C09: Obesitas',
              lmes: [
                // LME 38 (Chirurgische obesitasbehandelingen) en LME 39 (Elke arts behandelt
                // obesitas) tijdelijk verborgen: er is nog geen ingevuld bronmateriaal, alleen
                // placeholder-samenvattingen. Terugzetten zodra de bron beschikbaar is.
                {
                  id: 'blok10-week5-casus-c09-obesitas-lichaamsbeweging',
                  name: 'Lichaamsbeweging',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week5-casus-c09-obesitas-lmo-medicamenteuze-obesitasbehandelingen',
                  name: 'Medicamenteuze obesitasbehandelingen',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week5-casus-c09-obesitas-lmo-niet-medicamenteuze-obesitasbehandelingen',
                  name: 'Niet-medicamenteuze obesitasbehandelingen',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week5-casus-c09-obesitas-lmo-nutritional-assessment',
                  name: 'Nutritional assessment',
                  available: true,
                  moduleKind: 'lmo',
                },
                {
                  id: 'blok10-week5-casus-c09-obesitas-lmv-leven-met-obesitas',
                  name: 'Leven met obesitas',
                  available: true,
                  moduleKind: 'lmv',
                },
              ],
            },
            {
              name: 'Casus C10: DM type 2',
              lmes: [
                {
                  id: 'blok10-week5-casus-c10-dm-type2-symptomen-pathofysiologie-diagnostiek-dm2',
                  name: 'Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 2',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week5-casus-c10-dm-type2-langetermijn-complicaties-diabetes',
                  name: 'Langetermijncomplicaties van diabetes mellitus',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week5-casus-c10-dm-type2-leefstijl-voeding-preventie-dm2',
                  name: 'Leefstijl, voeding en preventie bij diabetes mellitus type 2',
                  available: true,
                  moduleKind: 'lme',
                },
                // LME 44 (Lipiden, lipoproteinen en metabole dysregulatie) tijdelijk verborgen:
                // nog geen ingevuld bronmateriaal, alleen een placeholder-samenvatting.
                {
                  id: 'blok10-week5-casus-c10-dm-type2-remissie-van-diabetes',
                  name: 'Remissie van diabetes',
                  available: true,
                  moduleKind: 'lme',
                },
                {
                  id: 'blok10-week5-casus-c10-dm-type2-lmo-medicamenteuze-behandeling-van-diabetes-type-2',
                  name: 'Medicamenteuze behandeling van diabetes type 2',
                  available: true,
                  moduleKind: 'lmo',
                },
              ],
            },
          ],
        },
      ],
    },
  }

  const getImageIdsForLme = (baseId, imageCount) =>
    Array.from({ length: imageCount }, (_, i) => ({
      id: `${baseId}-image${String(i + 1).padStart(2, '0')}`,
      name: `Afbeelding ${i + 1}`
    }))

  const renderSummaryModule = (lmeItem, key) => {
    const progressIds = lmeItem.progressLmeIds || [lmeItem.id]
    const seen = hasAccountProgress && progressIds.some((id) => Boolean(seenMap[id]))
    if (lmeItem.type === 'image-based') {
      return (
        <div key={key} className="space-y-2 rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/70 dark:bg-slate-800/40 p-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 py-1">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{lmeItem.name} ({lmeItem.imageCount} afbeeldingen)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {getImageIdsForLme(lmeItem.baseId, lmeItem.imageCount).map((img) => {
              const locked = showPremiumLocks && isFreePlanBlockedLme(img.id)
              const imgSeen = hasAccountProgress && Boolean(seenMap[img.id])
              return (
                <Link
                  key={img.id}
                  to={locked ? '/billing' : `/summary?lme=${img.id}`}
                  className={`text-center px-3 py-2.5 rounded-lg border text-sm transition-all
                    ${locked
                      ? 'bg-slate-100 dark:bg-slate-900/40 border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400'
                      : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-50/80 dark:hover:bg-emerald-500/10 hover:text-emerald-900 dark:hover:text-emerald-300'}`}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {img.name}
                    {locked && <Lock className="w-3 h-3" />}
                    {!locked && imgSeen && <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )
    }

    return (
      <SummaryCourseModuleLink
        key={key}
        lmeItem={lmeItem}
        showPremiumLocks={showPremiumLocks}
        isBlocked={isFreePlanBlockedLme}
        seen={seen}
      />
    )
  }

  const getSectionReadProgress = (items) => {
    let seenUnits = 0
    let totalUnits = 0
    for (const item of items) {
      if (item.type === 'image-based') {
        const imageIds = getImageIdsForLme(item.baseId, item.imageCount).map((img) => img.id)
        totalUnits += imageIds.length
        for (const imageId of imageIds) {
          if (seenMap[imageId]) seenUnits += 1
        }
      } else {
        const progressIds = item.progressLmeIds || [item.id]
        totalUnits += 1
        if (progressIds.some((id) => seenMap[id])) seenUnits += 1
      }
    }
    const statusLabel = seenUnits === totalUnits && totalUnits > 0
      ? 'Af'
      : seenUnits > 0
        ? 'Bezig'
        : 'Nog niet gestart'
    return { seenUnits, totalUnits, statusLabel }
  }

  const renderCaseSections = (casus) => {
    const { casusbijeenkomstItems, flankerendItems } = splitCasusModules(
      casus,
      FLANKEREND_MODULE_IDS_BY_CASE,
    )
    const sections = [
      { key: 'casusbijeenkomst', title: 'Casusbijeenkomst', items: casusbijeenkomstItems },
      { key: 'flankerend', title: 'Flankerend onderwijs', items: flankerendItems },
    ]

    return (
      <div className="ml-0 sm:ml-2 space-y-3">
        {sections.map((section) => (
          section.items.length > 0 ? (
            <section key={section.key} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  {section.title}
                </h4>
                {hasAccountProgress && (() => {
                  const progress = getSectionReadProgress(section.items)
                  return (
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {progress.statusLabel} · {progress.seenUnits}/{progress.totalUnits}
                    </span>
                  )
                })()}
              </div>
              <div className="space-y-2">
                {section.items.map((lmeItem, idx) => renderSummaryModule(lmeItem, `${section.key}-${idx}`))}
              </div>
            </section>
          ) : null
        ))}
      </div>
    )
  }

  // Render specific LME content
  if (activeLme === 'embryogenese') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <EmbryogeneseSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'beeldvorming') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <FoetaleBeeldvormingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'extraembryonaal') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <ExtraEmbryonaalSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'extremiteiten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <ExtremiteitenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'aangeboren-immuniteit-herkenning') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <AangeborenImmuniteitHerkenningSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-bacteriologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieBacteriologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-immunologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieImmunologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-mycologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieMycologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-parasitologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieParasitologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-virologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieVirologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'voorbereiding-vow-microbiologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <VoorbereidingVOWMicrobiologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'aangeboren-immuniteit-respons') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <AangeborenImmuniteitResponsSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'antibiotica-leerlijn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <AntibioticaLeerlijnSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-antimicrobiele-therapie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieAntimicrobieleTherapieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'urineweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <UrineweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'infectiepreventie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <InfectiepreventieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-luchtweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieLuchtweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'microscopische-anatomie-luchtwegen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <MicroscopischeAnatomieLuchtwegenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'pathofysiologie-virale-luchtweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <PathofysiologieViraleLuchtweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'vervolg-introductie-virologie-2') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <VervolgIntroductieVirologie2Summary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'virale-diagnostiek') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <ViraleDiagnostiekSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'cytokinen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <CytokinenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'infectieuze-oorzaken-koorts') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <InfectieuzeOorzakenKoortsSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'niet-infectieuze-oorzaken-koorts') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <NietInfectieuzeOorzakenKoortsSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'ontstekingsmediatoren') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <OntstekingsmediatorenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'wat-is-koorts') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <WatIsKoortsSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'specifieke-verwekkers-lagere-luchtweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <SpecifiekeVerwekkersLagereLuchtweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'therapie-lagere-luchtweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <TherapieLagereLuchtweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'homing-migratie-recirculatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <HomingMigratieRecirculatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'infectieuze-lymfadenopathie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <InfectieuzeLymfadenopathieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'introductie-verworven-immuniteit') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <IntroductieVerworvenImmuniteitSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'secundaire-lymfoide-organen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <SecundaireLymfoideOrganenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'antivirale-therapie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <AntiviraleTherapieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'de-grote-drie-malaria') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <DeGroteDrieMalariaSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'duurzame-hiv-zorg') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <DuurzameHivZorgSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'immunologische-consequenties-hiv') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <ImmunologischeConsequentiesHivSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'tuberculose-bij-migranten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <TuberculoseBijMigrantenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'tuberculose-inleiding') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <TuberculoseInleidingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'lme5-schimmelinfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Lme5SchimmelinfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'lme6-voorbereiding-vow-milt') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Lme6VoorbereidingVowMiltSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'lme1-parasitaire-verwekkers-gastro-enteritis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Lme1ParasitaireVerwekkersSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'lme2-virale-verwekkers-gastro-enteritis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Lme2ViraleVerwekkersSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'lme3-welk-antibioticum-kies-ik') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Lme3WelkAntibioticumKiesIkSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus10-lme1-dwang-en-drang-historisch-perspectief') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus10Lme1DwangEnDrangSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus10-lme2-immunomodulatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus10Lme2ImmunomodulatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus10Lme3RechtvaardigingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus10Lme4WiskundeVaccinatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus11-lme1-leefstijl-en-immuunsysteem') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus11Lme1LeefstijlSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus12-lme1-antibioticaresistentie-en-therapie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus12Lme1AntibioticaresistentieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus12-lme2-sepsis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus12Lme2SepsisSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus12-lme3-patient-en-medicatieveiligheid') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus12Lme3PatientMedicatieveiligheidSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus12-lme4-zorggerelateerde-infecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus12Lme4ZorggerelateerdeInfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus13-lme1-antibiotica-introductie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus13Lme1AntibioticaIntroductieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'casus13-lme2-antibiotica-resistentie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Casus13Lme2AntibioticaResistentieSummary />
        </SummaryLayout>
    )
  }


  if (BLOK5_CASUSBIJEENKOMST_SUMMARIES[activeLme]) {
    const CasusbijeenkomstSummary = BLOK5_CASUSBIJEENKOMST_SUMMARIES[activeLme]
    return (
      <SummaryLayout
        lmeId={activeLme}
        lmeName={lmeMap[activeLme]?.name || 'Casusbijeenkomst'}
        activeLmeId={activeLme}
        onVariantSwitch={handleVariantSwitch}
      >
        <CasusbijeenkomstSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus1-externe-verstorende-factoren-op-de-huidbarriere') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-voeding-en-inhalatieallergie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2VoedingEnInhalatieallergieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-nadelige-reacties-van-medicatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-lmo-eczeem') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2LmoEczeemSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-provoke') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2ProvokeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-psoriasis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2PsoriasisSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-lmv-anafylaxie-type-i-allergie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus3-aangeboren-stollingsstoornissen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus3AangeborenStollingsstoornissenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus3-begripsbepaling-dermatologische-uitingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus3-hemostase-basis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus3HemostaseBasisSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus3-vasculitis-klein-middel-groot') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus3VasculitisKleinMiddelGrootSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-chronische-ontsteking') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4ChronischeOntstekingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-immuuntherapie-van-kanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4ImmuuntherapieVanKankerSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-melanoom-gelokaliseerd') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4MelanoomGelokaliseerdSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4MriEnPetScanBenignemaligneSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-sentinel-node') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4SentinelNodeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week2-casus4-systemische-therapie-van-melanoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-lmo-zorgmijding') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5LmoZorgmijdingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-huidtumoren-benigne-en-premaligne') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-leefstijl-en-kanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5LeefstijlEnKankerSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus5-milieu-en-gezondheid') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus5MilieuEnGezondheidSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-behandeling-van-mammacarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6BehandelingVanMammacarcinoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-familiair-mammacarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6FamiliairMammacarcinoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-het-slechtnieuwsgesprek') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6HetSlechtnieuwsgesprekSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-mammapathologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6MammapathologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week3-casus6-radiologische-diagnostiek-mammacarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus7-flebologische-aandoeningen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus7FlebologischeAandoeningenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-erysipelas-en-cellulitis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8ErysipelasEnCellulitisSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-hydradenitis-suppurativa') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8HydradenitisSuppurativaSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-introductiemodule-planetary-health') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-lymfeklierdissectie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8LymfeklierdissectieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-necrotiserende-wekedeleninfectie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-radiotherapie-in-de-praktijk') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8RadiotherapieInDePraktijkSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus8-volksgezondheidsindicatoren-dalys') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus7-lymfadenopathie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus7LymfadenopathieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-bouw-en-functie-van-de-thymus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-lmo-positieve-en-negatieve-selectie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9LmoPositieveEnNegatieveSelectieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-lmo-voorbereiding-vo-ra-klinische-presentatie-en-immuunmechanismen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9LmoVoorbereidingVoRaKlinischePresentatieEnImmuunmechanismenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-lmv-introductie-auto-immuniteit-versus-auto-inflammatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9LmvIntroductieAutoImmuniteitVersusAutoInflammatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-lmv-auto-immuniteit-als-bijwerking-bij-immunotherapie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9LmvAutoImmuniteitAlsBijwerkingBijImmunotherapieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-lmv-patient-met-sle-samenvatting') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9LmvPatientMetSleSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-endocriene-auto-immuunziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus9-pathogenese-auto-immuunziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-introductie-kinderoncologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11IntroductieKinderoncologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-typen-kinderoncologie-bij-kinderen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-lmo-importziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11LmoImportziektenSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week5-casus11-lmo-infecties-binnen-de-kinderoncologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week5Casus11LmoInfectiesBinnenDeKinderoncologieSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus12-gaswisseling-hb-o2-co2-co') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus12GaswisselingHbO2Co2CoSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus12-nvic-acute-vergiftiging') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus12NvicAcuteVergiftigingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus13-botopbouw-botafbraak-en-pathologische-breuken') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus13-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus13-m-proteine-diagnostiek-eiwit-als-tumormarker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week6-casus13-transplantatiegeneeskunde') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week6Casus13TransplantatiegeneeskundeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week7-casus14-lmo-wat-is-ai') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week7Casus14LmoWatIsAiSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week7-casus14-dermatoloog-in-je-broekzak') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week7Casus14DermatoloogInJeBroekzakSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week7-casus14-lmo-ethiek-van-derma-apps') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week7Casus14LmoEthiekVanDermaAppsSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week7-casus14-lmo-implementatie-in-de-dermatologische-praktijk') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week7Casus14LmoImplementatieInDeDermatologischePraktijkSamenvattingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week8-casus15-scylla-en-charybdis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week8Casus15ScyllaEnCharybdisSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok5-week8-casus15-lmo-voorbereiding-vow-palliatieve-zorg') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok5Week8Casus15LmoVoorbereidingVowPalliatieveZorgSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-endoscopie-basis-en-bloedingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLmeEndoscopieBasisEnBloedingenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-fysiologie-van-maagzuur-mini') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok10Week1Casus1MaagklachtenFysiologieVanMaagzuurMiniSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-leefstijl-bij-reflux') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLeefstijlBijRefluxSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-logistische-regressie-analyse') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-reflux-bij-kinderen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenRefluxBijKinderenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-lmo-kumar-clark-pathofysiologie-h-pylori') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLmoKumarClarkPathofysiologieHPyloriSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-lmv-h-pylori-zorgkosten-vanuit-een-bacterie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLmvHPyloriZorgkostenVanuitEenBacterieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus1-maagklachten-lmv-ppi') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus1MaagklachtenLmvPpiSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus2-passageklachten-lme-pre-maligne-bovenste-tractus-digestivus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus2PassageklachtenLmePreMaligneBovensteTractusDigestivusSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus2-passageklachten-lme-chemoradiatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus2PassageklachtenLmeChemoradiatieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus2-passageklachten-lme-kindergerelateerde-ziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus2PassageklachtenLmeKindergerelateerdeZiektenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus2-passageklachten-lme-motiliteit-van-de-bovenste-tractus-digestivus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus2PassageklachtenLmeMotiliteitVanDeBovensteTractusDigestivusSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week1-casus2-passageklachten-lmv-chirurgische-behandeling-van-aandoeningen-aan-de-bovenste-tractus-digestivus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week1Casus2PassageklachtenLmvChirurgischeBehandelingVanAandoeningenAanDeBovensteTractusDigestivusSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-acute-buik-en-acute-buikpijn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-zelfstudie-differentiaal-diagnose-van-acute-buikpijn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesFlankerendOnderwijsLmoZelfstudieDifferentiaalDiagnoseVanAcuteBuikpijnSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-bevolkingsonderzoek-darmkanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesBevolkingsonderzoekDarmkankerSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-colorectaalcarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesColorectaalcarcinoomSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-endoscopische-resectietechnieken') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesEndoscopischeResectietechniekenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-erfelijke-darmkanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesErfelijkeDarmkankerSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-rectaal-bloedverlies') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesRectaalBloedverliesSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-lmo-basis-oncologische-chirurgie-coloncarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesLmoBasisOncologischeChirurgieColoncarcinoomSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c03-rectaal-bloedverlies-lmv-prehabilitatie-voor-een-operatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC03RectaalBloedverliesLmvPrehabilitatieVoorEenOperatieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-aanhoudende-buikklachten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeAanhoudendeBuikklachtenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-malabsorptie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeMalabsorptieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-morbus-crohn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeMorbusCrohnSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-vertering-en-opname') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeVerteringEnOpnameSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-microscopische-anatomie-van-maag-tot-anus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeMicroscopischeAnatomieVanMaagTotAnusSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week2-casus-c04-diarree-lmo-rome-iv-c-bowel-disorders') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week2CasusC04DiarreeLmoRomeIvCBowelDisordersSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-pancreasfysiologie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmePancreasfysiologieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-acute-en-chronische-pancreatitis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmeAcuteEnChronischePancreatitisSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-advanced-endoscopie-eus-ercp') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmeAdvancedEndoscopieEusErcpSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-dieet-pancreatitis-pancreasenzymen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmeDieetPancreatitisPancreasenzymenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-pancreascarcinoom') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmePancreascarcinoomSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-microscopische-anatomie-pancreas') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisLmeMicroscopischeAnatomiePancreasSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-evaluatie-patient-met-buikpijn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoEvaluatiePatientMetBuikpijnSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-gestuurde-zelfstudie-overzichtsartikel') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoGestuurdeZelfstudieOverzichtsartikelSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c05-chronische-pancreatitis-lmo-pitch-patient-met-chronische-pancreatitis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoPitchPatientMetChronischePancreatitisSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c06-dm-type1-symptomen-pathofysiologie-diagnostiek-dm1') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC06DmType1LmeSymptomenPathofysiologieDiagnostiekDm1Summary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c06-dm-type1-acute-ontregelingen-dm1') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC06DmType1LmeAcuteOntregelingenDm1Summary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c06-dm-type1-lmo-endocriene-regulatie-kh-vet-en-eiwitstofwisseling') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoEndocrieneRegulatieKhVetEnEiwitstofwisselingSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c06-dm-type1-lmo-exogene-insulines') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoExogeneInsulinesSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week3-casus-c06-dm-type1-lmo-regulatie-van-metabolisme-enzymkinetiek') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week3CasusC06DmType1FlankerendOnderwijsLmoRegulatieVanMetabolismeEnzymkinetiekSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-vetvertering-enterohepatische-cyclus') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingLmeVetverteringEnterohepatischeCyclusSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-de-lever-als-fabriek') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingLmeDeLeverAlsFabriekSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-sld-en-masld') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingLmeSldEnMasldSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-autoimmuun-gemedieerde-leverziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingLmeAutoimmuunGemedieerdeLeverziektenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-abcde-virale-hepatitis') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingLmeAbcdeViraleHepatitisSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-lmo-consult-een-brede-blik-2-voorbereiding-klv-2-29') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoConsultEenBredeBlik2VoorbereidingKlv229SourceDocument />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c07-leververvetting-lmo-literatuur-over-leverfibrose') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC07LeververvettingFlankerendOnderwijsLmoLiteratuurOverLeverfibroseSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c08-levercirrose-endoscopie-basis-en-bloedingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC08LevercirroseLmeEndoscopieBasisEnBloedingenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c08-levercirrose-levercirrose-en-complicaties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC08LevercirroseLmeLevercirroseEnComplicatiesSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c08-levercirrose-lmv-hcc') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvHccSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week4-casus-c08-levercirrose-lmv-levertransplantatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week4CasusC08LevercirroseFlankerendOnderwijsLmvLevertransplantatieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-chirurgische-obesitasbehandelingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasLmeChirurgischeObesitasbehandelingenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-elke-arts-behandelt-obesitas') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasLmeElkeArtsBehandeltObesitasSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-lichaamsbeweging') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasLmeLichaamsbewegingSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-lmo-medicamenteuze-obesitasbehandelingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoMedicamenteuzeObesitasbehandelingenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-lmo-niet-medicamenteuze-obesitasbehandelingen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNietMedicamenteuzeObesitasbehandelingenSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-lmo-nutritional-assessment') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmoNutritionalAssessmentSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c09-obesitas-lmv-leven-met-obesitas') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC09ObesitasFlankerendOnderwijsLmvLevenMetObesitasSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-symptomen-pathofysiologie-diagnostiek-dm2') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2LmeSymptomenPathofysiologieDiagnostiekDm2Summary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-langetermijn-complicaties-diabetes') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2LmeLangetermijnComplicatiesDiabetesSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-leefstijl-voeding-preventie-dm2') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2LmeLeefstijlVoedingPreventieDm2Summary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-lipiden-lipoproteinen-metabole-dysregulatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2LmeLipidenLipoproteinenMetaboleDysregulatieSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-remissie-van-diabetes') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2LmeRemissieVanDiabetesSummary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok10-week5-casus-c10-dm-type2-lmo-medicamenteuze-behandeling-van-diabetes-type-2') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <Blok10Week5CasusC10DmType2FlankerendOnderwijsLmoMedicamenteuzeBehandelingVanDiabetesType2Summary />
      </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus1-acute-nierschade') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus1AcuteNierschadeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus1-glomerulaire-nierziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus1GlomerulaireNierziektenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus1-acute-nierschade-verdieping') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus1AcuteNierschadeVerdiepingSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-chronische-nierschade') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2ChronischeNierschadeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-niertransplantatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2NiertransplantatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-dialyse') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2DialyseSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-chronische-nierschade-verdieping') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2VerdiepingChronischeNierschadeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-nierfunctievervangende-therapie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2NierfunctievervangendeTherapieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week1-casus2-ethiek-van-orgaantransplantatie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus3-klinische-stoornissen-water-en-volume-balans') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus3-klinische-stoornissen-kaliumbalans') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus3-klinische-stoornissen-zuur-basebalans') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-perifeer-arterieel-vaatlijden') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-diabetische-voet') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4DiabetischeVoetSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-dilaterend-vaatlijden') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4DilaterendVaatlijdenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-mdr-juridische-aspecten-medische-tools') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-preoperatieve-screening') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4PreoperatieveScreeningSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus5-hypertensie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus5HypertensieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus5-secundaire-hypertensie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus5SecundaireHypertensieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus5-hypertensief-spoedgeval') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus5HypertensiefSpoedgevalSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus5-farmacogenetica') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus5FarmacogeneticaSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus5-ai-act') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus5AiActSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week3-casus6-cvrm') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week3Casus6CvrmSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus7-pneumonie-epidemiologie-verwekkers-behandeling') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus7PneumonieEpidemiologieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus7-pathofysiologie-kliniek-diagnostiek-pneumonie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus7-klinisch-redeneren-respiratoire-insufficiëntie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus8-toxidromen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus8ToxidromenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus8-shock') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus8ShockSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus8-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus8-passende-zorg-op-de-intensive-care') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week4-casus8-lineare-regressielijn') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week4Casus8LineareRegressielijnSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus9-longkanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus9LongkankerSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus9-pleuravocht') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus9PleuravochtSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus9-voorbereiding-ct-en-pet-ct') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus9VoorbereidingCtEnPetCtSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus9-voorbereiding-pathologie-longkanker') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-basis-analyse-ecg') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10BasisAnalyseEcgSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-atriumfibrilleren') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10AtriumfibrillerenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-tachyaritmie') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10TachyaritmieSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-syncope') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10SyncopeSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary />
        </SummaryLayout>
    )
  }

  if (activeLme === 'blok9-week5-casus10-ritmestoornissen-bij-kinderen') {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
          <Blok9Week5Casus10RitmestoornissenBijKinderenSummary />
        </SummaryLayout>
    )
  }

  // Config-based mini summaries — Blok 5 (auto-generated from docx)
  const blok5MiniConfig = getBlok5MiniConfig(activeLme)
  if (blok5MiniConfig) {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <ConfigMiniSummary config={blok5MiniConfig} miniLmeId={activeLme} blokLabel="Blok 5" />
      </SummaryLayout>
    )
  }

  // Config-based mini summaries — Blok 9 (auto-generated from docx)
  const miniConfig = getBlok9MiniConfig(activeLme)
  if (miniConfig) {
    return (
      <SummaryLayout lmeId={activeLme} lmeName={lmeMap[activeLme]?.name || activeLme} activeLmeId={activeLme} onVariantSwitch={handleVariantSwitch}>
        <ConfigMiniSummary config={miniConfig} miniLmeId={activeLme} blokLabel="Blok 9" />
      </SummaryLayout>
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
            Kies je bachelorjaar, blok en week — elke module opent de volledige samenvatting.
          </p>

          {forcedBlokKey && (
            <div className="mb-6">
              <Link
                to="/summary"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                Terug naar alle blokken
              </Link>
            </div>
          )}

          {!forcedBlokKey && (
            <div className="space-y-10">
              <section aria-labelledby="summary-index-ba1-heading">
                <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                  <h2 id="summary-index-ba1-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                    Bachelorjaar 1
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Blokken 3, 4 en 5
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/summary-blok3" className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-primary-400/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-500/20">
                        <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-slate-900 dark:text-slate-100">{courseStructure.blok3.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{formatSummaryBlokSubtitle(courseStructure.blok3)}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 ml-auto" />
                    </div>
                  </Link>
                  <Link to="/summary-blok4" className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-indigo-400/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-500/20">
                        <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-slate-900 dark:text-slate-100">{courseStructure.blok4.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{formatSummaryBlokSubtitle(courseStructure.blok4)}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 ml-auto" />
                    </div>
                  </Link>
                  <Link to="/summary-blok5" className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-rose-400/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-rose-100 dark:bg-rose-500/20">
                        <Layers className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-slate-900 dark:text-slate-100">{courseStructure.blok5.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{formatSummaryBlokSubtitle(courseStructure.blok5)}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-rose-500 ml-auto" />
                    </div>
                  </Link>
                </div>
              </section>

              <section aria-labelledby="summary-index-ba2-heading">
                <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                  <h2 id="summary-index-ba2-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                    Bachelorjaar 2
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Blok 9 en Blok 10
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Link to="/summary-blok9" className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-cyan-400/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-100 dark:bg-cyan-500/20">
                        <Droplets className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-slate-900 dark:text-slate-100">{courseStructure.blok9.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{formatSummaryBlokSubtitle(courseStructure.blok9)}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 ml-auto" />
                    </div>
                  </Link>
                  <Link to="/summary-blok10" className="group rounded-2xl border border-slate-200/90 dark:border-slate-700/90 bg-white/90 dark:bg-slate-900/80 p-5 shadow-sm dark:shadow-black/30 hover:border-violet-400/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-violet-100 dark:bg-violet-500/20">
                        <FlaskConical className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                      </div>
                      <div className="min-w-0">
                        <h2 className="font-bold text-slate-900 dark:text-slate-100">{courseStructure.blok10.name}</h2>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{formatSummaryBlokSubtitle(courseStructure.blok10)}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 ml-auto" />
                    </div>
                  </Link>
                </div>
              </section>
            </div>
          )}

          {forcedBlokKey && (
          <div className="space-y-10">
            {(forcedBlokKey === 'blok3' || forcedBlokKey === 'blok4' || forcedBlokKey === 'blok5') && (
            <section aria-labelledby="bachelor-year-1-heading">
              <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                <h2 id="bachelor-year-1-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                  Bachelorjaar 1
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Blokken 3, 4 en 5 — curriculum geneeskunde (Erasmus MC)
                </p>
              </div>
              <div className="space-y-4">
          {forcedBlokKey === 'blok3' && (
          <div id="section-blok3" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => {
                if (forcedBlokKey) return
                setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')
              }}
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok3)}
                  </p>
                </div>
              </div>
              {!forcedBlokKey && (
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
              )}
            </button>

            <AnimatePresence>
              {(forcedBlokKey === 'blok3' || expandedBlok === 'blok3') && (
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

                            {renderCaseSections(casus)}
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
          )}

          {forcedBlokKey === 'blok4' && (
          <div id="section-blok4" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => {
                if (forcedBlokKey) return
                setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')
              }}
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok4)}
                  </p>
                </div>
              </div>
              {!forcedBlokKey && (
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
              )}
            </button>

            <AnimatePresence>
              {(forcedBlokKey === 'blok4' || expandedBlok === 'blok4') && (
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

                            {renderCaseSections(casus)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          )}

          {forcedBlokKey === 'blok5' && (
          <div id="section-blok5" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => {
                if (forcedBlokKey) return
                setExpandedBlok(expandedBlok === 'blok5' ? null : 'blok5')
              }}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-rose-100 dark:bg-rose-500/30 rounded-xl">
                  <Layers className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {courseStructure.blok5.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok5)}
                  </p>
                </div>
              </div>
              {!forcedBlokKey && (
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok5' ? 'rotate-180' : ''}`} />
              )}
            </button>

            <AnimatePresence>
              {(forcedBlokKey === 'blok5' || expandedBlok === 'blok5') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                >
                  <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                    <BlokWeekoverzichtPanel
                      title="Weekoverzicht blok 5 — BA1 2025–26"
                      pdfFileName="weekoverzicht-blok5-ba1-25-26.pdf"
                    />
                    {courseStructure.blok5.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-rose-500 dark:bg-rose-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-rose-500/20 dark:ring-rose-400/30" />
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

                            {renderCaseSections(casus)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          )}
              </div>
            </section>
            )}

            {(forcedBlokKey === 'blok9' || forcedBlokKey === 'blok10') && (
            <section aria-labelledby="bachelor-year-2-heading">
              <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                <h2 id="bachelor-year-2-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                  Bachelorjaar 2
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {forcedBlokKey === 'blok10'
                    ? 'Blok 10 — Maag-Darm-Lever '
                    : 'Blok 9 — Homeostase II'}
                </p>
              </div>
              <div className="space-y-4">

          {forcedBlokKey === 'blok9' && (
          <div id="section-blok9" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => {
                if (forcedBlokKey) return
                setExpandedBlok(expandedBlok === 'blok9' ? null : 'blok9')
              }}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-500/30 rounded-xl">
                  <Droplets className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {courseStructure.blok9.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok9)}
                  </p>
                </div>
              </div>
              {!forcedBlokKey && (
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok9' ? 'rotate-180' : ''}`} />
              )}
            </button>

            <AnimatePresence>
              {(forcedBlokKey === 'blok9' || expandedBlok === 'blok9') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                >
                  <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                    <BlokWeekoverzichtPanel
                      title="Weekoverzicht blok 9 — BA2 2025–26"
                      pdfFileName="weekoverzicht-blok9-ba2-25-26.pdf"
                    />
                    {courseStructure.blok9.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-cyan-500/20 dark:ring-cyan-400/30" />
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

                            {renderCaseSections(casus)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          )}

          {forcedBlokKey === 'blok10' && (
          <div id="section-blok10" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => {
                if (forcedBlokKey) return
                setExpandedBlok(expandedBlok === 'blok10' ? null : 'blok10')
              }}
              className="w-full flex items-center justify-between p-5 hover:bg-slate-50/90 dark:hover:bg-slate-800/80 transition-colors text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-violet-100 dark:bg-violet-500/30 rounded-xl">
                  <FlaskConical className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {courseStructure.blok10.name}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok10)}
                  </p>
                </div>
              </div>
              {!forcedBlokKey && (
                <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok10' ? 'rotate-180' : ''}`} />
              )}
            </button>

            <AnimatePresence>
              {(forcedBlokKey === 'blok10' || expandedBlok === 'blok10') && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-100 dark:border-slate-800/80"
                >
                  <div className="px-5 pb-5 pt-1 bg-slate-50/50 dark:bg-slate-950/40">
                    {courseStructure.blok10.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-slate-200 dark:border-slate-600 pl-5 ml-5">
                        <div className="flex items-center gap-3 mb-4 -ml-7">
                          <div className="w-3 h-3 rounded-full bg-violet-500 dark:bg-violet-400 border-4 border-white dark:border-slate-950 shadow-sm ring-2 ring-violet-500/20 dark:ring-violet-400/30" />
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

                            {renderCaseSections(casus)}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          )}
              </div>
            </section>
            )}
          </div>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default SummaryPage

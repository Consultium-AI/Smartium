import { motion, AnimatePresence } from 'framer-motion'
import { Link, Navigate, useSearchParams } from 'react-router-dom'
import {
  FileText, Home, BookOpen, Clock, ChevronDown, ChevronRight,
  GraduationCap, Calendar, Stethoscope, ClipboardCheck, Shield, Droplets, Layers, Lock, CheckCircle2
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { formatSummaryBlokSubtitle } from '../utils/blokRollupStats'
import { useAccess } from '../hooks/useAccess'
import { isFreePlanBlockedLme } from '../utils/freePlanAccess'
import { useAuth } from '../context/AuthContext'
import { getProgressUserId, loadSummarySeenMap, markSummarySeen } from '../utils/accountProgressStorage'
import BlokWeekoverzichtPanel from '../components/BlokWeekoverzichtPanel'
import SummaryCourseModuleLink from '../components/SummaryCourseModuleLink'
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
import Blok5Week6Casus12GaswisselingHbO2Co2CoSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-52-gaswisseling-hb-o2-co2-co/Blok5Week6Casus12GaswisselingHbO2Co2CoSummary'
import Blok5Week6Casus12NvicAcuteVergiftigingSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-53-nvic-acute-vergiftiging/Blok5Week6Casus12NvicAcuteVergiftigingSummary'
import Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary from '../summaries/samenvattingen-blok5/week-6/casus-12-verwarde-patient-met-griepachtige-klachten/lme-54-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties/Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary'
import Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-55-botopbouw-botafbraak-en-pathologische-breuken/Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary'
import Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-56-celtherapie-als-behandeling-voor-maligniteiten/Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary'
import Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-57-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie/Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary'
import Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-58-m-proteine-diagnostiek-eiwit-als-tumormarker/Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary'
import Blok5Week6Casus13TransplantatiegeneeskundeSummary from '../summaries/samenvattingen-blok5/week-6/casus-13-multipel-myeloom/lme-59-transplantatiegeneeskunde/Blok5Week6Casus13TransplantatiegeneeskundeSummary'
import Blok5Week7Casus14DermatoloogInJeBroekzakSummary from '../summaries/samenvattingen-blok5/week-7/casus-14-ai-in-de-zorg/lme-60-dermatoloog-in-je-broekzak/Blok5Week7Casus14DermatoloogInJeBroekzakSummary'
import Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-61-remmen-versus-stimuleren-van-het-afweersysteem/Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary'
import Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-62-risico-op-iatrogene-schade-na-orgaantransplantatie/Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary'
import Blok5Week8Casus15ScyllaEnCharybdisSummary from '../summaries/samenvattingen-blok5/week-8/casus-15-kiezen-tussen-twee-kwaden/lme-63-scylla-en-charybdis/Blok5Week8Casus15ScyllaEnCharybdisSummary'
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
import Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary from '../summaries/samenvattingen-blok5/week-4/casus-8-zwelling-in-de-oksel/lme-41-volksgezondheidsindicatoren-dalys/Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary'
import Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-42-bouw-en-functie-van-de-thymus/Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary'
import Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-43-endocriene-auto-immuunziekten/Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary'
import Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary from '../summaries/samenvattingen-blok5/week-5/casus-9-patient-met-auto-immuunziekte/lme-44-pathogenese-auto-immuunziekten/Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary'
import Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary from '../summaries/samenvattingen-blok5/week-5/casus-10-patient-met-auto-inflammatoire-ziekte/lme-45-principes-en-klinische-aspecten-van-auto-inflammatie/Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary'
import Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary from '../summaries/samenvattingen-blok5/week-5/casus-10-patient-met-auto-inflammatoire-ziekte/lme-46-spectrum-auto-inflammatie-en-auto-immuniteit/Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary'
import Blok9Week1Casus1AcuteNierschadeSummary from '../summaries/samenvattingen-b9/week-1/casus-1-patient-met-acute-nierschade/lme-1-acute-nierschade/Blok9Week1Casus1AcuteNierschadeSummary'
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

const FLANKEREND_SUMMARY_LME_IDS_BY_CASE = {
  'Casus 1: De huid als succesvolle barrière': new Set([
    'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud',
  ]),
  'Casus 2: De veranderde barrière': new Set([
    'blok5-week1-casus2-provoke',
    'blok5-week1-casus2-lmv-anafylaxie-type-i-allergie',
    'blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie',
    'blok5-week1-casus2-stm-pathogenese-type-iv-allergie',
  ]),
  'Casus 4: Donkere vlek': new Set([
    'blok5-week2-casus4-chronische-ontsteking',
    'blok5-week2-casus4-mri-en-pet-scan-benignemaligne',
  ]),
  'Casus 5: De verdachte huid': new Set([
    'blok5-week3-casus5-milieu-en-gezondheid',
    'blok5-week3-casus5-leefstijl-en-kanker',
  ]),
  'Casus 6: Knobbel in de borst': new Set([
    'blok5-week3-casus6-familiair-mammacarcinoom',
    'blok5-week3-casus6-het-slechtnieuwsgesprek',
    'blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom',
  ]),
  'Casus 7: Zwelling van de lies en/of een dik been': new Set([
    'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten',
  ]),
  'Casus 8: Zwelling in de oksel': new Set([
    'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24',
    'blok5-week4-casus8-volksgezondheidsindicatoren-dalys',
    'blok5-week4-casus8-introductiemodule-planetary-health',
    'blok5-week4-casus8-lmv-verworven-stollingsstoornissen',
  ]),
  'Casus 9: Patiënt met auto-immuunziekte': new Set([
    'blok5-week5-casus9-bouw-en-functie-van-de-thymus',
  ]),
  'Casus 11: Kind met algehele malaise, koorts en zwelling in de buik': new Set([
    'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd',
  ]),
  'Casus 13: Multipel myeloom': new Set([
    'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten',
    'blok5-week6-casus13-transplantatiegeneeskunde',
  ]),
  'Casus 1: Patiënt met acute nierschade': new Set([
    'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten',
    'blok9-week1-casus1-acute-nierschade-verdieping',
  ]),
  'Casus 2: Patiënt met chronische nierschade': new Set([
    'blok9-week1-casus2-chronische-nierschade-verdieping',
    'blok9-week1-casus2-nierfunctievervangende-therapie',
    'blok9-week1-casus2-ethiek-van-orgaantransplantatie',
  ]),
  'Casus 3: Patiënt met ernstig verstoorde elektrolyten': new Set([
    'blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping',
    'blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping',
  ]),
  'Casus 4: De vrouw die maar 20 meter kan lopen': new Set([
    'blok9-week2-casus4-mdr-juridische-aspecten-medische-tools',
    'blok9-week2-casus4-preoperatieve-screening',
    'blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie',
  ]),
  'Casus 5: Patiënt met hypertensie': new Set([
    'blok9-week3-casus5-ai-act',
  ]),
  'Casus 6: Volwassene met pijn op de borst': new Set([
    'blok9-week3-casus6-cvrm',
  ]),
  'Casus 8: Een leuk feestje': new Set([
    'blok9-week4-casus8-passende-zorg-op-de-intensive-care',
    'blok9-week4-casus8-lineare-regressielijn',
  ]),
  'Casus 10: Atriumfibrilleren': new Set([
    'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren',
    'blok9-week5-casus10-syncope',
    'blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties',
    'blok9-week5-casus10-ritmestoornissen-bij-kinderen',
  ]),
}

// Main Summary Page Component
const SummaryPage = () => {
  const [searchParams] = useSearchParams()
  const lme = searchParams.get('lme') || 'index'
  const { user, loading: authLoading } = useAuth()
  const progressUserId = getProgressUserId(user, authLoading)
  const { hasAccess, plan, loading: accessLoading } = useAccess()
  const hasPaidAccess = hasAccess && plan !== 'free'
  const showPremiumLocks = !accessLoading && !hasPaidAccess
  const isBlockedDirectLme = lme !== 'index' && showPremiumLocks && isFreePlanBlockedLme(lme)
  const blokParam = searchParams.get('blok')
  const [seenMap, setSeenMap] = useState({})
  const [expandedBlok, setExpandedBlok] = useState(() => {
    if (blokParam && ['blok3', 'blok4', 'blok5', 'blok9'].includes(blokParam)) return blokParam
    return null
  })

  useEffect(() => {
    if (blokParam && ['blok3', 'blok4', 'blok5', 'blok9'].includes(blokParam)) {
      setExpandedBlok(blokParam)
      requestAnimationFrame(() => {
        const el = document.getElementById(`section-${blokParam}`)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [blokParam])

  useEffect(() => {
    if (progressUserId == null) return
    setSeenMap(loadSummarySeenMap(progressUserId))
  }, [progressUserId])

  useEffect(() => {
    if (progressUserId == null || !lme || lme === 'index' || isBlockedDirectLme) return
    markSummarySeen(progressUserId, lme)
    setSeenMap(loadSummarySeenMap(progressUserId))
  }, [progressUserId, lme, isBlockedDirectLme])

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
              ],
            },
            {
              name: "Casus 10: Patiënt met auto-inflammatoire ziekte",
              lmes: [
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
              ],
            },
            {
              name: "Casus 12: Verwarde patiënt met griepachtige klachten",
              lmes: [
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
                  id: "blok5-week7-casus14-dermatoloog-in-je-broekzak",
                  name: "Dermatoloog in je broekzak",
                  available: true,
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
  }

  const getImageIdsForLme = (baseId, imageCount) =>
    Array.from({ length: imageCount }, (_, i) => ({
      id: `${baseId}-image${String(i + 1).padStart(2, '0')}`,
      name: `Afbeelding ${i + 1}`
    }))

  const splitCasusModules = (casus) => {
    const flankerendIds = FLANKEREND_SUMMARY_LME_IDS_BY_CASE[casus.name]
    if (!flankerendIds) {
      return {
        casusbijeenkomstItems: casus.lmes,
        flankerendItems: [],
      }
    }

    const casusbijeenkomstItems = []
    const flankerendItems = []
    for (const lmeItem of casus.lmes) {
      if (flankerendIds.has(lmeItem.id)) {
        flankerendItems.push(lmeItem)
      } else {
        casusbijeenkomstItems.push(lmeItem)
      }
    }
    return { casusbijeenkomstItems, flankerendItems }
  }

  const renderSummaryModule = (lmeItem, key) => {
    const seen = Boolean(seenMap[lmeItem.id])
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
              const imgSeen = Boolean(seenMap[img.id])
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
        totalUnits += 1
        if (seenMap[item.id]) seenUnits += 1
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
    const { casusbijeenkomstItems, flankerendItems } = splitCasusModules(casus)
    const sections = [
      { key: 'casusbijeenkomst', title: 'Casusbijeenkomst', items: casusbijeenkomstItems },
      { key: 'flankerend', title: 'Flankerend onderwijs', items: flankerendItems },
    ]

    return (
      <div className="ml-0 sm:ml-2 space-y-3">
        {sections.map((section) => (
          section.items.length > 0 ? (
            <section key={section.key} className="space-y-2">
              {(() => {
                const progress = getSectionReadProgress(section.items)
                return (
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {section.title}
                    </h4>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">
                      {progress.statusLabel} · {progress.seenUnits}/{progress.totalUnits}
                    </span>
                  </div>
                )
              })()}
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

  if (lme === 'blok5-week1-casus1-de-huidbarriere-van-jong-tot-oud') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus1DeHuidbarriereVanJongTotOudSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus1-externe-verstorende-factoren-op-de-huidbarriere') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus1ExterneVerstorendeFactorenOpDeHuidbarriereSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus1-hoe-werkt-een-geneesmiddel-via-de-huid') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus1HoeWerktEenGeneesmiddelViaDeHuidSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus1-huidtypen-met-invloed-van-uva-en-uvb') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus1HuidtypenMetInvloedVanUvaEnUvbSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus1-microbioom-en-immunologie-van-de-huid') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus1MicrobioomEnImmunologieVanDeHuidSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-voeding-en-inhalatieallergie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2VoedingEnInhalatieallergieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-nadelige-reacties-van-medicatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2NadeligeReactiesVanMedicatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-lmo-eczeem') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2LmoEczeemSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-provoke') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2ProvokeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-psoriasis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2PsoriasisSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-lmv-anafylaxie-type-i-allergie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2LmvAnafylaxieTypeIAllergieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-lmv-centrale-vs-perifere-tolerantie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2LmvCentraleVsPerifereTolerantieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-lmv-contact-allergie-en-allergologisch-onderzoek') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2LmvContactAllergieEnAllergologischOnderzoekSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week1-casus2-stm-pathogenese-type-iv-allergie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week1Casus2StmPathogeneseTypeIVAllergieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus3-aangeboren-stollingsstoornissen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus3AangeborenStollingsstoornissenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus3-begripsbepaling-dermatologische-uitingen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus3BegripsbepalingDermatologischeUitingenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus3-hemostase-basis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus3HemostaseBasisSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus3-lmv-vasculitis-of-vasculopathie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus3LmvVasculitisOfVasculopathieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus3-vasculitis-klein-middel-groot') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus3VasculitisKleinMiddelGrootSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-chronische-ontsteking') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4ChronischeOntstekingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-immuuntherapie-van-kanker') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4ImmuuntherapieVanKankerSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-melanoom-gelokaliseerd') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4MelanoomGelokaliseerdSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-mri-en-pet-scan-benignemaligne') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4MriEnPetScanBenignemaligneSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-sentinel-node') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4SentinelNodeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week2-casus4-systemische-therapie-van-melanoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week2Casus4SystemischeTherapieVanMelanoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-lmo-verdachte-huidafwijkingen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5LmoVerdachteHuidafwijkingenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-lmo-zorgmijding') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5LmoZorgmijdingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-huidtumoren-basaalcel-en-plaveiselcelcarcinoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5HuidtumorenBasaalcelEnPlaveiselcelcarcinoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-huidtumoren-benigne-en-premaligne') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5HuidtumorenBenigneEnPremaligneSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-leefstijl-en-kanker') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5LeefstijlEnKankerSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus5-milieu-en-gezondheid') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus5MilieuEnGezondheidSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-behandeling-van-mammacarcinoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6BehandelingVanMammacarcinoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-familiair-mammacarcinoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6FamiliairMammacarcinoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-het-slechtnieuwsgesprek') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6HetSlechtnieuwsgesprekSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-mammapathologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6MammapathologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-overdiagnose-bij-bevolkingsonderzoek-mammacarcinoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6OverdiagnoseBijBevolkingsonderzoekMammacarcinoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week3-casus6-radiologische-diagnostiek-mammacarcinoom') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week3Casus6RadiologischeDiagnostiekMammacarcinoomSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus7-flebologische-aandoeningen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus7FlebologischeAandoeningenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-erysipelas-en-cellulitis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8ErysipelasEnCellulitisSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-hydradenitis-suppurativa') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8HydradenitisSuppurativaSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-introductiemodule-planetary-health') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8IntroductiemodulePlanetaryHealthSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-lichamelijk-onderzoek-knie-voorbereiding-klv-1-24') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8LichamelijkOnderzoekKnieVoorbereidingKlv124Summary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-lymfeklierdissectie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8LymfeklierdissectieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-necrotiserende-wekedeleninfectie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8NecrotiserendeWekedeleninfectieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-radiotherapie-in-de-praktijk') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8RadiotherapieInDePraktijkSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-lmv-verworven-stollingsstoornissen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8LmvVerworvenStollingsstoornissenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus8-volksgezondheidsindicatoren-dalys') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus8VolksgezondheidsindicatorenDalysSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus7-lymfadenopathie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus7LymfadenopathieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus7-trombose-verhoogde-stollingsneiging') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus7TromboseVerhoogdeStollingsneigingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus7-lmo-differentiaal-diagnostische-aanpak-zwelling-been') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus7LmoDifferentiaalDiagnostischeAanpakZwellingBeenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week4-casus7-lmo-voorbereiding-vow-hoeveel-mag-een-levensjaar-kosten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week4Casus7LmoVoorbereidingVowHoeveelMagEenLevensjaarKostenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus9-bouw-en-functie-van-de-thymus') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus9BouwEnFunctieVanDeThymusSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus9-endocriene-auto-immuunziekten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus9EndocrieneAutoImmuunziektenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus9-pathogenese-auto-immuunziekten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus9PathogeneseAutoImmuunziektenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus10-principes-en-klinische-aspecten-van-auto-inflammatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus10PrincipesEnKlinischeAspectenVanAutoInflammatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus10-spectrum-auto-inflammatie-en-auto-immuniteit') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus10SpectrumAutoInflammatieEnAutoImmuuniteitSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus11-alarmsymptomen-op-de-kinderleeftijd') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus11AlarmsymptomenOpDeKinderleeftijdSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus11-introductie-kinderoncologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus11IntroductieKinderoncologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus11-kinderoncologie-begrijp-de-hallmarks') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus11KinderoncologieBegrijpDeHallmarksSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus11-over-leven-na-kanker-op-kinderleeftijd') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus11OverLevenNaKankerOpKinderleeftijdSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week5-casus11-typen-kinderoncologie-bij-kinderen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week5Casus11TypenKinderoncologieBijKinderenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus12-gaswisseling-hb-o2-co2-co') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus12GaswisselingHbO2Co2CoSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus12-nvic-acute-vergiftiging') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus12NvicAcuteVergiftigingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus12-slechte-woningen-lucht-luchtverontreiniging-bovenste-luchtweginfecties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus12SlechteWoningenLuchtLuchtverontreinigingBovensteLuchtweginfectiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus13-botopbouw-botafbraak-en-pathologische-breuken') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus13BotopbouwBotafbraakEnPathologischeBreukenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus13-celtherapie-als-behandeling-voor-maligniteiten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus13CeltherapieAlsBehandelingVoorMaligniteitenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus13-het-mm-als-voorbeeld-voor-targeted-therapy-in-de-hemato-oncologie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus13HetMmAlsVoorbeeldVoorTargetedTherapyInDeHematoOncologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus13-m-proteine-diagnostiek-eiwit-als-tumormarker') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus13MProteineDiagnostiekEiwitAlsTumormarkerSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week6-casus13-transplantatiegeneeskunde') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week6Casus13TransplantatiegeneeskundeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week7-casus14-dermatoloog-in-je-broekzak') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week7Casus14DermatoloogInJeBroekzakSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week8-casus15-remmen-versus-stimuleren-van-het-afweersysteem') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week8Casus15RemmenVersusStimulerenVanHetAfweersysteemSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week8-casus15-risico-op-iatrogene-schade-na-orgaantransplantatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week8Casus15RisicoOpIatrogeneSchadeNaOrgaantransplantatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok5-week8-casus15-scylla-en-charybdis') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok5Week8Casus15ScyllaEnCharybdisSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus1-acute-nierschade') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus1AcuteNierschadeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus1-tubulaire-en-erfelijke-nierziekten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus1TubulaireErfelijkeNierziektenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus1-glomerulaire-nierziekten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus1GlomerulaireNierziektenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus1-glomerulaire-en-tubulaire-nierziekten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus1GlomerulaireEnTubulaireNierziektenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus1-acute-nierschade-verdieping') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus1AcuteNierschadeVerdiepingSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-chronische-nierschade') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2ChronischeNierschadeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-niertransplantatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2NiertransplantatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-dialyse') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2DialyseSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-chronische-nierschade-verdieping') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2VerdiepingChronischeNierschadeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-nierfunctievervangende-therapie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2NierfunctievervangendeTherapieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week1-casus2-ethiek-van-orgaantransplantatie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week1Casus2EthiekVanOrgaantransplantatieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus3-klinische-stoornissen-water-en-volume-balans') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus3KlinischeStoornissenWaterEnVolumeBalansSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus3-klinische-stoornissen-kaliumbalans') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus3KlinischeStoornissenKaliumbalansSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus3-klinische-stoornissen-zuur-basebalans') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus3KlinischeStoornissenZuurBasebalansSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus3-stoornissen-kalium-en-zuur-base-evenwicht-verdieping') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus3VerdiepingStoornissenKaliumEnZuurBaseEvenwichtSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus3-stoornissen-water-en-volumebalans-verdieping') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus3VerdiepingStoornissenWaterEnVolumebalansSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-perifeer-arterieel-vaatlijden') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-diabetische-voet') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4DiabetischeVoetSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-dilaterend-vaatlijden') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4DilaterendVaatlijdenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-mdr-juridische-aspecten-medische-tools') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4MdrJuridischeAspectenMedischeToolsSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-preoperatieve-screening') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4PreoperatieveScreeningSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week2-casus4-ct-scans-beoordelen-vow-toegepaste-anatomie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week2Casus4CtScansBeoordelenVowToegepasteAnatomieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus5-hypertensie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus5HypertensieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus5-secundaire-hypertensie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus5SecundaireHypertensieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus5-hypertensief-spoedgeval') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus5HypertensiefSpoedgevalSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus5-farmacogenetica') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus5FarmacogeneticaSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus5-ai-act') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus5AiActSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week3-casus6-cvrm') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week3Casus6CvrmSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus7-pneumonie-epidemiologie-verwekkers-behandeling') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus7PneumonieEpidemiologieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus7-pathofysiologie-kliniek-diagnostiek-pneumonie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus7PathofysiologieKliniekDiagnostiekPneumonieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus7-klinisch-redeneren-respiratoire-insufficiëntie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus7KlinischRedenerenRespiratoireInsufficiëntieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus7-symptomatische-behandeling-respiratoire-insufficientie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus7SymptomatischeBehandelingRespiratoireInsufficientieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus8-toxidromen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus8ToxidromenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus8-shock') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus8ShockSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus8-herkennen-gedecompenseerde-circulatie-en-alarmsymptomen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus8HerkennenGedecompenseerdeCirculatieEnAlarmsymptomenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus8-passende-zorg-op-de-intensive-care') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus8PassendeZorgOpDeIntensiveCareSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week4-casus8-lineare-regressielijn') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week4Casus8LineareRegressielijnSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus9-longkanker') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus9LongkankerSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus9-pleuravocht') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus9PleuravochtSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus9-voorbereiding-ct-en-pet-ct') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus9VoorbereidingCtEnPetCtSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus9-voorbereiding-pathologie-longkanker') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus9VoorbereidingPathologieLongkankerSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-basis-analyse-ecg') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10BasisAnalyseEcgSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-atriumfibrilleren') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10AtriumfibrillerenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-brady-aritmie-en-implanteerbare-cardiale-devices') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10BradyAritmieEnImplanteerbareCardialeDevicesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-tachyaritmie') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10TachyaritmieSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-leefstijl-als-therapie-voor-atriumfibrilleren') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10LeefstijlAlsTherapieVoorAtriumfibrillerenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-syncope') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10SyncopeSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-elektrofysiologisch-onderzoek-en-ablaties') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10ElektrofysiologischOnderzoekEnAblatiesSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'blok9-week5-casus10-ritmestoornissen-bij-kinderen') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 transition-colors duration-300">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <Blok9Week5Casus10RitmestoornissenBijKinderenSummary />
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
            Kies je bachelorjaar, blok en week — elke module opent de volledige samenvatting.
          </p>

          <div className="space-y-10">
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
          <div id="section-blok3" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok3)}
                  </p>
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

          <div id="section-blok4" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {formatSummaryBlokSubtitle(courseStructure.blok4)}
                  </p>
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

          <div id="section-blok5" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => setExpandedBlok(expandedBlok === 'blok5' ? null : 'blok5')}
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
              <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok5' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok5' && (
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
              </div>
            </section>

            <section aria-labelledby="bachelor-year-2-heading">
              <div className="mb-4 px-1 border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
                <h2 id="bachelor-year-2-heading" className="text-base font-bold text-slate-800 dark:text-slate-100">
                  Bachelorjaar 2
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Blok 9 — Homeostase II
                </p>
              </div>
              <div className="space-y-4">

          <div id="section-blok9" className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-200/90 dark:border-slate-700/90 shadow-sm dark:shadow-lg dark:shadow-black/40 overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/5 scroll-mt-24">
            <button
              type="button"
              onClick={() => setExpandedBlok(expandedBlok === 'blok9' ? null : 'blok9')}
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
              <ChevronDown className={`w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform ${expandedBlok === 'blok9' ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {expandedBlok === 'blok9' && (
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
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default SummaryPage

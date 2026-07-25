import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvatting`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Pneumonie presenteert zich vaak met koorts, hoesten en dyspnoe, maar de differentiaaldiagnose is breed. Een goede anamnese is essentieel. Bij ernstig zieke patiënten denk je aan infectie, maar ook aan longembolie en andere oorzaken. De work-up bestaat uit ontstekingsparameters, nierfunctie, urine-antigenen, bloedkweken, keelwat en sputumonderzoek. Op de X-thorax onderscheid je vooral een lobair infiltraat van een alveolair-interstitieel beeld. Dat laatste past vaak bij virale of atypische pneumonie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Een griepachtig begin kan misleidend zijn: een virale pneumonie kan gecompliceerd raken door een bacteriële superinfectie. Gram-positieve coccen in sputum passen bij S. aureus of S. pneumoniae. Bij ernstige CAP na influenza moet je behandelen met antibiotica die ook S. aureus dekken, zoals cefuroxim, en bij verdenking op influenza ook oseltamivir. Bij bevestigde S. aureus-bacteriëmie is flucloxacilline i.v. de eerste keus.`}</Inline></p>
    </div>
  )
}

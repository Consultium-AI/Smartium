import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 6. Medicatie bij systolisch hartfalen`}</Inline></SubHeading>
      <DataTable rows={[["Middelgroep", "Rol"], ["Betablokkers", "remmen de overactiviteit van het sympathisch zenuwstelsel"], ["ACE-remmers", "beïnvloeden het RAAS"], ["ARB’s", "alternatief op het RAAS"], ["ARNI", "combinatie van angiotensineblokker en neprilysineremming"], ["Mineralocorticoïdreceptorantagonisten", "remmen de werking van aldosteron"], ["Diuretica", "verminderen vochtretentie"], ["Vaatverwijders", "verlagen de belasting van het hart"], ["Calciumantagonisten", "alleen mits geen systolisch hartfalen"], ["Sinusknoopremmers", "bij rusthartfrequentie > 70/min en als betablokkers maximaal zijn gedoseerd"], ["Digoxine", "kan bij ernstig hartfalen de pompkracht iets verbeteren en de hartfrequentie iets verlagen"]]} />
      <p className="leading-relaxed"><Inline>{`De afkortingen die hierbij horen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`ACEI = angiotensin-converting-enzyme inhibitor;`}</Inline></li>
        <li><Inline>{`ARB = angiotensin receptor blocker;`}</Inline></li>
        <li><Inline>{`AT1 = angiotensin II type 1;`}</Inline></li>
        <li><Inline>{`HF = heart failure;`}</Inline></li>
        <li><Inline>{`MRA = mineralocorticoid receptor antagonist;`}</Inline></li>
        <li><Inline>{`NEP = neprilysin;`}</Inline></li>
        <li><Inline>{`NP = natriuretic peptide;`}</Inline></li>
        <li><Inline>{`NPRs = natriuretic peptide receptors;`}</Inline></li>
        <li><Inline>{`RAAS = renin-angiotensine-aldosterone system;`}</Inline></li>
        <li><Inline>{`SNS = sympathetic nervous system.`}</Inline></li>
      </ul>
    </div>
  )
}

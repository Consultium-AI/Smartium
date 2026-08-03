import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch voorbeeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een man met plots ontstane stekende pijn op de borst en progressieve dyspneu, die rookt en COPD heeft, past goed bij een secundaire spontane pneumothorax. Omdat er geen trauma of medische ingreep voorafging, is het geen traumatische of iatrogene pneumothorax. De onderliggende longschade door roken en COPD maakt de pneumothorax secundair spontaan. Bij dit type is spontane genezing minder waarschijnlijk en is drainage vaak nodig, eventueel gevolgd door pleurodese of chirurgie afhankelijk van het beloop.`}</Inline></p>
    </div>
  )
}

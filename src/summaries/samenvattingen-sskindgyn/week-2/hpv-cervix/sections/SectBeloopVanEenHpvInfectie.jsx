import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Beloop van een HPV-infectie`}</Inline></SubHeading>
      <PBody text={`De meeste HPV-infecties verdwijnen vanzelf. Ongeveer 80% wordt geklaard zonder behandeling. Als het virus blijft bestaan, kan een **CIN 1** ontstaan. Ook CIN 1 kan nog spontaan verdwijnen. Als de infectie persisteert, kan dit verder gaan naar **CIN 2-3**. Deze hooggradige afwijkingen verdwijnen minder vaak vanzelf en worden daarom meestal behandeld. Uiteindelijk kan een deel van deze afwijkingen doorgroeien naar een carcinoom.`} />
    </div>
  )
}

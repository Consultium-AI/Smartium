import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je de belangrijkste begrippen rond de menopauze benoemen en uitleggen. Je kunt de fysiologie van de menopauze beschrijven, klachten die passen bij de overgang herkennen en de gevolgen van de postmenopauzale status uitleggen. Ook ken je het risico van prematuur ovarieel falen, weet je welke behandelingen er zijn voor postmenopauzale klachten en kun je de risico’s en contra-indicaties van hormonale therapie benoemen.`}</Inline></p>
    </div>
  )
}

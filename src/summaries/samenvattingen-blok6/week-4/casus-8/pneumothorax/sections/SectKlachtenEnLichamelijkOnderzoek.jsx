import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klachten en lichamelijk onderzoek`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klachten hangen af van de grootte van de pneumothorax. Soms is iemand vooral kortademig, soms is de pijn op de borst op de voorgrond aanwezig. De pijn is vaak scherp en pleuritisch van aard, dus passend bij de pleura.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij lichamelijk onderzoek kun je denken aan:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`tachypneu`}</Inline></li>
        <li><Inline>{`tachycardie`}</Inline></li>
        <li><Inline>{`daling van de zuurstofsaturatie`}</Inline></li>
        <li><Inline>{`bij een spanningspneumothorax soms hypotensie`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Aan de aangedane zijde zie je vaak:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`minder expansie van de borstkas`}</Inline></li>
        <li><Inline>{`een hol of hyperresonant percussiegeluid`}</Inline></li>
        <li><Inline>{`verminderde of afwezige ademgeruisen`}</Inline></li>
      </ul>
      <SubHeading><Inline>{`Tabel 1. Kenmerken die kunnen passen bij een pneumothorax`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Mogelijke bevinding"], ["Klachten", "acute dyspneu, pleurale pijn op de borst"], ["Ademhaling", "tachypneu, minder thoraxexcursie"], ["Circulatie", "tachycardie, soms hypotensie bij spanningspneumothorax"], ["Saturatie", "kan dalen"], ["Percussie", "hyperresonantie"], ["Auscultatie", "verminderd of afwezig ademgeruis"]]} />
    </div>
  )
}

import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Rijksvaccinatieprogramma`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Vaccinatie is een belangrijke vorm van preventie. Door vaccinatie is het aantal kinderen met bacteriële meningitis sterk afgenomen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`In het rijksvaccinatieprogramma wordt gevaccineerd tegen pneumokokken, meningokokken en *Haemophilus influenzae* type b. Deze verwekkers zijn belangrijk omdat ze ernstige infecties zoals sepsis en meningitis kunnen veroorzaken.`}</Inline></p>
      <SubHeading><Inline>{`De belangrijkste bacteriën en hun kenmerken`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 2. Verwekkers en basiskenmerken"], ["Pneumokokken", "Gram-positieve diplokokken; meer dan 90 serotypes op basis van het polysaccharide kapsel"], ["Meningokokken", "Gram-negatieve kokken; 12 serogroepen op basis van het kapsel"], ["*Haemophilus influenzae*", "Gram-negatieve staaf; 6 serotypen, a t/m f"]]} />
      <p className="leading-relaxed"><Inline>{`Na introductie van het Hib-vaccin en het MenC-vaccin is sepsis/meningitis door *H. influenzae* type b en meningokokken serogroep C sterk afgenomen. Wel is ziekte door andere meningokokkengroepen toegenomen. Daarom is de MenC-vaccinatie vervangen door een combinatievaccin tegen A, C, W en Y. Ook voor pneumokokken is een conjugaatvaccin opgenomen in het programma, gericht tegen de 10 meest voorkomende serotypes. Ook daar zie je een sterke afname van ziekte door deze serotypes, terwijl andere serotypes iets vaker voorkomen.`}</Inline></p>
      <SubHeading><Inline>{`Waarom vaccineren ouders soms niet?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ouders kunnen om verschillende redenen afzien van vaccinatie. Dat kan zijn uit geloofsovertuiging, vanuit een antroposofische visie, door prikangst, uit angst voor bijwerkingen of uit angst voor autisme.`}</Inline></p>
      <SubHeading><Inline>{`Herd immunity`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Herd immunity betekent collectieve immuniteit tegen een bepaalde ziekte. Het gaat dus niet om aangeboren immuniteit en ook niet om immuniteit die je na ziekte opbouwt. Het idee is dat als genoeg mensen gevaccineerd zijn, de verspreiding van de ziekte sterk afneemt en ook niet-gevaccineerde personen indirect beschermd worden.`}</Inline></p>
      <PBody text={`**Aandacht-vraag:** wat gebeurt er als er te veel vaccinatieweigeraars zijn?
**Mini-antwoord:** dan kan herd immunity niet goed meer worden bewerkstelligd.`} />
      <p className="leading-relaxed"><Inline>{`Voor herd immunity moet een groot deel van de populatie gevaccineerd zijn. Afhankelijk van het micro-organisme en de manier van overdracht ligt dat meestal tussen 80 en 95%. Voor het totale vaccinatieprogramma wordt een dekkingsgraad van ten minste 95% nagestreefd.`}</Inline></p>
    </div>
  )
}

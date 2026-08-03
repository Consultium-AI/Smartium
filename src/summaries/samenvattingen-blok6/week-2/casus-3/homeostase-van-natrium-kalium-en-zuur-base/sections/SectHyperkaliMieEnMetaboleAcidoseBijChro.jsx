import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hyperkaliëmie en metabole acidose bij chronische nierschade`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Een patiënt met chronische nierschade kan zich presenteren met hyperkaliëmie en metabole acidose. Dat past goed bij verminderde nierfunctie, omdat de nieren dan minder goed kalium kunnen uitscheiden en ook minder goed zuren kunnen verwijderen. Als de nierfunctie verder achteruitgaat, wordt dit probleem groter.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Bij metabole acidose is de pH verlaagd en het bicarbonaat laag. Dat betekent dat er te veel zuur is of te weinig buffer. In deze situatie speelt de nier dus een centrale rol: bij nierfalen blijven zuren achter in het lichaam, waardoor acidose ontstaat.`}</Inline></p>
      <SubHeading><Inline>{`Waarom stijgt kalium?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij acidose verschuift kalium uit de cellen naar het extracellulaire compartiment. Daardoor stijgt het serumkalium. Tegelijk kan hyperkaliëmie zelf ook bijdragen aan een verschuiving van H+-ionen uit de cellen. Zo versterken deze stoornissen elkaar.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Daarnaast kunnen medicijnen een rol spelen. Vooral middelen die het RAAS-systeem remmen, zoals ACE-remmers of angiotensine-II-blokkers, verlagen de aldosteronsecretie. Minder aldosteron betekent minder kaliumuitscheiding in de verzamelbuis, samen met het ENaC-kanaal. Daardoor kan hyperkaliëmie verder toenemen.`}</Inline></p>
      <SubHeading><Inline>{`Aandachtspunt`}</Inline></SubHeading>
      <PBody text={`**Waarom is dit klinisch belangrijk?**
Omdat een combinatie van nierfunctiestoornis, acidose en hyperkaliëmie snel gevaarlijk kan worden. Het is dus belangrijk om niet alleen naar het kalium te kijken, maar ook naar de nierfunctie, de pH en de medicatie.`} />
    </div>
  )
}

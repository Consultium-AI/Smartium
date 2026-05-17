import { Inline, PBody, DataTable } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100"><Inline>{`Inleiding: waarom zijn langetermijncomplicaties zo belangrijk?`}</Inline></h3>
      <p><Inline>{`Diabetes mellitus is een veelvoorkomende aandoening en de prevalentie stijgt wereldwijd nog steeds. In Nederland hebben meer dan 1,2 miljoen mensen diabetes mellitus. Het gaat daarbij voor ongeveer 90% om diabetes type 2 en voor ongeveer 10% om diabetes type 1. Door de toenemende obesitas en vergrijzing neemt het aantal mensen met diabetes in Nederland verder toe.`}</Inline></p>
      <p><Inline>{`Dat is klinisch belangrijk, omdat diabetes niet alleen klachten kan geven op de korte termijn, maar ook op de lange termijn duidelijke schade kan veroorzaken aan bloedvaten en organen. Daardoor ontstaan morbiditeit en zelfs mortaliteit, en bovendien vormt diabetes een flinke belasting voor het zorgsysteem.`}</Inline></p>
    </div>
  )
}

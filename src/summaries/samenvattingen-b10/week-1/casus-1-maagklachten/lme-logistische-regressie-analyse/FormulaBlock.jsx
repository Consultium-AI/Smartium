export default function FormulaBlock({ children }) {
  return (
    <div className="my-4 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 font-mono text-sm whitespace-pre-wrap overflow-x-auto text-slate-800 dark:text-slate-200">
      {children}
    </div>
  )
}

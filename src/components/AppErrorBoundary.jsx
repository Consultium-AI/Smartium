import { Component } from 'react'

/**
 * Vangt renderfouten af zodat je geen "wit scherm" meer hebt zonder uitleg.
 * Open desnoods alsnog F12 → Console voor de volledige stack.
 */
export class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null, info: null }
  }

  static getDerivedStateFromError(error) {
    return { error, info: null }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
    console.error('[Smartium] Onafgehandelde React-fout:', error, info)
  }

  render() {
    const { error, info } = this.state
    if (!error) return this.props.children

    return (
      <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 p-6 md:p-10 font-sans">
        <div className="max-w-3xl mx-auto rounded-2xl border border-red-200 dark:border-red-900/60 bg-white dark:bg-slate-800/90 p-6 shadow-lg">
          <h1 className="text-xl font-bold text-red-700 dark:text-red-400 mb-2">
            De app kon niet laden
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Er is een JavaScript-fout opgetreden tijdens het renderen. Controleer de browserconsole
            (F12 → tab &quot;Console&quot;) voor details. Probeer daarna een harde refresh (Ctrl+Shift+R)
            of stop alle Vite-processen en start opnieuw met <code className="text-xs bg-slate-100 dark:bg-slate-700 px-1 rounded">npm run dev</code>.
          </p>
          <pre className="text-xs overflow-auto p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 whitespace-pre-wrap break-words">
            {error?.toString?.() || String(error)}
            {info?.componentStack ? `\n\n${info.componentStack}` : ''}
          </pre>
        </div>
      </div>
    )
  }
}

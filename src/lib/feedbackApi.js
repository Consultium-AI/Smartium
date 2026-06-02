const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'https://smartium-openai-proxy.yellow-fog-b95b.workers.dev').replace(
  /\/$/,
  ''
)

/**
 * @param {{ message: string, page?: string, userEmail?: string, category?: string }} payload
 */
export async function submitFeedback(payload) {
  const res = await fetch(`${API_BASE}/api/feedback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.error || 'Feedback versturen mislukt. Probeer het later opnieuw.')
  }
  return data
}

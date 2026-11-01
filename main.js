// Dirección de la app. Es lo único que hay que cambiar cuando se mueve de lugar.
const APP_URL = ''

if (APP_URL) {
  document.querySelectorAll('[data-app]').forEach((a) => {
    a.setAttribute('href', APP_URL)
    a.setAttribute('rel', 'noopener')
  })
}

// Formulario para dejar comentarios. Mientras esté vacío, el enlace no se muestra.
const FEEDBACK_URL = 'https://forms.gle/BD4rLPc3CnRy8jAa6'

if (FEEDBACK_URL) {
  document.querySelectorAll('[data-feedback]').forEach((a) => {
    a.setAttribute('href', FEEDBACK_URL)
    a.setAttribute('rel', 'noopener')
    a.setAttribute('target', '_blank')
  })
  document.querySelectorAll('.feedback').forEach((p) => (p.hidden = false))
}

// Tema claro u oscuro. Sin elección guardada, sigue el del dispositivo.
const root = document.documentElement
const query = window.matchMedia('(prefers-color-scheme: dark)')
const effective = () => root.dataset.theme || (query.matches ? 'dark' : 'light')

function sync() {
  const dark = effective() === 'dark'
  const btn = document.getElementById('theme')
  if (btn) btn.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro')
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', dark ? '#0c1017' : '#e9edf3')
}

document.getElementById('theme')?.addEventListener('click', () => {
  const next = effective() === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  try {
    localStorage.setItem('mejorando.landing.tema', next === 'dark' ? 'oscuro' : 'claro')
  } catch {
    // sin almacenamiento, el cambio vale solo para esta visita
  }
  sync()
})
query.addEventListener?.('change', sync)
sync()

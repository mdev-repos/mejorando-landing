// Dirección de la app. Es lo único que hay que cambiar cuando se mueve de lugar.
const APP_URL = ''

if (APP_URL) {
  document.querySelectorAll('[data-app]').forEach((a) => {
    a.setAttribute('href', APP_URL)
    a.setAttribute('rel', 'noopener')
  })
}

// Formulario para dejar comentarios. Mientras esté vacío, el enlace no se muestra.
const FEEDBACK_URL = ''

if (FEEDBACK_URL) {
  document.querySelectorAll('[data-feedback]').forEach((a) => {
    a.setAttribute('href', FEEDBACK_URL)
    a.setAttribute('rel', 'noopener')
    a.setAttribute('target', '_blank')
  })
  document.querySelectorAll('.feedback').forEach((p) => (p.hidden = false))
}

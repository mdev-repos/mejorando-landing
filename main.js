// Dirección de la app. Es lo único que hay que cambiar cuando se mueve de lugar.
const APP_URL = ''

if (APP_URL) {
  document.querySelectorAll('[data-app]').forEach((a) => {
    a.setAttribute('href', APP_URL)
    a.setAttribute('rel', 'noopener')
  })
}

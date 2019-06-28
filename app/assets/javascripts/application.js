/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

var clipboard = new ClipboardJS('.js-copy-button')

clipboard.on('success', function (e) {
  console.info('Action:', e.action)
  console.info('Text:', e.text)
  console.info('Trigger:', e.trigger)

  e.clearSelection()
})

clipboard.on('error', function (e) {
  console.error('Action:', e.action)
  console.error('Trigger:', e.trigger)
})

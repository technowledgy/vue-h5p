/* eslint-disable no-undef */
import 'h5p/styles/h5p.css'
import 'h5p/styles/h5p-confirmation-dialog.css'
import 'h5p/styles/h5p-core-button.css'
import 'h5p/styles/h5p-tooltip.css'

import 'h5p/js/jquery'
import 'h5p/js/h5p'
import 'h5p/js/h5p-event-dispatcher'
import 'h5p/js/h5p-x-api'
import 'h5p/js/h5p-x-api-event'
import 'h5p/js/h5p-content-type'
import 'h5p/js/h5p-confirmation-dialog'
import 'h5p/js/request-queue'
import 'h5p/js/h5p-action-bar'
import 'h5p/js/h5p-tooltip.js'

H5P.getLibraryPath = function (library) {
  return H5PIntegration._libraryPaths[library]
}

H5P.getPath = function (path, contentId) {
  const hasProtocol = function (path) {
    return path.match(/^[a-z0-9]+:\/\//i)
  }

  if (hasProtocol(path)) {
    return path
  }

  let prefix
  if (contentId !== undefined) {
    prefix = H5PIntegration.url + '/content'
  } else if (window.H5PEditor !== undefined) {
    prefix = H5PEditor.filesPath
  } else {
    return
  }

  return prefix + '/' + path
}

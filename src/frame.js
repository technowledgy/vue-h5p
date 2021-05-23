/* eslint-disable no-undef */
import H5P from 'H5P'
import 'H5PEventDispatcher'
import 'H5PxAPI'
import 'H5PxAPIEvent'
import 'H5PContentType'
import 'H5PConfirmationDialog'
import 'H5PRequestQueue'
import 'H5PActionBar'

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

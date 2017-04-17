import React from 'react'
import {connect} from 'react-redux'
import Clipboard from 'clipboard'
import {resetShare} from '../actions'
import TextField from './TextField'
import SharePopup, {PopupButton} from './SharePopup'

const ShareExportPopup = ({showShare: show, url, onCloseRequest}) => {
  let urlField
  let copyButton
  let clipboard
  let setUrlField = n => {
    urlField = n
  }
  let setCopyButton = n => {
    copyButton = n
    if (url) {
      try {
        clipboard = new Clipboard(copyButton, {target: () => urlField})
      } catch (err) {
        clipboard.destroy()
      }
    }
  }

  return (
    <SharePopup show={show} onCloseRequest={onCloseRequest}>
      {url ? ([
        <TextField readOnly value={url} innerRef={setUrlField} key="0"/>,
        <PopupButton innerRef={setCopyButton} key="1">
          Copy
        </PopupButton>
      ]) : 'Loading...'}
    </SharePopup>
  )
}

const mapStateToProps = ({current}) => ({...current})
const mapDispatchToProps = dispatch => ({
  onCloseRequest: () => dispatch(resetShare())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShareExportPopup)

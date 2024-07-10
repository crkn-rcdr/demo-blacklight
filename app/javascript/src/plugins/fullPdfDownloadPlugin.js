import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import {
  getCanvasIndex,
} from 'mirador/dist/es/src/state/selectors'

function downloadFile(url, filename) {
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
  a.click();    
  a.remove();  //afterwards we remove the element again     
}

class FullPDFDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose, manifestId } = this.props
    const pathname = new URL(manifestId).pathname
    const parts = pathname.split('/')
    const id = parts[parts.length - 2]
    console.log("/dl/" + id)
    fetch("/dl/" + id, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(data => {
      if(data["docPdfUri"]?.length) {
        downloadFile(data["docPdfUri"], id + ".pdf") 
        handleClose() 
      } else {
        alert("error")
      } 
    })
  }

  render() {
    return (
      <React.Fragment>
        <MenuItem onClick={() => this.downloadAndCloseMenu()}>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            All images as a searchable PDF
          </ListItemText>
        </MenuItem>
      </React.Fragment>
    );
  }
}

FullPDFDownload.propTypes = {
  handleClose: PropTypes.func,
  canvasIndex: PropTypes.number,
  manifestId: PropTypes.string
};

FullPDFDownload.defaultProps = {
  handleClose: () => {}
};

/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */
const mapStateToProps = (state, props) => {
  const { windowId } = props;
  const canvasIndex = getCanvasIndex(state, { windowId })
  const  manifestId = state.windows[windowId].manifestId
  return {
    canvasIndex,
    manifestId
  };
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'FullPDFDownloadPlugin',
  component: FullPDFDownload,
  mapStateToProps
};

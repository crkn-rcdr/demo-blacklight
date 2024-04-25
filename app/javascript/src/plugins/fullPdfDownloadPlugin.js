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
  fetch(url, {
      method: 'GET',
      //headers: new Headers({
      //    "Authorization": "Bearer " + token
      //})
  })
  .then(response => response.blob())
  .then(blob => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();    
      a.remove();  //afterwards we remove the element again         
  });
}

class FullPDFDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose, canvasIndex, manifestId } = this.props;
    console.log("m", manifestId)
    let page = canvasIndex + 1
    console.log("/access-files/69429/oocihm.84056.pdf")
    downloadFile("/access-files/69429/oocihm.84056.pdf", "oocihm.84056.pdf") 
    handleClose();
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

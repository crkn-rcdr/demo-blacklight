import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import {
  getCanvasIndex, 
  getCurrentCanvas,
} from 'mirador/dist/es/src/state/selectors'



function downloadFile(url, filename) {
  fetch(url, {
      method: 'GET'
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

class FullResDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose, canvasIndex, manifestId, canvas } = this.props;
    console.log("c", canvas)
    console.log("m", manifestId)
    let page = canvasIndex + 1
    downloadFile(canvas.__jsonld.items[0].items[0].body.id, "oocihm.84056."+page+".jpg") 
  }

  render() {
    return (
      <React.Fragment>
        <MenuItem 
        tabIndex="0"
        onClick={() => this.downloadAndCloseMenu()}>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Current image in full resolution
          </ListItemText>
        </MenuItem>
      </React.Fragment>
    );
  }
}

FullResDownload.propTypes = {
  handleClose: PropTypes.func,
  canvasIndex: PropTypes.number,
  canvas: PropTypes.object,
  manifestId: PropTypes.string
};

FullResDownload.defaultProps = {
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
  const canvas = getCurrentCanvas(state, { windowId })
  const manifestId = state.windows[windowId].manifestId
  return {
    canvasIndex,
    canvas,
    manifestId
  };
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'FullResDownloadPlugin',
  component: FullResDownload,
  mapStateToProps
};
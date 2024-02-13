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

class FullResDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose, canvasIndex, manifestId, canvas } = this.props;
    console.log("c", canvas)
    console.log("m", manifestId)
    let page = canvasIndex + 1
    console.log("/access-files/69429/oocihm.84056."+page+".pdf")
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
            Download Image in Full Resolution
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
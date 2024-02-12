import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';

class FullResDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose } = this.props;

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
            Full Resolution
          </ListItemText>
        </MenuItem>
      </React.Fragment>
    );
  }
}

MiradorDownload.propTypes = {
  handleClose: PropTypes.func
};

MiradorDownload.defaultProps = {
  handleClose: () => {}
};

export default {
  target: 'WindowTopBarShareMenu',
  mode: 'add',
  name: 'FullResDownloadPlugin',
  component: FullResDownload,
  mapDispatchToProps,
};

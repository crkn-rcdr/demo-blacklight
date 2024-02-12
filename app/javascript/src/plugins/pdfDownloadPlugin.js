import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';

class PDFDownload extends Component {
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
            Download Image as Searchable PDF
          </ListItemText>
        </MenuItem>
      </React.Fragment>
    );
  }
}

PDFDownload.propTypes = {
  handleClose: PropTypes.func
};

PDFDownload.defaultProps = {
  handleClose: () => {}
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'PDFDownloadPlugin',
  component: PDFDownload
};

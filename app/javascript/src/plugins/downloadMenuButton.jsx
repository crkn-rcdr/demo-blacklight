import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVertSharp';
import { PluginHook } from 'mirador/dist/es/src/components/PluginHook';

/**
 *
 */
export class DownloadWindowTopBarPluginMenu extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: true,
    };
  }

  /**
   * render component
   */
  render() {
    const {
      container, PluginComponents, t, windowId, menuIcon,
    } = this.props;
    const { anchorEl, open } = this.state;
    const windowPluginMenuId = `window-plugin-menu_${windowId}`;
    if (!PluginComponents || PluginComponents.length === 0) return null;

    return (
      <>
<ul class="mv-menu-nav nav" aria-label="Item navigation buttons">
  <li class="nav-item">
    <a 
    class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
    tabindex="0">
      <button id="downloads-button" 
              type="button" 
              tabIndex="0"
              class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementBottom" 
              data-bs-toggle="modal" 
              data-bs-target="#downloadsModal">
        {menuIcon}
        <span>Download</span>
      </button>
    </a>
  </li>
</ul>

<div class="modal fade" id="downloadsModal" tabindex="-1" aria-labelledby="downloadsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="downloadsModalLabel">Download Options</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id={windowPluginMenuId}>
        <PluginHook handleClose={() => this.handleMenuClose()} {...this.props} />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
}

DownloadWindowTopBarPluginMenu.propTypes = {
  anchorEl: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  container: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  menuIcon: PropTypes.element,
  open: PropTypes.bool,
  PluginComponents: PropTypes.arrayOf(
    PropTypes.node,
  ),
  t: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

DownloadWindowTopBarPluginMenu.defaultProps = {
  anchorEl: null,
  container: null,
  menuIcon: <MoreVertIcon />,
  open: false,
  PluginComponents: [
  ],
};

export default {
  target: 'WindowTopBarShareMenu',
  mode: 'wrap',
  component: DownloadWindowTopBarPluginMenu
};

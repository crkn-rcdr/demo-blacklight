import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@mui/icons-material/MoreVertSharp';
import Menu from '@mui/material/Menu';
import MiradorMenuButton from '../containers/MiradorMenuButton';
import { PluginHook } from './PluginHook';
import WindowTopBarPluginMenu from 'mirador/dist/es/src/components/WindowTopBarPluginMenu.js';

/**
 *
 */
export class ShareWindowTopBarPluginMenu extends WindowTopBarPluginMenu {
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
        <MiradorMenuButton
          aria-haspopup="true"
          aria-label={t('windowPluginMenu')}
          aria-owns={open ? windowPluginMenuId : undefined}
          selected={open}
          onClick={this.handleMenuClick}
        >
          {menuIcon}
          Download
        </MiradorMenuButton>

        <Menu
          id={windowPluginMenuId}
          container={container?.current}
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          open={open}
          onClose={() => this.handleMenuClose()}
        >
          <PluginHook handleClose={() => this.handleMenuClose()} {...this.props} />
        </Menu>
      </>
    );
  }
}

ShareWindowTopBarPluginMenu.propTypes = {
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

ShareWindowTopBarPluginMenu.defaultProps = {
  anchorEl: null,
  container: null,
  menuIcon: <MoreVertIcon />,
  open: false,
  PluginComponents: [],
};
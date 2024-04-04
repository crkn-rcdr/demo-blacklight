import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVertSharp';
import Menu from '@material-ui/core/Menu';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import { PluginHook } from 'mirador/dist/es/src/components/PluginHook';
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

export default {
  target: 'WindowTopBarShareMenu',
  mode: 'wrap',
  component: ShareWindowTopBarPluginMenu,
  mapStateToProps
};

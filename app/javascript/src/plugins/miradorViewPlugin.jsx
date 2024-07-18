import React, { Component } from 'react';
import WindowViewSettings from './mirador-window-view-settings/windowViewSettingsContainer';

/**
 */
export class ViewPlugin extends Component {
  /**
   * render
   * @return
   */
  render() {
    const {
      handleClose, windowId
    } = this.props;

    return (
      <WindowViewSettings windowId={windowId} handleClose={handleClose} />
    );
  }
}

export default {
  component: ViewPlugin,
  mode: 'add',
  name: 'ViewPlugin',
  target: 'WindowTopBarPluginArea',
};
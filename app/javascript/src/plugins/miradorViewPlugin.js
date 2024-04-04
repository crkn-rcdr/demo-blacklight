import { Component } from 'react';
import WindowViewSettings from 'mirador/dist/es/src/containers/WindowViewSettings';

/**
 */
class ViewPlugin extends Component {
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

ViewPlugin.defaultProps = {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'ViewPlugin',
  component: ViewPlugin
};

export default {
  component: ViewPlugin,
  mode: 'add',
  name: 'WindowTopBarShareMenu',
  target: 'WindowTopBarPluginArea',
};
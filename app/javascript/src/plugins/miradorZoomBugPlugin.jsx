import React from 'react';
import { ZoomControls } from 'mirador/dist/es/src/components/ZoomControls.js';

class FixedZoomControls extends ZoomControls {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    console.log("??")
    this.handleZoomInClick = this.handleZoomInClick.bind(this);
    this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
  }

  /**
   * @private
   */
  handleZoomInClick() {
    const { windowId, updateViewport, viewer } = this.props;

    console.log("?<<<<")
    const zoom = viewer.zoom ? viewer.zoom : 1
    console.log(zoom)

    updateViewport(windowId, {
      ...viewer,
      zoom: zoom * 2,
    });
  }

  /**
   * @private
   */
  handleZoomOutClick() {
    const { windowId, updateViewport, viewer } = this.props;

    console.log(">?>>>>")
    const zoom = viewer.zoom ? viewer.zoom : 1
    console.log(zoom)
    updateViewport(windowId, {
      ...viewer,
      zoom: zoom / 2,
    });
  }
}

const ZoomControlsPlugin = ({ targetProps }) => (
  <FixedZoomControls {...targetProps}  />
);

export default {
  target: 'ZoomControls',
  mode: 'wrap',
  component: ZoomControlsPlugin,
};

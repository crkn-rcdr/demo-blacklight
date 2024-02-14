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
    console.log(viewer.zoom)
    const zoom = viewer.zoom * 2
    console.log(zoom)

    console.log(updateViewport)

    updateViewport(windowId, {
      ...viewer,
      zoom
    });
  }

  /**
   * @private
   */
  handleZoomOutClick() {
    const { windowId, updateViewport, viewer } = this.props;

    console.log(">?>>>>")
    console.log(viewer.zoom)
    const zoom = viewer.zoom / 2
    console.log(zoom)

    console.log(updateViewport)
    updateViewport(windowId, {
      ...viewer,
      zoom: zoom
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

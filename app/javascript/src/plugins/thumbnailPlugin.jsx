import React from 'react';
import { ThumbnailCanvasGrouping } from 'mirador/dist/es/src/components/ThumbnailCanvasGrouping.js';

class WatchThumbnailControls extends ThumbnailCanvasGrouping {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);

    this.handleZoomInClick = this.handleZoomInClick.bind(this);
    this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
  }

  /** */
  setCanvas(e) {
    const { setCanvas } = this.props;
    setCanvas(e.currentTarget.dataset.canvasId);
    // Set pagenum
  }
}

const ThumbnailPlugin = ({ targetProps }) => (
  <WatchThumbnailControls {...targetProps}  />
);

export default {
  target: 'ThumbnailCanvasGrouping',
  mode: 'wrap',
  component: ThumbnailPlugin,
};

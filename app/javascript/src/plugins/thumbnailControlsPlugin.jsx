import React from 'react';
import { ThumbnailNavigation } from 'mirador/dist/es/src/components/ThumbnailNavigation.js';

class WatchThumbnailNavigationControls extends ThumbnailNavigation {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);

    this.handleZoomInClick = this.handleZoomInClick.bind(this);
    this.handleZoomOutClick = this.handleZoomOutClick.bind(this);
  }

  /**
   */
  nextCanvas() {
    const { hasNextCanvas, setNextCanvas } = this.props;
    if (hasNextCanvas) {
      setNextCanvas();
      //Set Page Num
    }
  }

  /**
   */
  previousCanvas() {
    const { hasPreviousCanvas, setPreviousCanvas } = this.props;
    if (hasPreviousCanvas) {
      setPreviousCanvas();
      //Set Page Num
    }
  }
}

const ThumbnailControlsPlugin = ({ targetProps }) => (
  <WatchThumbnailNavigationControls {...targetProps}  />
);

export default {
  target: 'ThumbnailNavigation',
  mode: 'wrap',
  component: ThumbnailControlsPlugin,
};

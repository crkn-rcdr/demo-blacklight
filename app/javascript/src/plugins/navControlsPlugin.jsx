import React from 'react';
import { ViewerNavigation } from 'mirador/dist/es/src/components/ViewerNavigation.js';
import * as actions from 'mirador/dist/es/src/state/actions';
/*import {
  getCurrentCanvas
} from 'mirador/dist/es/src/state/selectors';*/

class WatchViewerNavigationControls extends ViewerNavigation {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    console.log("???????", this, props)

    //this.setNextCanvas = this.setNextCanvas.bind(this);
    //this.setPreviousCanvas = this.setPreviousCanvas.bind(this);
  }
}

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setNextCanvas: (...args) => {
    console.log("???????????")
    dispatch(actions.setNextCanvas(windowId))
  },
  setPreviousCanvas: (...args) => {
    console.log("???????????")
    dispatch(actions.setPreviousCanvas(windowId))
  },
});


const NavControlsPlugin = ({ targetProps }) => (
  <WatchViewerNavigationControls {...targetProps}  />
);

export default {
  target: 'ViewerNavigation',
  mode: 'wrap',
  component: NavControlsPlugin,
  mapDispatchToProps
};

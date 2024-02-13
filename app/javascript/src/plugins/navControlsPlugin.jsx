import React from 'react';
import { ViewerNavigation } from 'mirador/dist/es/src/components/ViewerNavigation.js';
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

    this.setNextCanvas = this.setNextCanvas.bind(this);
    this.setPreviousCanvas = this.setPreviousCanvas.bind(this);
  }

  /**
   * @private
   */
  setNextCanvas() {
    //const { hasNextCanvas, setNextCanvas } = this.props;
    //super(this.props);
    console.log(this.props)
    console.log("??? next")
  }

  /**
   * @private
   */
  setPreviousCanvas() {
    //super(this.props);
    console.log(this.props)
    console.log("??? prev")

    //Set Page Num
    //let queryParams = new URLSearchParams(window.location.search)
    //queryParams.set("pageNum", pageNum)
    //history.pushState(null, null, "?"+queryParams.toString())
  
  }
}

const NavControlsPlugin = ({ targetProps }) => (
  <WatchViewerNavigationControls {...targetProps}  />
);

export default {
  target: 'ViewerNavigation',
  mode: 'wrap',
  component: NavControlsPlugin,
};

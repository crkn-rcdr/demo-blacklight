import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  getCanvasIndex,
} from '../state/selectors'

export class NavControlsPlugin extends Component {
  constructor(props) {
    super(props);
  }
}

NavControlsPlugin.propTypes = {
  canvasIndex: PropTypes.number
};

/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */
const mapStateToProps = (state, props) => {
  const { windowId } = props;
  const canvasIndex = getCanvasIndex(state, { windowId });
  console.log("???", canvasIndex)
  return {
    canvasIndex
  };
};


export default {
  //target: 'ViewerNavigation',
  //mode: 'wrap',
  component: NavControlsPlugin,
  mapStateToProps
};

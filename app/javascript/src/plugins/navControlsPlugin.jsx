import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  getCanvasIndex,
} from 'mirador/dist/es/src/state/selectors'

export class NavControlsPlugin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
     TargetComponent, targetProps
    } = this.props;

    return <TargetComponent {...targetProps} />;
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
  let pageNum = canvasIndex + 1
  let queryParams = new URLSearchParams(window.location.search)
  const queryPageNum = queryParams.get("pageNum")
  if(typeof queryPageNum !== "undefined" && pageNum !== parseInt(queryPageNum)) {
    queryParams.set("pageNum", pageNum)
    history.pushState(null, null, "?"+queryParams.toString())
  }
  return {
    canvasIndex
  };
};


export default {
  target: 'ViewerNavigation',
  mode: 'wrap',
  component: NavControlsPlugin,
  mapStateToProps
};
'use strict';
import React from 'react';
import { withStyles } from '@material-ui/core';
import { withPlugins } from 'mirador/dist/es/src/extend/withPlugins';
import { DownloadWindowTopBarPluginMenu } from './downloadMenu.jsx';
import { getContainerId } from 'mirador/dist/es/src/state/selectors';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';
import {
  getCanvasIndex, 
  getCurrentCanvas,
} from 'mirador/dist/es/src/state/selectors';

const WindowTopBarShareMenu = (props) => (
  <DownloadWindowTopBarPluginMenu
    {...props}
    t={() => 'Download options'}
    menuIcon={<DownloadIcon />}
  />
)

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */
const styles = theme => ({
  ctrlBtnSelected: {
    backgroundColor: theme.palette.action.selected,
  },
});

const ImprovedWindowTopBarShareMenu = withStyles(styles)(
  withPlugins('WindowTopBarShareMenu')(
    WindowTopBarShareMenu
  )
);

/**
 * mapStateToProps - to hook up connect
 */
const mapStateToProps = (state, props) => {
  const { windowId } = props;
  const containerId = getContainerId(state)
  const canvasIndex = getCanvasIndex(state, { windowId })
  const canvas = getCurrentCanvas(state, { windowId })
  const manifestId = state.windows[windowId].manifestId
  return {
    containerId,
    canvasIndex,
    canvas,
    manifestId
  };
};


export default {
  component: ImprovedWindowTopBarShareMenu,
  mapStateToProps,
  mode: 'add',
  name: 'WindowTopBarShareMenu',
  target: 'WindowTopBarPluginArea',
};

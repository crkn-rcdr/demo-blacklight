'use strict';
import React from 'react';
import { withStyles } from '@material-ui/core';
import { withPlugins } from 'mirador/dist/es/src/extend/withPlugins';
import { DownloadWindowTopBarPluginMenu } from './downloadMenuButton.jsx';
import { getContainerId } from 'mirador/dist/es/src/state/selectors';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';

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


export default {
  component: ImprovedWindowTopBarShareMenu,
  mapStateToProps: (state) => ({
    containerId: getContainerId(state),
  }),
  mode: 'add',
  name: 'WindowTopBarShareMenu',
  target: 'WindowTopBarPluginArea',
};

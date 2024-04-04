import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVertSharp';
import Menu from '@material-ui/core/Menu';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import { PluginHook } from 'mirador/dist/es/src/components/PluginHook';

/**
 *
 */
export class ShareWindowTopBarPluginMenu extends Component {
  /**
   * constructor -
   */
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      open: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
  }

  /**
   * Set the anchorEl state to the click target
   */
  handleMenuClick(event) {
    this.setState({
      anchorEl: event.currentTarget,
      open: true,
    });
  }

  /**
   * Set the anchorEl state to null (closing the menu)
   */
  handleMenuClose() {
    this.setState({
      anchorEl: null,
      open: false,
    });
  }

  /**
   * render component
   */
  render() {
    const {
      container, PluginComponents, t, windowId, menuIcon,
    } = this.props;
    const { anchorEl, open } = this.state;
    const windowPluginMenuId = `window-plugin-menu_${windowId}`;
    if (!PluginComponents || PluginComponents.length === 0) return null;

    return (
      <>
        <MiradorMenuButton
          aria-haspopup="true"
          aria-label={t('windowPluginMenu')}
          aria-owns={open ? windowPluginMenuId : undefined}
          selected={open}
          onClick={this.handleMenuClick}
        >
          {menuIcon}
          Download
        </MiradorMenuButton>

        <Menu
          id={windowPluginMenuId}
          container={container?.current}
          anchorEl={anchorEl}
          anchorOrigin={{
            horizontal: 'right',
            vertical: 'bottom',
          }}
          transformOrigin={{
            horizontal: 'right',
            vertical: 'top',
          }}
          open={open}
          onClose={() => this.handleMenuClose()}
        >
          <PluginHook handleClose={() => this.handleMenuClose()} {...this.props} />
        </Menu>
      </>
    );
  }
}

ShareWindowTopBarPluginMenu.propTypes = {
  anchorEl: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  container: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  menuIcon: PropTypes.element,
  open: PropTypes.bool,
  PluginComponents: PropTypes.arrayOf(
    PropTypes.node,
  ),
  t: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
};

ShareWindowTopBarPluginMenu.defaultProps = {
  anchorEl: null,
  container: null,
  menuIcon: <MoreVertIcon />,
  open: false,
  PluginComponents: [],
};

export default {
  target: 'WindowTopBarShareMenu',
  mode: 'wrap',
  component: ShareWindowTopBarPluginMenu
};

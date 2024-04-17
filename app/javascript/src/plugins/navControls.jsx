import React, { Component } from 'react'
import PropTypes from "prop-types"
import NavigationIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import classNames from 'classnames';
import MiradorMenuButton from 'mirador/dist/es/src/containers/MiradorMenuButton';
import ns from 'mirador/dist/es/src/config/css-ns';
import Select from 'react-select';
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getSequenceViewingDirection,
  getNextCanvasGrouping,
  getPreviousCanvasGrouping,
  getCanvases
} from 'mirador/dist/es/src/state/selectors';

/**
 */
class ViewerNavigation extends Component {
  /**
   * Renders things
   */
  render() {
    const {
      hasNextCanvas, hasPreviousCanvas, setNextCanvas, setPreviousCanvas, t,
      viewingDirection, setFirstCanvas, setLastCanvas, lastCanvas, firstCanvas
    } = this.props;

    let htmlDir = 'ltr';
    let previousIconStyle = {};
    let nextIconStyle = {};
    switch (viewingDirection) {
      case 'top-to-bottom':
        previousIconStyle = { transform: 'rotate(270deg)' };
        nextIconStyle = { transform: 'rotate(90deg)' };
        break;
      case 'bottom-to-top':
        previousIconStyle = { transform: 'rotate(90deg)' };
        nextIconStyle = { transform: 'rotate(270deg)' };
        break;
      case 'right-to-left':
        htmlDir = 'rtl';
        previousIconStyle = {};
        nextIconStyle = { transform: 'rotate(180deg)' };
        break;
      default:
        previousIconStyle = { transform: 'rotate(180deg)' };
        nextIconStyle = {};
    }

    return (
      <div
        className={classNames(ns('osd-navigation-custom'))}
        dir={htmlDir}
      >
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <button 
            class="MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
            tabindex="0" type="button" 
            aria-label="Last Image" 
            title="First Image"
            disabled={!hasPreviousCanvas}
            onClick={() => { hasPreviousCanvas && setFirstCanvas(firstCanvas); }}>
            <SkipNextIcon style={previousIconStyle} />
          </button>
          <button 
            class="MuiButtonBase-root MuiIconButton-root mirador-previous-canvas-button btn btn-outline" 
            tabindex="0" type="button" 
            aria-label="Previous Image" 
            title="Previous Image"
            disabled={!hasPreviousCanvas}
            onClick={() => { hasPreviousCanvas && setPreviousCanvas(); }}>
            <NavigationIcon style={previousIconStyle} />
          </button>
          <button 
            class="MuiButtonBase-root MuiIconButton-root mirador-next-canvas-button btn btn-outline" 
            tabindex="0" type="button" 
            aria-label="Next Image" 
            title="Next Image"
            disabled={!hasNextCanvas}
            onClick={() => { hasNextCanvas && setNextCanvas(); }}>
            <NavigationIcon style={nextIconStyle} />
          </button>
          <button 
            class="MuiButtonBase-root MuiIconButton-root mirador-last-canvas-button btn btn-outline" 
            tabindex="0" type="button" 
            aria-label="Last Image" 
            title="Last Image"
            disabled={!hasNextCanvas}
            onClick={() => { hasNextCanvas && setLastCanvas(lastCanvas); }}>
            <SkipNextIcon style={nextIconStyle} />
          </button>
        </div>
      </div>
    );
  }
}

ViewerNavigation.propTypes = {
  hasNextCanvas: PropTypes.bool,
  hasPreviousCanvas: PropTypes.bool,
  setNextCanvas: PropTypes.func,
  setPreviousCanvas: PropTypes.func,
  setFirstCanvas: PropTypes.func,
  setLastCanvas: PropTypes.func,
  t: PropTypes.func.isRequired,
  viewingDirection: PropTypes.string,
};


export class NavControlsPlugin extends Component {
  constructor(props) {
    super(props);
  }

  options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ]

  state = {
    selectedOption: this.options[0],
    options: this.options
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };

  render() {
    const { windowId, hasNextCanvas, hasPreviousCanvas, viewingDirection, setNextCanvas, setPreviousCanvas, setFirstCanvas, setLastCanvas, lastCanvas, firstCanvas } = this.props
    const { selectedOption, options} = this.state

    return (
      <div  style={{zIndex: 1000000, position: "absolute", top: "0.6rem", left: "1rem", display: "flex", alignItems: "baseline"}}> 
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
        <ViewerNavigation 
          windowId={windowId}
          hasNextCanvas={hasNextCanvas}
          hasPreviousCanvas={hasPreviousCanvas}
          viewingDirection={viewingDirection}
          setNextCanvas={setNextCanvas}
          setPreviousCanvas={setPreviousCanvas}
          setFirstCanvas={setFirstCanvas}
          setLastCanvas={setLastCanvas}
          lastCanvas={lastCanvas}
          firstCanvas={firstCanvas}
         />
      </div>
    )
  }
}

/** */
const mapStateToProps = (state, { windowId }) => ({
  hasNextCanvas: !!getNextCanvasGrouping(state, { windowId }),
  hasPreviousCanvas: !!getPreviousCanvasGrouping(state, { windowId }),
  viewingDirection: getSequenceViewingDirection(state, { windowId }),
  firstCanvas: getCanvases(state, { windowId }).map((canvas) => canvas.id)[0],
  lastCanvas:  getCanvases(state, { windowId }).map((canvas) => canvas.id).pop()
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setNextCanvas: (...args) => dispatch(actions.setNextCanvas(windowId)),
  setPreviousCanvas: (...args) => dispatch(actions.setPreviousCanvas(windowId)),
  setFirstCanvas: (firstCanvas) => {
    return dispatch(actions.setCanvas(windowId, firstCanvas))
  },
  setLastCanvas: (lastCanvas) => {
    return dispatch(actions.setCanvas(windowId, lastCanvas))
  },
});

export default {
  component: NavControlsPlugin,
  mode: 'add',
  name: 'NavControlsPlugin',
  target: 'OpenSeadragonViewer',
  mapStateToProps,
  mapDispatchToProps
};

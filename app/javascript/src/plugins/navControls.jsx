import React, { Component } from 'react'
import PropTypes from "prop-types"
import NavigationIcon from '@material-ui/icons/NavigateNext';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import classNames from 'classnames';
import ns from 'mirador/dist/es/src/config/css-ns';
import Select from 'react-select';
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getSequenceViewingDirection,
  getNextCanvasGrouping,
  getPreviousCanvasGrouping,
  getCurrentCanvas,
  getCanvases
} from 'mirador/dist/es/src/state/selectors';
import isEqual from 'lodash/isEqual'

/**
 */
class ViewerNavigation extends Component {
  /**
   * Renders things
   */
  render() {
    const {
      hasNextCanvas, hasPreviousCanvas, setNextCanvas, setPreviousCanvas, 
      viewingDirection, setCanvas, lastCanvas, firstCanvas
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
        <ul class="nav nav-pills" aria-label="Item navigation buttons">
          <li class="nav-item">
            <a 
            class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
            tabindex="0"
            aria-label="Last Image" 
            title="First Image"
            disabled={!hasPreviousCanvas}
            onKeyDown={ (e) => {
              if (e.key === 'Enter' ) {
                hasPreviousCanvas && setCanvas(firstCanvas)
              }
            }}
            onClick={() => { hasPreviousCanvas && setCanvas(firstCanvas); }}>
              <SkipNextIcon style={previousIconStyle} />
            </a>
          </li>
          <li class="nav-item">
            <a 
            class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
            tabindex="0" 
            aria-label="Previous Image" 
            title="Previous Image"
            disabled={!hasPreviousCanvas}
            onKeyDown={ (e) => {
              if (e.key === 'Enter' ) {
                hasPreviousCanvas && setPreviousCanvas()
              }
            }}
            onClick={() => { hasPreviousCanvas && setPreviousCanvas(); }}>
              <NavigationIcon style={previousIconStyle} />
            </a>
          </li>
          <li class="nav-item">
            <a 
            class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
            tabindex="0" 
            aria-label="Next Image" 
            title="Next Image"
            disabled={!hasNextCanvas}
            onKeyDown={ (e) => {
              if (e.key === 'Enter' ) {
                hasNextCanvas && setNextCanvas()
              }
            }}
            onClick={() => { hasNextCanvas && setNextCanvas(); }}>
              <NavigationIcon style={nextIconStyle} />
            </a>
          </li>
          <li class="nav-item">
            <a 
            class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
            tabindex="0" 
            aria-label="Last Image" 
            title="Last Image"
            disabled={!hasNextCanvas}
            onKeyDown={ (e) => {
              if (e.key === 'Enter' ) {
                hasNextCanvas && setCanvas(lastCanvas)
              }
            }}
            onClick={() => { hasNextCanvas && setCanvas(lastCanvas); }}>
            <SkipNextIcon style={nextIconStyle} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

ViewerNavigation.propTypes = {
  hasNextCanvas: PropTypes.bool,
  hasPreviousCanvas: PropTypes.bool,
  setNextCanvas: PropTypes.func,
  setPreviousCanvas: PropTypes.func,
  setCanvas: PropTypes.func,
  t: PropTypes.func.isRequired,
  viewingDirection: PropTypes.string,
  firstCanvas: PropTypes.string,
  lastCanvas: PropTypes.string,
};

export class NavControlsPlugin extends Component {
  state = {
    firstCanvas: "",
    lastCanvas: "",
    selectOptions: [],
    selectedOption: null
  }

  constructor(props) {
    super(props);
    this.state.selectOptions = this.props.canvases?.map((canvas, index) => {
      return {
        value: canvas.id,
        label: `Image ${index+1}`
      }
    })
    this.state.selectedOption =  this.state.selectOptions?.[0]
    this.state.canvasIds = this.props.canvases?.map((canvas) => canvas.id)
    this.state.firstCanvas = this.state.canvasIds?.[0]
    this.state.lastCanvas = this.state.canvasIds?.pop()
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      this.props.setCanvas(selectedOption.value)
    );
  }

  componentDidUpdate(prevProps) {
    if(this.props.currentCanvas.id !== prevProps.currentCanvas?.id) {
      let index = 0
      for(let canvas of this.props.canvases) {
        if (canvas['id'] === this.props.currentCanvas.id) break
        index++
      }
      this.state.selectedOption = {
        value: this.props.currentCanvas.id,
        label: `Image ${index+1}`
      }
      this.forceUpdate()
    }
    if (this.props.canvases && !isEqual(this.props.canvases, prevProps.canvases)) {
      this.state.selectOptions = this.props.canvases.map((canvas, index) => {
        return {
          value: canvas.id,
          label: `Image ${index+1}`
        }
      })
      this.state.selectedOption = this.state.selectOptions[0]
      this.state.canvasIds = this.props.canvases.map((canvas) => canvas.id)
      this.state.firstCanvas = this.state.canvasIds[0]
      this.state.lastCanvas = this.state.canvasIds.pop()
      this.forceUpdate()
    }
  }

  render() {
    const { windowId, hasNextCanvas, hasPreviousCanvas, viewingDirection, setNextCanvas, setPreviousCanvas, setCanvas } = this.props
    const { firstCanvas, lastCanvas, selectOptions, selectedOption } = this.state
    return (
      <div  style={{zIndex: 1000000, position: "absolute", top: "0.6rem", left: "1rem", display: "flex", alignItems: "flex-start"}}> 
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={selectOptions}
        />
        <ViewerNavigation 
          windowId={windowId}
          hasNextCanvas={hasNextCanvas}
          hasPreviousCanvas={hasPreviousCanvas}
          viewingDirection={viewingDirection}
          setNextCanvas={setNextCanvas}
          setPreviousCanvas={setPreviousCanvas}
          setCanvas={setCanvas}
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
  currentCanvas: getCurrentCanvas(state, { windowId }),
  canvases: getCanvases(state, { windowId })
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setNextCanvas: (...args) => dispatch(actions.setNextCanvas(windowId)),
  setPreviousCanvas: (...args) => dispatch(actions.setPreviousCanvas(windowId)),
  setCanvas: (canvasId) => {
    return dispatch(actions.setCanvas(windowId, canvasId))
  },
});

export default {
  component: NavControlsPlugin,
  mode: 'add',
  name: 'NavControlsPlugin',
  target: 'WindowTopBarPluginArea',
  mapStateToProps,
  mapDispatchToProps
};

import React, { Component } from 'react'
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getCanvases
} from 'mirador/dist/es/src/state/selectors';

export class LegacySearchPlugin extends Component {

  state = {
    query: '',
    results: []
  }

  constructor(props) {
    super(props);
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const query = urlParams.get('q') 
    this.state.query = query ? query : ""
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      this.props.setCanvas(selectedOption.value)
    );
  }

  handleSearch = () => {
    fetch('/legacy/84056?' + new URLSearchParams({
        q: this.state.query
    })).then(response => {
      response.json().then(content => {
        this.state.results = content
        console.log("h", this.state.results)
        this.forceUpdate()
      })
    })
  }
  
  render() {
    const { windowId, canvases } = this.props
    return (
      <div className={this.state.results.length ? "fullscreen" : ""} style={{zIndex: 10000000, position: "absolute", top: "0", left: "0", padding:"0.5rem 1rem", height: "fit-content", right:"0", background: "white", borderBottom: "1px solid #dbdbdb"}}> 
        <div id="pvToolbarTop" aria-label="Viewer controls">
            <input 
            id="pvSearch" 
            class="DocSearch-Input search-q q form-control"
            aria-autocomplete="both" 
            aria-labelledby="docsearch-label" 
            autocomplete="off" 
            autocorrect="off" 
            autocapitalize="off" 
            enterkeyhint="search" 
            spellcheck="false" 
            placeholder="Search within images..."
            type="search"
            name="q"
            defaultValue={this.state.query}
            onChange={(e) => { 
              console.log(e)
              this.state.query = e.target.value
            }}/>
            <button 
              onClick={this.handleSearch}
              type="submit" 
              id="item-search-submit" 
              class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
            </button>
        </div>
        <div class="container-fluid container-flex">
          {this.state.results.map((result) => (
            <a href={"?pageNum="+result+"&q="+this.state.query}>
              <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Image {result}</h5>
                    <a href={"?pageNum="+result+"&q="+this.state.query} class="btn btn-primary">Go to page</a>
                </div>
              </div>
            </a>))}
        </div>
      </div>
    )
  }
}

/** */
const mapStateToProps = (state, { windowId }) => ({
  canvases: getCanvases(state, { windowId })
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  setCanvas: (canvasId) => {
    return dispatch(actions.setCanvas(windowId, canvasId))
  },
});

export default {
  component: LegacySearchPlugin,
  mode: 'add',
  name: 'LegacySearchPlugin',
  target: 'OpenSeadragonViewer',
  mapStateToProps,
  mapDispatchToProps
};

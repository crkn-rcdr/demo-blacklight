import React, { Component } from 'react'
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getCanvases
} from 'mirador/dist/es/src/state/selectors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

export class LegacySearchPlugin extends Component {

  state = {
    query: '',
    results: [],
    currentViewIndex: 0,
    resultsListOpen: false,
    resultsMenuOpen: false
  }

  constructor(props) {
    super(props);
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const query = urlParams.get('q') 
    this.state.query = query ? query : ""
  }

  handleSearch = () => {
    fetch('/legacy/84056?' + new URLSearchParams({
        q: this.state.query
    })).then(response => {
      response.json().then(content => {
        this.state.results = content
        this.state.resultsListOpen = true
        this.forceUpdate()
      })
    })
  }
/*
  handleCardClick = (windowId, result, canvas) => {
    console.log("r", this.props.setCanvas, canvas)
    this.state.currentViewIndex = result
    this.state.resultsListOpen = false
    this.state.resultsMenuOpen = true
    this.forceUpdate()
  }*/
  
  render() {
    const { windowId, canvases, setCanvas } = this.props
    return (
      <div className={this.state.resultsListOpen ? "fullscreen" : ""} style={{zIndex: 10000000, position: "absolute", top: "0", left: "0", padding:"0.5rem 1rem", height: "fit-content", right:"0", background: "white", borderBottom: "1px solid #dbdbdb"}}> 
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
        <div class="container-fluid container-flex card-section">
          { this.state.resultsListOpen ? this.state.results.map((result) => (
            <Card className='mui-card' onClick={() => {
              this.state.currentViewIndex = result
              this.state.resultsListOpen = false
              this.state.resultsMenuOpen = true
              console.log(windowId, canvases[result-1].id)
              setCanvas(canvases[result-1].id)
              this.forceUpdate()
            }}>
              <CardHeader
                title={"Image " + result}
              />
              <CardMedia
                image={canvases[result-1].__jsonld.items[0].items[0].body.id}
                height="390px"
                title="Paella dish"
              />
            </Card>
          )) : this.state.resultsMenuOpen ?
            <div className="legacy-search-menu">
              all results
              image {result}
              result 3 of 15

              previous result
              next result
            </div> 
            : ""
          }
        </div>

        
      </div>
    )
  }
}

/**
 *               <!--div class="card">
                <img src={canvases[result-1].__jsonld.items[0].items[0].body.id} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <a href={"?pageNum="+result+"&q="+this.state.query}>Image {result}</a>
                </div>
              </div-->
 */
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

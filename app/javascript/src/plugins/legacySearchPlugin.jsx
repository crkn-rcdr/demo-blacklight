import React, { Component } from 'react'
import * as actions from 'mirador/dist/es/src/state/actions';
import {
  getCanvases
} from 'mirador/dist/es/src/state/selectors';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ClearIcon from '@material-ui/icons/Clear';

export class LegacySearchPlugin extends Component {

  state = {
    query: '',
    results: [],
    currentResultIndex: 0,
    currentCanvasIndex: 0,
    resultsListOpen: false,
    resultsMenuOpen: false,
  }

  constructor(props) {
    super(props);
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const query = urlParams.get('q') 
    this.state.query = query ? query : ""
  }


  handleClear = () => {
    document.getElementById("pvSearch").value = ""
    this.state.query = ""
    this.state.results = []
    this.state.currentResultIndex = 0
    this.state.resultsListOpen = false
    this.state.resultsMenuOpen = false
    this.forceUpdate()
  }

  handleSearch = () => {
    if(this.state.query.length) {
      let currURL = window.location.href
      let urlArr=currURL.split('/')
      let parameters=urlArr[urlArr.length-1].split('?')
      let id = parameters[0]
      fetch('/legacy/'+id+'?' + new URLSearchParams({
          q: this.state.query
      })).then(response => {
        response.json().then(content => {
          this.state.results = content
          this.state.resultsListOpen = true
          this.forceUpdate()
        })
      })
    } else this.handleClear()
  }
  
  render() {
    const { windowId, canvases, setCanvas, manifestId } = this.props
    return (
      <div className={this.state.resultsListOpen ? "fullscreen" : ""} style={{zIndex: 10000000, position: "absolute", top: "-3.5rem", left: "0", padding:"0.5rem 1rem", right:"0", background: "white", borderBottom: "1px solid #dbdbdb"}}> 
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
            { 
              this.state.resultsListOpen || this.state.resultsMenuOpen ? (
              <Button 
                onClick={this.handleClear}
                className="btn-ghost"
                id="item-search-clear">
                  <ClearIcon />
              </Button> ) : ("")
            }
        </div>
        <div class="container-fluid container-flex card-section">
          { this.state.resultsListOpen ? this.state.results.length ? this.state.results.map((result, index) => (
            <Card className='mui-card clickable' onClick={() => {
              this.state.currentCanvasIndex = result
              this.state.currentResultIndex = index
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
                title={"Image " + result}
              />
            </Card>
          )) : "No results" : this.state.resultsMenuOpen ?
            <div className="legacy-search-menu">
              <div style={{display : "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <Button variant="contained" color="primary" onClick={() => {
                  this.state.resultsListOpen = true
                  this.state.resultsMenuOpen = false
                  this.forceUpdate()
                }}
                  className="btn-ghost btn-icon"
                  style={{marginLeft: "1rem"}}>
                  <ArrowBackIcon />
                  All results
                </Button>
              </div>
              <div style={{display : "flex", justifyContent: "center", alignItems: "center", color: "#666"}} className="MuiTypography-caption">
                <span style={{paddingRight : "0.6rem", borderRight: "1px solid #dbdbdb"}}>
                  Image {this.state.currentCanvasIndex}
                </span>
                <span style={{marginLeft: "0.5rem"}}>
                  Result {this.state.currentResultIndex+1} of {this.state.results.length}
                </span>
              </div>
              <div style={{display : "flex", justifyContent: "flex-end", alignItems: "center"}}>
                <Button disabled={this.state.currentResultIndex === 0} variant="contained" className="btn-ghost" onClick={() => {
                  if(this.state.currentResultIndex > 0) {
                    this.state.currentResultIndex -= 1
                    this.state.currentCanvasIndex = this.state.results[this.state.currentResultIndex]-1
                    setCanvas(canvases[this.state.currentCanvasIndex].id)
                    this.forceUpdate()
                  }
                }}>
                  previous result
                </Button>
                <Button disabled={this.state.currentResultIndex === this.state.results.length-1} variant="contained" className="btn-ghost" onClick={() => {
                  if(this.state.currentResultIndex < this.state.results.length-1) {
                    this.state.currentResultIndex += 1
                    this.state.currentCanvasIndex = this.state.results[this.state.currentResultIndex]-1
                    setCanvas(canvases[this.state.currentCanvasIndex].id)
                    this.forceUpdate()
                  }
                }}>
                  next result
                </Button>
              </div>
            </div> 
            : ""
          }
        </div>

        
      </div>
    )
  }
}

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
  target: 'WindowTopBarPluginArea',
  mapStateToProps,
  mapDispatchToProps
};

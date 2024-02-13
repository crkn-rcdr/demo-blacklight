import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';

class FullResDownload extends Component {
  downloadAndCloseMenu() {
    const { handleClose } = this.props;
    handleClose();
  }

  render() {
    return (
      <React.Fragment>
        <MenuItem onClick={() => this.downloadAndCloseMenu()}>
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
            Download Image in Full Resolution
          </ListItemText>
        </MenuItem>
      </React.Fragment>
    );
  }
}

FullResDownload.propTypes = {
  handleClose: PropTypes.func
};

FullResDownload.defaultProps = {
  handleClose: () => {}
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  name: 'FullResDownloadPlugin',
  component: FullResDownload
};



//fetch(manifest).then((response) => {
//response.json().then(result => {

//
/*const data = {
manifest,
canvasIndex
}*/
/*function setCanvas(pageNum) {
// Construct URLSearchParams object instance from current URL querystring.
var queryParams = new URLSearchParams(window.location.search)
console.log(pageNum, queryParams.get("pageNum"))
console.log(typeof pageNum, typeof queryParams.get("pageNum"))
if(pageNum === queryParams.get("pageNum")) return

console.log("updating...")

queryParams.set("pageNum", pageNum)
history.pushState(null, null, "?"+queryParams.toString())

let newCanvasIndex = pageNum-1

// TODO: think about better way to do this
console.log(result)
let canvasImageUrl = result["items"][newCanvasIndex]["items"][0]["items"][0]["body"]["id"]
console.log(canvasImageUrl)

let pvFullImageLink = document.getElementById("pvFullImage")
pvFullImageLink.setAttribute("href", canvasImageUrl)

let pvFullImageDownloadButton = document.getElementById("pvFullImageDownload")
pvFullImageDownloadButton.setAttribute("data-download", documentId + "." + pageNum + ".jpg")
pvFullImageDownloadButton.setAttribute("data-href", canvasImageUrl)

let pvDownloadSingleLink = document.getElementById("pvDownloadSingle")
pvDownloadSingleLink.setAttribute("download", documentId + "." + pageNum + ".pdf")
pvDownloadSingleLink.setAttribute("href", "/access-files/69429/"+documentId+"."+pageNum+".pdf")
}*/

//})
//})   
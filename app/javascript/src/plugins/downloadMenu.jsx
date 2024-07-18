import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVertSharp';
import { PluginHook } from 'mirador/dist/es/src/components/PluginHook';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import DownloadIcon from '@material-ui/icons/VerticalAlignBottomSharp';

export class DownloadWindowTopBarPluginMenu extends Component {
  downloadFile(url, filename) {
    fetch(url, {
        method: 'GET'
    })
    .then(response => response.blob())
    .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
        a.click();    
        a.remove();  //afterwards we remove the element again         
    });
  }

  downloadSingleImage() {
    const { canvasIndex, manifestId, canvas } = this.props;
    console.log("c", canvas)
    console.log("m", manifestId)
    let page = canvasIndex + 1
    this.downloadFile(canvas.__jsonld.items[0].items[0].body.id, "oocihm.84056."+page+".jpg") 
  }

  downloadSinglePdf() {
    const { handleClose, canvasIndex, manifestId } = this.props
    const pathname = new URL(manifestId).pathname
    const parts = pathname.split('/')
    const id = parts[parts.length - 2]
    console.log("/dl/" + id)
    fetch("/dl/" + id, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(data => {
      let page = canvasIndex + 1
      console.log("data", data)
      if(data["canvasDownloadUris"]?.length) {
        this.downloadFile(data["canvasDownloadUris"][canvasIndex], id + "." +page+".pdf") 
      } else {
        alert("error")
      } 
    })
  }

  downloadFullPDF() {
    const { handleClose, manifestId } = this.props
    const pathname = new URL(manifestId).pathname
    const parts = pathname.split('/')
    const id = parts[parts.length - 2]
    console.log("/dl/" + id)
    fetch("/dl/" + id, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then(data => {
      if(data["docPdfUri"]?.length) {
        this.downloadFile(data["docPdfUri"], id + ".pdf") 
      } else {
        alert("error downloading full pdf")
      } 
    })
  }

  /**
   * render component
   */
  render() {
    const { PluginComponents, windowId } = this.props
    const windowPluginMenuId = `window-plugin-menu_${windowId}`;
    if (!PluginComponents || PluginComponents.length === 0) return null;
    return (
      <>
<ul class="mv-menu-nav nav" aria-label="Item navigation buttons">
  <li class="nav-item">
    <a 
    class="nav-link MuiButtonBase-root MuiIconButton-root mirador-first-canvas-button btn btn-outline" 
    tabindex="0">
      <button id="downloads-button" 
              type="button" 
              tabIndex="0"
              class="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementBottom" 
              data-bs-toggle="modal" 
              data-bs-target="#downloadsModal">
        <DownloadIcon />
        <span>Download</span>
      </button>
    </a>
  </li>
</ul>

<div class="modal fade" id="downloadsModal" tabindex="-1" aria-labelledby="downloadsModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="downloadsModalLabel">Download Options</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id={windowPluginMenuId}>
        <ul class="mv-menu-nav nav" aria-label="Item navigation buttons">
          <li class="nav-item">
            <a class="nav-link" tabindex="0"
            onKeyDown={ (e) => {
              console.log("keydown", e)
              if (e.key === 'Enter' ) {
                console.log("is enter")
                this.downloadSingleImage()
              }
            }}>
              <MenuItem 
                onClick={() => this.downloadSingleImage()}>
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                  Current image in full resolution
                </ListItemText>
              </MenuItem>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" tabindex="0"
            onKeyDown={ (e) => {
              console.log("keydown", e)
              if (e.key === 'Enter' ) {
                console.log("is enter")
                this.downloadSinglePdf()
              }
            }}>
              <MenuItem onClick={() => this.downloadSinglePdf()}>
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                  Current image as a searchable PDF
                </ListItemText>
              </MenuItem>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" tabindex="0"
            onKeyDown={ (e) => {
              console.log("keydown", e)
              if (e.key === 'Enter' ) {
                console.log("is enter")
                this.downloadFullPDF()
              }
            }}>
              <MenuItem onClick={() => this.downloadFullPDF()}>
                <ListItemIcon>
                  <DownloadIcon />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
                  All images as a searchable PDF
                </ListItemText>
              </MenuItem>
            </a>
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
}

DownloadWindowTopBarPluginMenu.propTypes = {
  container: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  menuIcon: PropTypes.element,
  open: PropTypes.bool,
  PluginComponents: PropTypes.arrayOf(
    PropTypes.node,
  ),
  t: PropTypes.func.isRequired,
  windowId: PropTypes.string.isRequired,
  canvasIndex: PropTypes.number,
  canvas: PropTypes.object,
  manifestId: PropTypes.string
};

DownloadWindowTopBarPluginMenu.defaultProps = {
  container: null,
  menuIcon: <MoreVertIcon />,
  open: false,
  PluginComponents: [],
};

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'wrap',
  component: DownloadWindowTopBarPluginMenu
};

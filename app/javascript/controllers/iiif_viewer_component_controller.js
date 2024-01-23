import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    let searchInput = document.getElementById("pvSearch");
    let resetButton = document.getElementById("pvSearchReset");
    resetButton.addEventListener("click", ()=>{
      searchInput.value = '';
      // Construct URLSearchParams object instance from current URL querystring.
      var queryParams = new URLSearchParams(window.location.search);
      queryParams.set("pageNum", pageNum);
      if(queryParams.has("q")) queryParams.delete("q");
      history.pushState(null, null, "?"+queryParams.toString());
    });
    searchInput.addEventListener("keydown", () =>{
      if(searchInput.value === "") resetButton.style.display ="none";
      else resetButton.style.display ="inherit";
    });



    const documentId = this.element.getAttribute("data-docid")
    let canvasIndex = 0
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) canvasIndex = parseInt(params.get("pageNum")-1)


    let manifest = "https://www.canadiana.ca/iiif/"+documentId+"/manifest"
    
    //https://github.com/ProjectMirador/mirador/blob/master/src/config/settings.js
    let mconfig = {

      id: 'page-viewer', // id selector where Mirador should be instantiated
      //selectedTheme: 'dark', // dark also available
      

      canvasNavigation: {

        // Set the height and width of canvas thumbnails in the  CanvasNavigation companion window

        height: 50,

        width: 50

      },

      selectedTheme: "light", // dark also available

      themes: {

        dark: {

          palette: {

            type: "dark",

            primary: {

              main: "#4db6ac"

            },

            secondary: {

              main: "#4db6ac"

            },

            shades: {

              dark: "#000000",

              main: "#424242",

              light: "#616161"

            }

          }

        },

        light: {

          palette: {

            type: "light"

          }

        }

      },

      theme: {

        // Sets up a MaterialUI theme. See https://material-ui.com/customization/default-theme/

        palette: {

          type: "light",

          primary: {

            main: "#155e66" // Controls the color of the Add button and current window indicator

          },

          secondary: {

            main: "#155e66" // Controls the color of Selects and FormControls

          },

          shades: {

            // Shades that can be used to offset color areas of the Workspace / Window

            dark: "#eeeeee",

            main: "#ffffff",

            light: "#f5f5f5"

          },

          error: {

            main: "#b00020"

          },

          notification: {

            // Color used in MUI Badge dots

            main: "#ffa224"

          },

          hitCounter: {

            default: "#bdbdbd"

          },

          highlights: {

            primary: "#ffff00",

            secondary: "#00BFFF"

          },

          section_divider: "rgba(0, 0, 0, 0.25)",

          annotations: {

            hidden: { globalAlpha: 0 },

            default: { strokeStyle: "#00BFFF", globalAlpha: 1 },

            hovered: { strokeStyle: "#BF00FF", globalAlpha: 1 },

            selected: { strokeStyle: "#ffff00", globalAlpha: 1 }

          },

          search: {

            default: { fillStyle: "#00BFFF", globalAlpha: 0.3 },

            hovered: { fillStyle: "#00FFFF", globalAlpha: 0.3 },

            selected: { fillStyle: "#ffff00", globalAlpha: 0.3 }

          }

        },

        typography: {

          body1: {

            fontSize: "1rem",

            letterSpacing: "0em",

            lineHeight: "1.6em"

          },

          body2: {

            fontSize: "0.878rem",

            letterSpacing: "0.015em",

            lineHeight: "1.6em"

          },

          button: {

            fontSize: "0.878rem",

            letterSpacing: "0.09em",

            lineHeight: "2.25rem",

            textTransform: "uppercase"

          },

          caption: {

            fontSize: "0.772rem",

            letterSpacing: "0.033em",

            lineHeight: "1.6rem"

          },

          body1Next: {

            fontSize: "1rem",

            letterSpacing: "0em",

            lineHeight: "1.6em"

          },

          body2Next: {

            fontSize: "0.878rem",

            letterSpacing: "0.015em",

            lineHeight: "1.6em"

          },

          buttonNext: {

            fontSize: "0.878rem",

            letterSpacing: "0.09em",

            lineHeight: "2.25rem"

          },

          captionNext: {

            fontSize: "0.772rem",

            letterSpacing: "0.33em",

            lineHeight: "1.6rem"

          },

          overline: {

            fontSize: "0.678rem",

            fontWeight: 500,

            letterSpacing: "0.166em",

            lineHeight: "2em",

            textTransform: "uppercase"

          },

          h1: {

            fontSize: "2.822rem",

            letterSpacing: "-0.015em",

            lineHeight: "1.2em"

          },

          h2: {

            fontSize: "1.575rem",

            letterSpacing: "0em",

            lineHeight: "1.33em"

          },

          h3: {

            fontSize: "1.383rem",

            fontWeight: 300,

            letterSpacing: "0em",

            lineHeight: "1.33em"

          },

          h4: {

            fontSize: "1rem",

            letterSpacing: "0.007em",

            lineHeight: "1.45em"

          },

          h5: {

            fontSize: "1rem",

            letterSpacing: "0.005em",

            lineHeight: "1.55em"

          },

          h6: {

            fontSize: "1rem",

            fontWeight: 400,

            letterSpacing: "0.01em",

            lineHeight: "1.6em"

          },

          subtitle1: {

            fontSize: "0.937rem",

            letterSpacing: "0.015em",

            lineHeight: "1.6em",

            fontWeight: 300

          },

          subtitle2: {

            fontSize: "0.878rem",

            fontWeight: 500,

            letterSpacing: "0.02em",

            lineHeight: "1.75em"

          },

          useNextVariants: true // set so that console deprecation warning is removed

        },

        overrides: {

          MuiListSubheader: {

            root: {

              '&[role="presentation"]:focus': {

                outline: 0

              }

            }

          },

          MuiTooltip: {

            // Overridden from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tooltip/Tooltip.js#L40-L70

            tooltipPlacementLeft: {

              ["@media (min-width:600px)"]: {

                margin: 0

              }

            },

            tooltipPlacementRight: {

              ["@media (min-width:600px)"]: {

                margin: 0

              }

            },

            tooltipPlacementTop: {

              ["@media (min-width:600px)"]: {

                margin: 0

              }

            },

            tooltipPlacementBottom: {

              ["@media (min-width:600px)"]: {

                margin: 0

              }

            }

          },

          MuiTouchRipple: {

            childPulsate: {

              animation: "none"

            },

            rippleVisible: {

              animation: "none"

            }

          }

        },

        props: {

          MuiButtonBase: {

            disableTouchRipple: true

          },

          MuiLink: {

            underline: "always"

          }

        }

      },

      language: "en", // The default language set in the application

      availableLanguages: {

        // All the languages available in the language switcher

        ar: "العربية",

        de: "Deutsch",

        en: "English",

        fa: "فارسی",

        fr: "Français",

        ja: "日本語",

        kr: "한국어",

        lt: "Lietuvių",

        nl: "Nederlands",

        "nb-NO": "Norwegian Bokmål",

        pl: "Polski",

        "pt-BR": "Português do Brasil",

        vi: "Tiếng Việt",

        "zh-CN": "中文(简体)",

        "zh-TW": "中文(繁體)",

        it: "Italiano",

        sr: "Српски",

        sv: "Svenska",

        bg: "Български"

      },

      annotations: {

        htmlSanitizationRuleSet: "iiif", // See src/lib/htmlRules.js for acceptable values

        filteredMotivations: [

          "oa:commenting",

          "oa:tagging",

          "sc:painting",

          "commenting",

          "tagging"

        ]

      },

      createGenerateClassNameOptions: {

        // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator

        productionPrefix: "mirador"

      },

      requests: {

        preprocessors: [

          // Functions that receive HTTP requests and manipulate them (e.g. to add headers)

          // (url, options) => (url.match('info.json') && { ...options, myCustomThing: 'blah' })

        ],

        postprocessors: [

          // Functions that receive HTTP responses and manipulates them before adding to store

          // An example of manipulating the response for an annotation request

          // (url, action) => {

          //   if (action.annotationId) {

          //     action.annotationJson = {};

          //   }

          // }

        ]

      },

      translations: {

        // Translations can be added to inject new languages or override existing labels

      },


      view: "catalogueView",

      window: {

        //global window defaults

        allowClose: false, // Configure if windows can be closed or not

        allowFullscreen: false, // Configure to show a "fullscreen" button in the WindowTopBar

        allowMaximize: false, // Configure if windows can be maximized or not

        allowTopMenuButton: true, // Configure if window view and thumbnail display menu are visible or not

        allowWindowSideBar: true, // Configure if side bar menu is visible or not

        authNewWindowCenter: "parent", // Configure how to center a new window created by the authentication flow. Options: parent, screen

        sideBarPanel: "info", // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search

        defaultSidebarPanelHeight: 201, // Configure default sidebar height in pixels

        defaultSidebarPanelWidth: 235, // Configure default sidebar width in pixels

        defaultView: "single", // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in

        forceDrawAnnotations: false,

        hideWindowTitle: false, // Configure if the window title is shown in the window title bar or not

        highlightAllAnnotations: false, // Configure whether to display annotations on the canvas by default

        showLocalePicker: false, // Configure locale picker for multi-lingual metadata

        sideBarOpen: ( window.innerWidth <= 1000 ) ? false : true, // Configure if the sidebar (and its content panel) is open by default

        switchCanvasOnSearch: true, // Configure if Mirador should automatically switch to the canvas of the first search result

        panels: {

          // Configure which panels are visible in WindowSideBarButtons

          info: true,

          attribution: false,

          canvas: false,

          annotations: false,

          search: false,

          layers: false

        },

        views: [

          { key: "single", behaviors: ["individuals"] },

          { key: "book", behaviors: ["paged"] },

          { key: "scroll", behaviors: ["continuous"] },

          { key: "gallery" }

        ],

        elastic: {

          height: 400,

          width: 480

        }

      },
      
      windows: [{
        manifestId: manifest,
        //view: 'single',
        canvasIndex,
      }],

      thumbnails: {

        preferredFormats: ["jpg", "png", "webp", "tif"]

      },

      thumbnailNavigation: {

        defaultPosition: "off", // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"

        displaySettings: true, // Display the settings for this in WindowTopMenu

        height: 130, // height of entire ThumbnailNavigation area when position is "far-bottom"

        width: 100 // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"

      },

      
      workspace: {

        draggingEnabled: false,

        allowNewWindows: true,

        isWorkspaceAddVisible: false, // Catalog/Workspace add window feature visible by default

        exposeModeOn: false, // unused?

        height: 5000, // height of the elastic mode's virtual canvas

        showZoomControls: true, // Configure if zoom controls should be displayed by default

        type: "mosaic", // Which workspace type to load by default. Other possible values are "elastic". If "mosaic" or "elastic" are not selected no worksapce type will be used.

        viewportPosition: {

          // center coordinates for the elastic mode workspace

          x: 0,

          y: 0

        },

        width: 5000 // width of the elastic mode's virtual canvas

      },

      workspaceControlPanel: {

        enabled: false // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests

      },

      galleryView: {

        height: 120, // height of gallery view thumbnails

        width: null // width of gallery view thumbnails (or null, to auto-calculate an aspect-ratio appropriate size)

      },

      osdConfig: {

        // Default config used for OpenSeadragon

        alwaysBlend: false,

        blendTime: 0.1,

        preserveImageSizeOnResize: true,

        preserveViewport: true,

        showNavigationControl: false,

        zoomPerScroll: 1,

        gestureSettingsMouse: {
          scrollToZoom: false
        },

        gestureSettingsTouch : {
          scrollToZoom: false,
          dragToPan: false
        }

      },

      export: {

        catalog: true,

        companionWindows: true,

        config: true,

        elasticLayout: true,

        layers: true,

        // filter out anything re-retrievable:

        manifests: { filter: ([id, value]) => !id.startsWith("http") },

        viewers: true,

        windows: true,

        workspace: true

      },

      audioOptions: {

        // Additional props passed to <audio> element

        controls: true,

        crossOrigin: "anonymous"

      },

      videoOptions: {

        // Additional props passed to <audio> element

        controls: true,

        crossOrigin: "anonymous"

      }

    }


    fetch(manifest).then((response) => {
      response.json().then(result => {
        let miradorInstance = Mirador.viewer(mconfig);
        const data = {
          manifest,
          canvasIndex
        };

        console.log("page is fully loaded");
        var queryParams = new URLSearchParams(window.location.search);
        if(queryParams.has("q") && queryParams.get("q") != "") resetButton.style.display ="inherit";
        else resetButton.style.display ="none";

        function setCanvas(pageNum) {
          // Construct URLSearchParams object instance from current URL querystring.
          var queryParams = new URLSearchParams(window.location.search);
          console.log(pageNum, queryParams.get("pageNum"))
          console.log(typeof pageNum, typeof queryParams.get("pageNum"))
          if(pageNum === queryParams.get("pageNum")) return

          console.log("updating...")

          queryParams.set("pageNum", pageNum);
          history.pushState(null, null, "?"+queryParams.toString());


          let newCanvasIndex = pageNum-1

          // TODO: think about better way to do this
          console.log(result)
          let canvasImageUrl = result["items"][newCanvasIndex]["items"][0]["items"][0]["body"]["id"]
          console.log(canvasImageUrl)

          /*
          id="pvFullImage" 
          href="<%= @canvasImageUrl %>" 
          */
          let pvFullImageLink = document.getElementById("pvFullImage");
          pvFullImageLink.setAttribute("href", canvasImageUrl);


          /*
          id="pvFullImageDownload" 
          data-download="<%= @prefix %>.<%= @documentId %>.<%= @pageNum %>.jpg" 
          data-href="<%= @canvasImageUrl %>"
          */
          let pvFullImageDownloadButton = document.getElementById("pvFullImageDownload");
          pvFullImageDownloadButton.setAttribute("data-download", documentId + "." + pageNum + ".jpg");
          pvFullImageDownloadButton.setAttribute("data-href", canvasImageUrl);

          /*
          id="pvDownloadSingle" 
          download="<%= @prefix %>.<%= @documentId %>.<%= @pageNum %>.pdf"
          href="/access-files/69429/<%= @prefix %>.<%= @documentId %>.<%= @pageNum %>.pdf"
          */
          let pvDownloadSingleLink = document.getElementById("pvDownloadSingle");
          pvDownloadSingleLink.setAttribute("download", documentId + "." + pageNum + ".pdf");
          pvDownloadSingleLink.setAttribute("href", "/access-files/69429/"+documentId+"."+pageNum+".pdf");
        }

        console.log(miradorInstance)
        miradorInstance.store.subscribe(e => {
          let selected = document.getElementsByClassName("Mui-selected")
          for(let elem of selected) {
            if(elem.tagName == "LI") {
              let para = elem.getElementsByTagName("p");
              if(para.length) {
                let pageNum = para[0].innerHTML.replace("Image ", "")
                setCanvas(pageNum)
              }
            }
          }
        })
      })
    })
  }
}

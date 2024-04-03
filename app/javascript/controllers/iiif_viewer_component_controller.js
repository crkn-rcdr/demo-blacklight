import { Controller } from "@hotwired/stimulus"
//import miradorImageToolsPlugin from './node_modules/mirador-image-tools/es/index.js';
//import * as mv from "mirador"
/*
import Mirador from 'mirador/dist/es/src/index.js'
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin.js'
*/
export default class extends Controller {
<<<<<<< HEAD
  initialize() {
    /*let searchInput = document.getElementById("pvSearch");
=======
  initialize() {}
}
   /* console.log(Mirador)
    let searchInput = document.getElementById("pvSearch");
>>>>>>> usability-testing-mirador
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
    });*/

<<<<<<< HEAD
    
    function setViewer(result, data) {
      let viewer = UV.init("page-viewer", data);

        viewer.on(
          "canvasIndexChange",
          function (newCanvasIndex) {
            let pageNum = newCanvasIndex+1

            // Construct URLSearchParams object instance from current URL querystring.
            var queryParams = new URLSearchParams(window.location.search);
            queryParams.set("pageNum", pageNum);
            history.pushState(null, null, "?"+queryParams.toString());

            // TODO: think about better way to do this
            /*console.log(result)
            let canvasImageUrl = result["items"][newCanvasIndex]["items"][0]["items"][0]["body"]["id"]
            console.log(canvasImageUrl)
            let pvFullImageLink = document.getElementById("pvFullImage");
            pvFullImageLink.setAttribute("href", canvasImageUrl);
            let pvFullImageDownloadButton = document.getElementById("pvFullImageDownload");
            pvFullImageDownloadButton.setAttribute("data-download", documentId + "." + pageNum + ".jpg");
            pvFullImageDownloadButton.setAttribute("data-href", canvasImageUrl);
            let pvDownloadSingleLink = document.getElementById("pvDownloadSingle");
            pvDownloadSingleLink.setAttribute("download", documentId + "." + pageNum + ".pdf");
            pvDownloadSingleLink.setAttribute("href", "/access-files/69429/"+documentId+"."+pageNum+".pdf");*/
          },
          false
        );
    
        viewer.on("configure", function({config, cb}) {
          cb(
            new Promise(function (resolve) {
              resolve({
                "options": {
              
                  "allowStealFocus": false,
              
                  "authAPIVersion": 1,
              
                  "bookmarkThumbHeight": 150,
              
                  "booskmarkThumbWidth": 90,
              
                  "dropEnabled": false,
              
                  "footerPanelEnabled": true,
              
                  "headerPanelEnabled": true,
              
                  "leftPanelEnabled": true,
              
                  "limitLocales": false,
              
                  "metrics": [
              
                    {
              
                      "type": "sm",
              
                      "minWidth": 0
              
                    },
              
                    {
              
                      "type": "md",
              
                      "minWidth": 768
              
                    },
              
                    {
              
                      "type": "lg",
              
                      "minWidth": 1024
              
                    },
              
                    {
              
                      "type": "xl",
              
                      "minWidth": 1280
              
                    }
              
                  ],
              
                  "multiSelectionMimeType": "application/zip",
              
                  "navigatorEnabled": true,
              
                  "openTemplate": "http://universalviewer.io?manifest={0}",
              
                  "overrideFullScreen": false,
              
                  "pagingEnabled": false,
              
                  "pagingOptionEnabled": false,
              
                  "pessimisticAccessControl": false,
              
                  "preserveViewport": true,
              
                  "rightPanelEnabled": false,
              
                  "saveUserSettings": true,
              
                  "clickToZoomEnabled": true,
              
                  "searchWithinEnabled": false,
              
                  "termsOfUseEnabled": true,
              
                  "theme": "uv-en-GB-theme",
              
                  "tokenStorage": "session",
              
                  "useArrowKeysToNavigate": true,
              
                  "zoomToSearchResultEnabled": true,
              
                  "zoomToBoundsEnabled": true
              
                },
              
                "modules": {
              
                  "contentLeftPanel": {
              
                    "options": {
              
                      "autoExpandTreeEnabled": false,
              
                      "autoExpandTreeIfFewerThan": 20,
              
                      "branchNodesExpandOnClick": true,
              
                      "branchNodesSelectable": false,
              
                      "defaultToTreeEnabled": false,
              
                      "defaultToTreeIfGreaterThan": 0,
              
                      "elideCount": 40,
              
                      "expandFullEnabled": true,
              
                      "galleryThumbChunkedResizingThreshold": 400,
              
                      "galleryThumbHeight": 320,
              
                      "galleryThumbLoadPadding": 3,
              
                      "galleryThumbWidth": 200,
              
                      "oneColThumbHeight": 125,
              
                      "oneColThumbWidth": 100,
              
                      "pageModeEnabled": false,
              
                      "panelAnimationDuration": 250,
              
                      "panelCollapsedWidth": 30,
              
                      "panelExpandedWidth": 150,
              
                      "panelOpen": true,
              
                      "tabOrder": "",
              
                      "thumbsCacheInvalidation": {
              
                        "enabled": true,
              
                        "paramType": "?"
              
                      },
              
                      "thumbsEnabled": true,
              
                      "thumbsExtraHeight": 8,
              
                      "thumbsImageFadeInDuration": 300,
              
                      "thumbsLoadRange": 15,
              
                      "treeEnabled": true,
              
                      "twoColThumbHeight": 120,
              
                      "twoColThumbWidth": 90
              
                    },
              
                    "content": {
              
                      "collapse": "Collapse Contents",
              
                      "collapseFull": "Collapse Gallery",
              
                      "date": "date",
              
                      "expand": "Expand Contents",
              
                      "expandFull": "Expand Gallery",
              
                      "index": "Index",
              
                      "manifestRanges": "Manifest Ranges",
              
                      "searchResult": "{0} search result",
              
                      "searchResults": "{0} search results",
              
                      "sortBy": "Sort By:",
              
                      "thumbnails": "Thumbnails",
              
                      "title": "Contents",
              
                      "volume": "volume"
              
                    }
              
                  },
              
                  "dialogue": {
              
                    "topCloseButtonEnabled": false,
              
                    "content": {
              
                      "close": "Close"
              
                    }
              
                  },
              
                  "downloadDialogue": {
              
                    "options": {
              
                      "confinedImageSize": 1000,
              
                      "currentViewDisabledPercentage": 90,
              
                      "maxImageWidth": 5000,
              
                      "optionsExplanatoryTextEnabled": false,
              
                      "selectionEnabled": false
              
                    },
              
                    "content": {
              
                      "currentViewAsJpg": "Current view {0} x {1}px (jpg)",
              
                      "currentViewAsJpgExplanation": "Opens in a new window",
              
                      "download": "Download",
              
                      "downloadSelection": "Download Selection",
              
                      "downloadSelectionExplanation": "Opens a dialogue to select which pages to download.",
              
                      "editSettings": "Edit Settings",
              
                      "entireDocument": "Entire document ({0})",
              
                      "entireFileAsOriginal": "Entire file",
              
                      "noneAvailable": "No download options are available.",
              
                      "pagingNote": "Please turn off Two Page View for additional options.",
              
                      "preview": "Preview",
              
                      "title": "Download",
              
                      "wholeImageHighRes": "Whole image {0} x {1}px ({2})",
              
                      "wholeImageHighResExplanation": "Opens in a new window.",
              
                      "wholeImagesHighRes": "Whole images ({0})",
              
                      "wholeImagesHighResExplanation": "Opens in two new windows.",
              
                      "wholeImageLowResAsJpg": "Whole image {0} x {1}px (jpg)",
              
                      "wholeImageLowResAsJpgExplanation": "Opens in a new window."
              
                    }
              
                  },
              
                  "footerPanel": {
              
                    "options": {
              
                      "autocompleteAllowWords": false,
              
                      "bookmarkEnabled": false,
              
                      "downloadEnabled": false,
              
                      "embedEnabled": false,
              
                      "feedbackEnabled": false,
              
                      "fullscreenEnabled": true,
              
                      "minimiseButtons": true,
              
                      "moreInfoEnabled": false,
              
                      "openEnabled": false,
              
                      "printEnabled": false,
              
                      "shareEnabled": false
              
                    },
              
                    "content": {
              
                      "bookmark": "Add to bookmarks",
              
                      "download": "Download",
              
                      "embed": "Embed",
              
                      "exitFullScreen": "Exit Full Screen",
              
                      "feedback": "Feedback",
              
                      "fullScreen": "Full Screen",
              
                      "moreInfo": "More Information",
              
                      "open": "Open",
              
                      "share": "Share"
              
                    }
              
                  },
              
                  "genericDialogue": {
              
                    "content": {
              
                      "emptyValue": "please enter a value.",
              
                      "invalidNumber": "Please enter a valid number.",
              
                      "noMatches": "No matches were found.",
              
                      "ok": "OK",
              
                      "pageNotFound": "This item does not contain a page with the number you entered. Try switching the numbering mode to 'image'.",
              
                      "refresh": "Refresh"
              
                    }
              
                  },
              
                  "headerPanel": {
              
                    "options": {
              
                      "centerOptionsEnabled": true,
              
                      "localeToggleEnabled": false,
              
                      "settingsButtonEnabled": true
              
                    }
              
                  },
              
                  "helpDialogue": {
              
                    "content": {
              
                      "text": "placeholder text",
              
                      "title": "Help"
              
                    }
              
                  },
              
                  /*"moreInfoRightPanel": {
              
                    "options": {
              
                      "canvasDisplayOrder": "",
              
                      "canvasExclude": "",
              
                      "copyToClipboardEnabled": false,
              
                      "manifestDisplayOrder": "",
              
                      "manifestExclude": "",
              
                      "panelAnimationDuration": 250,
              
                      "panelCollapsedWidth": 30,
              
                      "panelExpandedWidth": 255,
              
                      "panelOpen": false,
              
                      "rtlLanguageCodes": "ar, ara, dv, div, he, heb, ur, urd",
              
                      "showAllLanguages": false,
              
                      "textLimit": 4,
              
                      "textLimitType": "lines"
              
                    },
              
                    "content": {
              
                      "attribution": "Attribution",
              
                      "canvasHeader": "About the image",
              
                      "collapse": "Collapse Information",
              
                      "collapseFull": "Collapse Gallery",
              
                      "copiedToClipboard": "Copied to clipboard",
              
                      "copyToClipboard": "Copy to clipboard",
              
                      "description": "Description",
              
                      "expand": "Expand Information",
              
                      "expandFull": "Expand Gallery",
              
                      "holdingText": "Your module goes here!",
              
                      "less": "less",
              
                      "license": "License",
              
                      "logo": "Logo",
              
                      "manifestHeader": "About the item",
              
                      "more": "more",
              
                      "noData": "No data to display",
              
                      "page": "Page",
              
                      "rangeHeader": "About this section",
              
                      "title": "More Information"
              
                    }
              
                  },*/
              
                  "multiSelectDialogue": {
              
                    "options": {
              
                      "galleryThumbChunkedResizingEnabled": true,
              
                      "galleryThumbChunkedResizingThreshold": 400,
              
                      "galleryThumbHeight": 320,
              
                      "galleryThumbLoadPadding": 3,
              
                      "galleryThumbWidth": 200,
              
                      "pageModeEnabled": true
              
                    },
              
                    "content": {
              
                      "select": "Download",
              
                      "selectAll": "Select All",
              
                      "title": "Select Pages for Download"
              
                    }
              
                  },
              
                  "pagingHeaderPanel": {
              
                    "options": {
              
                      "autoCompleteBoxEnabled": true,
              
                      "autocompleteAllowWords": false,
              
                      "galleryButtonEnabled": true,
              
                      "imageSelectionBoxEnabled": false,
              
                      "pageModeEnabled": false,
              
                      "pagingToggleEnabled": true
              
                    },
              
                    "content": {
              
                      "close": "Close",
              
                      "emptyValue": "Please enter a value",
              
                      "first": "First",
              
                      "firstImage": "First Image",
              
                      "firstPage": "First Page",
              
                      "folio": "Folio",
              
                      "gallery": "Gallery",
              
                      "go": "Go",
              
                      "help": "Help",
              
                      "image": "Image",
              
                      "last": "Last",
              
                      "lastImage": "Last Image",
              
                      "lastPage": "Last Page",
              
                      "next": "Next",
              
                      "nextImage": "Next Image",
              
                      "nextPage": "Next Page",
              
                      "of": "of {0}",
              
                      "oneUp": "Single page view",
              
                      "page": "Page",
              
                      "pageSearchLabel": "Search by Page Number",
              
                      "previous": "Previous",
              
                      "previousImage": "Previous Image",
              
                      "previousPage": "Previous Page",
              
                      "settings": "Settings",
              
                      "twoUp": "Two page view"
              
                    }
              
                  },
              
                  "openSeadragonCenterPanel": {
              
                    "options": {
              
                      "animationTime": 0.15,
              
                      "autoHideControls": true,
              
                      "requiredStatementEnabled": true,
              
                      "blendTime": 0,
              
                      "constrainDuringPan": false,
              
                      "controlsFadeAfterInactive": 1500,
              
                      "controlsFadeDelay": 250,
              
                      "controlsFadeLength": 250,
              
                      "defaultZoomLevel": 0,
              
                      "immediateRender": false,
              
                      "maxZoomPixelRatio": 1.25,
              
                      "navigatorPosition": "BOTTOM_RIGHT",
              
                      "pageGap": 50,
              
                      "showHomeControl": false,
              
                      "trimAttributionCount": 150,
              
                      "visibilityRatio": 0.5
              
                    },
              
                    "content": {
              
                      "attribution": "Attribution",
              
                      "goHome": "Go Home",
              
                      "imageUnavailable": "Image Unavailable",
              
                      "next": "Next",
              
                      "previous": "Previous",
              
                      "rotateRight": "Rotate Right",
              
                      "zoomIn": "Zoom In",
              
                      "zoomOut": "Zoom Out"
              
                    }
              
                  },
              
                  "searchFooterPanel": {
              
                    "options": {
              
                      "elideDetailsTermsCount": 20,
              
                      "elideResultsTermsCount": 10,
              
                      "forceImageMode": false,
              
                      "pageModeEnabled": true,
              
                      "positionMarkerEnabled": true
              
                    },
              
                    "content": {
              
                      "clearSearch": "Clear",
              
                      "defaultLabel": "-",
              
                      "displaying": "{0} {1} of {2}",
              
                      "enterKeyword": "Enter Keyword",
              
                      "image": "image",
              
                      "imageCaps": "Image",
              
                      "instanceFound": "1 instance of '{0}' found",
              
                      "instancesFound": "{0} instances of '{1}' found",
              
                      "nextResult": "Next Result",
              
                      "page": "page",
              
                      "pageCaps": "Page",
              
                      "previousResult": "Previous Result",
              
                      "print": "Print",
              
                      "resultFoundFor": "result found for",
              
                      "resultsFoundFor": "results found for",
              
                      "searchWithin": "Search within this item:"
              
                    }
              
                  },
              
                  "settingsDialogue": {
              
                    "content": {
              
                      "locale": "Locale",
              
                      "navigatorEnabled": "Navigator Enabled",
              
                      "clickToZoomEnabled": "Mouse Click To Zoom",
              
                      "pagingEnabled": "Two Page View",
              
                      "reducedMotion": "Reduce motion (disables animations)",
              
                      "preserveViewport": "Preserve Zoom",
              
                      "title": "Settings",
              
                      "website": "<a href='https://github.com/universalviewer/universalviewer#contributors'>more info</a>"
              
                    }
              
                  },
              
                  "shareDialogue": {
              
                    "options": {
              
                      "embedTemplate": "<iframe src=\"{0}\" width=\"{1}\" height=\"{2}\" allowfullscreen frameborder=\"0\"></iframe>",
              
                      "instructionsEnabled": false,
              
                      "shareFrameEnabled": true,
              
                      "shareManifestsEnabled": true
              
                    },
              
                    "content": {
              
                      "customSize": "custom",
              
                      "embed": "Embed",
              
                      "embedInstructions": "To embed this item in your own website, copy and paste the code below.",
              
                      "height": "Height",
              
                      "iiif": "IIIF Manifest",
              
                      "share": "Share",
              
                      "shareInstructions": "To share this item, copy the URL below.",
              
                      "size": "Size:",
              
                      "width": "Width"
              
                    }
              
                  },
              
                  "authDialogue": {
              
                    "content": {
              
                      "cancel": "Cancel",
              
                      "confirm": "Confirm"
              
                    }
              
                  },
              
                  "clickThroughDialogue": {
              
                    "content": {
              
                      "viewTerms": "Read Full Terms and Conditions"
              
                    }
              
                  },
              
                  "loginDialogue": {
              
                    "content": {
              
                      "login": "Login",
              
                      "logout": "Logout",
              
                      "cancel": "Cancel"
              
                    }
              
                  },
              
                  "mobileFooterPanel": {
              
                    "content": {
              
                      "rotateRight": "Rotate Right",
              
                      "moreInfo": "More Information",
              
                      "zoomIn": "Zoom In",
              
                      "zoomOut": "Zoom Out"
              
                    }
              
                  },
              
                  "restrictedDialogue": {
              
                    "content": {
              
                      "cancel": "Cancel"
              
                    }
              
                  }
              
                },
              
                "localisation": {
              
                  "label": "English (GB)",
              
                  "locales": [
              
                    {
              
                      "name": "cy-GB",
              
                      "label": "Cymraeg"
              
                    },
              
                    {
              
                      "name": "en-GB",
              
                      "label": "English (GB)"
              
                    },
              
                    {
              
                      "name": "fr-FR",
              
                      "label": "Français (FR)"
              
                    },
              
                    {
              
                      "name": "pl-PL",
              
                      "label": "Polski"
              
                    },
              
                    {
              
                      "name": "sv-SE",
              
                      "label": "Svenska"
              
                    }
              
                  ]
              
                },
              
                "content": {
              
                  "authCORSError": "Your browser does not support CORS, please upgrade to view this content.",
              
                  "authorisationFailedMessage": "Your log-in attempt did not appear to be successful. Please try again.",
              
                  "canvasIndexOutOfRange": "Canvas index out of range.",
              
                  "fallbackDegradedLabel": "Login",
              
                  "fallbackDegradedMessage": "Please log in to view this content at full resolution.",
              
                  "forbiddenResourceMessage": "Your current access rights are insufficient to view this image",
              
                  "mediaViewer": "Media Viewer",
              
                  "skipToDownload": "Skip to downloads and alternative formats",
              
                  "termsOfUse": "Terms of Use"
              
                }
              })
            })
          )}
        )
    }



    const documentId = this.element.getAttribute("data-docid")
    let canvasIndex = 0
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) canvasIndex = parseInt(params.get("pageNum")-1)
    //https://codesandbox.io/s/uv-config-example-7kh4s?file=/uv-config.json
    let manifest = "https://www.canadiana.ca/iiif/"+documentId+"/manifest"

    fetch(manifest).then((response) => {
      response.json().then(result => {
        console.log("page is fully loaded");
        var queryParams = new URLSearchParams(window.location.search);
        /*if(queryParams.has("q") && queryParams.get("q") != "") resetButton.style.display ="inherit";
        else resetButton.style.display ="none";*/

        setViewer(result, {
          manifest,
          canvasIndex
        });

        // Update page without reload
        /*let goToCanvasButtons = document.getElementsByClassName("pv-go-to-index");
        for(let button of goToCanvasButtons) {
          button.addEventListener("click", (e) => {
            let index = parseInt(e.target.innerHTML.replace(",", ""))-1
            setViewer(result, {
              manifest,
              canvasIndex: index
            });
          })
        }*/
      });
    });
=======


    const documentId = this.element.getAttribute("data-docid")
    let canvasIndex = 0
    const params = new URLSearchParams(window.location.search)
    if(params.has("pageNum")) canvasIndex = parseInt(params.get("pageNum")-1)


    let manifest = "https://www.canadiana.ca/iiif/"+documentId+"/manifest"
    
    let mplugins = [
      ...miradorImageToolsPlugin
    ]

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
        en: { 
          "currentItem": "Current image",
          "currentItem_1/1": "Current image",
          "resource": "Item Title",
        }

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

        gestureSettingsTouch: {
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
        let miradorInstance = Mirador.viewer(mconfig, mplugins);
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

          let pvFullImageLink = document.getElementById("pvFullImage");
          pvFullImageLink.setAttribute("href", canvasImageUrl);


          let pvFullImageDownloadButton = document.getElementById("pvFullImageDownload");
          pvFullImageDownloadButton.setAttribute("data-download", documentId + "." + pageNum + ".jpg");
          pvFullImageDownloadButton.setAttribute("data-href", canvasImageUrl);

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
>>>>>>> usability-testing-mirador
  }
}*/

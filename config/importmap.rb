# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@github/auto-complete-element", to: "https://cdn.skypack.dev/@github/auto-complete-element"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.6/dist/umd/popper.min.js"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.3.0/dist/js/bootstrap.js"
pin "jquery", to: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js"
pin "htm", to: "https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.js"
pin "react" # @18.2.0
pin "react-dom" # @18.2.0
pin '@material-ui/icon', to: 'https://cdn.jsdelivr.net/npm/@material-ui/icons@4.11.3/+esm'
pin "@material-ui/core", to: "@material-ui--core.js" # @4.12.4
pin "@babel/runtime/helpers/esm/assertThisInitialized", to: "@babel--runtime--helpers--esm--assertThisInitialized.js" # @7.23.9
pin "@babel/runtime/helpers/esm/classCallCheck", to: "@babel--runtime--helpers--esm--classCallCheck.js" # @7.23.9
pin "@babel/runtime/helpers/esm/createClass", to: "@babel--runtime--helpers--esm--createClass.js" # @7.23.9
pin "@babel/runtime/helpers/esm/defineProperty", to: "@babel--runtime--helpers--esm--defineProperty.js" # @7.23.9
pin "@babel/runtime/helpers/esm/extends", to: "@babel--runtime--helpers--esm--extends.js" # @7.23.9
pin "@babel/runtime/helpers/esm/getPrototypeOf", to: "@babel--runtime--helpers--esm--getPrototypeOf.js" # @7.23.9
pin "@babel/runtime/helpers/esm/inherits", to: "@babel--runtime--helpers--esm--inherits.js" # @7.23.9
pin "@babel/runtime/helpers/esm/inheritsLoose", to: "@babel--runtime--helpers--esm--inheritsLoose.js" # @7.23.9
pin "@babel/runtime/helpers/esm/objectWithoutProperties", to: "@babel--runtime--helpers--esm--objectWithoutProperties.js" # @7.23.9
pin "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose", to: "@babel--runtime--helpers--esm--objectWithoutPropertiesLoose.js" # @7.23.9
pin "@babel/runtime/helpers/esm/possibleConstructorReturn", to: "@babel--runtime--helpers--esm--possibleConstructorReturn.js" # @7.23.9
pin "@babel/runtime/helpers/esm/slicedToArray", to: "@babel--runtime--helpers--esm--slicedToArray.js" # @7.23.9
pin "@babel/runtime/helpers/esm/toArray", to: "@babel--runtime--helpers--esm--toArray.js" # @7.23.9
pin "@babel/runtime/helpers/esm/toConsumableArray", to: "@babel--runtime--helpers--esm--toConsumableArray.js" # @7.23.9
pin "@babel/runtime/helpers/esm/typeof", to: "@babel--runtime--helpers--esm--typeof.js" # @7.23.9
pin "@material-ui/styles", to: "@material-ui--styles.js" # @4.11.5
pin "@material-ui/system", to: "@material-ui--system.js" # @4.12.2
pin "@material-ui/utils", to: "@material-ui--utils.js" # @4.11.3
pin "clsx" # @1.2.1
pin "css-vendor" # @2.0.8
pin "dom-helpers/addClass", to: "dom-helpers--addClass.js" # @5.2.0
pin "dom-helpers/removeClass", to: "dom-helpers--removeClass.js" # @5.2.0
pin "hoist-non-react-statics" # @3.3.2
pin "hyphenate-style-name" # @1.0.4
pin "is-in-browser" # @1.1.3
pin "jss" # @10.10.0
pin "jss-plugin-camel-case" # @10.10.0
pin "jss-plugin-default-unit" # @10.10.0
pin "jss-plugin-global" # @10.10.0
pin "jss-plugin-nested" # @10.10.0
pin "jss-plugin-props-sort" # @10.10.0
pin "jss-plugin-rule-value-function" # @10.10.0
pin "jss-plugin-vendor-prefixer" # @10.10.0
pin "object-assign" # @4.1.1
pin "popper.js" # @1.16.1
pin "prop-types" # @15.8.1
pin "react-is" # @16.13.1
pin "react-transition-group" # @4.4.5
pin "scheduler" # @0.23.0
pin "tiny-warning" # @1.0.3
pin "deepmerge" # @4.3.1
pin "lodash/compact", to: "lodash--compact.js" # @4.17.21
pin "lodash/filter", to: "lodash--filter.js" # @4.17.21
pin "lodash/flatten", to: "lodash--flatten.js" # @4.17.21
pin "lodash/flattenDeep", to: "lodash--flattenDeep.js" # @4.17.21
pin "lodash/flowRight", to: "lodash--flowRight.js" # @4.17.21
pin "lodash/groupBy", to: "lodash--groupBy.js" # @4.17.21
pin "lodash/union", to: "lodash--union.js" # @4.17.21
pin "lodash/without", to: "lodash--without.js" # @4.17.21
pin "manifesto.js" # @4.2.17
pin "normalize-url" # @8.0.0
pin "re-reselect" # @5.0.0
pin "reselect" # @5.1.0
pin "url" # @2.0.1
pin "uuid" # @8.3.2pin "classnames" # @2.5.1
pin "dompurify" # @3.0.8
pin "i18next" # @23.7.20
pin "icomcom-react" # @1.0.1
pin "intersection-observer" # @0.12.2
pin "lodash" # @4.17.21
pin "openseadragon" # @4.1.0
pin "react-copy-to-clipboard" # @5.1.0
pin "copy-to-clipboard" # @3.3.3
pin "toggle-selection" # @1.0.6
pin "react-dnd" # @16.0.1
pin "@babel/runtime/helpers/esm/objectSpread2", to: "@babel--runtime--helpers--esm--objectSpread2.js" # @7.23.9
pin "@react-dnd/asap", to: "@react-dnd--asap.js" # @5.0.2
pin "@react-dnd/invariant", to: "@react-dnd--invariant.js" # @4.0.2
pin "@react-dnd/shallowequal", to: "@react-dnd--shallowequal.js" # @4.0.2
pin "dnd-core" # @16.0.1
pin "fast-deep-equal" # @3.1.3
pin "react/jsx-runtime", to: "react--jsx-runtime.js" # @18.2.0
pin "redux" # @4.2.1
pin "react-dnd-html5-backend" # @16.0.1
pin "react-dnd-multi-backend" # @8.0.3
pin "dnd-multi-backend" # @8.0.3
pin "react-dnd-preview" # @8.0.3
pin "react-dnd-touch-backend" # @16.0.1
pin "react-full-screen" # @1.1.1
pin "fscreen" # @1.2.0
pin "react-image" # @4.1.0
pin "@babel/runtime/helpers/defineProperty", to: "@babel--runtime--helpers--defineProperty.js" # @7.23.9
pin "@babel/runtime/helpers/objectWithoutPropertiesLoose", to: "@babel--runtime--helpers--objectWithoutPropertiesLoose.js" # @7.23.9
pin "react-redux" # @9.1.0
pin "use-sync-external-store/with-selector.js", to: "use-sync-external-store--with-selector.js.js" # @1.2.0
pin "react-resize-observer" # @1.1.1
pin "react-rnd" # @10.4.1
pin "fast-memoize" # @2.5.2
pin "re-resizable" # @6.9.6
pin "react-draggable" # @4.4.5
pin "react-virtualized-auto-sizer" # @1.0.21
pin "redux-devtools-extension" # @2.13.9
pin "redux-thunk" # @3.1.0
pin "@material-ui/core", to: "https://cdn.jsdelivr.net/npm/@material-ui/core@4.12.4/index.min.js"
pin "@material-ui/lab", to: "https://cdn.jsdelivr.net/npm/@material-ui/lab@4.0.0-alpha.61/index.min.js"
pin "@material-ui/icons", to: "https://cdn.jsdelivr.net/npm/@material-ui/icons@4.11.3/utils/createSvgIcon.min.js"
pin "isomorphic-unfetch", to: "https://cdn.jsdelivr.net/npm/isomorphic-unfetch@4.0.2/browser.min.js"
pin "react-intersection-observer", to: "https://cdn.jsdelivr.net/npm/react-intersection-observer@9.6.0/index.min.js"
pin "jss-rtl", to: "https://cdn.jsdelivr.net/npm/jss-rtl@0.3.0/lib/main.min.js"
pin "react-aria-live", to: "https://cdn.jsdelivr.net/npm/react-aria-live@2.0.5/lib/index.min.js"
pin "react-beautiful-dnd", to: "https://cdn.jsdelivr.net/npm/react-beautiful-dnd@13.1.1/dist/react-beautiful-dnd.min.js"
pin "react-i18next", to: "https://cdn.jsdelivr.net/npm/react-i18next@14.0.1/react-i18next.min.js"
pin "react-mosaic-component", to: "https://cdn.jsdelivr.net/npm/react-mosaic-component@6.1.0/lib/buttons/defaultToolbarControls.min.js"
pin "react-sizeme", to: "https://cdn.jsdelivr.net/npm/react-sizeme@3.0.2/dist/react-sizeme.min.js"
pin "react-window", to: "https://cdn.jsdelivr.net/npm/react-window@1.8.10/dist/index-prod.umd.min.js"
pin "redux-saga", to: "https://cdn.jsdelivr.net/npm/redux-saga@1.3.0/+esm"
pin "reselect", to: "https://cdn.jsdelivr.net/npm/reselect@5.1.0/+esm"
pin "uuid", to: "https://cdn.jsdelivr.net/npm/uuid@9.0.1/dist/index.min.js"
pin "mirador", to: "https://unpkg.com/mirador@latest/dist/mirador.min.js"
pin "mirador-image-tools", to: "https://unpkg.com/mirador-image-tools@0.11.0/es/index.js"
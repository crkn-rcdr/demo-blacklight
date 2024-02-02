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
pin "react" # @16.14.0
pin "react-dom" # @17.0.2
pin "mirador", to: "https://unpkg.com/mirador@latest/dist/mirador.min.js"
pin "@material-ui/core", to: "@material-ui--core.js" # @4.12.4
pin "mirador-image-tools" # @0.11.0
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
pin "scheduler" # @0.20.2
pin "tiny-warning" # @1.0.3
pin "@material-ui/core/Badge", to: "@material-ui--core--Badge.js" # @4.12.4
pin "@material-ui/core/IconButton", to: "@material-ui--core--IconButton.js" # @4.12.4
pin "@material-ui/core/ListItemIcon", to: "@material-ui--core--ListItemIcon.js" # @4.12.4
pin "@material-ui/core/ListItemText", to: "@material-ui--core--ListItemText.js" # @4.12.4
pin "@material-ui/core/MenuItem", to: "@material-ui--core--MenuItem.js" # @4.12.4
pin "@material-ui/core/Slider", to: "@material-ui--core--Slider.js" # @4.12.4
pin "@material-ui/core/Tooltip", to: "@material-ui--core--Tooltip.js" # @4.12.4
pin "@material-ui/core/styles/colorManipulator", to: "@material-ui--core--styles--colorManipulator.js" # @4.12.4
pin "@material-ui/core/styles/withStyles", to: "@material-ui--core--styles--withStyles.js" # @4.12.4
pin "@material-ui/core/styles/withTheme", to: "@material-ui--core--styles--withTheme.js" # @4.12.4
pin "@material-ui/core/utils", to: "@material-ui--core--utils.js" # @4.12.4
pin "@material-ui/core/withWidth", to: "@material-ui--core--withWidth.js" # @4.12.4
pin "@material-ui/icons/Brightness5", to: "@material-ui--icons--Brightness5.js" # @4.11.3
pin "@material-ui/icons/CloseSharp", to: "@material-ui--icons--CloseSharp.js" # @4.11.3
pin "@material-ui/icons/ExposureSharp", to: "@material-ui--icons--ExposureSharp.js" # @4.11.3
pin "@material-ui/icons/Gradient", to: "@material-ui--icons--Gradient.js" # @4.11.3
pin "@material-ui/icons/InvertColors", to: "@material-ui--icons--InvertColors.js" # @4.11.3
pin "@material-ui/icons/ReplaySharp", to: "@material-ui--icons--ReplaySharp.js" # @4.11.3
pin "@material-ui/icons/RotateLeft", to: "@material-ui--icons--RotateLeft.js" # @4.11.3
pin "@material-ui/icons/RotateRight", to: "@material-ui--icons--RotateRight.js" # @4.11.3
pin "@material-ui/icons/SwapHoriz", to: "@material-ui--icons--SwapHoriz.js" # @4.11.3
pin "@material-ui/icons/Tonality", to: "@material-ui--icons--Tonality.js" # @4.11.3
pin "@material-ui/icons/TuneSharp", to: "@material-ui--icons--TuneSharp.js" # @4.11.3
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
pin "mirador/dist/es/src/components/MiradorMenuButton", to: "mirador--dist--es--src--components--MiradorMenuButton.js" # @3.3.0
pin "mirador/dist/es/src/state/actions", to: "mirador--dist--es--src--state--actions.js" # @3.3.0
pin "mirador/dist/es/src/state/selectors", to: "mirador--dist--es--src--state--selectors.js" # @3.3.0
pin "normalize-url" # @4.5.1
pin "re-reselect" # @4.0.1
pin "reselect" # @4.1.8
pin "url" # @2.0.1
pin "uuid" # @8.3.2
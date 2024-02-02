import r from"is-in-browser";import e from"@babel/runtime/helpers/esm/toConsumableArray";var t="";var n="";var o="";var s="";var i=r&&"ontouchstart"in document.documentElement;if(r){var p={Moz:"-moz-",ms:"-ms-",O:"-o-",Webkit:"-webkit-"};var a=document.createElement("p"),u=a.style;var l="Transform";for(var f in p)if(f+l in u){t=f;n=p[f];break}if("Webkit"===t&&"msHyphens"in u){t="ms";n=p.ms;s="edge"}"Webkit"===t&&"-apple-trailing-word"in u&&(o="apple")}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */var c={js:t,css:n,vendor:o,browser:s,isTouch:i};
/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */function supportedKeyframes(r){return"-"===r[1]||"ms"===c.js?r:"@"+c.css+"keyframes"+r.substr(10)}var d={noPrefill:["appearance"],supportedProperty:function supportedProperty(r){return"appearance"===r&&("ms"===c.js?"-webkit-"+r:c.css+r)}};var v={noPrefill:["color-adjust"],supportedProperty:function supportedProperty(r){return"color-adjust"===r&&("Webkit"===c.js?c.css+"print-"+r:r)}};var y=/[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */function toUpper(r,e){return e?e.toUpperCase():""}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function camelize(r){return r.replace(y,toUpper)}
/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */function pascalize(r){return camelize("-"+r)}var m={noPrefill:["mask"],supportedProperty:function supportedProperty(r,e){if(!/^mask/.test(r))return false;if("Webkit"===c.js){var t="mask-image";if(camelize(t)in e)return r;if(c.js+pascalize(t)in e)return c.css+r}return r}};var P={noPrefill:["text-orientation"],supportedProperty:function supportedProperty(r){return"text-orientation"===r&&("apple"!==c.vendor||c.isTouch?r:c.css+r)}};var b={noPrefill:["transform"],supportedProperty:function supportedProperty(r,e,t){return"transform"===r&&(t.transform?r:c.css+r)}};var x={noPrefill:["transition"],supportedProperty:function supportedProperty(r,e,t){return"transition"===r&&(t.transition?r:c.css+r)}};var k={noPrefill:["writing-mode"],supportedProperty:function supportedProperty(r){return"writing-mode"===r&&("Webkit"===c.js||"ms"===c.js&&"edge"!==c.browser?c.css+r:r)}};var g={noPrefill:["user-select"],supportedProperty:function supportedProperty(r){return"user-select"===r&&("Moz"===c.js||"ms"===c.js||"apple"===c.vendor?c.css+r:r)}};var j={supportedProperty:function supportedProperty(r,e){if(!/^break-/.test(r))return false;if("Webkit"===c.js){var t="WebkitColumn"+pascalize(r);return t in e&&c.css+"column-"+r}if("Moz"===c.js){var n="page"+pascalize(r);return n in e&&"page-"+r}return false}};var z={supportedProperty:function supportedProperty(r,e){if(!/^(border|margin|padding)-inline/.test(r))return false;if("Moz"===c.js)return r;var t=r.replace("-inline","");return c.js+pascalize(t)in e&&c.css+t}};var w={supportedProperty:function supportedProperty(r,e){return camelize(r)in e&&r}};var h={supportedProperty:function supportedProperty(r,e){var t=pascalize(r);return"-"===r[0]||"-"===r[0]&&"-"===r[1]?r:c.js+t in e?c.css+r:"Webkit"!==c.js&&"Webkit"+t in e&&"-webkit-"+r}};var E={supportedProperty:function supportedProperty(r){return"scroll-snap"===r.substring(0,11)&&("ms"===c.js?""+c.css+r:r)}};var W={supportedProperty:function supportedProperty(r){return"overscroll-behavior"===r&&("ms"===c.js?c.css+"scroll-chaining":r)}};var N={"flex-grow":"flex-positive","flex-shrink":"flex-negative","flex-basis":"flex-preferred-size","justify-content":"flex-pack",order:"flex-order","align-items":"flex-align","align-content":"flex-line-pack"};var C={supportedProperty:function supportedProperty(r,e){var t=N[r];return!!t&&(c.js+pascalize(t)in e&&c.css+t)}};var O={flex:"box-flex","flex-grow":"box-flex","flex-direction":["box-orient","box-direction"],order:"box-ordinal-group","align-items":"box-align","flex-flow":["box-orient","box-direction"],"justify-content":"box-pack"};var T=Object.keys(O);var M=function prefixCss(r){return c.css+r};var V={supportedProperty:function supportedProperty(r,e,t){var n=t.multiple;if(T.indexOf(r)>-1){var o=O[r];if(!Array.isArray(o))return c.js+pascalize(o)in e&&c.css+o;if(!n)return false;for(var s=0;s<o.length;s++)if(!(c.js+pascalize(o[0])in e))return false;return o.map(M)}return false}};var A=[d,v,m,P,b,x,k,g,j,z,w,h,E,W,C,V];var U=A.filter((function(r){return r.supportedProperty})).map((function(r){return r.supportedProperty}));var D=A.filter((function(r){return r.noPrefill})).reduce((function(r,t){r.push.apply(r,e(t.noPrefill));return r}),[]);var K;var _={};if(r){K=document.createElement("p");var H=window.getComputedStyle(document.documentElement,"");for(var I in H)isNaN(I)||(_[H[I]]=H[I]);D.forEach((function(r){return delete _[r]}))}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */function supportedProperty(r,e){void 0===e&&(e={});if(!K)return r;if("benchmark"!==process.env.NODE_ENV&&null!=_[r])return _[r];"transition"!==r&&"transform"!==r||(e[r]=r in K.style);for(var t=0;t<U.length;t++){_[r]=U[t](r,K.style,e);if(_[r])break}try{K.style[r]=""}catch(r){return false}return _[r]}var S={};var q={transition:1,"transition-property":1,"-webkit-transition":1,"-webkit-transition-property":1};var B=/(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;var F;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */function prefixTransitionCallback(r,e,t){if("var"===e)return"var";if("all"===e)return"all";if("all"===t)return", all";var n=e?supportedProperty(e):", "+supportedProperty(t);return n||(e||t)}r&&(F=document.createElement("p"))
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */;function supportedValue(r,e){var t=e;if(!F||"content"===r)return e;if("string"!==typeof t||!isNaN(parseInt(t,10)))return t;var n=r+t;if("benchmark"!==process.env.NODE_ENV&&null!=S[n])return S[n];try{F.style[r]=t}catch(r){S[n]=false;return false}if(q[r])t=t.replace(B,prefixTransitionCallback);else if(""===F.style[r]){t=c.css+t;"-ms-flex"===t&&(F.style[r]="-ms-flexbox");F.style[r]=t;if(""===F.style[r]){S[n]=false;return false}}F.style[r]="";S[n]=t;return S[n]}export{c as prefix,supportedKeyframes,supportedProperty,supportedValue};


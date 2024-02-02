var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;(function(){if("object"===typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return(this||t).intersectionRatio>0}});else{var e=function(t){var e=t;var n=getFrameElement(e);while(n){e=n.ownerDocument;n=getFrameElement(e)}return e}(window.document);var n=[];
/**
   * The signal updater for cross-origin intersection. When not null, it means
   * that the polyfill is configured to work in a cross-origin mode.
   * @type {function(DOMRect|ClientRect, DOMRect|ClientRect)}
   */var r=null;
/**
   * The current cross-origin intersection. Only used in the cross-origin mode.
   * @type {DOMRect|ClientRect}
   */var o=null;
/**
   * Creates the global IntersectionObserverEntry constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
   * @param {Object} entry A dictionary of instance properties.
   * @constructor
   */IntersectionObserver.prototype.THROTTLE_TIMEOUT=100;IntersectionObserver.prototype.POLL_INTERVAL=null;IntersectionObserver.prototype.USE_MUTATION_OBSERVER=true;IntersectionObserver._setupCrossOriginUpdater=function(){r||(
/**
       * @param {DOMRect|ClientRect} boundingClientRect
       * @param {DOMRect|ClientRect} intersectionRect
       */
r=function(t,e){o=t&&e?convertFromParentRect(t,e):getEmptyRect();n.forEach((function(t){t._checkForIntersections()}))});return r};IntersectionObserver._resetCrossOriginUpdater=function(){r=null;o=null};
/**
   * Starts observing a target element for intersection changes based on
   * the thresholds values.
   * @param {Element} target The DOM element to observe.
   */IntersectionObserver.prototype.observe=function(e){var n=(this||t)._observationTargets.some((function(t){return t.element==e}));if(!n){if(!(e&&1==e.nodeType))throw new Error("target must be an Element");this._registerInstance();(this||t)._observationTargets.push({element:e,entry:null});this._monitorIntersections(e.ownerDocument);this._checkForIntersections()}};
/**
   * Stops observing a target element for intersection changes.
   * @param {Element} target The DOM element to observe.
   */IntersectionObserver.prototype.unobserve=function(e){(this||t)._observationTargets=(this||t)._observationTargets.filter((function(t){return t.element!=e}));this._unmonitorIntersections(e.ownerDocument);0==(this||t)._observationTargets.length&&this._unregisterInstance()};IntersectionObserver.prototype.disconnect=function(){(this||t)._observationTargets=[];this._unmonitorAllIntersections();this._unregisterInstance()};IntersectionObserver.prototype.takeRecords=function(){var e=(this||t)._queuedEntries.slice();(this||t)._queuedEntries=[];return e};
/**
   * Accepts the threshold value from the user configuration object and
   * returns a sorted array of unique threshold values. If a value is not
   * between 0 and 1 and error is thrown.
   * @private
   * @param {Array|number=} opt_threshold An optional threshold value or
   *     a list of threshold values, defaulting to [0].
   * @return {Array} A sorted list of unique and valid threshold values.
   */IntersectionObserver.prototype._initThresholds=function(t){var e=t||[0];Array.isArray(e)||(e=[e]);return e.sort().filter((function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]}))};
/**
   * Accepts the rootMargin value from the user configuration object
   * and returns an array of the four margin values as an object containing
   * the value and unit properties. If any of the values are not properly
   * formatted or use a unit other than px or %, and error is thrown.
   * @private
   * @param {string=} opt_rootMargin An optional rootMargin value,
   *     defaulting to '0px'.
   * @return {Array<Object>} An array of margin objects with the keys
   *     value and unit.
   */IntersectionObserver.prototype._parseRootMargin=function(t){var e=t||"0px";var n=e.split(/\s+/).map((function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}}));n[1]=n[1]||n[0];n[2]=n[2]||n[0];n[3]=n[3]||n[1];return n};
/**
   * Starts polling for intersection changes if the polling is not already
   * happening, and if the page's visibility state is visible.
   * @param {!Document} doc
   * @private
   */IntersectionObserver.prototype._monitorIntersections=function(n){var r=n.defaultView;if(r&&-1==(this||t)._monitoringDocuments.indexOf(n)){var o=(this||t)._checkForIntersections;var i=null;var s=null;if((this||t).POLL_INTERVAL)i=r.setInterval(o,(this||t).POLL_INTERVAL);else{addEvent(r,"resize",o,true);addEvent(n,"scroll",o,true);if((this||t).USE_MUTATION_OBSERVER&&"MutationObserver"in r){s=new r.MutationObserver(o);s.observe(n,{attributes:true,childList:true,characterData:true,subtree:true})}}(this||t)._monitoringDocuments.push(n);(this||t)._monitoringUnsubscribes.push((function(){var t=n.defaultView;if(t){i&&t.clearInterval(i);removeEvent(t,"resize",o,true)}removeEvent(n,"scroll",o,true);s&&s.disconnect()}));var c=(this||t).root&&((this||t).root.ownerDocument||(this||t).root)||e;if(n!=c){var u=getFrameElement(n);u&&this._monitorIntersections(u.ownerDocument)}}};
/**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */IntersectionObserver.prototype._unmonitorIntersections=function(n){var r=(this||t)._monitoringDocuments.indexOf(n);if(-1!=r){var o=(this||t).root&&((this||t).root.ownerDocument||(this||t).root)||e;var i=(this||t)._observationTargets.some((function(t){var e=t.element.ownerDocument;if(e==n)return true;while(e&&e!=o){var r=getFrameElement(e);e=r&&r.ownerDocument;if(e==n)return true}return false}));if(!i){var s=(this||t)._monitoringUnsubscribes[r];(this||t)._monitoringDocuments.splice(r,1);(this||t)._monitoringUnsubscribes.splice(r,1);s();if(n!=o){var c=getFrameElement(n);c&&this._unmonitorIntersections(c.ownerDocument)}}}};
/**
   * Stops polling for intersection changes.
   * @param {!Document} doc
   * @private
   */IntersectionObserver.prototype._unmonitorAllIntersections=function(){var e=(this||t)._monitoringUnsubscribes.slice(0);(this||t)._monitoringDocuments.length=0;(this||t)._monitoringUnsubscribes.length=0;for(var n=0;n<e.length;n++)e[n]()};IntersectionObserver.prototype._checkForIntersections=function(){if((this||t).root||!r||o){var e=this._rootIsInDom();var n=e?this._getRootRect():getEmptyRect();(this||t)._observationTargets.forEach((function(o){var i=o.element;var s=getBoundingClientRect(i);var c=this._rootContainsTarget(i);var u=o.entry;var h=e&&c&&this._computeTargetAndRootIntersection(i,s,n);var a=null;this._rootContainsTarget(i)?r&&!(this||t).root||(a=n):a=getEmptyRect();var l=o.entry=new IntersectionObserverEntry({time:now(),target:i,boundingClientRect:s,rootBounds:a,intersectionRect:h});u?e&&c?this._hasCrossedThreshold(u,l)&&(this||t)._queuedEntries.push(l):u&&u.isIntersecting&&(this||t)._queuedEntries.push(l):(this||t)._queuedEntries.push(l)}),this||t);(this||t)._queuedEntries.length&&this._callback(this.takeRecords(),this||t)}};
/**
   * Accepts a target and root rect computes the intersection between then
   * following the algorithm in the spec.
   * TODO(philipwalton): at this time clip-path is not considered.
   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
   * @param {Element} target The target DOM element
   * @param {Object} targetRect The bounding rect of the target.
   * @param {Object} rootRect The bounding rect of the root after being
   *     expanded by the rootMargin value.
   * @return {?Object} The final intersection rect object or undefined if no
   *     intersection is found.
   * @private
   */IntersectionObserver.prototype._computeTargetAndRootIntersection=function(n,i,s){if("none"!=window.getComputedStyle(n).display){var c=i;var u=getParentNode(n);var h=false;while(!h&&u){var a=null;var l=1==u.nodeType?window.getComputedStyle(u):{};if("none"==l.display)return null;if(u==(this||t).root||9==u.nodeType){h=true;if(u==(this||t).root||u==e)if(r&&!(this||t).root)if(!o||0==o.width&&0==o.height){u=null;a=null;c=null}else a=o;else a=s;else{var v=getParentNode(u);var f=v&&getBoundingClientRect(v);var g=v&&this._computeTargetAndRootIntersection(v,f,s);if(f&&g){u=v;a=convertFromParentRect(f,g)}else{u=null;c=null}}}else{var p=u.ownerDocument;u!=p.body&&u!=p.documentElement&&"visible"!=l.overflow&&(a=getBoundingClientRect(u))}a&&(c=computeRectIntersection(a,c));if(!c)break;u=u&&getParentNode(u)}return c}};IntersectionObserver.prototype._getRootRect=function(){var n;if((this||t).root&&!isDoc((this||t).root))n=getBoundingClientRect((this||t).root);else{var r=isDoc((this||t).root)?(this||t).root:e;var o=r.documentElement;var i=r.body;n={top:0,left:0,right:o.clientWidth||i.clientWidth,width:o.clientWidth||i.clientWidth,bottom:o.clientHeight||i.clientHeight,height:o.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(n)};
/**
   * Accepts a rect and expands it by the rootMargin value.
   * @param {DOMRect|ClientRect} rect The rect object to expand.
   * @return {ClientRect} The expanded rect.
   * @private
   */IntersectionObserver.prototype._expandRectByRootMargin=function(e){var n=(this||t)._rootMarginValues.map((function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100}));var r={top:e.top-n[0],right:e.right+n[1],bottom:e.bottom+n[2],left:e.left-n[3]};r.width=r.right-r.left;r.height=r.bottom-r.top;return r};
/**
   * Accepts an old and new entry and returns true if at least one of the
   * threshold values has been crossed.
   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
   *    particular target element or null if no previous entry exists.
   * @param {IntersectionObserverEntry} newEntry The current entry for a
   *    particular target element.
   * @return {boolean} Returns true if a any threshold has been crossed.
   * @private
   */IntersectionObserver.prototype._hasCrossedThreshold=function(e,n){var r=e&&e.isIntersecting?e.intersectionRatio||0:-1;var o=n.isIntersecting?n.intersectionRatio||0:-1;if(r!==o)for(var i=0;i<(this||t).thresholds.length;i++){var s=(this||t).thresholds[i];if(s==r||s==o||s<r!==s<o)return true}};IntersectionObserver.prototype._rootIsInDom=function(){return!(this||t).root||containsDeep(e,(this||t).root)};
/**
   * Returns whether or not the target element is a child of root.
   * @param {Element} target The target element to check.
   * @return {boolean} True if the target element is a child of root.
   * @private
   */IntersectionObserver.prototype._rootContainsTarget=function(n){var r=(this||t).root&&((this||t).root.ownerDocument||(this||t).root)||e;return containsDeep(r,n)&&(!(this||t).root||r==n.ownerDocument)};IntersectionObserver.prototype._registerInstance=function(){n.indexOf(this||t)<0&&n.push(this||t)};IntersectionObserver.prototype._unregisterInstance=function(){var e=n.indexOf(this||t);-1!=e&&n.splice(e,1)};window.IntersectionObserver=IntersectionObserver;window.IntersectionObserverEntry=IntersectionObserverEntry}
/**
   * Returns the embedding frame element, if any.
   * @param {!Document} doc
   * @return {!Element}
   */function getFrameElement(t){try{return t.defaultView&&t.defaultView.frameElement||null}catch(t){return null}}function IntersectionObserverEntry(e){(this||t).time=e.time;(this||t).target=e.target;(this||t).rootBounds=ensureDOMRect(e.rootBounds);(this||t).boundingClientRect=ensureDOMRect(e.boundingClientRect);(this||t).intersectionRect=ensureDOMRect(e.intersectionRect||getEmptyRect());(this||t).isIntersecting=!!e.intersectionRect;var n=(this||t).boundingClientRect;var r=n.width*n.height;var o=(this||t).intersectionRect;var i=o.width*o.height;(this||t).intersectionRatio=r?Number((i/r).toFixed(4)):(this||t).isIntersecting?1:0}
/**
   * Creates the global IntersectionObserver constructor.
   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
   * @param {Function} callback The function to be invoked after intersection
   *     changes have queued. The function is not invoked if the queue has
   *     been emptied by calling the `takeRecords` method.
   * @param {Object=} opt_options Optional configuration options.
   * @constructor
   */function IntersectionObserver(e,n){var r=n||{};if("function"!=typeof e)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType&&9!=r.root.nodeType)throw new Error("root must be a Document or Element");(this||t)._checkForIntersections=throttle((this||t)._checkForIntersections.bind(this||t),(this||t).THROTTLE_TIMEOUT);(this||t)._callback=e;(this||t)._observationTargets=[];(this||t)._queuedEntries=[];(this||t)._rootMarginValues=this._parseRootMargin(r.rootMargin);(this||t).thresholds=this._initThresholds(r.threshold);(this||t).root=r.root||null;(this||t).rootMargin=(this||t)._rootMarginValues.map((function(t){return t.value+t.unit})).join(" ");(this||t)._monitoringDocuments=[];(this||t)._monitoringUnsubscribes=[]}function now(){return window.performance&&performance.now&&performance.now()}
/**
   * Throttles a function and delays its execution, so it's only called at most
   * once within a given time period.
   * @param {Function} fn The function to throttle.
   * @param {number} timeout The amount of time that must pass before the
   *     function can be called again.
   * @return {Function} The throttled function.
   */function throttle(t,e){var n=null;return function(){n||(n=setTimeout((function(){t();n=null}),e))}}
/**
   * Adds an event handler to a DOM node ensuring cross-browser compatibility.
   * @param {Node} node The DOM node to add the event handler to.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to add.
   * @param {boolean} opt_useCapture Optionally adds the even to the capture
   *     phase. Note: this only works in modern browsers.
   */function addEvent(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||false):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}
/**
   * Removes a previously added event handler from a DOM node.
   * @param {Node} node The DOM node to remove the event handler from.
   * @param {string} event The event name.
   * @param {Function} fn The event handler to remove.
   * @param {boolean} opt_useCapture If the event handler was added with this
   *     flag set to true, it should be set to true here in order to remove it.
   */function removeEvent(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||false):"function"==typeof t.detachEvent&&t.detachEvent("on"+e,n)}
/**
   * Returns the intersection between two rect objects.
   * @param {Object} rect1 The first rect.
   * @param {Object} rect2 The second rect.
   * @return {?Object|?ClientRect} The intersection rect or undefined if no
   *     intersection is found.
   */function computeRectIntersection(t,e){var n=Math.max(t.top,e.top);var r=Math.min(t.bottom,e.bottom);var o=Math.max(t.left,e.left);var i=Math.min(t.right,e.right);var s=i-o;var c=r-n;return s>=0&&c>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:c}||null}
/**
   * Shims the native getBoundingClientRect for compatibility with older IE.
   * @param {Element} el The element whose bounding rect to get.
   * @return {DOMRect|ClientRect} The (possibly shimmed) rect of the element.
   */function getBoundingClientRect(t){var e;try{e=t.getBoundingClientRect()}catch(t){}if(!e)return getEmptyRect();e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top});return e}function getEmptyRect(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}
/**
   * Ensure that the result has all of the necessary fields of the DOMRect.
   * Specifically this ensures that `x` and `y` fields are set.
   *
   * @param {?DOMRect|?ClientRect} rect
   * @return {?DOMRect}
   */function ensureDOMRect(t){return!t||"x"in t?t:{top:t.top,y:t.top,bottom:t.bottom,left:t.left,x:t.left,right:t.right,width:t.width,height:t.height}}
/**
   * Inverts the intersection and bounding rect from the parent (frame) BCR to
   * the local BCR space.
   * @param {DOMRect|ClientRect} parentBoundingRect The parent's bound client rect.
   * @param {DOMRect|ClientRect} parentIntersectionRect The parent's own intersection rect.
   * @return {ClientRect} The local root bounding rect for the parent's children.
   */function convertFromParentRect(t,e){var n=e.top-t.top;var r=e.left-t.left;return{top:n,left:r,height:e.height,width:e.width,bottom:n+e.height,right:r+e.width}}
/**
   * Checks to see if a parent element contains a child element (including inside
   * shadow DOM).
   * @param {Node} parent The parent element.
   * @param {Node} child The child element.
   * @return {boolean} True if the parent node contains the child node.
   */function containsDeep(t,e){var n=e;while(n){if(n==t)return true;n=getParentNode(n)}return false}
/**
   * Gets the parent node of an element or its host element if the parent node
   * is a shadow root.
   * @param {Node} node The node whose parent to get.
   * @return {Node|null} The parent node or null if no parent exists.
   */function getParentNode(t){var n=t.parentNode;if(9==t.nodeType&&t!=e)return getFrameElement(t);n&&n.assignedSlot&&(n=n.assignedSlot.parentNode);return n&&11==n.nodeType&&n.host?n.host:n}
/**
   * Returns true if `node` is a Document.
   * @param {!Node} node
   * @returns {boolean}
   */function isDoc(t){return t&&9===t.nodeType}})();var e={};export{e as default};


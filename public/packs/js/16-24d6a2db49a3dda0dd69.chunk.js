"use strict";(self.webpackChunkdemo_blacklight=self.webpackChunkdemo_blacklight||[]).push([[16],{38016:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(27876),o=n(18928),i=n(3390),c=n(45472),u=n(70208),a=n(11504);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,r,o=l(i);function i(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.captions,n=e.classes,r=e.videoOptions,o=e.videoResources;return a.createElement("div",{className:n.container},a.createElement("video",Object.assign({className:n.video},r),o.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement("source",{src:e.id,type:e.getFormat()}))})),t.map((function(e){return a.createElement(a.Fragment,{key:e.id},a.createElement("track",{src:e.id,label:e.getDefaultLabel(),srcLang:e.getProperty("language")}))}))))}}])&&s(t.prototype,n),r&&s(t,r),i}(a.Component);d.defaultProps={captions:[],videoOptions:{},videoResources:[]};var y=n(50416),v=n(92660);const h=(0,o.Jn)((0,i.A)(),(0,c.c)((function(){return{container:{alignItems:"center",display:"flex",width:"100%"},video:{maxHeight:"100%",width:"100%"}}})),(0,r.Ul)((function(e,t){var n=t.windowId;return{captions:(0,y.MJ)(e,{windowId:n})||[],videoOptions:(0,v.eE)(e).videoOptions,videoResources:(0,y.S4)(e,{windowId:n})||[]}}),null),(0,u.A)("VideoViewer"))(d)}}]);
//# sourceMappingURL=16-24d6a2db49a3dda0dd69.chunk.js.map
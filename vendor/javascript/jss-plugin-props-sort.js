function jssPropsSort(){var t=function sort(t,r){return t.length===r.length?t>r?1:-1:t.length-r.length};return{onProcessStyle:function onProcessStyle(r,e){if("style"!==e.type)return r;var n={};var o=Object.keys(r).sort(t);for(var s=0;s<o.length;s++)n[o[s]]=r[o[s]];return n}}}export{jssPropsSort as default};


"use strict";(self.webpackChunkdemo_blacklight=self.webpackChunkdemo_blacklight||[]).push([[464],{37628:()=>{function e(e){throw new TypeError('"'+e+'" is read-only')}(function(){var t=document.getElementById("collection-items-list"),n=document.getElementById("collection-items-paginator");if(t){for(var i=0,a=Array.from(t.getElementsByTagName("div")),o=[],c=[],l=1,d=0;d<a.length;d++)20==l&&(l=1,c.push(o),e("currPage")),o.push(item[d]),l+=1;!function(){var e=c.length,t=document.createElement("div"),a=document.body.appendChild(t);t.classList.add("pagination");for(var o=function(e){var o=document.createElement("button");o.textContent=e+1,o.addEventListener("click",(function(){r(i=e),u()})),n.appendChild(t),a.appendChild(o)},l=0;l<e;l++)o(l)}(),r(i)}function r(e){t.innerHTML="",t.appendChild(c[e]),u()}function u(){document.querySelectorAll(".pagination button").forEach((function(e,t){t===i?e.classList.add("active"):e.classList.remove("active")}))}})()}},e=>{var t;t=37628,e(e.s=t)}]);
//# sourceMappingURL=collection-605e78de1b09365828a2.js.map
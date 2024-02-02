var e=/[A-Z]/g;var r=/^ms-/;var t={};function toHyphenLower(e){return"-"+e.toLowerCase()}function hyphenateStyleName(a){if(t.hasOwnProperty(a))return t[a];var n=a.replace(e,toHyphenLower);return t[a]=r.test(n)?"-"+n:n}export default hyphenateStyleName;


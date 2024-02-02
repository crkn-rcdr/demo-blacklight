var n="production"===process.env.NODE_ENV;function warning(r,o){if(!n){if(r)return;var e="Warning: "+o;"undefined"!==typeof console&&console.warn(e);try{throw Error(e)}catch(n){}}}export default warning;


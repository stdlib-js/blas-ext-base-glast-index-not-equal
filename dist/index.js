"use strict";var s=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(e){throw (a=0, e)}};};var q=s(function(O,v){
var d=require('@stdlib/blas-ext-base-gfirst-index-not-equal/dist').ndarray;function f(r,a,e,u,n,i,o){var t;return r<=0?-1:(u+=(r-1)*e,o+=(r-1)*i,e*=-1,i*=-1,t=d(r,a,e,u,n,i,o),t<0?t:r-1-t)}v.exports=f
});var c=s(function(R,l){
var x=require('@stdlib/strided-base-stride2offset/dist'),g=q();function p(r,a,e,u,n){return g(r,a,e,x(r,e),u,n,x(r,n))}l.exports=p
});var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=c(),I=q();E(y,"ndarray",I);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"etvD":[function(require,module,exports) {
var e=document.querySelectorAll(".rooms-counter__btn"),t=document.querySelector("#bedrooms"),r=document.querySelector("#beds"),n=document.querySelector("#bathrooms");e.forEach(function(e){e.addEventListener("click",function(){var e,l,o,a=this.dataset.direction,u=this.parentElement.querySelector(".counter__value"),c=+u.value;u.value="plus"===a?c+1:c>0?c-1:0,e=+t.value,l=+r.value,o=+n.value;this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".room__dropdown");var m,p,d,E=this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".dropdown-form__input");0===e?(e=1,t.value=1,m="1 спальня"):m=e%10==1&&e%100!=11?e+" спальня":(e%10==2||e%10==3||e%10==4)&&e%100!=12&&e%100!=13&&e%100!=14?e+" спальни":e+" спален",0===l?(l=1,r.value=1,p="1 кровать"):p=l%10==1&&l%100!=11?l+" кровать":(l%10==2||l%10==3||l%10==4)&&l%100!=12&&l%100!=13&&l%100!=14?l+" кровати":l+" кроватей",d=o>0?o%10==1&&o%100!=11?", "+o+" ванная":(o%10==2||o%10==3||o%10==4)&&o%100!=12&&o%100!=13&&o%100!=14?", "+o+" ванные":", "+o+" ванных":"...",E.placeholder=m+", "+p+d})});
},{}]},{},["etvD"], null)
//# sourceMappingURL=dropdown-rooms.ddecc50e.js.map
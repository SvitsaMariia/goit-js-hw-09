function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");function l(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const n=t.target.elements.delay,o=t.target.elements.step,r=t.target.elements.amount,u=Number(n.value),a=Number(o.value),s=Number(r.value);for(let t=1;t<=s;t++)l(t,u+(t-1)*a).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise  ${t} in ${n} ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n} ms`)}))}));
//# sourceMappingURL=03-promises.58b27ed3.js.map

function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},l=o.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var l={id:e,exports:{}};return n[e]=l,o.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=l);var r=l("7Y9D8");const i=document.querySelector(".form"),s=document.querySelector(".form button");function u(e,o){return new Promise(((n,t)=>{console.log({position:e,newDelay:o}),setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}i.addEventListener("submit",(function(o){o.preventDefault(),s.disabled=!0,console.log(o.currentTarget.elements);const{elements:{step:n,amount:t,delay:l}}=o.currentTarget,i=[];for(let o=1;o<=t.valueAsNumber;o++){const t=l.valueAsNumber+(o-1)*n.valueAsNumber;i.push(u(o,t).then((({position:o,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`),console.log(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`),console.log(`❌ Rejected promise ${o} in ${n}ms`)})))}Promise.all(i).finally((()=>{s.disabled=!1}))}));
//# sourceMappingURL=03-promises.b0ee3db5.js.map

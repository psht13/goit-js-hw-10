import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i}from"./assets/vendor-77e16229.js";const s=document.querySelector(".form"),l=document.getElementsByName("state"),n=document.querySelector('[name="delay"]'),a=r=>{r.preventDefault();const t=Number(n.value),o=Array.from(l).find(e=>e.checked).value;s.reset(),new Promise((e,m)=>{setTimeout(()=>{o==="fulfilled"?e(t):o==="rejected"&&m(t)},t)}).then(e=>{i.show({title:"OK",message:`Fulfilled promise in ${e}ms`,backgroundColor:"#59A10D",position:"topRight",messageColor:"white",titleColor:"white"})}).catch(e=>{i.show({title:"Rejected",message:`Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"white",titleColor:"white"})})};s.addEventListener("submit",a);
//# sourceMappingURL=commonHelpers2.js.map

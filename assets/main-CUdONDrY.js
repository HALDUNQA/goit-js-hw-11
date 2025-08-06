import{a as u,i as c,S as f}from"./vendor-FrsOFnuA.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="50117384-0c3e90572e841b6f3be625418",p=document.getElementById("search-form"),l=document.querySelector(".gallery"),d=document.querySelector(".loader");let a;p.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.searchQuery.value.trim();if(o){l.innerHTML="",h();try{const s=(await u.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits;if(s.length===0)c.error({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!"});else{const e=s.map(r=>y(r)).join("");l.innerHTML=e,a?a.refresh():a=new f(".gallery a")}}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{g()}}});function y(t){return`
    <a class="gallery-item" href="${t.largeImageURL}">
      <img src="${t.webformatURL}" alt="${t.tags}" />
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </a>
  `}function h(){d.classList.remove("is-hidden")}function g(){d.classList.add("is-hidden")}
//# sourceMappingURL=main-CUdONDrY.js.map

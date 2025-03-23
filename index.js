import{a as f,S as p,i as c}from"./assets/vendor-DEZpR2tN.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m="49479745-ecb2a9650ccad432b929afb0a",h="https://pixabay.com/api/";function y(t){return f.get(h,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data.hits)}let a=null;function g(t){t.classList.remove("hidden")}function L(t){t.classList.add("hidden")}function b(t){t.innerHTML=""}function v(t,o){const i=o.map(s=>`
        <li class="gallery-item">
            <a href="${s.largeImageURL}">
                <img class="img-set" src="${s.webformatURL}" alt="${s.tags}"  width="360"
            height="200"/>
            </a>
            <div class="info">
                <p>Likes: ${s.likes}</p>
                <p>Views: ${s.views}</p>
                <p>Comments: ${s.comments}</p>
                <p>Downloads: ${s.downloads}</p>
                
            </div>
        </li>
    `).join("");t.insertAdjacentHTML("beforeend",i),a?a.refresh():a=new p(".gallery a",{captionsData:"alt",captionDelay:250})}const l=document.querySelector(".form"),u=document.querySelector(".gallery"),d=document.querySelector(".loader");l.addEventListener("submit",w);function w(t){t.preventDefault();const o=l.elements["search-text"].value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}g(d),b(u),y(o).then(i=>{i.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(u,i)}).catch(i=>{console.log(i)}).finally(()=>{L(d)}),l.reset()}
//# sourceMappingURL=index.js.map

"use strict";

const elementBtn = document.querySelector(".js-btn");
const elementMenu = document.querySelector(".js-menu");

const linkUrl1 = `<a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
target="_blank" rel="noopener noreferrer">
books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
</a>`;

const description1 = `JS en los materiales de Adalab`;
const actualModulo = `checked`;
const js = `javascript`;
const html = `HTML`;

const link1 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    ${linkUrl1}
  </p>
  <p class="item__seen">
    <input type="checkbox" ${actualModulo} name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${description1}</p>
  <ul class="item__tags">
    <li class="item__tag">${js}</li>
    <li class="item__tag">${html.toLocaleLowerCase()}</li>
  </ul>
</article>
</li>`;

const linkUrl2 = `<a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a>`;

const description2 = `Ideas de proyectos JS`;
const portfolio = `portfolio`;

const link2 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    ${linkUrl2}
  </p>
  <p class="item__seen">
    <input type="checkbox" ${actualModulo} name="item_imp_1" id="item_imp_1">
  </p>
  <p class="item__desc">${description2}</p>
  <ul class="item__tags">
    <li class="item__tag">${js}</li>
    <li class="item__tag">${portfolio}</li>
  </ul>
</article>
</li>`;

const linkUrl3 = `<a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
target="_blank"
rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>`;

const description3 = `HTML en los materiales de Adalab`;
const css = `CSS`;

const link3 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    ${linkUrl3}
  </p>
  <p class="item__seen">
    <input type="checkbox" name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">${description3}</p>
  <ul class="item__tags">
    <li class="item__tag">${html.toLocaleLowerCase()}</li>
    <li class="item__tag">${css.toLocaleLowerCase()}</li>
  </ul>
</article>
</li>`;

const renderLinksList = () =>{
const elementLiDetails = document.querySelector(".js-details");
elementLiDetails.innerHTML += link1 + link2 + link3;
};

renderLinksList();

const handleGetForm = () =>{
const elementSection = document.querySelector(".js-section");
elementSection.classList.remove("hidden");
};

const handleCollapsed = (ev) =>{
ev.preventDefault();
const elementFormMenu = document.querySelector(".js-form-menu");
elementFormMenu.classList.remove("collapsed");
};

elementBtn.addEventListener("click", handleGetForm);
elementMenu.addEventListener("click", handleCollapsed);
"use strict";

const elementBtn = document.querySelector(".js-btn");
const elementMenu = document.querySelector(".js-menu");

const link1 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
      target="_blank" rel="noopener noreferrer">
      books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
    </a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">JS en los materiales de Adalab</p>
  <ul class="item__tags">
    <li class="item__tag">javascript</li>
    <li class="item__tag">HTML</li>
  </ul>
</article>
</li>`;

const link2 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
      target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a>
  </p>
  <p class="item__seen">
    <input type="checkbox" checked name="item_imp_1" id="item_imp_1">
  </p>
  <p class="item__desc">Ideas de proyectos JS</p>
  <ul class="item__tags">
    <li class="item__tag">javascript</li>
    <li class="item__tag">portfolio</li>
  </ul>
</article>
</li>`;

const link3 = `<li class="data__listitem">
<article class="data__item">
  <p class="item__url">
    <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
      target="_blank"
      rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>
  </p>
  <p class="item__seen">
    <input type="checkbox" name="item_imp_2" id="item_imp_2">
  </p>
  <p class="item__desc">HTML en los materiales de Adalab</p>
  <ul class="item__tags">
    <li class="item__tag">HTML</li>
    <li class="item__tag">CSS</li>
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
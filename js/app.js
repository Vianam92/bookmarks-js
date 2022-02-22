"use strict";

const elementBtn = document.querySelector(".js-btn");
const elementMenu = document.querySelector(".js-menu");
const elementStlesTable = document.querySelector(".js-data");
const elementListView = document.querySelector(".js-listview");
const elementTableView = document.querySelector(".js-tableview");
const elmentInputSearch = document.querySelector(".js-input-search");

const descrSearchText = elmentInputSearch.value;

const linkUrl1 = `<a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
target="_blank" rel="noopener noreferrer">
books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
</a>`;

const description1 = `JS en los materiales de Adalab`;
const actualModulo1 = true;
const categJS1 = ``;
const categHTML1 = ``;

const linkUrl2 = `<a href="https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/"
target="_blank">thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/</a></a>`;

const description2 = `Ideas de proyectos JS`;
const actualModulo2 = true;
const categportfolio2 = `portfolio`;
const categHTML2 = `HTML`;

const linkUrl3 = `<a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web"
target="_blank"
rel="noopener noreferrer">books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web</a>`;
const actualModulo3 = false;
const description3 = `HTML en los materiales de Adalab`;
const catrgcss3 = `CSS`;
const catrgjs3 = `javascript`;

let htmlList = "";

if (description1.includes(descrSearchText)) {
  htmlList += `<li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        ${linkUrl1}
      </p>
      <p class="item__seen">
        <input type="checkbox" ${actualModulo1?"checked":""} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${description1}</p>
      <ul class="item__tags">
      ${(categJS1 === "" && categHTML1 === "")?`<p class='item__tags'>No tiene</p>`:`<li class="item__tag">${categJS1}</li><li class="item__tag">${categHTML1.toLocaleLowerCase()}</li>`}
      </ul>
    </article>
    </li>`;
}

if (description2.includes(descrSearchText)) {
  htmlList += `<li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        ${linkUrl2}
      </p>
      <p class="item__seen">
        <input type="checkbox" ${actualModulo2?"checked":""} name="item_imp_1" id="item_imp_1">
      </p>
      <p class="item__desc">${description2}</p>
      <ul class="item__tags">
      ${(categHTML2 === "" && categportfolio2 === "")?`<p class='item__tags'>No tiene</p>`:`<li class="item__tag">${categHTML2}</li><li class="item__tag">${categportfolio2.toLocaleLowerCase()}</li>`}
      </ul>
    </article>
    </li>`;
}
if (description3.includes(descrSearchText)) {
  htmlList += `<li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        ${linkUrl3}
      </p>
      <p class="item__seen">
        <input type="checkbox" ${actualModulo3?"checked":""} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${description3}</p>
      <ul class="item__tags">
      ${(catrgcss3 === "" && catrgjs3 === "")?`<p class='item__tags'>No tiene</p>`:`<li class="item__tag">${catrgcss3}</li><li class="item__tag">${catrgjs3.toLocaleLowerCase()}</li>`}
      </ul>
    </article>
    </li>`;
}

const renderLinksList = () => {
  const elementLiDetails = document.querySelector(".js-details");
  elementLiDetails.innerHTML = htmlList;
};

renderLinksList();

const handleGetForm = () => {
  const elementSection = document.querySelector(".js-section");
  elementSection.classList.remove("hidden");
};

const handleCollapsed = (ev) => {
  ev.preventDefault();
  const elementFormMenu = document.querySelector(".js-form-menu");
  elementFormMenu.classList.toggle("collapsed");
};

const handleChangeViewList = (ev) => {
  ev.preventDefault();
  elementStlesTable.classList.add("listview");
  elementStlesTable.classList.remove("tableview");
  elementListView.classList.add("selected");
  elementTableView.classList.remove("selected");
};

const handleChangeViewTable = (ev) => {
  ev.preventDefault();
  elementStlesTable.classList.remove("listview");
  elementStlesTable.classList.add("tableview");
  elementListView.classList.remove("selected");
  elementTableView.classList.add("selected");
};

const events = (element, func) => {
  element.addEventListener("click", func);
};

events(elementBtn, handleGetForm);
events(elementMenu, handleCollapsed);
events(elementListView, handleChangeViewList);
events(elementTableView, handleChangeViewTable);

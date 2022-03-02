"use strict";

const elementBtn = document.querySelector(".js-btn");
const elementMenu = document.querySelector(".js-menu");
const elementStlesTable = document.querySelector(".js-data");
const elementListView = document.querySelector(".js-listview");
const elementTableView = document.querySelector(".js-tableview");
const elmentInputSearch = document.querySelector(".js-input-search");

const bmkData_1 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion",
  desc: "JS en los materiales de Adalab",
  seen: true,
  tags_1: "javascript",
  tags_2: "HTML",
};

const bmkData_2 = {
  url: "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/",
  desc: "Ideas de proyectos JS",
  seen: true,
  tags_1: "portfolio",
  tags_2: "HTML",
};

const bmkData_3 = {
  url: "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web",
  desc: "HTML en los materiales de Adalab",
  seen: false,
  tags_1: "CSS",
  tags_2: "javascript",
};

let htmlList = "";

const renderBookmark = (bmkData) => {
  htmlList += `<li class="data__listitem">
  <article class="data__item">
  <p class="item__url">
  <a href=${bmkData.url} target="_blank" rel="noopener noreferrer">
books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
</a></p>
            <p class="item__seen">
              <input type="checkbox" ${
                bmkData.seen ? "checked" : ""
              } name="item_imp_2" id="item_imp_2">
            </p>
            <p class="item__desc">${bmkData.desc}</p>
            <ul class="item__tags">
            ${
              bmkData.tags_1 === "" && bmkData.tags_2 === ""
                ? `<p class='item__tags'>No tiene</p>`
                : `<li class="item__tag">${
                    bmkData.tags_1
                  }</li><li class="item__tag">${bmkData.tags_2.toLocaleLowerCase()}</li>`
            }
            </ul>
          </article>
          </li>`;
};

renderBookmark(bmkData_1);
renderBookmark(bmkData_2);
renderBookmark(bmkData_3);

const renderLinksList = () => {
  const elementLiDetails = document.querySelector(".js-details");
  elementLiDetails.innerHTML = htmlList;
};

renderLinksList();

const showAddFrom = () => {
  const elementSection = document.querySelector(".js-section");
  elementSection.classList.remove("hidden");
};

const handleCollapsed = (ev) => {
  ev.preventDefault();
  const elementFormMenu = document.querySelector(".js-form-menu");
  elementFormMenu.classList.toggle("collapsed");
};

const displayCardListView = (ev) => {
  ev.preventDefault();
  elementStlesTable.classList.add("listview");
  elementStlesTable.classList.remove("tableview");
  elementListView.classList.add("selected");
  elementTableView.classList.remove("selected");
};

const displayTableView = (ev) => {
  ev.preventDefault();
  elementStlesTable.classList.remove("listview");
  elementStlesTable.classList.add("tableview");
  elementListView.classList.remove("selected");
  elementTableView.classList.add("selected");
};

const events = (element, func) => {
  element.addEventListener("click", func);
};

events(elementBtn, showAddFrom);
events(elementMenu, handleCollapsed);
events(elementListView, displayCardListView);
events(elementTableView, displayTableView);

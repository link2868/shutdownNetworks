// import tabs from "./modules/tabs.js";

// window.addEventListener('DOMContentLoaded', () => {
//     'use strict';

//     tabs();
        
// });

function tabs() {
  const tabs = document.querySelectorAll(".tabs_point"),
  tabsContent = document.querySelectorAll(".tabcontent"),
  tabsParent = document.querySelector(".tabs_parent");

function hideContent() {
  tabsContent.forEach((element) => {
    element.classList.add("hide");
    element.classList.remove("show", "fade");
  });
  tabs.forEach((el) => {
    el.classList.remove("active");
  });
}

function showContent(i = 0) {
  tabsContent[i].classList.add("show", "fade");
  tabsContent[i].classList.remove("hide");
  tabs[i].classList.add("active");
}

hideContent();
showContent();

tabsParent.addEventListener("click", (item) => {
  if (item.target && item.target.classList.contains("tabs_point"))  {
    tabs.forEach((el, i) => {
      if (item.target == el) {
        hideContent();
        showContent(i);
      }
    });
  }
});
}
tabs();

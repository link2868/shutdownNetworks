function tabs() {
  const tabs = document.querySelectorAll(".tab_item"),
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
  if (item.target && item.target.classList.contains("tab_item"))  {
    tabs.forEach((el, i) => {
      if (item.target == el) {
        hideContent();
        showContent(i);
      }
    });
  }
});
}

export default tabs;
import tabs from "./modules/tabs.js";
import date from "./modules/date.js";
import inputs from "./modules/inputs.js";
import selects from "./modules/selects.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  tabs(".tabs_point", ".tabcontent", ".tabs_parent");
  date();
  inputs();
  selects();
});

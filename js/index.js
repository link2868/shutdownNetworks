import tabs from "./modules/tabs.js";
import inputs from "./modules/inputs.js";
import date from "./modules/date.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  tabs(".tabs_point", ".tabcontent", ".tabs_parent");
  date();
  inputs();
});

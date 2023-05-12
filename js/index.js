import tabs from "./modules/tabs.js";
import inputs from "./modules/inputs.js";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabs(".tabs_point", ".tabcontent", ".tabs_parent");
    inputs();
        
});

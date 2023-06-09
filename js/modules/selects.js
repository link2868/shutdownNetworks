// import preloader from "./preloader.js";

const parseXmlText = (xmlText) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, "application/xml");

  return xmlDoc.documentElement.textContent;
};

const disconnectionByBranch = (url) => {
  const informPanel = document.querySelector(".inform"),
    statusMessage = preloader();

  fetch(url)
    .then((response) => {
      if (!response.ok) throw response;
      return response.text();
    })
    .then((xmlText) => {
      informPanel.innerHTML = parseXmlText(xmlText);
      informPanel.scrollIntoView();
    })
    .catch((error) => {
      if (error.status) informPanel.innerHTML = `ERROR: ${error.status}`;
      else informPanel.innerHTML = `ERROR: Немає відповіді від сервера`;
      informPanel.scrollIntoView();
    })
    .finally(() => {
      statusMessage.remove();
      setTimeout(() => {
        informPanel.innerHTML = "";
      }, 5000);
    });
};

function selects() {
  $(document).ready(function () {
    $("#branch_pat").select2({
      width: "100%",
      // minimumResultsForSearch: Infinity,
      // maximumSelectionLength: 1,
    });
    $("#branch_pat").on("change", function () {
      const selectBranch = $("#branch_pat option:selected").val();
      console.log(selectBranch);
      if (selectBranch !== "select_null") {
        const url = `https://svitlo.oe.if.ua/GAVTurnOff/RemFilterP?remList=${selectBranch}`;
        disconnectionByBranch(url);
      }
    });
  });

  $(document).ready(function () {
    $("#locality").select2({
      width: "100%",
    });
  });
  $(document).ready(function () {
    $("#loc_street").select2({
      width: "100%",
    });
  });

  function activateSelect() {
    const selectLocality = document.querySelector("#locality"),
      buttonLocality = document.querySelector("#button_locality"),
      selectLocStreet = document.querySelector("#loc_street"),
      buttonLocStreet = document.querySelector("#button_loc_street");

    // selectLocality.disabled = false;

    if (selectLocality.disabled == true) {
      buttonLocality.disabled = true;
      selectLocStreet.disabled = true;
      buttonLocStreet.disabled = true;
    } else {
      buttonLocality.disabled = false;
      selectLocStreet.disabled = false;
      buttonLocStreet.disabled = false;
    }
  }
  activateSelect();
}

// export default selects;

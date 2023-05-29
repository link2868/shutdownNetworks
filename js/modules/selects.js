import preloader from "./preloader.js";

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
  const selectBranch = document.querySelector('[name="branch_pat"]');

  selectBranch.addEventListener("change", function () {
    const getValue = selectBranch.value;

    if (getValue !== "select_rem" && getValue !== "select_null") {
      const url = `https://svitlo.oe.if.ua/GAVTurnOff/RemFilterP?remList=${getValue}`;
      disconnectionByBranch(url);
    }
  });
}

export default selects;

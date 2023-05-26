import preloader from "./preloader.js";

const disconnectionByBranch = (url) => {
  const informPanel = document.querySelector(".inform"),
    statusMessage = preloader();

  fetch(url)
    .then((response) => {
      let result = response.text();
      return result;
    })
    .then((result) => {
      const parser = new DOMParser(),
        xmlDoc = parser.parseFromString(result, "text/xml");

      informPanel.innerHTML = `${xmlDoc.documentElement.textContent}`;
      informPanel.scrollIntoView();
    })
    .catch((error) => {
      // informPanel.innerHTML = "ERROR";
      informPanel.scrollIntoView();
      console.error(error.response);
    })
    .finally(() => {
      statusMessage.remove();
      // setTimeout(() => {
      //   informPanel.innerHTML = "";
      // }, 5000);
    });
};

// const disconnectionByBranch = async (url) => {
//   const statusMessage = preloader(),
//     response = await fetch(url),
//     informPanel = document.querySelector(".inform");

//   if (!response.ok) {
//     informPanel.innerHTML = `Помилка за адресою  ${url}, статус помилки  ${response.text()}`;
//     informPanel.scrollIntoView();
//     statusMessage.remove();
//   }
//   console.log("Post successfully created!");
//   let result = await response.text();
//   informPanel.innerHTML = `${result}`;
//   informPanel.scrollIntoView();

//   statusMessage.remove();
// };

function selects() {
  const selectBranch = document.querySelector('[name="branch_pat"]');

  selectBranch.addEventListener("change", function () {
    const getValue = selectBranch.value;

    if (getValue !== "select_rem" && getValue !== "select_null") {
      const url = `https://svitlo.oe.if.ua/GAVTurnOff/RemFilter?remList=${getValue}`;
      console.log(getValue);
      console.log(url);
      disconnectionByBranch(url);
    }
  });
}

export default selects;
